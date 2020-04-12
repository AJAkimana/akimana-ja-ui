import React from 'react';

export const SkillsSection = () => {
  return (
    <section id='skills' className='skills section-bg'>
      <div className='container'>
        <div className='section-title'>
          <h2>Skills</h2>
          <p>
            Methodical software developer experienced in software development
            processes and optimal testing strategies. Help teams produce
            exceptional products by offering in-depth quality assurance support.
            Open and clear communicator with good multitasking skills, organized
            nature and strong attention to detail.
          </p>
        </div>

        <div className='row skills-content'>
          <div className='col-lg-6' data-aos='fade-up'>
            <div className='progress'>
              <span className='skill'>
                HTML <i className='val'>100%</i>
              </span>
              <div className='progress-bar-wrap'>
                <div
                  className='progress-bar'
                  role='progressbar'
                  aria-valuenow='100'
                  aria-valuemin='0'
                  aria-valuemax='100'
                ></div>
              </div>
            </div>

            <div className='progress'>
              <span className='skill'>
                Python/Django <i className='val'>60%</i>
              </span>
              <div className='progress-bar-wrap'>
                <div
                  className='progress-bar'
                  role='progressbar'
                  aria-valuenow='60'
                  aria-valuemin='0'
                  aria-valuemax='100'
                ></div>
              </div>
            </div>

            <div className='progress'>
              <span className='skill'>
                JavaScript <i className='val'>100%</i>
              </span>
              <div className='progress-bar-wrap'>
                <div
                  className='progress-bar'
                  role='progressbar'
                  aria-valuenow='100'
                  aria-valuemin='0'
                  aria-valuemax='100'
                ></div>
              </div>
            </div>
          </div>

          <div className='col-lg-6' data-aos='fade-up' data-aos-delay='100'>
            <div className='progress'>
              <span className='skill'>
                PHP/Lumen <i className='val'>80%</i>
              </span>
              <div className='progress-bar-wrap'>
                <div
                  className='progress-bar'
                  role='progressbar'
                  aria-valuenow='80'
                  aria-valuemin='0'
                  aria-valuemax='100'
                ></div>
              </div>
            </div>

            <div className='progress'>
              <span className='skill'>
                React/Redux <i className='val'>90%</i>
              </span>
              <div className='progress-bar-wrap'>
                <div
                  className='progress-bar'
                  role='progressbar'
                  aria-valuenow='90'
                  aria-valuemin='0'
                  aria-valuemax='100'
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
