import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.scss";
import Contact from "./pages/contact/Contact";

import Home from "./pages/home/Home";
import Offerings from "./pages/offerings/Offerings";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/offerings" element={<Offerings />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
