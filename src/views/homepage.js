import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Header,
  HomeSection,
  AboutSection,
  SkillsSection,
  ResumeSection,
  ContactSection,
  ModelLogin,
} from '../components/home';

const Homepage = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Fragment>
      <Header showLogin={handleShow} />
      <HomeSection />

      <main id='main'>
        <AboutSection />
        <SkillsSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <footer id='footer'>
        <div className='container'>
          <div className='copyright'>
            &copy; Copyright 2018-{new Date().getFullYear()}/
            <strong>
              <span>AkimanaJA</span>
            </strong>
          </div>
        </div>
      </footer>
      <Link to='#' className='back-to-top'>
        <i className='icofont-simple-up'></i>
      </Link>
      <ModelLogin show={show} onHide={handleClose} />
    </Fragment>
  );
};
export default Homepage;
