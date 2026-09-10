export default function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-line bg-surface2 py-4">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {loop.map((item, i) => (
          <span
            key={i}
            className="font-display font-semibold text-lg sm:text-xl text-paper/80 flex items-center gap-10"
          >
            {item}
            <span className="text-yellow">★</span>
          </span>
        ))}
      </div>
    </div>
  );
}
