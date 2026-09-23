import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../utils/gsapLib";

const DIR_FROM = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: -60 },
  right: { x: 60 },
  zoom: { scale: 0.85 },
};

/**
 * Reveals `[data-reveal]` children with GSAP ScrollTrigger.
 * Options via data attributes: data-reveal="up|down|left|right|zoom",
 * data-delay="0.15".
 */
export function useGsapReveal(scopeRef, deps = []) {
  const tlRef = useRef(null);

  useEffect(() => {
    const root = scopeRef.current;
    if (!root) return undefined;

    const items = gsap.utils.toArray("[data-reveal]", root);

    const tween = (el) => {
      const dir = el.getAttribute("data-reveal") || "up";
      const delay = parseFloat(el.getAttribute("data-delay") || "0");
      gsap.set(el, { opacity: 0, ...DIR_FROM[dir] });
      return gsap.to(el, {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.9,
        ease: "power3.out",
        delay,
        scrollTrigger: { trigger: el, start: "top 88%" },
      });
    };

    const tweens = items.map(tween);

    return () => {
      tweens.forEach((t) => {
        t.scrollTrigger && t.scrollTrigger.kill();
        t.kill();
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scopeRef, ...deps]);

  return tlRef;
}