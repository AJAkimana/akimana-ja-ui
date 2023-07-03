import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { sendMessage } from "../../redux/actions/user";
import { notifier } from "../../utils/notifier";
import { DownloadCV } from "../DownloadCV";

const initialState = {
  names: "",
  email: "",
  subject: "",
  message: "",
};
export const ContactSection = ({ profile }) => {
  const [messageBody, setMessageBody] = useState(initialState);
  const contactMeState = useSelector(({ contactMe }) => contactMe);
  const { loading, loaded, message } = contactMeState;
  useEffect(() => {
    // console.log(contactMeState);
    if (loaded) {
      notifier.success(message);
      setMessageBody(initialState);
    }
  }, [loaded, message]);
  const onHandleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setMessageBody({ ...messageBody, [name]: value });
  };
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <DownloadCV />
        </div>

        <div className="row" data-aos="fade-in">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="icofont-google-map"></i>
                <h4>Location:</h4>
                <p>{profile.address}</p>
              </div>

              <div className="email">
                <i className="icofont-envelope"></i>
                <h4>Email:</h4>
                <p>{profile.email}</p>
              </div>

              <div className="phone">
                <i className="icofont-phone"></i>
                <h4>Call:</h4>
                <p>{profile.phoneNumber}</p>
              </div>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d882.6006832503714!2d30.056998159541763!3d-1.9593149998973003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwNTcnMzMuNSJTIDMwwrAwMycyNy4zIkU!5e1!3m2!1sen!2srw!4v1586679814460!5m2!1sen!2srw" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"'
                title="Map"
                style={{ border: 0, width: "100%", height: "290px" }}
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form
              className="php-email-form"
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(messageBody);
              }}
            >
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    name="names"
                    className="form-control"
                    value={messageBody.names}
                    onChange={onHandleChange}
                  />
                  <div className="validate"></div>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={messageBody.email}
                    onChange={onHandleChange}
                  />
                  <div className="validate"></div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="name">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  value={messageBody.subject}
                  onChange={onHandleChange}
                />
                <div className="validate"></div>
              </div>
              <div className="form-group">
                <label htmlFor="name">Message</label>
                <textarea
                  className="form-control"
                  name="message"
                  rows="10"
                  value={messageBody.message}
                  onChange={onHandleChange}
                ></textarea>
                <div className="validate"></div>
              </div>
              <div className="mb-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className="text-center">
                <button type="submit" disabled={loading}>
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
