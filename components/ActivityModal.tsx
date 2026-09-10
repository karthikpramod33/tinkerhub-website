"use client";

import Image from "next/image";
import { useEffect } from "react";
import type { Activity } from "@/data/activities";

export default function ActivityModal({
  activity,
  onClose,
}: {
  activity: Activity | null;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = activity ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activity, onClose]);

  if (!activity) return null;
  const d = activity.details;

  return (
    <div
      className="fixed inset-0 z-[100] bg-charcoal/80 backdrop-blur-sm flex items-start sm:items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-surface border border-line rounded-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-56">
          <Image src={activity.image} alt={activity.title} fill className="object-cover" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-charcoal/70 border border-line flex items-center justify-center text-cream hover:text-yellow"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="p-6 sm:p-8">
          <span className="font-mono text-xs text-cyan">{activity.category}</span>
          <h2 className="font-display font-semibold text-2xl sm:text-3xl mt-1 mb-3">
            {activity.title}
          </h2>

          <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted font-mono mb-6">
            <span>{activity.date}</span>
            {d.time && <span>{d.time}</span>}
            <span>{d.venue || activity.location}</span>
          </div>

          <p className="text-paper/90 leading-relaxed mb-6">{d.description}</p>

          <div className="grid sm:grid-cols-2 gap-6 text-sm">
            {d.speakers && d.speakers.length > 0 && (
              <div>
                <p className="font-mono text-xs uppercase text-muted mb-2">Speakers / Mentors</p>
                <ul className="text-paper/90 space-y-1">
                  {d.speakers.map((s) => <li key={s}>{s}</li>)}
                </ul>
              </div>
            )}
            {d.organizers && d.organizers.length > 0 && (
              <div>
                <p className="font-mono text-xs uppercase text-muted mb-2">Organizers</p>
                <ul className="text-paper/90 space-y-1">
                  {d.organizers.map((o) => <li key={o}>{o}</li>)}
                </ul>
              </div>
            )}
            {d.highlights && d.highlights.length > 0 && (
              <div>
                <p className="font-mono text-xs uppercase text-muted mb-2">Highlights</p>
                <ul className="text-paper/90 space-y-1">
                  {d.highlights.map((h) => <li key={h}>• {h}</li>)}
                </ul>
              </div>
            )}
            {d.learned && d.learned.length > 0 && (
              <div>
                <p className="font-mono text-xs uppercase text-muted mb-2">What Students Learned</p>
                <ul className="text-paper/90 space-y-1">
                  {d.learned.map((l) => <li key={l}>• {l}</li>)}
                </ul>
              </div>
            )}
            {d.projectsCreated && d.projectsCreated.length > 0 && (
              <div className="sm:col-span-2">
                <p className="font-mono text-xs uppercase text-muted mb-2">Projects Created</p>
                <ul className="text-paper/90 space-y-1">
                  {d.projectsCreated.map((p) => <li key={p}>• {p}</li>)}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
