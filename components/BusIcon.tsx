export default function BusIcon({ color = "#EC7FB0" }: { color?: string }) {
  return (
    <svg viewBox="0 0 140 70" width="100%" height="100%">
      <rect x="4" y="14" width="122" height="38" rx="10" fill={color} />
      <rect x="14" y="22" width="22" height="16" rx="3" fill="white" fillOpacity="0.85" />
      <rect x="42" y="22" width="22" height="16" rx="3" fill="white" fillOpacity="0.85" />
      <rect x="70" y="22" width="22" height="16" rx="3" fill="white" fillOpacity="0.85" />
      <rect x="98" y="22" width="18" height="16" rx="3" fill="white" fillOpacity="0.85" />
      <rect x="4" y="46" width="122" height="8" fill="#242233" fillOpacity="0.15" />
      <circle cx="30" cy="58" r="9" fill="#242233" />
      <circle cx="30" cy="58" r="3.5" fill="#F4F3FA" />
      <circle cx="100" cy="58" r="9" fill="#242233" />
      <circle cx="100" cy="58" r="3.5" fill="#F4F3FA" />
    </svg>
  );
}
