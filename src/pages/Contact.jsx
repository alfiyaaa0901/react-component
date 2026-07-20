import AnnouncementStrip from "../components/AnnouncementStrip";
import Navbar from "../components/Navbar";
import ContactHero from "../components/ContactHero";
import ContactLayout from "../components/ContactLayout";
import FAQSection from "../components/FAQSection";
import MapSection from "../components/MapSection";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <AnnouncementStrip />

      <Navbar />

      <ContactHero />

      <ContactLayout />

      <FAQSection />

      <MapSection />

      <Newsletter />

      <Footer />
    </>
  );
}

export default Contact;