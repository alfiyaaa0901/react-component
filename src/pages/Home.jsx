import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import BentoGallery from "../components/BentoGallery";
import Testimonial from "../components/Testimonial";
import OurPromise from "../components/OurPromise";
import Newsletter from "../components/Newsletter";

function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Categories />
      <FeaturedProducts />
      <BentoGallery />
      <Testimonial />
      <OurPromise />
      <Newsletter />
    </>
  );
}

export default Home;