import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import { team } from "@/data/team";

const rotations = ["-rotate-6", "rotate-4", "-rotate-3", "rotate-6"];
const dotColors = ["bg-electric", "bg-yellow", "bg-violet", "bg-cyan"];

export default function MeetTheCore() {
  const featured = team.filter((m) => m.tier === "lead" || m.tier === "core").slice(0, 4);

  return (
    <section className="px-5 py-24 max-w-5xl mx-auto text-center">
      <ScrollReveal>
        <p className="font-mono text-xs uppercase tracking-wider text-electric mb-3">
          the people behind it
        </p>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl mb-2">
          Meet the Core Team
        </h2>
        <p className="text-muted mb-14">Click a face to learn more about them.</p>
      </ScrollReveal>

      <div className="flex flex-wrap justify-center items-start gap-x-8 gap-y-12">
        {featured.map((member, i) => (
          <ScrollReveal key={member.id} delay={i * 100}>
            <Link
              href={`/team/${member.id}`}
              className={`relative block bg-surface border-2 border-paper p-2 pb-4 w-40 shadow-[5px_5px_0_0_#242233] hover:shadow-[2px_2px_0_0_#242233] hover:translate-x-[3px] hover:translate-y-[3px] transition-all ${rotations[i % rotations.length]}`}
            >
              <span className={`absolute -top-2 -right-2 w-4 h-4 rounded-full ${dotColors[i % dotColors.length]} border-2 border-paper`} />
              <div className="relative w-full h-44 overflow-hidden">
                <Image src={member.photo} alt={member.name} fill sizes="160px" className="object-cover grayscale-[20%]" />
              </div>
              <p className="font-display font-semibold text-sm mt-3 text-center">{member.name}</p>
              <p className="text-xs text-muted text-center">{member.position}</p>
            </Link>
          </ScrollReveal>
        ))}
      </div>

      <Link href="/team" className="inline-block mt-12 text-sm font-medium text-electric hover:text-violet">
        See the full team & volunteers →
      </Link>
    </section>
  );
}
