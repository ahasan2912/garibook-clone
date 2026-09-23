import { useEffect, useRef } from "react";
import { gsap } from "../utils/gsapLib";
import { useTypewriter } from "../hooks/useTypewriter";
import { useI18n } from "../i18n";
import Button from "./Button";

export default function Hero() {
  const rootRef = useRef(null);
  const { data } = useI18n();
  const { html } = useTypewriter(data.HERO.titles);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    const ctx = gsap.context(() => {
      gsap.from(".hero-left", { y: 42, opacity: 0, duration: 1, ease: "power3.out" });
      gsap.from(".hero-right", {
        y: 42,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.25,
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="homepage_hero_wrapper relative pt-[80px] pb-[150px] lg:pt-[118px] lg:pb-[290px]"
    >
      <div className="container-gb">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:gap-6">
          <div className="hero-left w-full lg:w-1/2">
            <div className="hero-title-container flex min-h-[150px] w-full items-start">
              <h1
                className="hero-title overflow-visible font-montserrat font-bold text-ink-gb text-[38px] leading-[1.15] sm:text-[46px] md:text-[56px] xl:text-[64px] xl:leading-[72px]"
                style={{ margin: 0 }}
              >
                <span
                  className="typing-text"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              </h1>
            </div>
          </div>
          <div className="hero-right w-full lg:w-1/2">
            <p className="text-[20px] font-medium leading-[30px] text-muted-gb sm:text-[24px] sm:leading-[32px] xl:text-[28px]">
              {data.HERO.description}
            </p>
            <Button
              className="mt-[22px]"
              label={data.HERO.button.label}
              url={data.HERO.button.url}
              variant={data.HERO.button.variant}
              external
            />
          </div>
        </div>
      </div>
    </section>
  );
}