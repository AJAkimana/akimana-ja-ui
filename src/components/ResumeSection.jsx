import { DownloadCV } from "./DownloadCV";
import { formatPeriod } from "../utils/dates";

const ResumeItems = ({ title, items }) => (
  <>
    <h3 className="resume-title">{title}</h3>
    {items.map((item) => (
      <div className="resume-item" key={`${item.organization}-${item.role}`}>
        <h4>{item.role}</h4>
        <h5>{formatPeriod(item.startDate, item.endDate)}</h5>
        <p>
          <em>
            {item.organization}
            {item.location && `, ${item.location}`}
          </em>
        </p>
        {item.summary && <p>{item.summary}</p>}
        {item.highlights?.length > 0 && (
          <ul>
            {item.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        )}
      </div>
    ))}
  </>
);

export const ResumeSection = ({ resume, cv }) => {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
          <DownloadCV cv={cv} />
        </div>
        <div className="row">
          <div className="col-lg-7" data-aos="fade-up">
            <ResumeItems title="Professional Experience" items={resume.experience} />
          </div>
          <div className="col-lg-5" data-aos="fade-up" data-aos-delay="100">
            <ResumeItems title="Education" items={resume.education} />

            {resume.languages?.length > 0 && (
              <>
                <h3 className="resume-title">Languages</h3>
                <ul className="resume-list">
                  {resume.languages.map((language) => (
                    <li key={language.name}>
                      <i className="bx bx-world"></i>
                      <strong>{language.name}</strong> - {language.level}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {resume.interests && (
              <>
                <h3 className="resume-title">Interests & Activities</h3>
                <p className="resume-interests">
                  <i className="bx bx-heart"></i>
                  {resume.interests}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
