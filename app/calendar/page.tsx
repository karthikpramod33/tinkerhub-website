import CalendarView from "@/components/CalendarView";
import ScrollReveal from "@/components/ScrollReveal";
import { calendarEvents } from "@/data/events";

export default function CalendarPage() {
  const now = new Date();
  const upcoming = calendarEvents
    .filter((e) => new Date(e.date) >= now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  const past = calendarEvents
    .filter((e) => new Date(e.date) < now)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <section className="px-5 pt-32 pb-24 max-w-5xl mx-auto">
      <ScrollReveal>
        <p className="font-mono text-xs uppercase tracking-wider text-cyan mb-3">
          what&apos;s next
        </p>
        <h1 className="font-display font-semibold text-4xl sm:text-5xl mb-4">Calendar</h1>
        <p className="text-muted max-w-lg mb-10">
          Everything on the community calendar — tap a dot for details.
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-[1fr_320px] gap-10">
        <ScrollReveal className="rounded-2xl border border-line bg-surface/40 p-6">
          <CalendarView />
        </ScrollReveal>

        <div className="flex flex-col gap-8">
          <div>
            <p className="font-mono text-xs uppercase text-muted mb-3">Upcoming</p>
            <ul className="flex flex-col gap-3">
              {upcoming.map((e) => (
                <li key={e.id} className="rounded-xl border border-line bg-surface p-4">
                  <p className="font-display font-medium">{e.title}</p>
                  <p className="text-xs text-muted font-mono mt-1">{e.date} · {e.time}</p>
                </li>
              ))}
              {upcoming.length === 0 && (
                <p className="text-muted text-sm">Nothing scheduled yet — check back soon.</p>
              )}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase text-muted mb-3">Past</p>
            <ul className="flex flex-col gap-3">
              {past.map((e) => (
                <li key={e.id} className="rounded-xl border border-line bg-surface/50 p-4 opacity-70">
                  <p className="font-display font-medium">{e.title}</p>
                  <p className="text-xs text-muted font-mono mt-1">{e.date}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
