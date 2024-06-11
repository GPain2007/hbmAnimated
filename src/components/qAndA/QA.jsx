import React, { useState } from "react";
import "./QA.scss";

const QA = () => {
  const [showText, setShowText] = useState(false);
  const [showMid, setShowMid] = useState(false);
  const [showHigh, setShowHigh] = useState(false);

  const handleClick = () => {
    setShowText(!showText);
  };

  const handleClick2 = () => {
    setShowMid(!showMid);
  };

  const handleClick3 = () => {
    setShowHigh(!showHigh);
  };
  return (
    <div className="QASection">
      <div className="titleContainer">
        <h1>Q & A</h1>
      </div>

      <div className="question">
        <h1>Where do you Service?</h1>
        <p>
          We are based in Austin. We service the Austin and central Texas area.
        </p>
      </div>
      <div className="question">
        <h1>Do you travel for Weddings and Events?</h1>
        <p>
          Yes we do travel but fees will apply and vary based on travel
          destination.
        </p>
      </div>
      <div className="question">
        <h1>How long does it take to receive a proposal/quote?</h1>
        <p>
          We try our best to deliver proposals/quotes within 3-5 business days
          after it has been received. However due to the nature of our business
          there are times when that will take a bit longer.
        </p>
      </div>
      <div className="question">
        <h1>Why is there no set price list?</h1>
        <p>
          Each event and request is custom and tailored to fit your design
          needs. There are many factors such as color, flower choice, season,
          labor, etc that determine the price of an event.
        </p>
      </div>
      <div className="question">
        <h1>What can I get for my budget?</h1>
        <p>
          Need an idea of what you can get with your budget? Let’s take a look…
        </p>
      </div>
      <div className="listContainer">
        <div className="box">
          <button onClick={handleClick2}>
            <h2>$3, 500 to $6, 000</h2>
          </button>

          <p className={`text ${showMid ? "visible" : "hidden"}`}>
            <p>Items may include:</p>
            <ul>
              <li>A bridal bouquet with premium blooms</li>
              <li>Smaller bridesmaids bouquets</li>
              <li>Boutonnieres</li>
              <li>Small ceremony florals</li>
              <li>Table Florals</li>
              <li>Delivery & Setup</li>
            </ul>
          </p>
        </div>
        <div className="box">
          <button onClick={handleClick3}>
            <h2>$7000 to $9000</h2>
          </button>
          <p className={`text ${showHigh ? "visible" : "hidden"}`}>
            <p>Items may include:</p>
            <ul>
              <li>A bridal bouquet with premium blooms</li>
              <li>Bridesmaids bouquets with premium blooms</li>
              <li>Boutonnieres</li>
              <li>Large Ceremony Installation</li>
              <li>Table Florals</li>
              <li>Candles</li>
              <li>Bar or Signage Florals</li>
              <li>Cake Florals</li>
              <li>Delivery & Setup</li>
            </ul>{" "}
          </p>
        </div>
        <div className="box">
          <button onClick={handleClick}>
            <h2>$10,000 and above </h2>
          </button>
          <p className={`text ${showText ? "visible" : "hidden"}`}>
            <p>Items may include:</p>
            <ul>
              <li>A bridal bouquet with premium blooms</li>
              <li>Bridesmaids bouquets with premium blooms</li>
              <li>Boutonnieres and corsages with premium blooms</li>
              <li>Epic Ceremony Installation</li>
              <li>Large Table Florals</li>
              <li>Candles</li>
              <li>Sweetheart Table Florals</li>
              <li>Bar & Signage Florals</li>
              <li>Cake Florals</li>
              <li>Delivery & Setup</li>
            </ul>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default QA;
