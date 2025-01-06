import Hero from "../../components/hero/Hero";
import Services from "../../components/services/Services";
import Testimonial from "../../components/testimonial/Testimonial";
import { NavBar } from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <section>
        <NavBar />
        <Hero />
      </section>
      <section>
        <Testimonial />
      </section>
      <section className="section">
        <Services />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Home;
