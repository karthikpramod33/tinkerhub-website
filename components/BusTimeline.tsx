"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import BusIcon from "./BusIcon";
import { timeline } from "@/data/community";

const busColors = ["#EC7FB0", "#5CB8DB", "#A78BFA", "#F2C94C", "#6FB37E"];

export default function BusTimeline() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="px-5 py-24 max-w-3xl mx-auto">
      <ScrollReveal className="text-center mb-14">
        <p className="font-mono text-xs uppercase tracking-wider text-cyan mb-3">
          our college community
        </p>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl">How we got here</h2>
        <p className="text-muted mt-2">Tap a bus to see what happened.</p>
      </ScrollReveal>

      <div className="flex flex-col gap-8">
        {timeline.map((item, i) => (
          <button
            key={item.title}
            onClick={() => setActive(i)}
            className="bus-drive-in flex items-center gap-4 text-left group"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <div className="w-28 sm:w-32 shrink-0 group-hover:-translate-y-1 transition-transform">
              <BusIcon color={busColors[i % busColors.length]} />
            </div>
            <div>
              <p className="font-mono text-xs text-muted">{item.year}</p>
              <p className="font-display font-semibold text-lg group-hover:text-electric transition-colors">
                {item.title}
              </p>
            </div>
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[100] bg-charcoal/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="w-full max-w-sm bg-surface border-2 border-paper rounded-2xl p-6 shadow-[6px_6px_0_0_#242233]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-24 mb-4">
              <BusIcon color={busColors[active % busColors.length]} />
            </div>
            <p className="font-mono text-xs text-violet mb-1">{timeline[active].year}</p>
            <h3 className="font-display font-semibold text-xl mb-3">{timeline[active].title}</h3>
            <p className="text-paper/90 leading-relaxed mb-5">{timeline[active].body}</p>
            <button onClick={() => setActive(null)} className="text-sm text-electric hover:text-violet">
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
