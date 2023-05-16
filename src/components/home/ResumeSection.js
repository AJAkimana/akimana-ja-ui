import React from "react";
import { DownloadCV } from "../DownloadCV";

export const ResumeSection = ({ resume = [] }) => {
  console.log(resume);
  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
          <DownloadCV />
        </div>
        <div className="row">
          {resume?.map((el, elIdx) => (
            <div className="col-lg-6" data-aos="fade-up" key={elIdx}>
              <h3 className="resume-title">{el.name}</h3>
              {el.contents?.map((cont) => (
                <div className="resume-item" key={cont.role}>
                  <h4>{cont.role}</h4>
                  <h5>
                    {new Date(cont.startDate).getFullYear()} -{" "}
                    {new Date(cont.startDate).getFullYear()}
                  </h5>
                  <p>
                    <em>{cont.entity.name}</em>
                  </p>
                  <ul>
                    {cont.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
