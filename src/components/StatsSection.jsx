import { useEffect, useRef } from "react";
import { gsap } from "../utils/gsapLib";
import BookingWidget from "./BookingWidget";
import { useI18n } from "../i18n";

function Counter({ value, suffix, label, delay }) {
  const numRef = useRef(null);

  useEffect(() => {
    const el = numRef.current;
    if (!el) return undefined;
    const proxy = { n: 0 };
    const tween = gsap.to(proxy, {
      n: value,
      duration: 2.2,
      ease: "power2.out",
      delay,
      scrollTrigger: { trigger: el, start: "top 88%", once: true },
      onUpdate: () => {
        el.textContent = Math.round(proxy.n).toLocaleString("en-US");
      },
    });
    return () => {
      if (tween.scrollTrigger) tween.scrollTrigger.kill();
      tween.kill();
    };
  }, [value, delay]);

  return (
    <li className="flex flex-col items-center gap-1 text-center xl:gap-2">
      <h4 className="mb-0 text-[clamp(30px,3.2vw,40px)] font-bold leading-[44px] text-warning-gb">
        <span ref={numRef} className="count-num">
          0
        </span>
        {suffix}
      </h4>
      <span className="text-[18px] font-semibold leading-7 text-white xl:text-[24px] xl:leading-[28px]">
        {label}
      </span>
    </li>
  );
}

export default function StatsSection() {
  const skyRef = useRef(null);
  const { data } = useI18n();
  const { STATS, STATS_TITLE } = data;

  useEffect(() => {
    const el = skyRef.current;
    if (!el) return undefined;
    const ctx = gsap.context(() => {
      gsap.from("[data-count-fade]", {
        y: 40,
        opacity: 0,
        stagger: 0.08,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 80%" },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={skyRef}
      className="happy-client-wrapper relative w-full"
      id="homepage_happy_client_wrapper"
    >
      {/* Booking widget pulled over the hero boundary */}
      <div className="choose-trip-details-wrapper relative z-10 -top-[150px] lg:-top-[168px]">
        <div className="container-gb">
          <BookingWidget />
        </div>
      </div>

      {/* Blue gradient band with stats */}
      <div
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(270deg, #0e53ff, #0038c4)" }}
      >
        <div className="container-gb">
          <div className="flex items-end pb-48 pt-24 lg:pt-28">
            <div className="happy-client-wrap w-full">
              <div className="flex flex-col items-start justify-between gap-12 xl:flex-row xl:items-end">
                <div className="w-full xl:w-[62%]" data-count-fade>
                  <h2 className="title-hcw text-[clamp(32px,4.6vw,64px)] font-bold leading-[1.15] text-white">
                    {STATS_TITLE}
                  </h2>
                </div>
                <ul
                  className="mb-0 grid w-full list-none grid-cols-2 gap-x-5 gap-y-9 p-0 xl:flex xl:w-auto xl:items-end xl:justify-end xl:gap-10"
                  data-count-fade
                >
                  {STATS.map((stat, i) => (
                    <Counter
                      key={stat.label}
                      value={stat.value}
                      suffix={stat.suffix}
                      label={stat.label}
                      delay={0.2 + i * 0.15}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Animated city skyline + driving sedan */}
        <div className="pointer-events-none relative" aria-hidden="true">
          <div className="city-skyline absolute bottom-0 left-0" />
          <img
            src="/assets/images/sedan.gif"
            alt=""
            className="absolute bottom-[-16px] left-[44px] z-[2] w-[190px] max-w-[36vw] lg:w-[234px]"
          />
        </div>
      </div>
    </section>
  );
}