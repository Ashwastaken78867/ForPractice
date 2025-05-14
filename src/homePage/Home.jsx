import Footer from "../Footer";
import HeroSection from "./HeroSection";
import HeroSection2 from "./HeroSection2";
import HeroSection3 from "./Herosection3";
import HeroSection4 from "./HeroSection4";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <HeroSection2 />
                <HeroSection3 />
                                <HeroSection4 />
                                <Footer />


      </main>
    </>
  );
}
export default Home