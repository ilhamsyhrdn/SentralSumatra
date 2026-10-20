import Lenis from "lenis";

let lenis: Lenis | null = null;
const NAV_OFFSET = -96;

/** Scroll halus (inersia) untuk mouse wheel; sentuhan tetap native. Tidak aktif bila pengguna memilih reduced motion. */
export function initSmoothScroll() {
  if (lenis || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return () => {};
  lenis = new Lenis({
    autoRaf: true,
    lerp: 0.11,
    anchors: { offset: NAV_OFFSET },
    prevent: (node) => node.closest("[data-lenis-prevent]") !== null,
  });
  return () => {
    lenis?.destroy();
    lenis = null;
  };
}

export function lockScroll(locked: boolean) {
  document.documentElement.style.overflow = locked ? "hidden" : "";
  if (locked) lenis?.stop();
  else lenis?.start();
}

export function scrollToTop() {
  lenis?.scrollTo(0, { immediate: true });
}
