"use client";

import { useMemo, useState } from "react";
import { calendarEvents, type CalendarEvent, type EventCategory } from "@/data/events";

const categoryDot: Record<EventCategory, string> = {
  Workshop: "bg-electric",
  Hackathon: "bg-violet",
  Meetup: "bg-cyan",
  Talk: "bg-yellow",
  "Community Session": "bg-electric",
};

const monthNames = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];

function toISODate(y: number, m: number, d: number) {
  return `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
}

export default function CalendarView() {
  const today = new Date();
  const [cursor, setCursor] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [selected, setSelected] = useState<CalendarEvent | null>(null);

  const year = cursor.getFullYear();
  const month = cursor.getMonth();

  const eventsByDate = useMemo(() => {
    const map: Record<string, CalendarEvent[]> = {};
    calendarEvents.forEach((e) => {
      map[e.date] = [...(map[e.date] || []), e];
    });
    return map;
  }, []);

  const firstWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells = [
    ...Array(firstWeekday).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => setCursor(new Date(year, month - 1, 1))}
          className="w-9 h-9 rounded-full border border-line text-muted hover:text-paper hover:border-electric flex items-center justify-center"
          aria-label="Previous month"
        >
          ←
        </button>
        <h3 className="font-display font-semibold text-xl">
          {monthNames[month]} {year}
        </h3>
        <button
          onClick={() => setCursor(new Date(year, month + 1, 1))}
          className="w-9 h-9 rounded-full border border-line text-muted hover:text-paper hover:border-electric flex items-center justify-center"
          aria-label="Next month"
        >
          →
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1.5 text-center text-xs font-mono text-muted mb-2">
        {["S","M","T","W","T","F","S"].map((d, i) => <div key={i}>{d}</div>)}
      </div>

      <div className="grid grid-cols-7 gap-1.5">
        {cells.map((day, i) => {
          if (!day) return <div key={i} />;
          const iso = toISODate(year, month, day);
          const dayEvents = eventsByDate[iso] || [];
          const isToday =
            iso === toISODate(today.getFullYear(), today.getMonth(), today.getDate());
          return (
            <div
              key={i}
              className={`relative aspect-square rounded-lg border p-1.5 flex flex-col ${
                isToday ? "border-electric" : "border-line"
              } ${dayEvents.length ? "bg-surface" : ""}`}
            >
              <span className={`text-xs font-mono ${isToday ? "text-electric" : "text-muted"}`}>
                {day}
              </span>
              <div className="flex flex-wrap gap-1 mt-auto">
                {dayEvents.slice(0, 3).map((e) => (
                  <button
                    key={e.id}
                    onClick={() => setSelected(e)}
                    className={`w-2 h-2 rounded-full ${categoryDot[e.category]}`}
                    aria-label={e.title}
                    title={e.title}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-wrap gap-4 mt-6 text-xs text-muted font-mono">
        {Object.entries(categoryDot).map(([cat, color]) => (
          <span key={cat} className="flex items-center gap-1.5">
            <span className={`w-2 h-2 rounded-full ${color}`} /> {cat}
          </span>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[100] bg-charcoal/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="w-full max-w-sm bg-surface border border-line rounded-2xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="font-mono text-xs text-cyan">{selected.category}</span>
            <h4 className="font-display font-semibold text-xl mt-1 mb-3">{selected.title}</h4>
            <p className="text-sm text-muted font-mono mb-3">
              {selected.date} · {selected.time} · {selected.venue}
            </p>
            <p className="text-paper/90 text-sm leading-relaxed mb-4">{selected.description}</p>
            <button
              onClick={() => setSelected(null)}
              className="text-sm text-electric hover:text-cyan"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
