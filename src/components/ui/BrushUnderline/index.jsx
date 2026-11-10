const BrushUnderline = ({ className = "" }) => (
  <svg
    viewBox="0 0 400 40"
    preserveAspectRatio="none"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <path
      className="brush-path"
      d="M6 28 C 90 12, 200 10, 394 16"
      stroke="currentColor"
      strokeWidth="9"
      strokeLinecap="round"
    />
    <path
      className="brush-path"
      d="M40 36 C 140 24, 260 22, 360 26"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

export default BrushUnderline;
