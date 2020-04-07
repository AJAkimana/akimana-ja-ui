import React from 'react';
import { socials, navs } from '../utils';

const Header = () => {
  return (
    <header id='header'>
      <div class='d-flex flex-column'>
        <div class='profile'>
          <img
            src='assets/img/profile-img.jpg'
            alt=''
            class='img-fluid rounded-circle'
          />
          <h1 class='text-light'>
            <a href='index.html'>Akimana AJA</a>
          </h1>
          <div class='social-links mt-3 text-center'>
            {socials.map((social, index) => (
              <a href='#' class={social.name} key={index}>
                <i class={`bx bxl-${social.name}`}></i>
              </a>
            ))}
          </div>
        </div>

        <nav class='nav-menu'>
          <ul>
            <li class='active'>
              <a href='#'>
                <i class='bx bx-home'></i> <span>Home</span>
              </a>
            </li>
            {navs.map((nav, index) => (
              <li key={index}>
                <a href={nav.link}>
                  <i class={`bx bx-${nav.cssClass}`}></i>
                  {nav.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {/* <!-- .nav-menu --> */}
        <button type='button' class='mobile-nav-toggle d-xl-none'>
          <i class='icofont-navigation-menu'></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
