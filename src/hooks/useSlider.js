import { useCallback, useEffect, useState } from "react";

/**
 * Minimal dependency-free embla-style slider.
 * `breakpoints` is an array of [maxWidth, visibleSlides] sorted ascending.
 * Returns index-based navigation plus the track transform.
 */
export function useSlider(count, breakpoints = [[639, 1], [1023, 2], [Infinity, 3]]) {
  const [visible, setVisible] = useState(() => resolveVisible(breakpoints));
  const [index, setIndex] = useState(0);

  function resolveVisible(list) {
    if (typeof window === "undefined") return list[list.length - 1][1];
    const w = window.innerWidth;
    let v = list[0][1];
    for (const [max, slides] of list) {
      if (w <= max) {
        v = slides;
        break;
      }
      v = slides;
    }
    return v;
  }

  useEffect(() => {
    const onResize = () => setVisible(resolveVisible(breakpoints));
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(breakpoints)]);

  const maxIndex = Math.max(0, count - visible);

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex, visible]);

  const next = useCallback(() => setIndex((i) => Math.min(i + 1, maxIndex)), [maxIndex]);
  const prev = useCallback(() => setIndex((i) => Math.max(i - 1, 0)), []);

  const canPrev = index > 0;
  const canNext = index < maxIndex;

  const trackStyle = {
    transform: `translate3d(-${index * (100 / visible)}%, 0, 0)`,
  };

  return { visible, index, maxIndex, next, prev, canPrev, canNext, trackStyle };
}