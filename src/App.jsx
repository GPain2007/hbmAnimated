import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.scss";
import Contact from "./pages/contact/Contact";
import { NavBar } from "./components/navbar/NavBar";
import Home from "./pages/home/Home";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
