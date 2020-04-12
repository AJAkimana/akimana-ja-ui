import React from 'react';
import Typed from 'react-typed';

export const HomeSection = () => {
  return (
    <section
      id='hero'
      className='d-flex flex-column justify-content-center align-items-center'
    >
      <div className='hero-container' data-aos='fade-in'>
        <h1>
          <Typed strings={['Jean dAmour AKIMANA']} typeSpeed={200} />
        </h1>
        <p>
          I do{' '}
          <Typed
            strings={[
              'Node/Javascript',
              'Python/Django',
              'React/Redux',
              'PHP/Laravel/Lumen',
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </p>
      </div>
    </section>
  );
};
