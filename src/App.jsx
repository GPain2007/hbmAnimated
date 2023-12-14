import "./app.scss";
import Hero from "./components/hero/Hero";
import { NavBar } from "./components/navbar/NavBar";

const App = () => {
  return (
    <div>
      <section>
        <NavBar />
        <Hero />
      </section>
      <section>Parallax</section>
      <section>Footer</section>
    </div>
  );
};

export default App;
