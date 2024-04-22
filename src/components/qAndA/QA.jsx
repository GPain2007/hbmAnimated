import "./QA.scss";

const QA = () => {
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
          <h2>3, 500 to 6, 000</h2>
          <p>
            Items may include A bridal bouquet with premium blooms Smaller
            bridesmaids bouquets Boutonnieres Small ceremony florals Table
            Florals Delivery & Setup
          </p>
        </div>
        <div className="box">
          <h2>$7000 to $9000</h2>
          <p>
            Items may include A bridal bouquet with premium blooms Bridesmaids
            bouquets with premium blooms Boutonnieres Large Ceremony
            Installation Table Florals Candles Bar or Signage Florals Cake
            Florals Delivery & Setup
          </p>
        </div>
        <div className="box">
          <h2>$10,000 and above </h2>
          <p>
            We can go above and beyond to create something truly unique for your
            big day! Items may include A bridal bouquet with premium blooms
            Bridesmaids bouquets with premium blooms Boutonnieres and corsages
            with premium blooms Epic Ceremony Installation Large Table Florals
            Candles Sweetheart Table Florals Bar Florals Signage Florals Cake
            Florals Delivery & Setup
          </p>
        </div>
      </div>
    </div>
  );
};

export default QA;
