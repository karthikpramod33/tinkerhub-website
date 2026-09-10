import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import CommunityMoments from "@/components/CommunityMoments";
import AboutSection from "@/components/AboutSection";
import MeetTheCore from "@/components/MeetTheCore";
import BusTimeline from "@/components/BusTimeline";
import JoinSection from "@/components/JoinSection";
import { tickerPhrases } from "@/data/community";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee items={tickerPhrases} />
      <CommunityMoments />
      <AboutSection />
      <MeetTheCore />
      <BusTimeline />
      <JoinSection />
    </>
  );
}
