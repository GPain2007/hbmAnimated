import "./app.scss";
import Hero from "./components/hero/Hero";
import { NavBar } from "./components/navbar/NavBar";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Testimonial from "./components/testimonial/Testimonial";

const App = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [controls, inView]);
  return (
    <div>
      <section>
        <NavBar />
        <Hero />
      </section>
      <section>
        <Testimonial ref={ref} animate={controls} />
      </section>
      <section>Test</section>
      <section>About</section>
      <section>Footer</section>
    </div>
  );
};

export default App;
