import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { MotionConfig, motion } from "framer-motion";
import { Barlow, Plus_Jakarta_Sans } from "next/font/google";
import "@/globals.css";
import { SiteNav } from "@/components/layout/SiteNav";
import { StoreNav } from "@/components/layout/StoreNav";
import { Footer } from "@/components/layout/Footer";
import { EASE_OUT } from "@/components/motion/Reveal";
import { getStoreByPath } from "@/data/stores";
import { initSmoothScroll } from "@/lib/scroll";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });
// Barlow hanya untuk wordmark agar sama dengan logo
const barlow = Barlow({ subsets: ["latin"], weight: ["600", "800"], variable: "--font-barlow", display: "swap" });

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const store = getStoreByPath(pathname);

  useEffect(() => initSmoothScroll(), []);

  useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      const el = (e.target as Element | null)?.closest<HTMLElement>(".press");
      if (!el) return;
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--x", `${e.clientX - rect.left}px`);
      el.style.setProperty("--y", `${e.clientY - rect.top}px`);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#e8e6df" />
      </Head>
      <div className={`${jakarta.variable} ${barlow.variable} flex min-h-screen flex-col font-sans`}>
        {store ? <StoreNav key={store.slug} store={store} /> : <SiteNav />}
        <motion.main
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, ease: EASE_OUT }}
          className="flex flex-1 flex-col gap-2 pb-2 sm:gap-3 sm:pb-3"
        >
          <Component {...pageProps} />
        </motion.main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
