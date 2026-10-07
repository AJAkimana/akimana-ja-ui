import { useEffect, useState } from "react";

const Lightbox = ({ project, index, onIndexChange, onClose }) => {
  const images = project.images;
  const count = images.length;
  const go = (step) => onIndexChange((index + step + count) % count);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onIndexChange((i) => (i + 1) % count);
      if (e.key === "ArrowLeft") onIndexChange((i) => (i - 1 + count) % count);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [count, onClose, onIndexChange]);

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} screenshots`}
      onClick={onClose}
    >
      <button type="button" className="lightbox-close" aria-label="Close" onClick={onClose}>
        <i className="bx bx-x"></i>
      </button>
      {count > 1 && (
        <button
          type="button"
          className="lightbox-nav prev"
          aria-label="Previous screenshot"
          onClick={(e) => {
            e.stopPropagation();
            go(-1);
          }}
        >
          <i className="bx bx-chevron-left"></i>
        </button>
      )}
      <figure onClick={(e) => e.stopPropagation()}>
        <img src={images[index]} alt={`${project.title} screenshot ${index + 1}`} />
        <figcaption>
          {project.title}
          {count > 1 && ` (${index + 1}/${count})`}
        </figcaption>
      </figure>
      {count > 1 && (
        <button
          type="button"
          className="lightbox-nav next"
          aria-label="Next screenshot"
          onClick={(e) => {
            e.stopPropagation();
            go(1);
          }}
        >
          <i className="bx bx-chevron-right"></i>
        </button>
      )}
    </div>
  );
};

export const ProjectsSection = ({ projects }) => {
  const [open, setOpen] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  const openGallery = (project) => {
    setImageIndex(0);
    setOpen(project);
  };

  return (
    <section id="projects" className="portfolio section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Projects</h2>
          {projects.intro && <p>{projects.intro}</p>}
        </div>

        <div className="row">
          {projects.projects.map((project) => {
            const images = project.images ?? [];
            return (
              <div
                className="col-lg-6 portfolio-item"
                data-aos="fade-up"
                key={project.title}
              >
                <div className="portfolio-wrap">
                  {images.length > 0 ? (
                    <img
                      src={images[0]}
                      className="img-fluid"
                      alt={project.title}
                      loading="lazy"
                    />
                  ) : (
                    <div className="portfolio-placeholder">
                      <i className="bx bx-code-alt"></i>
                    </div>
                  )}
                  <div className="portfolio-links">
                    {images.length > 0 && (
                      <a
                        href={images[0]}
                        title="View screenshots"
                        onClick={(e) => {
                          e.preventDefault();
                          openGallery({ ...project, images });
                        }}
                      >
                        <i className="bx bx-images"></i>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} title="Live site" target="_blank" rel="noreferrer">
                        <i className="bx bx-link-external"></i>
                      </a>
                    )}
                    {project.sourceUrl && (
                      <a href={project.sourceUrl} title="Source code" target="_blank" rel="noreferrer">
                        <i className="bx bxl-github"></i>
                      </a>
                    )}
                  </div>
                </div>
                <div className="portfolio-info">
                  <h4>{project.title}</h4>
                  {project.description && <p>{project.description}</p>}
                  {project.tech?.length > 0 && (
                    <div className="portfolio-tech">
                      {project.tech.map((tech) => (
                        <span className="badge" key={tech}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {open && (
        <Lightbox
          project={open}
          index={imageIndex}
          onIndexChange={setImageIndex}
          onClose={() => setOpen(null)}
        />
      )}
    </section>
  );
};
