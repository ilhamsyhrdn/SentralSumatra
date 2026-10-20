import { Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { Stage, pointer, reduceMotion } from "./Stage";

const V = (x: number, y: number) => new THREE.Vector2(x, y);

const ICE = (
  <meshPhysicalMaterial
    color="#e4f8ff"
    transparent
    opacity={0.62}
    roughness={0.08}
    clearcoat={1}
    clearcoatRoughness={0.05}
    ior={1.31}
    envMapIntensity={2.6}
    side={THREE.DoubleSide}
    depthWrite={false}
  />
);

type Vec3 = [number, number, number];

/* Es kristal = es tabung: silinder bening dengan lubang di tengah.
   Profil penampang diputar (lathe) dengan sudut sedikit membulat; urutan titik menjaga normal menghadap keluar. */
function useTubeGeometry() {
  return useMemo(() => {
    const ro = 0.5;
    const ri = 0.17;
    const h = 1.05;
    const b = 0.05;
    const g = new THREE.LatheGeometry(
      [V(ri, b), V(ri + b, 0), V(ro - b, 0), V(ro, b), V(ro, h - b), V(ro - b, h), V(ri + b, h), V(ri, h - b), V(ri, b)],
      56,
    );
    g.translate(0, -h / 2, 0);
    return g;
  }, []);
}

// Tabung pertama paling besar dan dimiringkan agar lubangnya terlihat jelas
const TUBES: { p: Vec3; r: Vec3; s: number; spin: number }[] = [
  { p: [0, 0.05, 0.7], r: [1.0, 0, 0.35], s: 1.3, spin: 0 },
  { p: [-1.75, 1.2, -0.6], r: [0.4, 0, 0.9], s: 0.8, spin: 0.5 },
  { p: [1.8, 1.25, -0.4], r: [1.4, 0.5, -0.3], s: 0.85, spin: 0.4 },
  { p: [-1.65, -1.3, 0], r: [-0.6, 0.2, 0.5], s: 0.9, spin: 0.35 },
  { p: [1.6, -1.25, 0.3], r: [0.9, -0.4, 1.2], s: 0.75, spin: 0.55 },
  { p: [0.35, 2.05, -1.4], r: [0.2, 0, 1.4], s: 0.6, spin: 0.6 },
  { p: [-0.45, -2.1, -1.0], r: [1.6, 0.3, 0.1], s: 0.6, spin: 0.45 },
];

function Tube({ geometry, p, r, s, spin }: { geometry: THREE.BufferGeometry; p: Vec3; r: Vec3; s: number; spin: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, dt) => {
    const m = ref.current;
    if (!m || reduceMotion || !spin) return;
    // Berguling di sumbu x/z; putaran di sumbu y tidak terlihat karena tabungnya simetris
    m.rotation.x += dt * spin * 0.4;
    m.rotation.z += dt * spin * 0.25;
  });
  return (
    <Float speed={reduceMotion ? 0 : 1.1 + spin} rotationIntensity={spin ? 0.3 : 0.15} floatIntensity={0.55}>
      <mesh ref={ref} geometry={geometry} position={p} rotation={r} scale={s}>
        {ICE}
      </mesh>
    </Float>
  );
}

/** Serpihan kecil, kesan es serut di sekitar tabung */
function Chips() {
  const chips = useMemo(() => {
    let seed = 11;
    const rand = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    return Array.from({ length: 14 }, () => ({
      p: [rand() * 5 - 2.5, rand() * 4.6 - 2.3, rand() * 2 - 1.4] as Vec3,
      r: [rand() * 3, rand() * 3, rand() * 3] as Vec3,
      s: 0.06 + rand() * 0.1,
    }));
  }, []);
  return (
    <Float speed={reduceMotion ? 0 : 0.8} rotationIntensity={0.4} floatIntensity={0.8}>
      {chips.map((c, i) => (
        <mesh key={i} position={c.p} rotation={c.r} scale={c.s}>
          <icosahedronGeometry args={[1, 0]} />
          {ICE}
        </mesh>
      ))}
    </Float>
  );
}

function Ice() {
  const geometry = useTubeGeometry();
  const group = useRef<THREE.Group>(null);

  useFrame((_, dt) => {
    const g = group.current;
    if (!g) return;
    g.rotation.y = THREE.MathUtils.damp(g.rotation.y, pointer.x * 0.35, 2.5, dt);
    g.rotation.x = THREE.MathUtils.damp(g.rotation.x, -pointer.y * 0.15, 2.5, dt);
  });

  return (
    <group ref={group}>
      {TUBES.map((t, i) => (
        <Tube key={i} geometry={geometry} {...t} />
      ))}
      <Chips />
    </group>
  );
}

export default function IceScene({ className }: { className?: string }) {
  return (
    <Stage className={className} camera={{ position: [0, 0, 8], fov: 34 }}>
      <Ice />
    </Stage>
  );
}
