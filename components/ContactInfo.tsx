import React from "react";
import Fade from "react-reveal/Fade";
import { socialLinks } from "../portfolio";

const ContactInfo = () => {
  const email = socialLinks.email;
  const phone = socialLinks.phone;

  return (
    <Fade bottom duration={800} delay={300}>
      <div className="contact-info mt-4">
        <div className="contact-item d-flex align-items-center mb-3">
          <i className="fa fa-envelope mr-3" style={{ fontSize: "1.2rem", color: "#f8f9fa" }} />
          <span className="contact-text" style={{ fontSize: "1rem", color: "#fff" }}>
            {email}
          </span>
        </div>
        <div className="contact-item d-flex align-items-center">
          <i className="fa fa-phone mr-3" style={{ fontSize: "1.2rem", color: "#f8f9fa" }} />
          <span className="contact-text" style={{ fontSize: "1rem", color: "#fff" }}>
            {phone}
          </span>
        </div>
      </div>
    </Fade>
  );
};

export default ContactInfo;