import { FaArrowRight } from "react-icons/fa6";
import Button from "./Button";
import { useI18n } from "../i18n";

function CompanyBrand({ company, t }) {
  return (
    <li>
      <h2 className="footer-title-one text-[22px] font-semibold leading-7 text-white xl:text-[32px] xl:font-bold xl:leading-[40px]">
        {company.label}
      </h2>
      <div className="mt-3 inline-flex items-center gap-3">
        <img
          src={company.image}
          alt={company.name}
          width={company.imgClass === "w-[95px]" ? 95 : 70}
          className={`h-[78px] w-auto ${company.imgClass}`}
        />
        <div>
          <h5 className="text-[16px] font-medium text-white xl:text-lg">{company.name}</h5>
          <a
            href={company.href}
            target={company.external ? "_blank" : undefined}
            rel={company.external ? "noopener noreferrer" : undefined}
            className="inline-flex items-center gap-2 text-base font-bold text-warning-gb transition-opacity hover:opacity-80"
          >
            <span className="btn-label">{t("Visit Website")}</span>
            <span className="btn-icon text-[14px]">
              <FaArrowRight aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>
    </li>
  );
}

export default function Footer() {
  const { data, t } = useI18n();
  const { FOOTER } = data;
  return (
    <footer className="footer-wrapper relative bg-black">
      <div className="container-gb">
        <div className="footer-wrap">
          <div className="footer-main relative">
            <div className="footer-main-wrap section-padding-ptb-70">
              <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-12">
                {FOOTER.columns.map((col, i) => (
                  <div
                    key={col.title}
                    className={`lg:col-span-3 ${i === 0 ? "lg:col-span-2" : ""}`}
                  >
                    <div className="footer-widget-info">
                      <h6 className="footer-widget-title mb-5">{col.title}</h6>
                      <ul className="m-0 list-none space-y-3 p-0">
                        {col.links.map((link) => (
                          <li key={link.label}>
                            <a
                              href={link.href}
                              target={link.external ? "_blank" : undefined}
                              rel={link.external ? "noopener noreferrer" : undefined}
                              className="hover-style-link"
                            >
                              {link.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}

                <div className="lg:col-span-2">
                  <div className="footer-widget-info">
                    <h6 className="footer-widget-title mb-5">{FOOTER.contact.title}</h6>
                    <ul className="m-0 list-none space-y-3 p-0">
                      <li>
                        <a href={FOOTER.contact.emailHref} className="hover-style-link">
                          {FOOTER.contact.email}
                        </a>
                      </li>
                      <li>
                        <span className="footer-address text-[15px] font-normal leading-6 text-[#c7c7c7]">
                          {FOOTER.contact.address}
                        </span>
                      </li>
                      <li>
                        <a href={FOOTER.contact.phoneHref} className="hover-style-link">
                          {FOOTER.contact.phone}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Mid footer */}
            <div className="footer-v-mid-content section-margin-mb-50 grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div className="footer-v-mid-download lg:mb-0">
                <h2 className="footer-title-one max-w-md text-[26px] font-semibold leading-9 text-white xl:text-[32px] xl:font-bold xl:leading-[40px]">
                  {t("Download Our")}
                  <br />
                  {t("Garibook Mobile App")}
                </h2>
                <Button
                  className="mt-4"
                  label={t("Download App")}
                  url={data.DOWNLOAD_APP_URL}
                  variant="primary"
                  external
                />
              </div>

              <ul className="m-0 flex list-none flex-col justify-around gap-10 p-0 xl:gap-5">
                {FOOTER.companies.map((company) => (
                    <CompanyBrand key={company.name} company={company} t={t} />
                  ))}
              </ul>
            </div>
          </div>

          <hr className="border-[#2a2a2a]" />

          {/* Bottom bar */}
          <div className="footer-v-bottom-content py-8">
            <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
              <ul className="m-0 flex list-none flex-wrap items-center justify-center gap-5 p-0 lg:justify-start lg:gap-10">
                <li>
                  <div className="footer-top-wrap">
                    <img
                      src="/assets/images/Garibook_Logo.svg"
                      alt="Garibook"
                      height={48}
                      className="h-12 w-auto"
                    />
                  </div>
                </li>
                <li>
                  <a href="/terms-and-conditions" className="hover-style-link">
                    {t("Terms & Conditions")}
                  </a>
                </li>
                <li>
                  <a href="/privacy-policy" className="hover-style-link">
                    {t("Privacy Policy")}
                  </a>
                </li>
              </ul>

              <div className="flex flex-col items-center gap-4 text-center lg:items-end lg:text-right">
                <span className="text-[15px] leading-6 text-[#c7c7c7]">
                  {FOOTER.tradeLicense}
                </span>
                <p className="mb-0 text-[15px] leading-6 text-[#c7c7c7]">
                  {FOOTER.copyright}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SSL banner */}
      <div className="container-fluid mt-2 w-full p-0">
        <div className="scroll-container w-full overflow-hidden">
          <img
            src="/assets/images/clients/ssl.png"
            alt="SSL Logo"
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </footer>
  );
}