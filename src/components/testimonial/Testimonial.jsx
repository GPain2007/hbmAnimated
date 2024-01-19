import { useState, useEffect } from "react";
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

  return (
    <div>
      <section className="testimonial">
        <div className="pageTitle">
          <h1>Kind Words</h1>
        </div>
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
