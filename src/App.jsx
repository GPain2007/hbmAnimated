import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.scss";
import Contact from "./pages/contact/Contact";

import Home from "./pages/home/Home";
import Offerings from "./pages/offerings/Offerings";
import React, { useEffect } from "react";
import Gallery from "./pages/gallery/Gallery.jsx";

function App() {
  useEffect(() => {
    // Code to run when component mounts
    removeLoomDiv();
  }, []);

  // Function to remove the loom div
  const removeLoomDiv = () => {
    const loomDiv = document.getElementById("loom-companion-mv3");
    if (loomDiv) {
      loomDiv.parentNode.removeChild(loomDiv);
    }
  };
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/offerings" element={<Offerings />} />
          <Route exact path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
