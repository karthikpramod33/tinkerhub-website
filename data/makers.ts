// ─────────────────────────────────────────────────────────────
// MAKERS DATA — every member who has been part of TinkerHub,
// organized by the year they joined. Add a new object to add
// a new person; add a new `year` value and they'll automatically
// get their own section on the Makers page.
// ─────────────────────────────────────────────────────────────

export interface Maker {
  id: string;
  name: string;
  year: string; // e.g. "2026"
  role: string;
  photo: string;
}

export const makers: Maker[] = [
  // 2026
  { id: "m26-1", name: "Aditi Menon", year: "2026", role: "Community Lead", photo: "/images/team/placeholder-1.jpg" },
  { id: "m26-2", name: "Rahul Nair", year: "2026", role: "Tech Lead", photo: "/images/team/placeholder-2.jpg" },
  { id: "m26-3", name: "Sara Thomas", year: "2026", role: "Events Lead", photo: "/images/team/placeholder-3.jpg" },
  { id: "m26-4", name: "Vikram Das", year: "2026", role: "Community Lead", photo: "/images/team/placeholder-4.jpg" },
  { id: "m26-5", name: "Meera Pillai", year: "2026", role: "Volunteer", photo: "/images/team/placeholder-5.jpg" },
  { id: "m26-6", name: "Arjun Kumar", year: "2026", role: "Volunteer", photo: "/images/team/placeholder-6.jpg" },

  // 2025
  { id: "m25-1", name: "Fathima Rasheed", year: "2025", role: "Community Lead", photo: "/images/team/placeholder-7.jpg" },
  { id: "m25-2", name: "Kiran Suresh", year: "2025", role: "Tech Lead", photo: "/images/team/placeholder-8.jpg" },
  { id: "m25-3", name: "Anjali Krishnan", year: "2025", role: "Volunteer", photo: "/images/team/placeholder-1.jpg" },
  { id: "m25-4", name: "Mohammed Sinan", year: "2025", role: "Volunteer", photo: "/images/team/placeholder-2.jpg" },

  // 2024
  { id: "m24-1", name: "Divya Raj", year: "2024", role: "Founding Member", photo: "/images/team/placeholder-3.jpg" },
  { id: "m24-2", name: "Aravind PS", year: "2024", role: "Founding Member", photo: "/images/team/placeholder-4.jpg" },
  { id: "m24-3", name: "Sneha Varghese", year: "2024", role: "Founding Member", photo: "/images/team/placeholder-5.jpg" },
];
