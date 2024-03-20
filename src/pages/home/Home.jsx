import Hero from "../../components/hero/Hero";
import Services from "../../components/services/Services";
import Testimonial from "../../components/testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <section>
        <Hero />
      </section>
      <section>
        <Testimonial />
      </section>
      <section>
        <Services />
      </section>
      <section>Footer</section>
    </div>
  );
};

export default Home;
