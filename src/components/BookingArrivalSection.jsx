import Button from "./Button";
import { useI18n } from "../i18n";

function ArrivalImage({ src, alt, className = "", delay }) {
  return (
    <div
      className="booking-arrival-inner-image group overflow-hidden rounded-t-[16px]"
      data-reveal
      data-delay={delay}
    >
      <img
        src={src}
        alt={alt}
        className={`mt-2 w-full object-cover transition-transform duration-700 group-hover:scale-[1.05] ${className}`}
      />
    </div>
  );
}

export default function BookingArrivalSection() {
  const { data } = useI18n();
  const { BOOKING_ARRIVAL } = data;
  const [image1, image2, ...rest] = BOOKING_ARRIVAL.images;

  return (
    <section className="booking-arrival-wrapper section-padding-ptb-70 bg-black overflow-hidden">
      <div className="container-gb">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <div className="section-header lg:max-w-[55%]" data-reveal>
            <h2 className="text-white!">{BOOKING_ARRIVAL.title}</h2>
          </div>
          <div
            className="flex justify-start lg:justify-end"
            data-reveal
            data-delay="0.15"
          >
            <Button
              label={BOOKING_ARRIVAL.button.label}
              url={BOOKING_ARRIVAL.button.url}
              variant={BOOKING_ARRIVAL.button.variant}
              external
            />
          </div>
        </div>

        <div className="section-margin-mt-50">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-12">
            <div className="col-span-2 sm:col-span-8 sm:pr-1">
              <ArrivalImage src={image1.src} alt={image1.alt} delay="0.1" />
            </div>
            <div className="col-span-2 sm:col-span-4 sm:pl-1">
              <ArrivalImage src={image2.src} alt={image2.alt} delay="0.2" />
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-12">
            {rest.map((img, i) => (
              <div key={img.alt} className={`col-span-1 sm:col-span-4 ${i !== 0 ? "sm:pl-0" : ""}`}>
                <ArrivalImage src={img.src} alt={img.alt} delay={String(0.3 + i * 0.1)} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}