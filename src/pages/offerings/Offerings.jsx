import { NavBar } from "../../components/navbar/NavBar";
import React, { useEffect } from "react";
import OfferSection from "../../components/offeringsSection/OfferSection";
import QA from "../../components/qAndA/QA";
import Gallery from "../../components/pictureGallery/Gallery";
import "./Offerings.scss";

const Offerings = () => {
  return (
    <div>
      <section>
        <NavBar />
        <OfferSection />
      </section>
      <section className="gallery-section">
        <Gallery />
      </section>
      <section>
        <QA />
      </section>
      <section> Footer</section>
    </div>
  );
};
export default Offerings;
