import "./Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt
} from "react-icons/fa";

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_h10mcy6",
      "template_wdznw99",
      form.current,
      "hphLBV_xVxkwCGD_Z"
    )
    .then(
      () => {
        alert("Message Sent Successfully!");
        form.current.reset();
      },

    )
    .catch((error) => {
  console.log("EmailJS Error:", error);
  alert(error.text || error.message);
});






  
  };

  return (
    <section className="contact" id="contact">

      <h2 className="section-title">
        Contact <span>Me</span>
      </h2>

      <div className="contact-container">

        {/* Left Side */}

        <div className="contact-info">

          <h3>Let's Connect</h3>

          <p>
            I'm currently looking for Java Full Stack Developer opportunities.
            Feel free to contact me for jobs, internships,
            freelance projects, or collaborations.
          </p>

          {/* Location */}

          <div className="info-box">
            <FaMapMarkerAlt />
            <div>
              <h4>Location</h4>
              <span>Cuddalore, Tamil Nadu, India</span>
            </div>
          </div>

          {/* Email */}

          <div className="info-box">
            <FaEnvelope />
            <div>
              <h4>Email</h4>
              <span>
                <a href="mailto:arunkumarcse754@gmail.com">
                  arunkumarcse754@gmail.com
                </a>
              </span>
            </div>
          </div>

          {/* Phone */}

          <div className="info-box">
            <FaPhoneAlt />
            <div>
              <h4>Phone</h4>
              <span>
                <a href="tel:+918270828493">
                  +91 82708 28493
                </a>
              </span>
            </div>
          </div>

        </div>

        {/* Right Side */}

        <form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Write your message..."
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;