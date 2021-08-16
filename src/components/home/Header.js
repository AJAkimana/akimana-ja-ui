import React from "react";
import { Link } from "react-router-dom";
import { socials, navs } from "../../utils";

export const Header = ({ showLogin }) => {
  return (
    <header id="header">
      <div className="d-flex flex-column">
        <div className="profile">
          <img
            src="assets/img/me.jpg"
            alt=""
            className="img-fluid rounded-circle"
          />
          <h1 className="text-light" onClick={showLogin}>
            Akimana AJA
          </h1>
          <div className="social-links mt-3 text-center">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.link}
                className={social.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={`bx bxl-${social.name}`}></i>
              </a>
            ))}
          </div>
        </div>

        <nav className="nav-menu">
          <ul>
            <li className="active">
              <Link to="#hero">
                <i className="bx bx-home"></i> <span>Home</span>
              </Link>
            </li>
            {navs.map((nav, index) => (
              <li key={index}>
                <Link to={nav.link}>
                  <i className={`bx bx-${nav.cssClass}`}></i>
                  {nav.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* <!-- .nav-menu --> */}
        <button type="button" className="mobile-nav-toggle d-xl-none">
          <i className="icofont-navigation-menu"></i>
        </button>
      </div>
    </header>
  );
};
