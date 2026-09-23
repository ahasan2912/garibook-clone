import Button from "./Button";
import { useI18n } from "../i18n";

export default function SmartDriverSection() {
  const { data } = useI18n();
  const { SMART_DRIVER } = data;
  return (
    <section id="smart-driver" className="no-commission-wrapper section-padding-ptb-70 overflow-hidden scroll-mt-32">
      <div className="container-gb">
        <div className="section-header" data-reveal>
          <h2>{SMART_DRIVER.title}</h2>
        </div>

        <div
          className="section-margin-mt-50 rounded-[24px] bg-warning-gb"
          data-reveal
          data-delay="0.05"
        >
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="common-section-layout-one-text flex flex-col items-start justify-center px-7 py-9 lg:h-full lg:pl-[92px]">
              <h2 className="font-bold leading-[1.125] text-primary-gb text-[clamp(34px,4.6vw,64px)]">
                {SMART_DRIVER.heading}
                <br />
                {SMART_DRIVER.heading2}
              </h2>
              <Button
                className="no-commission-download-button mt-4 w-full max-w-[330px]"
                label={SMART_DRIVER.button.label}
                url={SMART_DRIVER.button.url}
                variant={SMART_DRIVER.button.variant}
                external
              />
            </div>

            <div className="no-commission-image relative text-center" data-reveal="zoom">
              <img
                src={SMART_DRIVER.image}
                alt="Smart Driver app screen"
                className="mx-auto mt-2 max-h-[560px] w-auto max-w-full rounded-t-[16px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}