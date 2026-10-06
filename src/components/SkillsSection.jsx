import { DownloadCV } from "./DownloadCV";
import { yearsSince } from "../utils/dates";

// A full bar means this many years of experience or more.
const FULL_BAR_YEARS = 10;

export const SkillsSection = ({ skills, cv }) => {
  return (
    <section id="skills" className="skills section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
          <DownloadCV cv={cv} />
          <p>{skills.intro}</p>
        </div>

        <div className="row skills-content">
          {skills.groups.map((group) => (
            <div className="col-lg-4 col-md-4 col-sm-6" data-aos="fade-up" key={group.name}>
              {group.items.map((item) => {
                const years = yearsSince(item.since);
                const percent = Math.min(years / FULL_BAR_YEARS, 1) * 100;
                return (
                  <div className="progress" key={item.name}>
                    <span className="skill">
                      {item.name} <i className="val">Since {item.since}</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        style={{ width: `${percent}%` }}
                        role="progressbar"
                        aria-label={`${item.name}: ${years} years`}
                        aria-valuenow={years}
                        aria-valuemin={0}
                        aria-valuemax={FULL_BAR_YEARS}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
