import Gallery from "@/components/Gallery";
import ScrollReveal from "@/components/ScrollReveal";
import Sticker from "@/components/Sticker";

export default function GalleryPage() {
  return (
    <section className="relative px-5 pt-32 pb-24 max-w-6xl mx-auto overflow-hidden">
      <Sticker name="pushpin" color="text-electric" className="hidden md:block absolute left-4 top-36 w-10 h-10 animate-wiggle" />
      <Sticker name="star" color="text-yellow" className="hidden md:block absolute right-8 top-40 w-9 h-9 animate-float" />
      <Sticker name="heart" color="text-violet" className="hidden md:block absolute right-4 bottom-10 w-8 h-8" />
      <ScrollReveal className="text-center">
        <p className="font-mono text-xs uppercase tracking-wider text-violet mb-3">
          receipts
        </p>
        <h1 className="font-hand text-6xl sm:text-7xl mb-4">Moments from the Community</h1>
        <p className="text-muted max-w-lg mx-auto mb-10">
          Workshops, hackathons, meetups, and the in-between moments that don&apos;t make it
          into any event report.
        </p>
      </ScrollReveal>
      <Gallery />
    </section>
  );
}
