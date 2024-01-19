import "./app.scss";
import Hero from "./components/hero/Hero";
import { NavBar } from "./components/navbar/NavBar";

import Testimonial from "./components/testimonial/Testimonial";

const App = () => {
  return (
    <div>
      <section>
        <NavBar />
        <Hero />
      </section>
      <section>
        <Testimonial />
      </section>
      <section>Test</section>
      <section>About</section>
      <section>Footer</section>
    </div>
  );
};

export default App;
