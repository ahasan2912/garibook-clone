import { useEffect, useRef, useState } from "react";
import { FaPlay, FaXmark } from "react-icons/fa6";

/**
 * Lightbox modal that plays a YouTube video inside an iframe.
 */
export default function YoutubeModal({ isOpen, videoId, onClose }) {
  const [mounted, setMounted] = useState(false);
  const backdropRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;
    setMounted(true);
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Video player"
      onClick={handleBackdrop}
    >
      <button
        type="button"
        aria-label="Close video"
        onClick={onClose}
        className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25"
      >
        <FaXmark className="text-2xl" />
      </button>

      {mounted ? (
        <div className="relative w-full max-w-4xl">
          <div className="aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-2xl">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="mt-4 flex items-center gap-3 text-white">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#ff0000]">
              <FaPlay className="text-sm" />
            </span>
            <span className="font-montserrat text-lg font-semibold">
              Garibook Passenger Experience
            </span>
          </div>
        </div>
      ) : null}
    </div>
  );
}