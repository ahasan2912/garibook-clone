import { useI18n } from "../i18n";

export default function FreedomSection() {
  const { data } = useI18n();
  const { FREEDOM } = data;
  return (
    <section className="freedom-wrapper section-padding-ptb-70 bg-black">
      <div className="container-gb">
        <div className="section-header">
          <h2 className="text-white!" data-reveal>
            {FREEDOM.title}
          </h2>
        </div>

        <div className="section-margin-mt-50">
          <div data-reveal="zoom" data-delay="0.05">
            <div className="overflow-hidden rounded-t-2xl">
              <img
                src={FREEDOM.image}
                alt="Freedom in every journey"
                className="w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-12.5 flex flex-wrap justify-start gap-x-8 gap-y-10 xl:justify-end">
            {FREEDOM.features.map((feature, i) => (
              <div
                key={feature.title}
                className="layout-two-box-item w-full sm:w-[calc(50%-16px)] xl:w-[calc(25%-24px)]"
                data-reveal
                data-delay={String(0.1 + i * 0.08)}
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="h-20 w-auto rounded-t-[14px]"
                />
                <div className="ltbt-text mt-4">
                  <h5 className="text-2xl font-semibold leading-9 text-white xl:text-[32px] xl:leading-[36px]">
                    {feature.title}
                  </h5>
                  <p className="mt-2 text-[18px] font-medium leading-6 text-muted-gb xl:text-2xl xl:leading-7">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}