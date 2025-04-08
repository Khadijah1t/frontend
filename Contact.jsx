import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./contact.css";

const MyContact = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-header">
        <h2>Contact us</h2>
        <p>
          Let's talk about your website or project. Send us a message and we will be in touch within one business day.
        </p>
      </div>

      <div className="contact-content">
        <form className="message-form">
          <h3>Send us a message</h3>

          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Full name" className="form-field" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="name@gmail.com" className="form-field" />

          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Your message here" className="form-textarea"></textarea>

          <button type="submit" className="submit-button">Submit</button>
        </form>

        <div className="info-section">
          <h3>Contact Info</h3>

          <div className="info-box">
            <FaEnvelope className="info-icon" />
            <div>
              <strong>Email</strong>
              <hr />
              <p>contact@gmail.com</p>
            </div>
          </div>

          <div className="info-box">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <strong>Location</strong>
              <hr />
              <p>PUCIT,Old Campus</p>
            </div>
          </div>

          <div className="info-box">
            <FaPhoneAlt className="info-icon" />
            <div>
              <strong>Phone</strong>
              <hr />
              <p>0321-5687234</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyContact;
