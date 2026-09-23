import Button from "./Button";
import { useI18n } from "../i18n";

export default function DownloadAppSection() {
  const { data } = useI18n();
  const { DOWNLOAD_APP } = data;
  return (
    <section className="download-app-wrapper download-customer-app-image section-padding-ptb-70 relative">
      <div className="container-gb">
        <div className="section-content relative rounded-3xl bg-primary-gb px-8 py-10 sm:px-14 sm:py-14 lg:px-24 lg:py-20" data-reveal>
          {/* Decorative blurred blobs (clipped to card corners) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl"
          >
            <span className="absolute -left-20 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <span className="absolute -bottom-32 right-24 h-80 w-80 rounded-full bg-black/10 blur-3xl" />
          </div>

          <div className="common-section-layout-three-text relative z-10 max-w-[620px] pb-6 lg:pr-8">
            <h2 className="max-w-[520px] text-[clamp(32px,4vw,48px)] font-bold leading-[1.12] text-white">
              {DOWNLOAD_APP.heading}
              <br />
              {DOWNLOAD_APP.heading2}
            </h2>
            <p className="mt-5 max-w-[700px] text-[20px] font-medium leading-8 text-white lg:text-2xl">
              {DOWNLOAD_APP.description}
            </p>
            <Button
              className="no-commission-download-button mt-8"
              label={DOWNLOAD_APP.button.label}
              url={DOWNLOAD_APP.button.url}
              variant={DOWNLOAD_APP.button.variant}
              external
            />
          </div>

          <div className="relative z-0 md:mt-10 flex justify-center lg:pointer-events-none lg:absolute -bottom-10 sm:-bottom-14 lg:-top-10 lg:right-10 lg:z-50 lg:mt-0 lg:block lg:w-[510px]">
            <img
              src={DOWNLOAD_APP.phoneImage}
              alt="Garibook mobile app"
              className="w-[220px] object-contain drop-shadow-2xl sm:w-[300px] lg:w-full lg:max-w-[531px] lg:[clip-path:inset(0_0_16%_0)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}