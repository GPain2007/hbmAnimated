import { NavBar } from "../../components/navbar/NavBar";
import React, { useEffect } from "react";
import OfferSection from "../../components/offeringsSection/OfferSection";

const Offerings = () => {
  return (
    <div>
      <section>
        <NavBar />
        <OfferSection />
      </section>
      <section> Footer</section>
    </div>
  );
};
export default Offerings;
