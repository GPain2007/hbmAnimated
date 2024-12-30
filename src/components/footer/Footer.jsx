import "./Footer.scss";
import IMG from "/Southern_Bride.png";

const Footer = () => {
  return (
    <div className="footerSection">
      <div className="titleSection">
        <h1>{`Let's Create Together`}</h1>
        <p>Want to work with HBM Flower City?</p>
        <p>
          Send us an email at&nbsp;
          <a href="mailto:hello@hbmflower-city.com">hello@hbmflower-city.com</a>
          &nbsp;about your floral needs or click the link to tell us about your
          event.
        </p>
        <a href="/contact">
          <button>Inquire</button>
        </a>
        <a
          href="https://www.southernbride.com/blog/inspiration/timeless-elegance-a-classic-blue-white-chinoiserie-inspired-styled-shoot-in-boerne-tx/?swcfpc=1&fbclid=PAZXh0bgNhZW0CMTEAAaZ-b0JkgL1nHnxgEBhsG_yGjsBfNqRq24d-V1mlTR7ETkpB4hwCnrHHy_s_aem_hXL1qyaBnstjayL4dFnx0A"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={IMG}
            alt="Southern Bride"
            style={{
              height: "220px",
              width: "220px",
              alignSelf: "flex-end",
              marginLeft: "68rem",
            }}
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
