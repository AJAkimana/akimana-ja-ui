import { DownloadCV } from "./DownloadCV";

const InfoItem = ({ label, value }) =>
  value ? (
    <li>
      <i className="bx bx-chevron-right"></i> <strong>{label}:</strong> {value}
    </li>
  ) : null;

export const AboutSection = ({ profile }) => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
          <DownloadCV cv={profile.cv} />
          {profile.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src={profile.photo} className="img-fluid" alt={profile.fullName} />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>{profile.aboutTitle}</h3>
            {profile.aboutText.slice(0, 1).map((paragraph) => (
              <p className="fst-italic" key={paragraph}>
                {paragraph}
              </p>
            ))}
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <InfoItem label="Website" value={profile.website} />
                  <InfoItem label="Phone" value={profile.phoneNumber} />
                  <InfoItem label="City" value={profile.city} />
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <InfoItem label="Degree" value={profile.degree} />
                  <InfoItem label="Email" value={profile.email} />
                  <InfoItem label="Freelance" value={profile.availability} />
                </ul>
              </div>
            </div>
            {profile.aboutText.slice(1).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
