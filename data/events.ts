// ─────────────────────────────────────────────────────────────
// CALENDAR EVENTS — upcoming & past. `date` must be an ISO
// string ("YYYY-MM-DD") so the calendar can place it correctly.
// ─────────────────────────────────────────────────────────────

export type EventCategory =
  | "Workshop"
  | "Hackathon"
  | "Meetup"
  | "Talk"
  | "Community Session";

export interface CalendarEvent {
  id: string;
  title: string;
  date: string; // ISO: YYYY-MM-DD
  time: string;
  venue: string;
  category: EventCategory;
  description: string;
  link?: string;
}

export const calendarEvents: CalendarEvent[] = [
  {
    id: "ce-1",
    title: "React Basics Workshop",
    date: "2026-09-12",
    time: "4:00 PM",
    venue: "CS Seminar Hall",
    category: "Workshop",
    description: "From zero to a working to-do app, in one sitting.",
  },
  {
    id: "ce-2",
    title: "Monthly Community Meetup",
    date: "2026-09-19",
    time: "5:30 PM",
    venue: "TinkerHub Room",
    category: "Meetup",
    description: "Show-and-tell, snacks, and planning next month's events.",
  },
  {
    id: "ce-3",
    title: "IoT Weekend Hackathon",
    date: "2026-10-03",
    time: "9:00 AM",
    venue: "Innovation Lab",
    category: "Hackathon",
    description: "48 hours to build something that talks to the internet.",
  },
  {
    id: "ce-4",
    title: "Guest Talk: Careers in Open Source",
    date: "2026-10-15",
    time: "3:00 PM",
    venue: "Auditorium",
    category: "Talk",
    description: "A maintainer of a popular OSS project shares their path.",
  },
  {
    id: "ce-5",
    title: "Beginner-Friendly DSA Session",
    date: "2026-08-14",
    time: "4:00 PM",
    venue: "Computer Lab 1",
    category: "Community Session",
    description: "Weekly problem-solving session — past event, see recap in Activities.",
  },
];
