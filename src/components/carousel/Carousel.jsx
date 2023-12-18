import { useState, useEffect } from "react";
import "./carousel.scss";
import { ImageData } from "./ImageData";
import { motion } from "framer-motion";

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const mod = (n, m) => {
    let result = n % m;

    return result >= 0 ? result : result + m;
  };

  useEffect(() => {
    setTimeout(() => {
      setCurrentImage((currentImage + 1) % ImageData.length);
    }, 5000);
  }, [currentImage]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className="parallax-container"
    >
      <section className="carousel">
        {ImageData.map((slide, index) => {
          const indexLeft = mod(currentImage - 1, ImageData.length);
          const indexRight = mod(currentImage + 1, ImageData.length);
          let className = "";

          if (index === currentImage) {
            className = "image image--active";
          } else if (index === indexRight) {
            className = "image image--right";
          } else if (index === indexLeft) {
            className = " image image--left";
          } else {
            className = "image";
          }

          return (
            <div>
              <img
                src={slide.src}
                alt={slide.alt}
                className={className}
                key={slide.id}
              />
            </div>
          );
        })}
      </section>
    </motion.div>
  );
};

export default Carousel;
