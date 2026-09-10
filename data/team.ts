// ─────────────────────────────────────────────────────────────
// TEAM DATA — add/remove people here. The network graph in
// components/TeamNetwork.tsx reads this list and lays itself
// out automatically by `tier`.
// ─────────────────────────────────────────────────────────────

export type Tier = "lead" | "core" | "volunteer";

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  tier: Tier;
  branch?: "tech" | "events" | "community" | "design" | "core"; // grouping for layout
  bio: string;
  skills: string[];
  photo: string; // path in /public/images/team/
  links?: { github?: string; linkedin?: string; instagram?: string };
}

export const team: TeamMember[] = [
  {
    id: "lead-1",
    name: "Aditi Menon",
    position: "Community Lead",
    tier: "lead",
    branch: "core",
    bio: "Keeps the chaos organized. Started this chapter with three people and a WhatsApp group.",
    skills: ["Leadership", "Product", "Public Speaking"],
    photo: "/images/team/placeholder-1.jpg",
    links: { linkedin: "#", github: "#" },
  },
  {
    id: "core-tech",
    name: "Rahul Nair",
    position: "Tech Lead",
    tier: "core",
    branch: "tech",
    bio: "Breaks things on purpose to learn how they work. Runs the workshop pipeline.",
    skills: ["Web Dev", "Embedded Systems", "Mentoring"],
    photo: "/images/team/placeholder-2.jpg",
    links: { github: "#" },
  },
  {
    id: "core-events",
    name: "Sara Thomas",
    position: "Events Lead",
    tier: "core",
    branch: "events",
    bio: "Turns 'we should do a hackathon' into an actual hackathon with sponsors and pizza.",
    skills: ["Event Ops", "Sponsorship", "Logistics"],
    photo: "/images/team/placeholder-3.jpg",
    links: { instagram: "#" },
  },
  {
    id: "core-community",
    name: "Vikram Das",
    position: "Community Lead",
    tier: "core",
    branch: "community",
    bio: "Knows everyone's name and half their GitHub usernames. Runs onboarding.",
    skills: ["Community Building", "Content", "Outreach"],
    photo: "/images/team/placeholder-4.jpg",
    links: { linkedin: "#" },
  },
  {
    id: "vol-1",
    name: "Meera Pillai",
    position: "Volunteer — Design",
    tier: "volunteer",
    branch: "design",
    bio: "Designs the posters nobody reads until the day of the event.",
    skills: ["UI Design", "Illustration"],
    photo: "/images/team/placeholder-5.jpg",
  },
  {
    id: "vol-2",
    name: "Arjun Kumar",
    position: "Volunteer — Tech",
    tier: "volunteer",
    branch: "tech",
    bio: "First to arrive, last to leave, always debugging someone's laptop.",
    skills: ["Python", "Hardware"],
    photo: "/images/team/placeholder-6.jpg",
  },
  {
    id: "vol-3",
    name: "Devika Suresh",
    position: "Volunteer — Events",
    tier: "volunteer",
    branch: "events",
    bio: "Manages the check-in desk and somehow never runs out of energy.",
    skills: ["Coordination", "Photography"],
    photo: "/images/team/placeholder-7.jpg",
  },
  {
    id: "vol-4",
    name: "Nikhil Varma",
    position: "Volunteer — Community",
    tier: "volunteer",
    branch: "community",
    bio: "Replies to every question in the group chat within five minutes.",
    skills: ["Community Support", "Discord"],
    photo: "/images/team/placeholder-8.jpg",
  },
];
