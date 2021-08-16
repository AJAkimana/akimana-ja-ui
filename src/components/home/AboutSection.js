import React from "react";
import { DownloadCV } from "../DownloadCV";

export const AboutSection = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
          <DownloadCV />
          <p>
            I am a software engineer who loves playing with a computer to create
            solutions to real-world problems. I hold a Bachelor's degree in
            Computer Science from University of Rwanda.
          </p>
          <p>
            I help teams produce exceptional products by offering in-depth
            quality assurance support. Open and clear communicator with good
            multitasking skills, organized nature and strong attention to detail
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img
              src="assets/img/profile-img.jpg"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Full stack developer.</h3>
            <p className="font-italic">
              <b>Learning::::Working.</b>Learning is an endless work, none on
              earth has ever gotten on a limit of knowledge. What I know today
              will become what I knew tomorrow and if it is not improved, it
              might not be helping in tomorrow's situation. That’s why we need
              to plan on how to improve our knowledge on a daily basis.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  {/* <li>
                    <i className='icofont-rounded-right'></i>{' '}
                    <strong>Birthday:</strong> November 17, 1992
                  </li> */}
                  <li>
                    <i className="icofont-rounded-right"></i>{" "}
                    <strong>Website:</strong> www.akimanaja.com
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>{" "}
                    <strong>Phone:</strong> +250 783543016
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>
                    <strong>City:</strong> Kigali, Rwanda
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  {/* <li>
                    <i className='icofont-rounded-right'></i>{' '}
                    <strong>Age:</strong> 28
                  </li> */}
                  <li>
                    <i className="icofont-rounded-right"></i>{" "}
                    <strong>Degree:</strong> Bachelor
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>{" "}
                    <strong>Email:</strong> akimanaja17@gmail.com
                  </li>
                  <li>
                    <i className="icofont-rounded-right"></i>{" "}
                    <strong>Freelance:</strong> Available
                  </li>
                </ul>
              </div>
            </div>
            <p>
              I believe that every opportunity to provide solutions through
              programming does not only benefit the receiver of the solution but
              it also provides me an opportunity to learn some new things and
              get better at what I do
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
