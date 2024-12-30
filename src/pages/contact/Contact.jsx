import { useEffect } from "react";
import { NavBar } from "../../components/navbar/NavBar";
import "./Contact.scss";

const Contact = () => {
  useEffect(() => {
    // Dynamically load the iframeResizer script
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.14/iframeResizer.min.js";
    script.type = "text/javascript";
    script.onload = () => {
      setTimeout(() => {
        // Initialize iFrameResizer
        if (window.iFrameResize) {
          window.iFrameResize({
            checkOrigin: false,
            heightCalculationMethod: "taggedElement",
          });
        }
      }, 30);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup script on component unmount
    };
  }, []);

  return (
    <div>
      <div className="contact">
        <NavBar />
        <div className="contact_page" style={{ marginTop: "125px" }}>
          <div className="titleContainer">
            <h1>Wedding, Events & More</h1>
          </div>
          <div className="paragraph_1">
            <h2>
              For custom proposals and to learn about our availability, please
              fill out the following inquiry form, providing as many details as
              you can. Once your inquiry is received, please allow 3-5 business
              days for us to get in touch.
            </h2>
          </div>
          <div className="paragraph_2">
            <h3>
              If you need to get in contact with us directly for other inquiries
              such as, floral arrangements, workshops, or branding florals,
              please email us at{" "}
              <a href="mailto:hello@hbmflower-city.com">
                hello@hbmflower-city.com
              </a>{" "}
              and we will be in touch. Thank you so much for your consideration.
            </h3>
          </div>
          <div className="paragraph_2">
            <h3>We look forward to creating something memorable with you!</h3>
          </div>
        </div>
      </div>
      <div>
        <div style={{ height: "100vh", scrollSnapAlign: "none" }}>
          <iframe
            src="https://hello.dubsado.com/public/form/view/6772f65a372487003acdf7e9"
            frameBorder="0"
            style={{ width: "250px", minWidth: "100%", height: "100%" }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
