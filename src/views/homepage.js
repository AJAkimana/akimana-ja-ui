import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import {
  Header,
  HomeSection,
  AboutSection,
  SkillsSection,
  ResumeSection,
  ContactSection,
  ModelLogin,
} from "../components/home";
import { data } from "../utils";

const Homepage = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Fragment>
      <Header showLogin={handleShow} />
      <HomeSection />

      <main id="main">
        <AboutSection profile={data.profile} />
        <SkillsSection skills={data.skills} />
        <ResumeSection resume={data.resume} />
        <ContactSection profile={data.profile} />
      </main>
      <footer id="footer">
        <div className="container">
          <div className="copyright">
            &copy; Copyright 2018-{new Date().getFullYear()}/
            <strong>
              <span>AkimanaJA</span>
            </strong>
          </div>
        </div>
      </footer>
      <Link to="#" className="back-to-top">
        <i className="icofont-simple-up"></i>
      </Link>
      <ModelLogin show={show} onHide={handleClose} />
    </Fragment>
  );
};
export default Homepage;
