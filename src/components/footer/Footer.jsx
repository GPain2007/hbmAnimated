import "./Footer.scss";
import { BsInstagram } from "react-icons/bs";
import Logo from "/newlogo.png";

const Footer = () => {
  return (
    <div className="footerSection">
      <div className="titleSection">
        <h1>Let's Create Together</h1>
        <p>
          Want to work with HBM Flower City? <br /> Send us an email at{" "}
          <a href="mailto:hbmflowercity@gmail.com">hbmflowercity@gmail.com</a>
          <span> </span>about your floral needs or click the{" "}
          <a href="/contact">inquire</a> link to tell us about your event.
        </p>
        <a
          href=" https://www.instagram.com/hbm_flowercity"
          className="instagram"
        >
          <BsInstagram size="40px" />
        </a>
        <img className="logo" src={Logo} alt="Logo" />
      </div>
    </div>
  );
};

export default Footer;
