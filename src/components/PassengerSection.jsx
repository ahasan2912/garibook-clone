import { useState } from "react";
import { FaPlay } from "react-icons/fa6";
import SliderArrows from "./SliderArrows";
import YoutubeModal from "./YoutubeModal";
import { useSlider } from "../hooks/useSlider";
import { useI18n } from "../i18n";

export default function PassengerSection({ slides }) {
  const { data } = useI18n();
  const { PASSENGERS } = data;
  const slider = useSlider(slides.length, [
    [575, 1],
    [1024, 2],
    [Infinity, 3],
  ]);
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section
      className="passenger-speak-wrapper section-padding-ptb-70 relative bg-soft-gb"
      data-reveal
    >
      <div className="container-gb">
        <div className="section-header">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="w-full lg:w-2/3">
              <h2>{PASSENGERS.title}</h2>
              <p className="max-w-3xl">{PASSENGERS.description}</p>
            </div>
            <div className="flex justify-start lg:justify-end lg:self-end">
              <SliderArrows
                onPrev={slider.prev}
                onNext={slider.next}
                canPrev={slider.canPrev}
                canNext={slider.canNext}
              />
            </div>
          </div>
        </div>

        <div className="section-margin-mt-50 relative">
          <div className="overflow-hidden">
            <div className="embla-slide-track -ml-4" style={slider.trackStyle}>
              {slides.map((p) => (
                <div
                  key={p.id}
                  className="min-w-0 cursor-pointer pl-4"
                  style={{ flex: `0 0 ${100 / slider.visible}%` }}
                >
                  <div
                    className="passenger-box select-none"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => setActiveVideo(p.videoId)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Watch ${p.name}'s story`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveVideo(p.videoId);
                      }
                    }}
                  >
                    <div className="youtube-view-wrap youtube-thumb-wrapper relative cursor-pointer overflow-hidden rounded-[16px]">
                      <img
                        src={`https://img.youtube.com/vi/${p.videoId}/hqdefault.jpg`}
                        alt={`${p.name} — ${p.occupation}`}
                        className="h-[230px] w-full object-cover transition-transform duration-500 hover:scale-[1.04] sm:h-[250px]"
                        loading="lazy"
                      />
                      <span className="youtube-play-icon absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#ff0000cc] text-[36px] text-white transition-all duration-300 hover:scale-110">
                        <FaPlay aria-hidden="true" />
                      </span>
                    </div>

                    <div className="p-content-box mt-4 px-3 text-start">
                      <h4 className="p-name text-[22px] font-semibold leading-7 text-ink-gb">
                        {p.name}
                      </h4>
                      <p className="p-position mb-0 block w-full text-[16px] font-medium leading-5 text-muted-gb">
                        {p.occupation}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <YoutubeModal
        isOpen={!!activeVideo}
        videoId={activeVideo}
        onClose={() => setActiveVideo(null)}
      />
    </section>
  );
}