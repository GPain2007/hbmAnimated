import "./app.scss";
import { NavBar } from "./components/navbar/NavBar";

const App = () => {
  return (
    <div>
      <section>
        <NavBar />
        <a href="">Hero</a>
      </section>
      <section>Parallax</section>
      <section>Footer</section>
    </div>
  );
};

export default App;
