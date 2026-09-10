"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import Sticker from "@/components/Sticker";
import { makers } from "@/data/makers";

export default function MakersPage() {
  const years = useMemo(
    () => Array.from(new Set(makers.map((m) => m.year))).sort((a, b) => Number(b) - Number(a)),
    []
  );
  const [active, setActive] = useState(years[0]);

  const filtered = makers.filter((m) => m.year === active);

  return (
    <section className="px-5 pt-32 pb-24 max-w-6xl mx-auto">
      <ScrollReveal>
        <p className="font-mono text-xs uppercase tracking-wider text-violet mb-3">
          every batch, one community
        </p>
        <h1 className="font-display font-semibold text-4xl sm:text-5xl mb-4 relative inline-block">
          Makers of TinkerHub
          <Sticker name="yay" color="text-electric" className="hidden sm:block absolute -right-16 -top-6 w-14 h-14" />
        </h1>
        <p className="text-muted max-w-lg mb-10">
          Everyone who has built, mentored, organized, or shown up — sorted by the year
          they joined the community.
        </p>
      </ScrollReveal>

      <div className="flex flex-wrap gap-2 mb-10">
        {years.map((y) => (
          <button
            key={y}
            onClick={() => setActive(y)}
            className={`text-sm font-mono px-4 py-1.5 rounded-full border transition-colors ${
              active === y
                ? "bg-electric text-paper border-electric"
                : "border-line text-muted hover:text-paper hover:border-electric/50"
            }`}
          >
            {y}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
        {filtered.map((m, i) => (
          <ScrollReveal key={m.id} delay={i * 60}>
            <div className="tilt-card rounded-2xl border border-line bg-surface p-4 text-center">
              <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-electric/50 mb-3">
                <Image src={m.photo} alt={m.name} fill sizes="80px" className="object-cover" />
              </div>
              <p className="font-display font-semibold">{m.name}</p>
              <p className="text-xs font-mono text-cyan mt-1">{m.role}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-muted text-center py-16">No makers added for this year yet.</p>
      )}

      <p className="text-muted text-xs font-mono mt-10 text-center">
        // add new people or new years in data/makers.ts
      </p>
    </section>
  );
}
