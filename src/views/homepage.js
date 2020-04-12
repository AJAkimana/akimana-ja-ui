import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
  Header,
  HomeSection,
  AboutSection,
  SkillsSection,
  ResumeSection,
  ContactSection,
} from '../components/home';

const Homepage = () => {
  return (
    <Fragment>
      <Header />
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
    </Fragment>
  );
};
export default Homepage;
