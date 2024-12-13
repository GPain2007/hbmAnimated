import { NavBar } from "../../components/navbar/NavBar";

import OfferSection from "../../components/offeringsSection/OfferSection";
import QA from "../../components/qAndA/QA";
//
import Footer from "../../components/footer/Footer";
import CustomOfferings from "../../components/customOfferings/customOfferings";
import "./Offerings.scss";

const Offerings = () => {
  return (
    <div>
      <section>
        <NavBar />
        <OfferSection />
      </section>
      <section>
        <CustomOfferings />
      </section>
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
