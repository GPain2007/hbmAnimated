import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./testimonial.scss";
import { TestmonialData } from "./ImageData";

const Testimonial = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  const mod = (n, m) => {
    let result = n % m;

    return result >= 0 ? result : result + m;
  };

  useEffect(() => {
    setTimeout(() => {
      setCurrentQuote((currentQuote + 1) % TestmonialData.length);
    }, 5000);
  }, [currentQuote]);

  const testVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },

    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  // const carouselVariants = {
  //   initial: {
  //     x: +500,
  //     opacity: 0,
  //   },
  //   animate: {
  //     x: 0,
  //     opacity: 1,
  //     transition: {
  //       duration: 1,
  //       staggerChildren: 0.1,
  //     },
  //   },
  // };

  return (
    <div>
      <section className="testimonial">
        {/*ref={ref}> */}
        <motion.div
          className="pageTitle"
          variants={testVariants}
          initial="initial"
          animate="animate"
          // animate={scope}
        >
          <motion.h1 variants={testVariants}>Kind Words</motion.h1>
        </motion.div>

        {TestmonialData.map((slide, index) => {
          const indexLeft = mod(currentQuote - 1, TestmonialData.length);
          const indexRight = mod(currentQuote + 1, TestmonialData.length);
          let className = "";

          if (index == currentQuote) {
            className = "quote quote--active";
          } else if (index === indexRight) {
            className = "quote quote--right";
          } else if (index === indexLeft) {
            className = "quote quote--left";
          } else {
            className = "quote";
          }
          return (
            <div key={slide.id} className={className}>
              <div className="quoteText">
                <h1>{slide.quote}</h1>
              </div>
              <div className="quoteAuthor">
                <h4>{slide.author}</h4>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Testimonial;
