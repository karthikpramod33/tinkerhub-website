const stickers = {
  yay: (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <circle cx="50" cy="30" r="14" />
      <path d="M50 44v22M50 52l-16-8M50 52l16-8M50 66l-12 12M50 66l12 12" />
      <path d="M40 24l-4-4M60 24l4-4M46 26l2 2M54 26l-2 2" />
    </svg>
  ),
  spark: (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M50 8v20M50 72v20M8 50h20M72 50h20M22 22l14 14M64 64l14 14M78 22L64 36M36 64L22 78" />
    </svg>
  ),
  wave: (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <circle cx="42" cy="28" r="13" />
      <path d="M42 41v24M42 47l-14-6M42 65l-10 12M42 65l10 12" />
      <path d="M56 41c4-6 12-8 18-4 4 3 4 9-1 11-3 1-6 0-8-3" />
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M50 78S18 56 18 34a14 14 0 0 1 26-8 14 14 0 0 1 26 8c0 22-20 36-20 36z" />
    </svg>
  ),
  bulb: (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M50 12a24 24 0 0 0-13 44c3 2 5 6 5 10h16c0-4 2-8 5-10a24 24 0 0 0-13-44z" />
      <path d="M42 78h16M45 88h10" />
    </svg>
  ),
  arrowSquiggle: (
    <svg viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M6 40c14-24 28 12 42-4s24-20 40-6" />
      <path d="M78 18l12 12-14 6" />
    </svg>
  ),
  star: (
    <svg viewBox="0 0 100 100" fill="currentColor" stroke="none">
      <path d="M50 6l11 28 30 2-23 20 8 30-26-17-26 17 8-30-23-20 30-2z" />
    </svg>
  ),
  speechBubble: (
    <svg viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 12h80v46H42l-16 16v-16H10z" />
      <circle cx="34" cy="35" r="2.5" fill="currentColor" stroke="none" />
      <circle cx="50" cy="35" r="2.5" fill="currentColor" stroke="none" />
      <circle cx="66" cy="35" r="2.5" fill="currentColor" stroke="none" />
    </svg>
  ),
  pushpin: (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="50" cy="34" r="22" fill="currentColor" fillOpacity="0.15" />
      <path d="M50 56v34M38 20l24 24M62 20L38 44" />
    </svg>
  ),
};

export type StickerName = keyof typeof stickers;

export default function Sticker({
  name,
  className = "",
  color = "text-electric",
}: {
  name: StickerName;
  className?: string;
  color?: string;
}) {
  return <div className={`${color} ${className}`}>{stickers[name]}</div>;
}
