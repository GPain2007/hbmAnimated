import "./Footer.scss";
import IMG from "/Southern_Bride.png";

const Footer = () => {
  return (
    <div className="footerSection">
      <div className="titleSection">
        <h1>{`Let's Create Together`}</h1>
        <p>Want to work with HBM Flower City?</p>
        <p>
          Send us an email at
          <a href="mailto:hello@hbmflower-city.com">
            &nbsp;hello@hbmflower-city.com&nbsp;
          </a>
          about your floral needs or click <br />
          the link to tell us about your event.
        </p>

        <a
          href="https://www.southernbride.com/blog/inspiration/timeless-elegance-a-classic-blue-white-chinoiserie-inspired-styled-shoot-in-boerne-tx/?swcfpc=1&fbclid=PAZXh0bgNhZW0CMTEAAaZ-b0JkgL1nHnxgEBhsG_yGjsBfNqRq24d-V1mlTR7ETkpB4hwCnrHHy_s_aem_hXL1qyaBnstjayL4dFnx0A"
          target="_blank"
          rel="noreferrer"
        >
          <img src={IMG} alt="Southern Bride" className="southernBride" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
