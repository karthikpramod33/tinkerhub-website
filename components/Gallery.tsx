"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { galleryImages, type GalleryImage } from "@/data/gallery";

const filters = ["All", "Workshops", "Hackathons", "Meetups", "Projects", "Fun", "2026", "2025"];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

  const filtered = useMemo(() => {
    if (active === "All") return galleryImages;
    if (active === "2026" || active === "2025") {
      return galleryImages.filter((g) => g.year === active);
    }
    return galleryImages.filter((g) => g.category === active);
  }, [active]);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`text-sm font-mono px-3.5 py-1.5 rounded-full border transition-colors ${
              active === f
                ? "bg-electric text-paper border-electric"
                : "border-line text-muted hover:text-paper hover:border-electric/50"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-6 py-4">
        {filtered.map((img, i) => {
          const rotations = ["-rotate-6", "rotate-3", "-rotate-2", "rotate-6", "-rotate-3", "rotate-2"];
          return (
            <button
              key={img.id}
              onClick={() => setLightbox(img)}
              className={`relative bg-surface border-2 border-paper p-2 pb-6 w-40 h-52 shadow-[5px_5px_0_0_#242233] hover:shadow-[2px_2px_0_0_#242233] hover:translate-x-[3px] hover:translate-y-[3px] hover:rotate-0 transition-all ${rotations[i % rotations.length]}`}
            >
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.caption}
                  fill
                  sizes="200px"
                  className="object-cover"
                />
              </div>
              <p className="font-hand text-lg text-center absolute bottom-0 left-0 right-0 text-paper truncate px-1">
                {img.caption}
              </p>
            </button>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <p className="text-muted text-center py-16">No photos in this filter yet.</p>
      )}

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-charcoal/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 w-10 h-10 rounded-full border border-line text-cream hover:text-yellow flex items-center justify-center"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            ✕
          </button>
          <div className="relative w-full max-w-3xl max-h-[80vh] aspect-[4/3]" onClick={(e) => e.stopPropagation()}>
            <Image src={lightbox.src} alt={lightbox.caption} fill className="object-contain" />
          </div>
          <p className="absolute bottom-6 text-cream/90 text-sm font-mono">{lightbox.caption}</p>
        </div>
      )}
    </div>
  );
}
