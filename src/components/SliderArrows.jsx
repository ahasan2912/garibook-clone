import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function SliderArrows({ onPrev, onNext, canPrev = true, canNext = true, className = "" }) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <button
        type="button"
        aria-label="Previous"
        className="custom-slider-arrow"
        onClick={onPrev}
        disabled={!canPrev}
      >
        <FaChevronLeft aria-hidden="true" />
      </button>
      <button
        type="button"
        aria-label="Next"
        className="custom-slider-arrow"
        onClick={onNext}
        disabled={!canNext}
      >
        <FaChevronRight aria-hidden="true" />
      </button>
    </div>
  );
}