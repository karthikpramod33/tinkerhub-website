// ─────────────────────────────────────────────────────────────
// ACTIVITIES DATA — every workshop, hackathon, talk, etc.
// Add a new object to this array to add a new activity card.
// ─────────────────────────────────────────────────────────────

export type ActivityCategory =
  | "useless"
  | "chayem pappsum"
  | "Other";

export interface Activity {
  id: string;
  title: string;
  date: string; // e.g. "Mar 14, 2026"
  category: ActivityCategory;
  location: string;
  participants?: number;
  shortDescription: string;
  image: string;
  details: {
    time?: string;
    venue?: string;
    description: string;
    speakers?: string[];
    organizers?: string[];
    highlights?: string[];
    learned?: string[];
    projectsCreated?: string[];
    photos?: string[];
  };
}

export const activities: Activity[] = [
  {
    id: "act-1",
    title: "Useless 2.0",
    date: "Jan 18, 2026",
    category: "useless",
    location: "cc LAB",
    participants: 62,
    shortDescription:
      "A hands-on first push — branches, merge conflicts, and the panic of force-pushing to main.",
    image: "/images/activities/placeholder-1.jpg",
    details: {
      time: "3:00 PM – 5:30 PM",
      venue: "CS Seminar Hall, Block C",
      description:
        "First-years learned version control from scratch, made their first commits, and broke (then fixed) a merge conflict live on stage.",
      speakers: ["Rahul Nair"],
      organizers: ["TinkerHub Tech Team"],
      highlights: [
        "62 first-time GitHub accounts created",
        "Live merge-conflict simulation",
        "Everyone left with a public repo",
      ],
      learned: ["Git basics", "Branching", "Pull requests"],
      projectsCreated: ["62 personal portfolio repos"],
    },
  },
  
];
