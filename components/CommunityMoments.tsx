import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { momentsPhotos } from "@/data/community";

export default function CommunityMoments() {
  return (
    <section className="px-5 py-24 max-w-5xl mx-auto">
      <ScrollReveal className="text-center mb-6">
        <p className="font-mono text-xs uppercase tracking-wider text-cyan mb-2">
          around campus
        </p>
        <h2 className="font-hand text-5xl sm:text-6xl text-paper">
          the moments of <span className="text-electric">2026</span>
        </h2>
      </ScrollReveal>

      <div className="relative flex flex-wrap justify-center items-center gap-6 sm:gap-4 py-10">
        {momentsPhotos.map((photo, i) => (
          <ScrollReveal
            key={photo.src}
            delay={i * 90}
            className={`relative bg-surface border-4 border-paper p-2 pb-6 shadow-[6px_6px_0_0_#242233] ${photo.rotate} ${photo.size} hover:rotate-0 hover:scale-105 transition-transform duration-300`}
          >
            <div className="relative w-full h-full overflow-hidden">
              <Image src={photo.src} alt={photo.caption} fill sizes="220px" className="object-cover grayscale-[30%]" />
            </div>
            <p className="font-hand text-lg text-center absolute bottom-0 left-0 right-0 text-paper">
              {photo.caption}
            </p>
          </ScrollReveal>
        ))}
      </div>

      <p className="text-muted text-xs font-mono text-center">
        // swap these placeholders for real community photos in data/community.ts (momentsPhotos)
      </p>
    </section>
  );
}
