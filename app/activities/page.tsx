"use client";

import { useMemo, useState } from "react";
import ActivityCard from "@/components/ActivityCard";
import ActivityModal from "@/components/ActivityModal";
import ScrollReveal from "@/components/ScrollReveal";
import { activities, type Activity, type ActivityCategory } from "@/data/activities";

const categories: ("All" | ActivityCategory)[] = [
  "All",
  "Workshop",
  "Hackathon",
  "Talk",
  "Meetup",
  "Project",
  "Community Event",
  "Competition",
  "Open Source",
  "Other",
];

export default function ActivitiesPage() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const [selected, setSelected] = useState<Activity | null>(null);

  const filtered = useMemo(
    () => (filter === "All" ? activities : activities.filter((a) => a.category === filter)),
    [filter]
  );

  return (
    <section className="px-5 pt-32 pb-24 max-w-6xl mx-auto">
      <ScrollReveal>
        <p className="font-mono text-xs uppercase tracking-wider text-cyan mb-3">
          what we&apos;ve run
        </p>
        <h1 className="font-display font-semibold text-4xl sm:text-5xl mb-4">Activities</h1>
        <p className="text-muted max-w-lg mb-10">
          Workshops, hackathons, talks and everything else we&apos;ve organized — with the
          people, projects and takeaways behind each one.
        </p>
      </ScrollReveal>

      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`text-sm font-mono px-3.5 py-1.5 rounded-full border transition-colors ${
              filter === c
                ? "bg-electric text-paper border-electric"
                : "border-line text-muted hover:text-paper hover:border-electric/50"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {filtered.map((a, i) => (
          <ScrollReveal key={a.id} delay={(i % 6) * 60}>
            <ActivityCard activity={a} onOpen={setSelected} />
          </ScrollReveal>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-muted text-center py-16">No activities in this category yet.</p>
      )}

      <ActivityModal activity={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
