import { ContactShadows, Float, RoundedBox } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { Stage, pointer, reduceMotion } from "./Stage";

const V = (x: number, y: number) => new THREE.Vector2(x, y);

/** Plastik bening: transparan + pantulan lingkungan (tanpa transmission agar tetap jernih di latar transparan) */
function ClearPlastic({ opacity = 0.22 }: { opacity?: number }) {
  return (
    <meshPhysicalMaterial
      color="#ffffff"
      transparent
      opacity={opacity}
      roughness={0.05}
      metalness={0}
      clearcoat={1}
      clearcoatRoughness={0.05}
      envMapIntensity={2.2}
      side={THREE.DoubleSide}
      depthWrite={false}
    />
  );
}

function Cup() {
  const wall = useMemo(() => new THREE.LatheGeometry([V(0, 0), V(0.6, 0), V(0.63, 0.04), V(0.86, 2.1), V(0.9, 2.14)], 72), []);
  const drink = useMemo(() => new THREE.LatheGeometry([V(0, 0.05), V(0.58, 0.05), V(0.76, 1.45), V(0, 1.45)], 72), []);
  const group = useRef<THREE.Group>(null);

  useFrame((state, dt) => {
    const g = group.current;
    if (!g) return;
    const spin = reduceMotion ? 0 : state.clock.elapsedTime * 0.25;
    g.rotation.y = THREE.MathUtils.damp(g.rotation.y, spin + pointer.x * 0.5, 3, dt);
    g.rotation.x = THREE.MathUtils.damp(g.rotation.x, -pointer.y * 0.12 + 0.08, 3, dt);
  });

  return (
    <group ref={group}>
      <Float speed={reduceMotion ? 0 : 1.4} rotationIntensity={0.15} floatIntensity={0.5}>
        <group position={[0, -1.75, 0]}>
          <mesh geometry={drink}>
            <meshPhysicalMaterial color="#9ad8c1" roughness={0.25} clearcoat={0.6} transparent opacity={0.92} />
          </mesh>
          {[
            [0.18, 1.33, 0.1, 0.4],
            [-0.24, 1.36, -0.05, 1.1],
            [0.02, 1.32, -0.28, 2.2],
          ].map(([x, y, z, r], i) => (
            <RoundedBox key={i} args={[0.34, 0.3, 0.34]} radius={0.06} position={[x, y, z]} rotation={[r, r * 0.6, 0]}>
              <ClearPlastic opacity={0.5} />
            </RoundedBox>
          ))}
          <mesh geometry={wall}>
            <ClearPlastic />
          </mesh>
          <mesh position={[0, 2.14, 0]} scale={[1, 0.42, 1]}>
            <sphereGeometry args={[0.9, 64, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
            <ClearPlastic opacity={0.28} />
          </mesh>
          <mesh position={[0, 2.14, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.9, 0.045, 16, 72]} />
            <ClearPlastic opacity={0.55} />
          </mesh>
          <mesh position={[0.2, 2.05, 0.05]} rotation={[0.06, 0, -0.1]}>
            <cylinderGeometry args={[0.075, 0.075, 3.2, 28]} />
            <meshStandardMaterial color="#31a383" roughness={0.3} />
          </mesh>
        </group>
      </Float>
    </group>
  );
}

export default function CupScene({ className }: { className?: string }) {
  return (
    <Stage className={className} camera={{ position: [0, 0.4, 8], fov: 30 }}>
      <Cup />
      <ContactShadows frames={1} position={[0, -1.9, 0]} opacity={0.45} scale={7} blur={2.6} far={3} color="#000000" />
    </Stage>
  );
}
