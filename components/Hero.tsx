"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/data/config";
import Sticker from "./Sticker";

const bootLines = [
  "$ whoami",
  "> curious students",
  "$ status",
  "> 6 workshops live",
  "> 1 robot, mostly working",
];

function SideSticker({
  name,
  color,
  side,
}: {
  name: "star" | "speechBubble" | "spark" | "heart";
  color: string;
  side: "left" | "right";
}) {
  const [poked, setPoked] = useState(false);
  return (
    <button
      onClick={() => {
        setPoked(true);
        setTimeout(() => setPoked(false), 600);
      }}
      aria-label="sticker"
      className={`hidden md:flex absolute top-1/2 -translate-y-1/2 ${
        side === "left" ? "left-2 lg:left-8" : "right-2 lg:right-8"
      } w-20 h-20 lg:w-24 lg:h-24 items-center justify-center rounded-full bg-surface border-2 border-paper shadow-[4px_4px_0_0_#242233] ${
        poked ? "scale-125 rotate-12" : "animate-float"
      } transition-transform duration-300`}
      style={{ animationDelay: side === "left" ? "0.3s" : "1.2s" }}
    >
      <Sticker name={name} color={color} className="w-10 h-10 lg:w-12 lg:h-12" />
    </button>
  );
}

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    if (visibleLines >= bootLines.length) {
      const reset = setTimeout(() => setVisibleLines(0), 2600);
      return () => clearTimeout(reset);
    }
    const t = setTimeout(() => setVisibleLines((v) => v + 1), 480);
    return () => clearTimeout(t);
  }, [visibleLines]);

  return (
    <section className="relative overflow-hidden bg-tech-grid pt-36 pb-24 px-5">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-cream pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 25% 20%, rgba(236,127,176,0.14), transparent 70%), radial-gradient(ellipse 50% 40% at 85% 55%, rgba(92,184,219,0.14), transparent 70%), radial-gradient(ellipse 40% 35% at 55% 85%, rgba(167,139,250,0.12), transparent 70%)",
        }}
      />

      <SideSticker name="star" color="text-yellow" side="left" />
      <SideSticker name="speechBubble" color="text-violet" side="right" />

      <div className="relative max-w-3xl mx-auto text-center">
        <p className="font-mono text-xs uppercase tracking-wider text-cyan mb-4">
          {siteConfig.brandName}
        </p>
        <h1 className="font-display font-semibold text-4xl sm:text-5xl md:text-6xl leading-[1.05] mb-6 relative inline-block">
          {siteConfig.tagline}
          <Sticker name="arrowSquiggle" color="text-electric" className="hidden sm:block absolute -right-16 top-1 w-16 h-10" />
        </h1>
        <p className="text-muted text-lg max-w-md mx-auto mb-8 leading-relaxed">
          {siteConfig.subTagline}
        </p>
        <div className="flex flex-wrap justify-center gap-5 mb-10">
          <Link
            href="/activities"
            className="rounded-full bg-electric border-2 border-paper px-6 py-3 font-semibold text-paper shadow-[4px_4px_0_0_#242233] hover:shadow-[2px_2px_0_0_#242233] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            Explore Activities
          </Link>
          <Link
            href="/#join"
            className="rounded-full bg-surface border-2 border-paper px-6 py-3 font-semibold text-paper shadow-[4px_4px_0_0_#242233] hover:shadow-[2px_2px_0_0_#242233] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            Join the Community
          </Link>
        </div>

        {/* compact terminal strip */}
        <div className="inline-block rounded-lg border border-line bg-charcoal shadow-lg overflow-hidden text-left">
          <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/10 bg-black/20">
            <span className="w-2 h-2 rounded-full bg-[#FF5F56]" />
            <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
            <span className="w-2 h-2 rounded-full bg-[#27C93F]" />
            <span className="ml-2 font-mono text-[10px] text-cream/50">community.sh</span>
          </div>
          <div className="px-4 py-3 font-mono text-xs leading-5 w-72 h-24 overflow-hidden">
            {bootLines.slice(0, visibleLines).map((line, i) => (
              <div key={i} className={line.startsWith("$") ? "text-yellow" : "text-cream/70"}>
                {line}
              </div>
            ))}
            <span className="inline-block w-1.5 h-3 bg-yellow animate-blink align-middle" />
          </div>
        </div>
      </div>
    </section>
  );
}
