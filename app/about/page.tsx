import ScrollReveal from "@/components/ScrollReveal";
import AboutSection from "@/components/AboutSection";
import BusTimeline from "@/components/BusTimeline";
import { siteConfig } from "@/data/config";

export default function AboutPage() {
  return (
    <>
      <section className="px-5 pt-32 pb-10 max-w-4xl mx-auto">
        <ScrollReveal>
          <p className="font-mono text-xs uppercase tracking-wider text-violet mb-3">
            the college part
          </p>
          <h1 className="font-display font-semibold text-4xl sm:text-5xl mb-6">
            {siteConfig.collegeName}
          </h1>
          <p className="text-muted leading-relaxed max-w-2xl mb-4">
            {siteConfig.communityName} runs as an independent student community based at{" "}
            {siteConfig.collegeName}. We&apos;re open to students from every department —
            you don&apos;t need to be a computer science major, just curious.
          </p>
          <a
            href={siteConfig.aboutCollegeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-electric hover:text-cyan text-sm font-medium"
          >
            Visit the official college website →
          </a>
        </ScrollReveal>
      </section>

      <AboutSection />
      <BusTimeline />
    </>
  );
}
