import Carousel from "../carousel/Carousel";
import "./OfferSection.scss";

const OfferSection = () => {
  return (
    <div className="offerSection">
      <div className="titleContainer">
        <h1>Offerings</h1>
        <p>
          Our specialty is creating unique florals for weddings and events that
          have a romantic and playful touch. We offer Full-Service Event
          packages and custom A-La-Carte options for weddings and Events. We
          also offer floral pieces for branding events and custom arrangements;
          when you want to send your love through flowers.
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
            floral setup that fits within their budget.
          </p>
          <p>
            Our A La Carte process starts with choosing items from our Floral
            Menu that align with the vision of your event. Choose your desired
            items, color palette and design style. With our A La Carte process
            you will receive a custom design proposal for items and your florals
            will be packed and ready for pick up on your event day. If you would
            prefer delivery that can be arranged for an additional fee.
          </p>
        </div>
        <div className="box">
          <h2>Custom Offerings</h2>
          <p>
            We provide custom floral items for editorial , branding and
            corporate events. We also provide custom arrangements to send to
            those you love.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
