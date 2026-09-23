import Button from "./Button";
import { useI18n } from "../i18n";

export default function DownloadAppSection() {
  const { data } = useI18n();
  const { DOWNLOAD_APP } = data;
  return (
    <section className="download-app-wrapper download-customer-app-image section-padding-ptb-70 relative">
      <div className="container-gb">
        <div className="section-content relative overflow-hidden rounded-[24px] bg-primary-gb px-8 py-14 sm:px-14 lg:px-24 lg:py-24" data-reveal>
          {/* Decorative blurred blobs */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 right-24 h-80 w-80 rounded-full bg-black/10 blur-3xl"
          />

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

          <div className="pointer-events-none absolute -bottom-2 right-0 z-0 hidden w-[300px] min-[480px]:block sm:w-[400px] lg:right-10 lg:w-[520px]">
            <img
              src={DOWNLOAD_APP.phoneImage}
              alt="Garibook mobile app"
              className="w-full max-w-[531px] object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}