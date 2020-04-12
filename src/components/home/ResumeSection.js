import React from 'react';

export const ResumeSection = () => {
  return (
    <section id='resume' className='resume'>
      <div className='container'>
        <div className='section-title'>
          <h2>Resume</h2>
          <p>Resume introduction</p>
        </div>

        <div className='row'>
          <div className='col-lg-6' data-aos='fade-up'>
            <h3 className='resume-title'>Education</h3>
            <div className='resume-item'>
              <h4>Bachelor of Computer Science</h4>
              <h5>2012 - 2016</h5>
              <p>
                <em>
                  University of Rwanda - College of Science and Technology
                </em>
              </p>
              <p>
                College of Science and Technology - University of Rwanda, the
                former Kigali Institute of Science, Technology and Management
                <i>
                  (KIST, Kinyarwanda: Ishuri Rikuru ry'Ubumenyi n'Ikoranabuhanga
                  rya Kigali, French: Institut des Sciences et des Technologies
                  de Kigali)
                </i>{' '}
                in Kigali, Rwanda is the first technology-focused institution of
                higher education to be created by the Rwanda government.
              </p>
            </div>
          </div>
          <div className='col-lg-6' data-aos='fade-up' data-aos-delay='100'>
            <h3 className='resume-title'>Professional Experience</h3>
            <div className='resume-item'>
              <h4>Software developer</h4>
              <h5>2016 - 2018</h5>
              <p>
                <em>Data Systems Ltd, Kigali, Rwanda </em>
              </p>
              <ul>
                <li>
                  Built, tested and deployed scalable, highly available and
                  modular software products.
                </li>
                <li>
                  Collaborated with other developers to identify and alleviate
                  number of bugs and errors in software.
                </li>
                <li>Wrote code on eShuri platform using Node/Express.</li>
              </ul>
            </div>
            <div className='resume-item'>
              <h4>Associate Software Engineer</h4>
              <h5>2019 - 2020</h5>
              <p>
                <em>Andela, Kigali, Rwanda</em>
              </p>
              <ul>
                <li>
                  Collaborated with cross-functional development team members to
                  analyze potential system solutions based on evolving client
                  requirements.
                </li>
                <li>
                  Tested troubleshooting methods, devised innovative solutions,
                  and documented resolutions for inclusion in knowledge base for
                  support team use.
                </li>
                <li>
                  Collaborated with developers and product owners to stay
                  current on product features and intended functionality.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
