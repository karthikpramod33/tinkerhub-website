import Image from "next/image";
import type { Activity } from "@/data/activities";

const categoryColor: Record<string, string> = {
  Workshop: "text-electric border-electric/40",
  Hackathon: "text-violet border-violet/40",
  Talk: "text-yellow border-yellow/40",
  Meetup: "text-electric border-electric/40",
  Project: "text-violet border-violet/40",
  "Community Event": "text-cyan border-cyan/40",
  Competition: "text-yellow border-yellow/40",
  "Open Source": "text-violet border-violet/40",
  Other: "text-muted border-line",
};

export default function ActivityCard({
  activity,
  onOpen,
}: {
  activity: Activity;
  onOpen: (a: Activity) => void;
}) {
  return (
    <div className="tilt-card rounded-2xl border border-line bg-surface overflow-hidden flex flex-col h-full">
      <div className="relative w-full h-44">
        <Image src={activity.image} alt={activity.title} fill sizes="400px" className="object-cover" />
        <span
          className={`absolute top-3 left-3 text-xs font-mono px-2 py-1 rounded-md bg-charcoal/80 border ${categoryColor[activity.category]}`}
        >
          {activity.category}
        </span>
      </div>
      <div className="p-5 flex flex-col gap-2 flex-1">
        <p className="font-mono text-xs text-muted">{activity.date} · {activity.location}</p>
        <h3 className="font-display font-semibold text-lg">{activity.title}</h3>
        <p className="text-muted text-sm leading-relaxed flex-1">{activity.shortDescription}</p>
        <div className="flex items-center justify-between pt-3">
          {activity.participants && (
            <span className="text-xs text-cyan font-mono">{activity.participants} attended</span>
          )}
          <button
            onClick={() => onOpen(activity)}
            className="ml-auto text-sm font-medium text-electric hover:text-cyan transition-colors"
          >
            View Details →
          </button>
        </div>
      </div>
    </div>
  );
}
