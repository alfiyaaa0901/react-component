
import ShopLayout from "../components/ShopLayout";
import Breadcrumb from "../components/Breadcrumb";
import ShopHero from "../components/ShopHero";
import AnnouncementStrip from "../components/AnnouncementStrip";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function Shop() {
  return (
    <>
      <AnnouncementStrip />

      <Navbar />

      <ShopHero />

      <Breadcrumb />

      <ShopLayout />

      <Newsletter />

      <Footer />
    </>
  );
}

export default Shop;