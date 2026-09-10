import TeamNetwork from "@/components/TeamNetwork";
import TicketCard from "@/components/TicketCard";
import ScrollReveal from "@/components/ScrollReveal";
import Sticker from "@/components/Sticker";
import { team } from "@/data/team";

export default function TeamPage() {
  const core = team.filter((m) => m.tier === "lead" || m.tier === "core");

  return (
    <section className="relative px-5 pt-32 pb-24 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 15% 15%, rgba(236,127,176,0.16), transparent 70%), radial-gradient(ellipse 45% 35% at 85% 25%, rgba(92,184,219,0.16), transparent 70%), radial-gradient(ellipse 40% 40% at 50% 90%, rgba(167,139,250,0.14), transparent 70%)",
        }}
      />
      <div className="relative max-w-5xl mx-auto">
        <Sticker name="spark" color="text-electric" className="hidden md:block absolute -left-4 top-0 w-11 h-11 animate-wiggle" />
        <Sticker name="speechBubble" color="text-cyan" className="hidden md:block absolute right-0 top-4 w-12 h-9" />
        <ScrollReveal>
          <p className="font-mono text-xs uppercase tracking-wider text-cyan mb-3">
            who&apos;s behind this
          </p>
          <h1 className="font-display font-semibold text-4xl sm:text-5xl mb-4">
            Core Team &amp; Volunteers
          </h1>
          <p className="text-muted max-w-lg mb-14">
            The team changes every year — that&apos;s by design. This is who&apos;s running
            things right now.
          </p>
        </ScrollReveal>

        <ScrollReveal className="flex justify-center flex-wrap gap-y-10 mb-20 pl-6">
          {core.map((member, i) => (
            <TicketCard key={member.id} member={member} index={i} />
          ))}
        </ScrollReveal>

        <ScrollReveal>
          <p className="font-mono text-xs uppercase tracking-wider text-violet mb-4 text-center">
            the full network
          </p>
          <TeamNetwork />
        </ScrollReveal>
      </div>
    </section>
  );
}
