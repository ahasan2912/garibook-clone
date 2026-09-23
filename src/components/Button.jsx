import { FaArrowRight } from "react-icons/fa";

/**
 * Garibook style action button.
 * `variant` → "warning" (yellow) or "primary" (blue).
 */
export default function Button({
  label,
  url = "#",
  variant = "warning",
  icon = true,
  className = "",
  onClick,
  external = false,
  type,
}) {
  const classes = `theme-btn ${variant === "primary" ? "theme-primary-btn" : "theme-warning-btn"} ${className}`;

  if (url) {
    return (
      <a
        href={url}
        onClick={onClick}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={classes}
      >
        <span className="btn-label">{label}</span>
        {icon && (
          <span className="btn-icon">
            <FaArrowRight aria-hidden="true" />
          </span>
        )}
      </a>
    );
  }

  return (
    <button type={type || "button"} onClick={onClick} className={classes}>
      <span className="btn-label">{label}</span>
      {icon && (
        <span className="btn-icon">
          <FaArrowRight aria-hidden="true" />
        </span>
      )}
    </button>
  );
}