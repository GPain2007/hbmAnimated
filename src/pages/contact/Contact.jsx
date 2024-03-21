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
        <div className="contact_page text-center">
          <ContactForm show={modalShow} onHide={() => setModalShow(false)} />
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
