export const DownloadCV = ({ cv }) => {
  if (!cv) return null;
  return (
    <a
      className="btn btn-primary mb-3"
      href={cv}
      download
      target="_blank"
      rel="noreferrer"
    >
      <i className="bx bx-download"></i> Download CV
    </a>
  );
};
