import { NavBar } from "../../components/navbar/NavBar";
import { useEffect, useState } from "react";
import OfferSection from "../../components/offeringsSection/OfferSection";
import QA from "../../components/qAndA/QA";
import Gallery from "../../components/pictureGallery/Gallery";
import Footer from "../../components/footer/Footer";
import "./Offerings.scss";

const Offerings = () => {
  const [isFullWidth, setIsFullWidth] = useState(window.innerWidth >= 768); // Adjust breakpoint as needed (768px is common for tablets)

  useEffect(() => {
    const handleResize = () => setIsFullWidth(window.innerWidth >= 768);

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div>
      <section>
        <NavBar />
        <OfferSection />
      </section>
      {isFullWidth && (
        <section className="gallery-section">
          <Gallery />
        </section>
      )}
      <section>
        <QA />
      </section>
      <section>
        {" "}
        <Footer />
      </section>
    </div>
  );
};
export default Offerings;
