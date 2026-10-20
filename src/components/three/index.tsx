import dynamic from "next/dynamic";
import Image from "next/image";
import { Component, useEffect, useState, type ComponentType, type ReactNode } from "react";

/* Three.js hanya dimuat di browser dan setelah halaman tampil, supaya tidak memperlambat render awal.
   Bila WebGL tidak tersedia atau gagal, tampilkan gambar statis agar halaman tetap utuh. */

interface Fallback {
  src: string;
  alt: string;
  round?: boolean;
}

class SceneBoundary extends Component<{ fallback: ReactNode; children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

let webglSupport: boolean | undefined;
function supportsWebGL() {
  if (webglSupport !== undefined) return webglSupport;
  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
    gl?.getExtension("WEBGL_lose_context")?.loseContext();
    webglSupport = !!gl;
  } catch {
    webglSupport = false;
  }
  return webglSupport;
}

function StaticFallback({ src, alt, round }: Fallback) {
  return (
    <div className="grid h-full w-full place-items-center">
      <div className={round ? "relative aspect-square w-[62%] max-w-[360px] overflow-hidden rounded-full" : "relative h-[70%] w-[70%]"}>
        <Image src={src} alt={alt} fill sizes="360px" className={round ? "scale-[1.2] object-cover" : "object-contain"} />
      </div>
    </div>
  );
}

function withFallback(Scene: ComponentType<{ className?: string; count?: number }>, fallback: Fallback | null) {
  return function SafeScene(props: { className?: string; count?: number }) {
    const [ok, setOk] = useState<boolean | null>(null);
    useEffect(() => setOk(supportsWebGL()), []);
    const fb = fallback ? <StaticFallback {...fallback} /> : null;
    if (ok === null) return <div className={props.className} />;
    return (
      <div className={props.className}>
        {ok ? (
          <SceneBoundary fallback={fb}>
            <Scene {...props} className="absolute inset-0" />
          </SceneBoundary>
        ) : (
          fb
        )}
      </div>
    );
  };
}

const placeholder = () => <div className="h-full w-full" />;
const lazy = (loader: () => Promise<{ default: ComponentType<{ className?: string; count?: number }> }>) =>
  dynamic(loader, { ssr: false, loading: placeholder });

const LOGO: Fallback = { src: "/Logo/SentralSumatraBulat.png", alt: "Logo Sentral Sumatra", round: true };

export const EmblemScene = withFallback(lazy(() => import("./EmblemScene")), LOGO);
export const CupScene = withFallback(lazy(() => import("./CupScene")), LOGO);
export const FlaskScene = withFallback(lazy(() => import("./FlaskScene")), LOGO);
export const BubblesScene = withFallback(lazy(() => import("./BubblesScene")), null);
