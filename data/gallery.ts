// ─────────────────────────────────────────────────────────────
// GALLERY DATA — add a new object to add a new photo.
// `category` powers the filter buttons; `year` powers the
// year filters.
// ─────────────────────────────────────────────────────────────

export type GalleryCategory = "Workshops" | "Hackathons" | "Meetups" | "Projects" | "Fun";

export interface GalleryImage {
  id: string;
  src: string;
  caption: string;
  category: GalleryCategory;
  year: "2025" | "2026";
}

export const galleryImages: GalleryImage[] = [
  { id: "g1", src: "/images/gallery/placeholder-1.jpg", caption: "Git workshop, first-years", category: "Workshops", year: "2026" },
  { id: "g2", src: "/images/gallery/placeholder-2.jpg", caption: "Build-a-Bot Hackathon, hour 20", category: "Hackathons", year: "2026" },
  { id: "g3", src: "/images/gallery/placeholder-3.jpg", caption: "Open Source Friday", category: "Meetups", year: "2026" },
  { id: "g4", src: "/images/gallery/placeholder-4.jpg", caption: "Smart irrigation prototype", category: "Projects", year: "2026" },
  { id: "g5", src: "/images/gallery/placeholder-5.jpg", caption: "Potluck & Demo Night", category: "Fun", year: "2026" },
  { id: "g6", src: "/images/gallery/placeholder-6.jpg", caption: "CTF warmup, team huddle", category: "Hackathons", year: "2026" },
  { id: "g7", src: "/images/gallery/placeholder-7.jpg", caption: "First-ever meetup, 2025", category: "Meetups", year: "2025" },
  { id: "g8", src: "/images/gallery/placeholder-8.jpg", caption: "Weekend Arduino build", category: "Projects", year: "2025" },
  { id: "g9", src: "/images/gallery/placeholder-9.jpg", caption: "Whiteboard chaos", category: "Fun", year: "2025" },
  { id: "g10", src: "/images/gallery/placeholder-10.jpg", caption: "First workshop ever run", category: "Workshops", year: "2025" },
];
