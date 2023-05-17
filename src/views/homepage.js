import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
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
// import { getMyInfo } from "../redux/actions/user";
import { data } from "../utils";

const Homepage = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { loaded, info: myInfo } = useSelector(({ getMyInfo }) => getMyInfo);
  useEffect(() => {
    // getMyInfo();
  }, []);
  const info = loaded ? myInfo : data;
  return (
    <Fragment>
      <Header showLogin={handleShow} />
      <HomeSection />

      <main id="main">
        <AboutSection profile={info.profile} />
        <SkillsSection skills={info.skills} />
        <ResumeSection resume={info.resume} />
        <ContactSection profile={info.profile} />
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
