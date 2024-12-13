import "./Footer.scss";
// import ImageSlider from "../imageSlider/ImageSlider";

const Footer = () => {
  return (
    <div className="footerSection">
      <div className="titleSection">
        <h1>{`Let's Create Together`}</h1>
        <p>Want to work with HBM Flower City?</p>
        <p>
          {" "}
          Send us an email at hbmflowercity@gmail.com about your floral needs or
          click the link to tell us about your event.
        </p>
        <a href="/contact">
          <button>Inquire</button>
        </a>
        {/* <img>
          <a href=""></a>
        </img> */}
      </div>
      {/* <ImageSlider /> */}
    </div>
  );
};

export default Footer;
