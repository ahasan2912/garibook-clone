import { useI18n } from "../i18n";

export default function PeopleTogetherSection() {
  const { data } = useI18n();
  const { PEOPLE_TOGETHER } = data;
  return (
    <section className="people-together-wrapper section-padding-ptb-70">
      <div className="container-gb">
        <div className="section-header" data-reveal>
          <h2 className="text-black!" data-reveal>
            {PEOPLE_TOGETHER.title}
            <br />
            {PEOPLE_TOGETHER.titleLine2}
          </h2>
        </div>

        <div className="section-margin-mt-50">
          <div className="flex flex-wrap gap-6">
            {PEOPLE_TOGETHER.cards.map((card, i) => (
              <div key={card.title} className="w-full md:w-[calc(50%-12px)] xl:w-[calc(33.333%-16px)]">
                <div
                  className="people-together-box group relative h-80 overflow-hidden rounded-2xl lg:h-105"
                  data-reveal
                  data-delay={String(i * 0.1)}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-x-0 top-0 z-1 p-5 md:p-7">
                    <h4 className="people-together-text text-2xl font-bold leading-9 text-white md:text-[32px]">
                      {card.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}