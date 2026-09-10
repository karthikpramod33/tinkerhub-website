import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { team } from "@/data/team";

export function generateStaticParams() {
  return team.map((m) => ({ id: m.id }));
}

export default function MemberDetailPage({ params }: { params: { id: string } }) {
  const member = team.find((m) => m.id === params.id);
  if (!member) return notFound();

  return (
    <section className="px-5 pt-32 pb-24 max-w-2xl mx-auto">
      <Link href="/team" className="text-sm text-electric hover:text-violet mb-8 inline-block">
        ← Back to team
      </Link>

      <div className="rounded-3xl border-2 border-paper bg-surface p-8 sm:p-10 shadow-[6px_6px_0_0_#242233] text-center">
        <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-electric mb-5">
          <Image src={member.photo} alt={member.name} fill sizes="128px" className="object-cover" />
        </div>
        <h1 className="font-display font-semibold text-3xl mb-1">{member.name}</h1>
        <p className="text-cyan font-mono text-sm mb-6">{member.position}</p>
        <p className="text-paper/90 leading-relaxed max-w-md mx-auto mb-6">{member.bio}</p>

        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {member.skills.map((s) => (
            <span key={s} className="text-xs font-mono px-3 py-1 rounded-full bg-surface2 border border-line text-paper/80">
              {s}
            </span>
          ))}
        </div>

        {member.links && (
          <div className="flex justify-center gap-4 text-sm">
            {member.links.github && (
              <a href={member.links.github} target="_blank" rel="noopener noreferrer" className="text-electric hover:text-violet">
                GitHub
              </a>
            )}
            {member.links.linkedin && (
              <a href={member.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-electric hover:text-violet">
                LinkedIn
              </a>
            )}
            {member.links.instagram && (
              <a href={member.links.instagram} target="_blank" rel="noopener noreferrer" className="text-electric hover:text-violet">
                Instagram
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
