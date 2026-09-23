import { useMemo, useRef, useState } from "react";
import { FaCarSide, FaChevronDown, FaPlaneDeparture } from "react-icons/fa6";
import { useI18n } from "../i18n";

const FIELD_ICONS = {
  car: "/assets/icon/fi_9610434.svg",
  pickup: "/assets/icon/Frame76.svg",
  drop: "/assets/icon/fi_14910621.svg",
  calendar: "/assets/icon/fi_12516022.svg",
  arrow: "/assets/icon/Down_Arrow_3_.png",
};

function FieldShell({ icon, label, children, divider }) {
  return (
    <div
      className={`w-full ${divider ? "xl:border-r-2 xl:border-line-gb xl:pr-7" : ""}`}
    >
      <label className="mb-4 flex items-center gap-2 text-[18px] font-semibold leading-5 text-ink-gb">
        <img src={icon} alt="" width={20} height={20} className="h-5 w-auto" />
        <span className="flex items-center gap-1">
          {label} <span className="text-danger font-semibold text-[#dc3545]">*</span>
        </span>
      </label>
      <div className="min-h-[52px]">{children}</div>
    </div>
  );
}

function CarSelect({ value, onChange, cars, t }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  return (
    <div ref={rootRef} className="relative w-full">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="relative flex h-[52px] w-full items-center justify-between rounded-[10px] border border-[#c7c7c7] bg-white px-4 text-left text-[17px] text-body-gb transition-colors hover:border-primary-gb focus:border-primary-gb focus:outline-none"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className={value ? "font-medium text-ink-gb" : "text-[#9d9d9d]"}>
          {value || t("Select Car Type")}
        </span>
        <FaChevronDown
          className={`transition-transform ${open ? "rotate-180" : ""} text-[#9d9d9d]`}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute left-0 right-0 top-[calc(100%+6px)] z-30 max-h-64 overflow-auto rounded-xl border border-[#ececec] bg-white py-2 shadow-[0_24px_50px_-22px_rgba(18,18,18,0.4)]"
        >
          {cars.map((car) => (
            <li key={car.label}>
              <button
                type="button"
                role="option"
                aria-selected={value === car.label}
                className="flex w-full items-center justify-between px-4 py-3 text-left text-[15px] transition-colors hover:bg-soft-gb"
                onClick={() => {
                  onChange(car.label);
                  setOpen(false);
                }}
              >
                <span className="font-medium text-ink-gb">{car.label}</span>
                <span className="text-sm text-[#9d9d9d]">
                  {car.seats} {t("Seats")}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function AirportsSelect({ value, onChange, airports, t }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="relative flex h-[52px] w-full items-center justify-between rounded-[10px] border border-[#c7c7c7] bg-white px-4 text-left text-[16px] transition-colors hover:border-primary-gb focus:border-primary-gb focus:outline-none"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className={value ? "font-medium text-ink-gb" : "text-[#9d9d9d]"}>
          {value || t("Select Airport")}
        </span>
        <FaChevronDown
          className={`transition-transform ${open ? "rotate-180" : ""} text-[#9d9d9d]`}
        />
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute left-0 right-0 top-[calc(100%+6px)] z-30 max-h-64 overflow-auto rounded-xl border border-[#ececec] bg-white py-2 shadow-[0_24px_50px_-22px_rgba(18,18,18,0.4)]"
        >
          {airports.map((airport) => (
            <li key={airport}>
              <button
                type="button"
                role="option"
                aria-selected={value === airport}
                className="flex w-full items-center gap-2 px-4 py-3 text-left text-[14.5px] font-medium text-ink-gb transition-colors hover:bg-soft-gb"
                onClick={() => {
                  onChange(airport);
                  setOpen(false);
                }}
              >
                <FaPlaneDeparture className="shrink-0 text-primary-gb" />
                {airport}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function TextField({ placeholder, value, onChange }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="h-[52px] w-full rounded-[10px] border border-[#c7c7c7] bg-white px-4 text-[17px] font-medium text-ink-gb transition-colors placeholder:text-[#9d9d9d] hover:border-primary-gb focus:border-primary-gb focus:outline-none"
    />
  );
}

function DateTimeField({ value, onChange, t }) {
  const pickerRef = useRef(null);
  const display = value
    ? new Date(value).toLocaleString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
    : "";

  return (
    <div
      className="relative flex h-[52px] w-full cursor-pointer items-center justify-between rounded-[10px] border border-[#c7c7c7] bg-white px-4 transition-colors hover:border-primary-gb focus-within:border-primary-gb"
      onClick={() => pickerRef.current && pickerRef.current.showPicker && pickerRef.current.showPicker()}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          pickerRef.current && pickerRef.current.showPicker && pickerRef.current.showPicker();
        }
      }}
    >
      <input
        ref={pickerRef}
        type="datetime-local"
        className="pointer-events-none absolute inset-0 h-full w-full cursor-pointer opacity-0"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        tabIndex={-1}
        aria-hidden="true"
      />
      <span className={display ? "font-medium text-ink-gb" : "text-[#9d9d9d]"}>
        {display || t("MM/DD/YYYY 00:00 PM")}
      </span>
      <span className="w-5 text-right text-[#9d9d9d]">
        <FaChevronDown aria-hidden="true" />
      </span>
    </div>
  );
}

function TripTypes({ options, value, onChange, t }) {
  return (
    <div className="inline-flex flex-wrap items-center gap-x-8 gap-y-3">
      {options.map((opt) => (
        <label
          key={opt}
          className="group flex cursor-pointer items-center gap-3 text-[18px] font-semibold text-ink-gb"
        >
          <input
            type="radio"
            name="tripType"
            value={opt}
            checked={value === opt}
            onChange={() => onChange(opt)}
            className="h-5 w-5 cursor-pointer accent-[#0e52ff]"
          />
          <span className="cursor-pointer transition-colors group-hover:text-primary-gb">
            {t(opt)}
          </span>
        </label>
      ))}
    </div>
  );
}

const TABS = [
  { key: "car-rental", label: "Car Rental", icon: FaCarSide },
  { key: "airport-rental", label: "Airport Rental", icon: FaPlaneDeparture },
];

const EMPTY = { car: "", pickup: "", drop: "", date: "", trip: "One Way" };

export default function BookingWidget() {
  const [tab, setTab] = useState("car-rental");
  const [form, setForm] = useState(EMPTY);
  const { data, t } = useI18n();
  const { CAR_TYPES, AIRPORTS } = data;

  const tripOptions = useMemo(
    () => (tab === "car-rental" ? ["One Way", "Round Way", "Hourly"] : ["One Way", "Round Trip"]),
    [tab]
  );

  const set = (key) => (value) => setForm((f) => ({ ...f, [key]: value }));

  return (
    <div>
      <div
        role="tablist"
        className="inline-flex gap-3 rounded-[12px] border-0 bg-white p-7 pb-px shadow-[0_-214px_60px_0_hsla(0,0%,73%,0),0_-137px_55px_0_hsla(0,0%,73%,0.01),0_-77px_46px_0_hsla(0,0%,73%,0.05),0_-34px_34px_0_hsla(0,0%,73%,0.09),0_-9px_19px_0_hsla(0,0%,73%,0.1)]"
      >
        {TABS.map((tabDef) => {
          const Icon = tabDef.icon;
          const active = tab === tabDef.key;
          return (
            <button
              key={tabDef.key}
              role="tab"
              aria-selected={active}
              onClick={() => {
                setTab(tabDef.key);
                setForm({ ...EMPTY, trip: tripOptions[0] });
              }}
              className={`inline-flex items-center gap-2 rounded-[8px] px-6 py-3.5 text-[18px] font-semibold leading-7 transition-colors duration-300 sm:px-10 ${
                active ? "bg-ink-gb text-white" : "bg-white text-ink-gb hover:bg-soft-gb"
              }`}
            >
              <Icon aria-hidden="true" />
              {t(tabDef.label)}
            </button>
          );
        })}
      </div>

      <div className="rounded-[12px] bg-white px-7 pb-11 pt-12 shadow-[0_-20px_38px_0_hsla(0,0%,73%,0),0_-9px_19px_0_hsla(0,0%,73%,0.1)] -mt-5">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col"
          aria-label={`${t(tab === "car-rental" ? "Car Rental" : "Airport Rental")} booking`}
        >
          <div className="grid grid-cols-1 items-start gap-x-7 gap-y-6 sm:grid-cols-2 xl:grid-cols-4">
            <FieldShell icon={FIELD_ICONS.car} label={t("Choose a Car")} divider>
              <CarSelect value={form.car} onChange={set("car")} cars={CAR_TYPES} t={t} />
            </FieldShell>

            {tab === "car-rental" ? (
              <FieldShell icon={FIELD_ICONS.pickup} label={t("Pickup Location")} divider>
                <TextField
                  placeholder={t("Enter Pickup Location")}
                  value={form.pickup}
                  onChange={set("pickup")}
                />
              </FieldShell>
            ) : (
              <FieldShell icon={FIELD_ICONS.pickup} label={t("Pickup Airport")} divider>
                <AirportsSelect
                  value={form.pickup}
                  onChange={set("pickup")}
                  airports={AIRPORTS}
                  t={t}
                />
              </FieldShell>
            )}

            <FieldShell icon={FIELD_ICONS.drop} label={t("Drop-off Location")} divider>
              <TextField
                placeholder={t("Enter Drop-off Location")}
                value={form.drop}
                onChange={set("drop")}
              />
            </FieldShell>

            <FieldShell icon={FIELD_ICONS.calendar} label={t("Pickup Date & Time")}>
              <DateTimeField value={form.date} onChange={set("date")} t={t} />
            </FieldShell>
          </div>

          <div className="mt-11 flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
            <TripTypes options={tripOptions} value={form.trip} onChange={set("trip")} t={t} />
            <button
              type="submit"
              className="theme-btn w-full max-w-full theme-primary-btn justify-between lg:w-auto lg:min-w-[280px]"
            >
              <span className="btn-label">{t("Continue")}</span>
              <span className="btn-icon">
                <img
                  src="/assets/icon/right-arrow.png"
                  alt="button-icon"
                  className="h-7 w-7"
                />
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}