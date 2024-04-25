import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { NavBar } from "../../components/navbar/NavBar";
import ContactForm from "../../components/contactForm/ContactForm";
import "./Contact.scss";

const Contact = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div>
      <section>
        <NavBar />
        <div className="contact_page">
          <ContactForm show={modalShow} onHide={() => setModalShow(false)} />
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
              For other inquiries such as, floral arrangements, workshops, or
              branding florals please choose the option on the inquiry form and
              we will be in touch.
            </h3>
          </div>
          <div className="paragraph_3">
            <h2>
              If you need to get in contact with us directly for other matters,
              please email us at{" "}
              <a href="mailto:hbmflowercity@gmail.com">
                hbmflowercity@gmail.com
              </a>
              . Thank you so much for your consideration. We look forward to
              creating something memorable with you!
            </h2>
          </div>

          <div
            className="contact_button" // Use your custom class
            onClick={() => setModalShow(true)}
          >
            Contact US
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
