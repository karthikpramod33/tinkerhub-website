import ScrollReveal from "./ScrollReveal";
import { siteConfig } from "@/data/config";

export default function JoinSection() {
  return (
    <section id="join" className="relative px-5 py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/campus-placeholder.jpg)" }}
      />
      <div className="absolute inset-0 bg-cream/85" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 40%, rgba(236,127,176,0.20), transparent 70%)",
        }}
      />
      <div className="relative max-w-2xl mx-auto text-center">
        <ScrollReveal>
          <p className="font-mono text-xs uppercase tracking-wider text-cyan mb-4">
            one last thing
          </p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl mb-4">
            Want to learn, build and experiment with us?
          </h2>
          <p className="text-muted text-lg mb-9">
            Join the official {siteConfig.communityName} community and get started —
            no experience required, just curiosity.
          </p>
          <a
            href={siteConfig.officialTinkerHubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-electric border-2 border-paper px-7 py-3.5 font-semibold text-paper shadow-[4px_4px_0_0_#242233] hover:shadow-[2px_2px_0_0_#242233] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            Join {siteConfig.communityName}
          </a>
          <p className="text-muted text-xs font-mono mt-4">
            // update siteConfig.officialTinkerHubUrl in data/config.ts
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
