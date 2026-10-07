import { DownloadCV } from "./DownloadCV";

export const SkillsSection = ({ skills, cv }) => {
  return (
    <section id="skills" className="skills section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
          <DownloadCV cv={cv} />
          <p>{skills.intro}</p>
        </div>

        <div className="row">
          {skills.groups.map((group) => (
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              key={group.name}
            >
              <div className="skill-group">
                <h4>
                  <i className={`bx bx-${group.icon || "check"}`}></i>
                  {group.name}
                </h4>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
