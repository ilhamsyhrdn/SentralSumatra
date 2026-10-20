import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { lockScroll } from "@/lib/scroll";

/** State menu mobile: tertutup otomatis saat pindah halaman / tekan Escape, dan mengunci scroll saat terbuka */
export function useMobileMenu() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    router.events.on("routeChangeStart", close);
    router.events.on("hashChangeStart", close);
    return () => {
      router.events.off("routeChangeStart", close);
      router.events.off("hashChangeStart", close);
    };
  }, [router.events]);

  useEffect(() => {
    if (!open) return;
    lockScroll(true);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      lockScroll(false);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return [open, setOpen] as const;
}

/** Section aktif = section terakhir yang bagian atasnya sudah melewati 40% tinggi layar */
export function useActiveSection(hrefs: string[]) {
  const [active, setActive] = useState("");
  const key = hrefs.join("|");
  useEffect(() => {
    const sections = key
      .split("|")
      .map((h) => document.getElementById(h.slice(1)))
      .filter((el): el is HTMLElement => el !== null);
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.4;
      let current = "";
      for (const s of sections) if (s.getBoundingClientRect().top <= line) current = `#${s.id}`;
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [key]);
  return active;
}
