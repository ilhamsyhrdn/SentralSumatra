import { Canvas } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Posisi kursor/sentuhan global (-1..1) agar objek 3D bereaksi di seluruh halaman, bukan hanya di atas kanvas. */
export const pointer = { x: 0, y: 0 };

export const reduceMotion =
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let listening = false;
function listenPointer() {
  if (listening || typeof window === "undefined") return;
  listening = true;
  window.addEventListener(
    "pointermove",
    (e) => {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -((e.clientY / window.innerHeight) * 2 - 1);
    },
    { passive: true },
  );
}

interface StageProps {
  children: ReactNode;
  className?: string;
  camera?: { position?: [number, number, number]; fov?: number };
}

/** Satu kanvas WebGL per halaman; berhenti merender saat keluar layar untuk menghemat baterai. */
export function Stage({ children, className, camera }: StageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    listenPointer();
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { rootMargin: "120px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn("pointer-events-none", className)}>
      <Canvas
        frameloop={inView ? "always" : "never"}
        dpr={[1, 1.5]}
        camera={{ position: camera?.position ?? [0, 0, 8], fov: camera?.fov ?? 32 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.55} />
        <directionalLight position={[4, 6, 5]} intensity={1.4} />
        <directionalLight position={[-5, 2, -2]} intensity={0.45} color="#cdeee2" />
        <Environment resolution={128}>
          <Lightformer intensity={2.2} position={[0, 4, 5]} scale={[10, 2, 1]} />
          <Lightformer intensity={1.2} position={[-5, 1, 2]} rotation-y={Math.PI / 2} scale={[8, 2, 1]} />
          <Lightformer intensity={1.2} position={[5, 0, 2]} rotation-y={-Math.PI / 2} scale={[8, 2, 1]} />
          <Lightformer form="ring" intensity={0.8} position={[2, 2, -4]} scale={3} color="#bfe8d8" />
        </Environment>
        {children}
      </Canvas>
    </div>
  );
}
