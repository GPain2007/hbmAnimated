import { NavBar } from "../../components/navbar/NavBar";
import React, { useEffect } from "react";
import OfferSection from "../../components/offeringsSection/OfferSection";
import QA from "../../components/qAndA/QA";

const Offerings = () => {
  return (
    <div>
      <section>
        <NavBar />
        <OfferSection />
      </section>
      <section>
        <QA />
      </section>
      <section> Footer</section>
    </div>
  );
};
export default Offerings;
