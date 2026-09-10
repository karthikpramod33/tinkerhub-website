import Image from "next/image";
import Link from "next/link";
import type { TeamMember } from "@/data/team";

const accentBorders = ["border-electric", "border-cyan", "border-violet", "border-yellow"];

export default function TicketCard({ member, index }: { member: TeamMember; index: number }) {
  const rotate = ["-rotate-6", "-rotate-2", "rotate-2", "rotate-6"][index % 4];
  return (
    <Link
      href={`/team/${member.id}`}
      className={`relative block w-40 sm:w-44 bg-surface border-2 border-paper ${rotate} shadow-[5px_5px_0_0_#242233] hover:shadow-[2px_2px_0_0_#242233] hover:translate-x-[3px] hover:translate-y-[3px] hover:rotate-0 transition-all -ml-6 first:ml-0`}
      style={{ zIndex: index }}
    >
      <div className="p-2 pb-3">
        <div className={`relative w-full h-40 overflow-hidden border-2 ${accentBorders[index % 4]}`}>
          <Image src={member.photo} alt={member.name} fill sizes="176px" className="object-cover" />
        </div>
        <div className="border-t-2 border-dashed border-line my-2 relative">
          <span className="absolute -left-4 -top-2 w-3 h-3 rounded-full bg-cream border-2 border-paper" />
          <span className="absolute -right-4 -top-2 w-3 h-3 rounded-full bg-cream border-2 border-paper" />
        </div>
        <p className="font-display font-bold text-sm leading-tight">{member.name}</p>
        <p className="font-mono text-[10px] text-muted uppercase mt-0.5">{member.position}</p>
      </div>
    </Link>
  );
}
