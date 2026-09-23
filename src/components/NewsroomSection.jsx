import { FaArrowRight } from "react-icons/fa6";
import SliderArrows from "./SliderArrows";
import { useSlider } from "../hooks/useSlider";
import { useI18n } from "../i18n";

function formatDate(dateStr) {
  if (!dateStr) return "";
  return new Date(`${dateStr}T00:00:00`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function NewsroomSection() {
  const { data, t } = useI18n();
  const { NEWSROOM, NEWS } = data;
  const slider = useSlider(NEWS.length, [
    [575, 1],
    [1024, 2],
    [Infinity, 3],
  ]);

  return (
    <section
      className="passenger-speak-wrapper section-margin-mb-70 relative"
      data-reveal
    >
      <div className="container-gb">
        <div className="passenger-speak-wrap">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="section-header lg:flex-1">
              <h2>{NEWSROOM.title}</h2>
            </div>
            <div className="customer_style_wrap inline-flex">
              <SliderArrows
                onPrev={slider.prev}
                onNext={slider.next}
                canPrev={slider.canPrev}
                canNext={slider.canNext}
              />
            </div>
          </div>

          <div className="section-margin-mt-50">
            <div className="overflow-hidden">
              <div
                className="embla-slide-track -ml-4"
                style={slider.trackStyle}
              >
                {NEWS.map((item) => (
                  <div
                    key={item.id}
                    className="min-w-0 pl-4"
                    style={{ flex: `0 0 ${100 / slider.visible}%` }}
                  >
                    <div className="single-block-news">
                      <div className="sblo-image group relative h-[240px] overflow-hidden rounded-[16px] sm:h-[313px]">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                          loading="lazy"
                        />
                        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                      </div>

                      <div className="sblo-content mt-2 text-start md:mt-3">
                        <span className="text-[15px] font-medium text-muted-gb">
                          {formatDate(item.date)}
                        </span>
                        <h2 className="sblo-title mt-3 line-clamp-2 text-[22px] font-semibold leading-[1.59] text-[#212121] group-hover:text-primary-gb xl:text-[27px]">
                          {item.title}
                        </h2>

                        <div className="mt-5 flex items-center justify-between gap-4 border-t border-line-gb pt-4">
                          <div className="news-brand-wrap">
                            <img
                              src={item.brandImage}
                              alt={item.brand}
                              width={164}
                              loading="lazy"
                              className="h-9 w-auto"
                            />
                          </div>
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="news-read-more inline-flex shrink-0 items-center gap-2 text-[16px] font-semibold leading-5 text-primary-gb transition-colors hover:text-primary-deep"
                          >
                            <span>{t("Read Article")}</span>
                            <span className="text-[15px]">
                              <FaArrowRight aria-hidden="true" />
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}