import { useState } from "react";
import { DownloadCV } from "./DownloadCV";

const initialState = {
  names: "",
  email: "",
  subject: "",
  message: "",
};

// Netlify Forms: the matching hidden form lives in index.html.
const submitToNetlify = (values) =>
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ "form-name": "contact", ...values }).toString(),
  }).then((res) => {
    if (!res.ok) throw new Error(`Form submission failed (${res.status})`);
  });

export const ContactSection = ({ profile }) => {
  const [messageBody, setMessageBody] = useState(initialState);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setMessageBody({ ...messageBody, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await submitToNetlify({
        ...messageBody,
        "bot-field": e.target.elements["bot-field"].value,
      });
      setMessageBody(initialState);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <DownloadCV cv={profile.cv} />
        </div>

        <div className="row" data-aos="fade-in">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="bx bx-map"></i>
                <h4>Location:</h4>
                <p>{profile.address}</p>
              </div>

              <div className="email">
                <i className="bx bx-envelope"></i>
                <h4>Email:</h4>
                <p>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </p>
              </div>

              <div className="phone">
                <i className="bx bx-phone"></i>
                <h4>Call:</h4>
                <p>
                  <a href={`tel:${profile.phoneNumber.replaceAll(" ", "")}`}>
                    {profile.phoneNumber}
                  </a>
                </p>
              </div>

              <div className="follow">
                <i className="bx bx-share-alt"></i>
                <h4>Find me on:</h4>
                <div className="social-links">
                  {profile.socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.link}
                      aria-label={social.name}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={`bx bxl-${social.name}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form className="contact-form" name="contact" onSubmit={onSubmit}>
              <p hidden>
                <label>
                  Don't fill this out: <input name="bot-field" />
                </label>
              </p>
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="contact-names">Your Name</label>
                  <input
                    id="contact-names"
                    type="text"
                    name="names"
                    className="form-control"
                    required
                    value={messageBody.names}
                    onChange={onHandleChange}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="contact-email">Your Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    className="form-control"
                    name="email"
                    required
                    value={messageBody.email}
                    onChange={onHandleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  className="form-control"
                  name="subject"
                  required
                  value={messageBody.subject}
                  onChange={onHandleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  className="form-control"
                  name="message"
                  rows="7"
                  required
                  value={messageBody.message}
                  onChange={onHandleChange}
                ></textarea>
              </div>
              <div className="mb-3" aria-live="polite">
                {status === "sending" && <div className="loading">Sending</div>}
                {status === "error" && (
                  <div className="error-message">
                    Sorry, your message could not be sent. Please email me directly.
                  </div>
                )}
                {status === "sent" && (
                  <div className="sent-message">
                    Your message has been sent. Thank you! I will get back to you
                    as soon as I can.
                  </div>
                )}
              </div>
              <div className="text-center">
                <button type="submit" disabled={status === "sending"}>
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
