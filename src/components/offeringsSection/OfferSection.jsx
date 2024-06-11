// import Carousel from "../carousel/Carousel";
import "./OfferSection.scss";

const OfferSection = () => {
  return (
    <div className="offerSection">
      <div className="titleContainer">
        <h1>Offerings</h1>
        <p>
          We specialize in creating bloom focused florals for weddings and
          events that have a romantic and playful touch. We offer Full Service
          packages and custom A-La-Carte options for weddings and events. We
          also offer florals for branding events.
        </p>
      </div>
      <div className="listContainer">
        <div className="box">
          <h2>Full-Service Events</h2>
          <p>Beginning at $3500</p>
          <p>
            With our full service events we take the time to create a custom
            floral design that meets the vision of our clients. These designs
            often include installations, one of a kind bouquets, and any other
            floral needs for your big day.
          </p>
          <p>
            {" "}
            With all our full service clients we offer a one on one
            consultation, custom floral design proposal, a mockup of your
            wedding day design, delivery, wedding day set up and tear down
            services after your event.
          </p>
          <p>
            {" "}
            We also give the option to add on rentals including candles,
            vessels, and arches.
          </p>
        </div>
        <div className="box">
          <h2>A La Carte </h2>
          <p>
            A La Carte is perfect for those that want a beautiful and curated
            floral setup that fits within their budget. Our A La Carte process
            starts with choosing items from our Floral Menu that align with the
            vision of your event. Choose your desired items, and share with us
            specific details like color palette and style. With our A La Carte
            process you will receive a custom design proposal for your desired
            florals. On the day of your event, your florals will be packed and
            ready for pick up. If you would prefer delivery that can be arranged
            for an additional fee.
          </p>
        </div>
        <div className="box">
          <h2>Custom Offerings</h2>
          <p>
            We provide custom floral items for editorial, branding and corporate
            events. We provide floral arranging classes and we even have a cute
            flower cart to rent for your next event.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
