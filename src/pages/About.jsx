import AnnouncementStrip from "../components/AnnouncementStrip";
import Navbar from "../components/Navbar";
import AboutHero from "../components/AboutHero";
import StorySection from "../components/StorySection";
import ValuesSection from "../components/ValuesSection";
import StudioGallery from "../components/StudioGallery";
import ProcessSection from "../components/ProcessSection";
import TeamSection from "../components/TeamSection";
import AboutQuote from "../components/AboutQuote";
import AboutCTA from "../components/AboutCTA";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <AnnouncementStrip />
      <Navbar />

      <AboutHero />
      <StorySection />
      <ValuesSection />
      <StudioGallery />
      <ProcessSection />
      <TeamSection />
      <AboutQuote />
      <AboutCTA />

      <Footer />
    </>
  );
}

export default About;