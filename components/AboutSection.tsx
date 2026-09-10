import ScrollReveal from "./ScrollReveal";
import Sticker from "./Sticker";

export default function AboutSection() {
  return (
    <section id="about" className="px-5 py-24 max-w-4xl mx-auto relative">
      <ScrollReveal className="text-center mb-10">
        <p className="font-mono text-xs uppercase tracking-wider text-violet mb-3">
          what is this, exactly
        </p>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl">
          What TinkerHub is
        </h2>
      </ScrollReveal>

      <ScrollReveal className="relative">
        <Sticker name="pushpin" color="text-electric" className="hidden md:block absolute -left-20 top-4 w-14 h-14 animate-wiggle" />
        <Sticker name="bulb" color="text-yellow" className="hidden md:block absolute -right-20 top-1/3 w-14 h-14 animate-float" />
        <Sticker name="star" color="text-violet" className="hidden md:block absolute -left-16 bottom-6 w-9 h-9" />
        <Sticker name="spark" color="text-cyan" className="hidden md:block absolute -right-14 bottom-2 w-9 h-9 animate-wiggle" />

        <div className="rounded-3xl border-2 border-paper bg-surface p-8 sm:p-12 text-center shadow-[6px_6px_0_0_#242233]">
          <p className="text-lg sm:text-xl leading-relaxed text-paper/90">
            TinkerHub is a student-run community for people who&apos;d rather{" "}
            <span className="text-electric font-semibold">build</span> something broken
            than read about something finished. No instructors, no syllabus — just peer
            learning, open-source culture, and a shared habit of turning curiosity into
            actual projects. We&apos;d rather see your messy half-finished build than
            wait for a perfect one.
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}
