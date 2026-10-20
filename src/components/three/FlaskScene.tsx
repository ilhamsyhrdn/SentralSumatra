import { ContactShadows, Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { Stage, pointer, reduceMotion } from "./Stage";

const V = (x: number, y: number) => new THREE.Vector2(x, y);

const GLASS = (
  <meshPhysicalMaterial
    color="#ffffff"
    transparent
    opacity={0.2}
    roughness={0.04}
    clearcoat={1}
    clearcoatRoughness={0.04}
    envMapIntensity={2.4}
    side={THREE.DoubleSide}
    depthWrite={false}
  />
);

function Bubbles() {
  const refs = useRef<(THREE.Mesh | null)[]>([]);
  const seeds = useMemo(
    () => Array.from({ length: 9 }, (_, i) => ({ a: i * 2.1, r: 0.15 + ((i * 37) % 10) / 22, s: 0.18 + (i % 4) * 0.07, o: i / 9 })),
    [],
  );
  useFrame((state) => {
    if (reduceMotion) return;
    const t = state.clock.elapsedTime;
    seeds.forEach((b, i) => {
      const m = refs.current[i];
      if (!m) return;
      const p = (t * b.s + b.o) % 1;
      m.position.set(Math.cos(b.a + t * 0.3) * b.r, 0.12 + p * 0.78, Math.sin(b.a + t * 0.3) * b.r);
      m.scale.setScalar(0.6 + p * 0.6);
    });
  });
  return (
    <>
      {seeds.map((b, i) => (
        <mesh
          key={i}
          ref={(m) => {
            refs.current[i] = m;
          }}
          position={[Math.cos(b.a) * b.r, 0.2 + b.o * 0.6, Math.sin(b.a) * b.r]}
        >
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial color="#e9fff6" roughness={0.2} />
        </mesh>
      ))}
    </>
  );
}

function Molecule() {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    const g = ref.current;
    if (!g || reduceMotion) return;
    const t = state.clock.elapsedTime * 0.4;
    g.position.set(Math.cos(t) * 1.05, 1.95 + Math.sin(t * 1.3) * 0.12, Math.sin(t) * 0.9);
    g.rotation.set(t * 0.8, t, 0);
  });
  const atoms: [number, number, number, number, string][] = [
    [0, 0, 0, 0.26, "#31a383"],
    [0.55, 0.3, 0, 0.17, "#ffffff"],
    [-0.5, 0.32, 0.12, 0.17, "#ffffff"],
    [0.05, -0.58, 0.05, 0.2, "#2b6d7c"],
  ];
  return (
    <group ref={ref} position={[1.05, 1.95, 0]} scale={0.7}>
      {atoms.map(([x, y, z, r, c], i) => (
        <mesh key={i} position={[x, y, z]}>
          <sphereGeometry args={[r, 32, 32]} />
          <meshPhysicalMaterial color={c} roughness={0.25} clearcoat={1} />
        </mesh>
      ))}
      {atoms.slice(1).map(([x, y, z], i) => {
        const dir = new THREE.Vector3(x, y, z);
        const len = dir.length();
        const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().normalize());
        return (
          <mesh key={i} position={[x / 2, y / 2, z / 2]} quaternion={q}>
            <cylinderGeometry args={[0.045, 0.045, len, 12]} />
            <meshStandardMaterial color="#d9efe7" roughness={0.4} />
          </mesh>
        );
      })}
    </group>
  );
}

function Flask() {
  const glass = useMemo(
    () =>
      new THREE.LatheGeometry(
        [V(0, 0), V(0.95, 0), V(1.05, 0.06), V(1.08, 0.18), V(0.32, 1.72), V(0.3, 1.82), V(0.3, 2.55), V(0.38, 2.6), V(0.38, 2.68)],
        72,
      ),
    [],
  );
  const liquid = useMemo(() => new THREE.LatheGeometry([V(0, 0.05), V(0.98, 0.05), V(1.01, 0.18), V(0.68, 0.95), V(0, 0.95)], 72), []);
  const group = useRef<THREE.Group>(null);

  useFrame((state, dt) => {
    const g = group.current;
    if (!g) return;
    const idle = reduceMotion ? 0 : Math.sin(state.clock.elapsedTime * 0.4) * 0.3;
    g.rotation.y = THREE.MathUtils.damp(g.rotation.y, idle + pointer.x * 0.5, 3, dt);
    g.rotation.x = THREE.MathUtils.damp(g.rotation.x, -pointer.y * 0.12 + 0.1, 3, dt);
  });

  return (
    <group ref={group}>
      <Float speed={reduceMotion ? 0 : 1.3} rotationIntensity={0.1} floatIntensity={0.45}>
        <group position={[0, -1.45, 0]}>
          <mesh geometry={liquid}>
            <meshPhysicalMaterial color="#31a383" emissive="#1c7a5e" emissiveIntensity={0.25} roughness={0.2} clearcoat={0.8} transparent opacity={0.9} />
          </mesh>
          <Bubbles />
          <mesh geometry={glass}>{GLASS}</mesh>
          <mesh position={[0, 2.68, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.36, 0.035, 16, 48]} />
            {GLASS}
          </mesh>
          <Molecule />
        </group>
      </Float>
    </group>
  );
}

export default function FlaskScene({ className }: { className?: string }) {
  return (
    <Stage className={className} camera={{ position: [0, 0.6, 8.6], fov: 30 }}>
      <Flask />
      <ContactShadows frames={1} position={[0, -1.6, 0]} opacity={0.45} scale={7} blur={2.6} far={3} color="#000000" />
    </Stage>
  );
}
