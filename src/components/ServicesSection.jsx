import { useState } from "react";
import Button from "./Button";
import { useI18n } from "../i18n";

function RideCard({ card, lang }) {
  console.log(lang);
  return (
    <div className="w-full">
      <div className="group box-item-wrap-one relative inline-flex min-h-70 w-full flex-col items-start justify-center overflow-hidden rounded-xl bg-card-gb p-9 transition-all duration-500 hover:bg-primary-gb xl:min-h-81.5">
        <span
          aria-hidden="true"
          className="absolute left-0 top-20 z-0 h-21.5 w-0 rounded-br-xl rounded-tr-xl bg-white transition-all duration-500 group-hover:w-30"
        />
        <div className="box-iwo-img relative z-1">
          <img
            src={card.image}
            alt={card.title}
            height={72}
            className={`${card.title === 'Airport Rental' || 'এয়ারপোর্ট রেন্টাল' ? 'mt-11' : 'mt-2'} ${card.title === 'Hourly Rental' ? 'mt-8' : 'mt-2'} w-auto max-w-full transition-transform duration-500 group-hover:translate-x-5`}
          />
        </div>
        <div className={`box-iwo-text relative`}>
          <h5 className={`text-[22px] font-semibold leading-7 text-ink-gb transition-colors duration-500 group-hover:text-white xl:text-2xl ${lang==='bn' ? 'mt-4' : 'mt-6'}`}>
            {card.title}
          </h5>
          <p className="mt-3 text-[17px] font-medium leading-6 text-muted-gb transition-colors duration-500 group-hover:text-white xl:text-lg">
            {card.description}
          </p>
        </div>
      </div>
    </div>
  );
}

function RidesPane({ data, t, lang }) {
  return (
    <div className="fade-pane">
      <div className="section-header mb-5">
        <h2>
          {t("Every Ride")}
          <br />
          {t("One Platform")}
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-5.5 sm:grid-cols-2 xl:grid-cols-4">
        {data.rides.cards.map((card) => (
          <RideCard key={card.title} card={card} lang={lang} />
        ))}
      </div>
    </div>
  );
}

function FeaturePane({ data, t }) {
  return (
    <div className="fade-pane">
      <div className="flex items-center justify-center">
        <div className="grid w-full items-center gap-10 lg:grid-cols-2">
          <div className="layout-one-t-text relative order-2 lg:order-1">
            <div className="section-header mb-5 lg:pr-12">
              <h2>{data.title}</h2>
              <p className="my-4">{data.description}</p>
            </div>
            <Button
              label={t("Learn More")}
              url={data.link}
              variant="primary"
              className="!p-6"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="layout-one-t-image overflow-hidden rounded-t-[18px]">
              <img
                src={data.image}
                alt={data.title}
                className="mt-2 h-full w-auto max-w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const [active, setActive] = useState("rides");
  const { lang, data, t } = useI18n();
  const { SERVICES, SERVICES_TABS } = data;

  return (
    <section className="service-wrapper section-padding-ptb-70">
      <div className="container-gb">
        <div className="section-header">
          <h2 data-reveal>{t("Our Services")}</h2>
        </div>

        <div className="service-tab-navs mt-4" data-reveal data-delay="0.05">
          <div className="flex flex-wrap gap-3" role="tablist" aria-label="Services">
            {SERVICES_TABS.map((tab) => {
              const isActive = active === tab.toLowerCase();
              return (
                <button
                  key={tab}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(tab.toLowerCase())}
                  className={`rounded-xl border-none px-8 py-4 text-[16px] font-semibold leading-7 transition-all duration-500 sm:px-12 xl:text-[20px] ${isActive
                    ? "bg-primary-gb text-white"
                    : "bg-[#e9e9e9] text-ink-gb hover:bg-primary-gb hover:text-white"
                    }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        <div className="section-margin-mt-50">
          {active === "rides" ? (
            <RidesPane data={SERVICES} t={t} lang={lang} />
          ) : (
            <FeaturePane tabKey={active} data={SERVICES[active]} t={t} />
          )}
        </div>
      </div>
    </section>
  );
}