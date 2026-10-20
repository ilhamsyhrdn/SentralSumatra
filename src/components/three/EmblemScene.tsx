import { ContactShadows, Float, RoundedBox } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { Stage, pointer, reduceMotion } from "./Stage";

const TEAL = "#2b6d7c";
const LEAF = "#31a383";
const WHITE = "#f3faf7";

/** Tiga gedung pada logo: posisi X dan tinggi mengikuti proporsi logo asli */
const TOWERS = [
  { x: -1.22, h: 1.9 },
  { x: 0, h: 2.65 },
  { x: 1.22, h: 2.2 },
];

function gearShape(teeth: number, rOut: number, rIn: number, rHole: number) {
  const shape = new THREE.Shape();
  const step = (Math.PI * 2) / teeth;
  const px = (r: number, a: number) => Math.cos(a) * r;
  const py = (r: number, a: number) => Math.sin(a) * r;
  for (let i = 0; i < teeth; i++) {
    const a0 = i * step;
    const a1 = a0 + step * 0.1;
    const a2 = a0 + step * 0.2;
    const a3 = a0 + step * 0.5;
    const a4 = a0 + step * 0.6;
    if (i === 0) shape.moveTo(px(rIn, a0), py(rIn, a0));
    shape.lineTo(px(rIn, a1), py(rIn, a1));
    shape.lineTo(px(rOut, a2), py(rOut, a2));
    shape.lineTo(px(rOut, a3), py(rOut, a3));
    shape.lineTo(px(rIn, a4), py(rIn, a4));
    shape.absarc(0, 0, rIn, a4, a0 + step, false);
  }
  const hole = new THREE.Path();
  hole.absarc(0, 0, rHole, 0, Math.PI * 2, true);
  shape.holes.push(hole);
  return shape;
}

function Tower({ x, h }: { x: number; h: number }) {
  const w = 1;
  const d = 0.72;
  const slotH = h * 0.42;
  const slotY = h - 0.32 - slotH / 2;
  return (
    <group position={[x, 0, 0]}>
      <RoundedBox args={[w, h, d]} radius={0.16} smoothness={5} position={[0, h / 2, 0]}>
        <meshPhysicalMaterial color={TEAL} roughness={0.32} metalness={0.05} clearcoat={0.8} clearcoatRoughness={0.25} />
      </RoundedBox>
      {[-0.19, 0.19].map((sx) => (
        <RoundedBox key={sx} args={[0.15, slotH, 0.08]} radius={0.06} smoothness={4} position={[sx, slotY, d / 2 + 0.005]}>
          <meshStandardMaterial color={WHITE} roughness={0.4} />
        </RoundedBox>
      ))}
    </group>
  );
}

function Gear() {
  const ref = useRef<THREE.Mesh>(null);
  const geometry = useMemo(() => {
    const g = new THREE.ExtrudeGeometry(gearShape(9, 0.66, 0.52, 0.17), {
      depth: 0.26,
      bevelEnabled: true,
      bevelThickness: 0.04,
      bevelSize: 0.03,
      bevelSegments: 3,
      curveSegments: 32,
    });
    g.center();
    return g;
  }, []);

  useFrame((_, dt) => {
    if (ref.current && !reduceMotion) ref.current.rotation.z -= dt * 0.45;
  });

  return (
    <group position={[0, 0.64, 0.5]}>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -0.06]}>
        <cylinderGeometry args={[0.8, 0.8, 0.22, 64]} />
        <meshStandardMaterial color="#ffffff" roughness={0.5} />
      </mesh>
      <mesh ref={ref} geometry={geometry} position={[0, 0, 0.08]}>
        <meshPhysicalMaterial color={LEAF} roughness={0.28} metalness={0.15} clearcoat={1} clearcoatRoughness={0.15} />
      </mesh>
    </group>
  );
}

function Emblem() {
  const group = useRef<THREE.Group>(null);

  useFrame((state, dt) => {
    const g = group.current;
    if (!g) return;
    const idle = reduceMotion ? 0 : Math.sin(state.clock.elapsedTime * 0.35) * 0.22;
    g.rotation.y = THREE.MathUtils.damp(g.rotation.y, pointer.x * 0.45 + idle - 0.32, 2.5, dt);
    g.rotation.x = THREE.MathUtils.damp(g.rotation.x, -pointer.y * 0.16 + 0.06, 2.5, dt);
    const s = THREE.MathUtils.damp(g.scale.x, 1, 2.2, dt);
    g.scale.setScalar(s);
  });

  return (
    <group ref={group} scale={0.75}>
      <Float speed={reduceMotion ? 0 : 1.5} rotationIntensity={0.12} floatIntensity={0.45}>
        <group position={[0, -1.25, 0]}>
          {TOWERS.map((t) => (
            <Tower key={t.x} {...t} />
          ))}
          <Gear />
        </group>
      </Float>
    </group>
  );
}

export default function EmblemScene({ className }: { className?: string }) {
  return (
    <Stage className={className} camera={{ position: [0, 0.5, 8.4], fov: 30 }}>
      <Emblem />
      <ContactShadows frames={1} position={[0, -1.85, 0]} opacity={0.32} scale={9} blur={2.8} far={3} color="#0f2a30" />
    </Stage>
  );
}
