import "./Footer.scss";
import { BsInstagram } from "react-icons/bs";
import IMG1 from "/1S0A3668.jpg";
import IMG2 from "/1S0A3672.jpg";
import IMG3 from "/NRP_1371.jpg";

const Footer = () => {
  return (
    <div className="footerSection">
      <div className="titleSection">
        <h1>Let's Create Together</h1>
        <p>Want to work with HBM Flower City?</p>
        <p>
          {" "}
          Send us an email at hbmflowercity@gmail.com about your floral needs or
          click the link to tell us about your event.
        </p>
        <a href="/contact">
          <button>Inquire</button>
        </a>
        {/* <a
          href=" https://www.instagram.com/hbm_flowercity"
          className="instagram"
        >
          <BsInstagram size="40px" />
        </a> */}
        <div className="imageContainer">
          <img src={IMG1} alt="image 1" />
          <img src={IMG2} alt="image 2" />
          <img src={IMG3} alt="image 3" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
