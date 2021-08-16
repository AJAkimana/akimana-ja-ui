import React from "react";
import { skills } from "../../utils";
import { DownloadCV } from "../DownloadCV";

export const SkillsSection = () => {
  return (
    <section id="skills" className="skills section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
          <DownloadCV />
          <p>
            I'm not bount to any technology. In fact, I choose a technology
            based to the problem at hand. So far, these are the technologies I
            used
          </p>
        </div>

        <div className="row skills-content">
          {skills.map((skill, skillIndex) => (
            <div
              className="col-lg-4 col-md-4 col-sm-6"
              data-aos="fade-up"
              key={skillIndex}
            >
              {skill.subSkills.map((subSkill, subSkillIndex) => (
                <div className="progress" key={subSkillIndex}>
                  <span className="skill">
                    {subSkill.name}{" "}
                    <i className="val">{subSkill.experience} years</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={subSkill.progress}
                      aria-valuemin="10"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};