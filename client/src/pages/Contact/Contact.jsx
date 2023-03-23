import React, { useState } from "react";
import "./Contact.css";
import { data, images } from "../../constants";

const Contact = () => {
  const [openFaq, setOpenFaq] = useState(null);
  // -----------------------------------------------
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const validateEmail = (email) => {
    // Regular expression to check if email is valid
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if name field is empty
    if (name.trim() === "") {
      setNameError(true);
    } else {
      setNameError(false);
    }
    // Check if email is valid
    if (!validateEmail(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };
  // -----------------------------------------------
  const handleScroll = () => {
    document
      .querySelector(".app__contact-faq")
      .scrollIntoView({ behavior: "smooth" });
  };
  // -----------------------------------------------
  return (
    <div className="app__contact">
      <div className="app__contact-image">
        <div
          className="app__contact-image_container"
          style={{ height: "100vh", justifyContent: "flex-end" }}
        >
          <h1>Contact Race One 17 here!</h1>
          <h3>Help us by seeing if your question is already answered below.</h3>
        </div>
        <div
          className="app__contact-image_container"
          style={{ height: "50vh", justifyContent: "flex-end" }}
        >
          <div className="app__contact-image_downArrow" onClick={handleScroll}>
            <img src={images.DownArrowIcon} alt="DownArrowIcon" />
          </div>
        </div>
      </div>
      <div className="app__contact-faq">
        <h1>write to us</h1>
        <img src={images.UnderScoreIcon} alt="UnderScoreIcon" />
        <div className="app__contact-faq_list">
          {data.faq.map((faq, index) => (
            <div
              className="app__contact-faq_list-item"
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
            >
              <div className="app__contact-faq_list-item_wrapper">
                <div className="app__contact-faq_list-item_left">
                  <img
                    src={images.QuestionMarkIcon}
                    alt="QuestionMarkIcon"
                    style={{ width: "8px", height: "11px" }}
                  />
                  <p>{faq.question}</p>
                </div>
                <img
                  src={images.DropDownIcon}
                  alt="DropDownIcon"
                  style={{
                    width: "10px",
                    height: "16px",
                    marginRight: "16px",
                    transform:
                      openFaq === index ? "rotate(0deg)" : "rotate(-90deg)",
                  }}
                />
              </div>
              {openFaq === index && (
                <div className="app__contact-faq_answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <img
          src={images.UnderScoreIcon}
          alt="UnderScoreIcon"
          style={{ marginTop: "20px", marginBottom: "40px" }}
        />
      </div>
      <div className="app__contact-form">
        <form onSubmit={handleSubmit}>
          <p>Your Name (required)</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {nameError && <small>The field is required.</small>}
          <p>Your Email (required)</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <small>The e-mail address entered is invalid.</small>}
          <p>Subject</p>
          <input type="text" />
          <p>Your Message</p>
          <textarea cols="1" rows="1"></textarea>
          <button type="submit">SEND</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
