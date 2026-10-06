import { DownloadCV } from "./DownloadCV";
import { formatPeriod } from "../utils/dates";

const ResumeColumn = ({ title, items }) => (
  <div className="col-lg-6" data-aos="fade-up">
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
        <ul>
          {item.highlights?.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
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
          <ResumeColumn title="Education" items={resume.education} />
          <ResumeColumn title="Professional Experience" items={resume.experience} />
        </div>
      </div>
    </section>
  );
};
