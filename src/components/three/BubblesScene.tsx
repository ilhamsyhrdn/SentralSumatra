import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { Stage, pointer, reduceMotion } from "./Stage";

/* Shader gelembung: tengah bening, tepi berkilau lapisan tipis (thin-film) dan satu titik kilap.
   Ditulis manual karena material transparan bawaan terlihat abu-abu di atas latar gelap. */
const vertexShader = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vView;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vNormal = normalize(normalMatrix * normal);
    vView = normalize(-mv.xyz);
    gl_Position = projectionMatrix * mv;
  }
`;

const fragmentShader = /* glsl */ `
  uniform float uTime;
  uniform float uSeed;
  varying vec3 vNormal;
  varying vec3 vView;
  void main() {
    float facing = max(dot(vNormal, vView), 0.0);
    float rim = pow(1.0 - facing, 2.4);
    vec3 film = 0.5 + 0.5 * cos(6.2831 * (vec3(0.0, 0.33, 0.67) + (1.0 - facing) * 1.3 + uTime * 0.04 + uSeed));
    vec3 tint = mix(vec3(1.0), film, 0.5);
    vec3 lightDir = normalize(vec3(-0.45, 0.65, 0.6));
    float spec = pow(max(dot(reflect(-lightDir, vNormal), vView), 0.0), 60.0);
    float alpha = clamp(rim * 0.9 + spec * 0.95 + 0.03, 0.0, 1.0);
    gl_FragColor = vec4(tint * rim + vec3(spec), alpha);
  }
`;

function Bubble({ seed }: { seed: number }) {
  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: { uTime: { value: 0 }, uSeed: { value: seed } },
        transparent: true,
        depthWrite: false,
      }),
    [seed],
  );
  useFrame((state) => {
    material.uniforms.uTime.value = state.clock.elapsedTime;
  });
  return <primitive object={material} attach="material" />;
}

function Bubbles({ count }: { count: number }) {
  const refs = useRef<(THREE.Mesh | null)[]>([]);
  const group = useRef<THREE.Group>(null);
  const bubbles = useMemo(() => {
    let seed = 7;
    const rand = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    return Array.from({ length: count }, () => ({
      x: rand() * 5 - 2.5,
      y: rand() * 6 - 3,
      z: rand() * 2.5 - 1.5,
      r: 0.14 + rand() * 0.42,
      speed: 0.12 + rand() * 0.22,
      phase: rand() * Math.PI * 2,
    }));
  }, [count]);

  useFrame((state, dt) => {
    const t = state.clock.elapsedTime;
    if (group.current) {
      group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, pointer.x * 0.25, 2, dt);
      group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, -pointer.y * 0.12, 2, dt);
    }
    if (reduceMotion) return;
    bubbles.forEach((b, i) => {
      const m = refs.current[i];
      if (!m) return;
      const y = ((b.y + 3 + t * b.speed) % 6) - 3;
      m.position.set(b.x + Math.sin(t * 0.6 + b.phase) * 0.18, y, b.z);
      const wobble = 1 + Math.sin(t * 2 + b.phase) * 0.03;
      m.scale.set(b.r * wobble, b.r / wobble, b.r);
    });
  });

  return (
    <group ref={group}>
      {bubbles.map((b, i) => (
        <mesh
          key={i}
          ref={(m) => {
            refs.current[i] = m;
          }}
          position={[b.x, b.y, b.z]}
          scale={b.r}
        >
          <sphereGeometry args={[1, 32, 32]} />
          <Bubble seed={b.phase} />
        </mesh>
      ))}
    </group>
  );
}

export default function BubblesScene({ className, count = 16 }: { className?: string; count?: number }) {
  return (
    <Stage className={className} camera={{ position: [0, 0, 8], fov: 40 }}>
      <Bubbles count={count} />
    </Stage>
  );
}
