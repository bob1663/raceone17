import React, { useState } from "react";
import "./Contact.css";
import { data, images } from "../../constants";

const Contact = () => {
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <div className="app__contact">
      <div className="app__contact-image">
        <div className="app__contact-image_container">
          <h1>Contact Race One 17 here!</h1>
          <h3>Help us by seeing if your question is already answered below.</h3>
        </div>
        <div className="app__contact-image_container">
          <div className="app__contact-image_downArrow">
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
        <form action="">
          <div className="app__contact-form_container">
            <p>Your Name (required)</p>
            <input type="text" />
            <p>Your Email (required)</p>
            <input type="email" />
            <p>Subject</p>
            <input type="text" />
            <p>Your Message</p>
            <textarea cols="1" rows="1"></textarea>
            <button type="submit">SEND</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
