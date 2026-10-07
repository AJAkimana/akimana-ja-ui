import { useEffect, useState } from "react";
import AOS from "aos";
import {
  Header,
  HomeSection,
  AboutSection,
  SkillsSection,
  ResumeSection,
  ProjectsSection,
  ContactSection,
  BackToTop,
} from "./components";
import { profile, skills, resume, projects } from "./content";
import { useActiveSection } from "./hooks/useActiveSection";

const sections = [
  { id: "about", name: "About", icon: "user" },
  { id: "skills", name: "Skills", icon: "server" },
  { id: "resume", name: "Resume", icon: "file-blank" },
  { id: "projects", name: "Projects", icon: "book-content" },
  { id: "contact", name: "Contact", icon: "envelope" },
];

export const App = () => {
  const hasProjects = projects.projects.length > 0;
  const navs = sections.filter((s) => s.id !== "projects" || hasProjects);
  const active = useActiveSection(["hero", ...navs.map((n) => n.id)]);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out-back", once: true });
    // Sections render after the browser's own jump to #hash, so redo it.
    if (window.location.hash) {
      document.getElementById(window.location.hash.slice(1))?.scrollIntoView();
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle("mobile-nav-active", mobileNavOpen);
  }, [mobileNavOpen]);

  return (
    <>
      <Header
        profile={profile}
        navs={navs}
        active={active}
        mobileNavOpen={mobileNavOpen}
        onToggleMobileNav={() => setMobileNavOpen((open) => !open)}
        onNavigate={() => setMobileNavOpen(false)}
      />
      <HomeSection profile={profile} />

      <main id="main">
        <AboutSection profile={profile} />
        <SkillsSection skills={skills} cv={profile.cv} />
        <ResumeSection resume={resume} cv={profile.cv} />
        {hasProjects && <ProjectsSection projects={projects} />}
        <ContactSection profile={profile} />
      </main>
      <footer id="footer">
        <div className="container">
          <div className="copyright">
            &copy; Copyright 2018-{new Date().getFullYear()}{" "}
            <strong>
              <span>{profile.displayName}</span>
            </strong>
          </div>
        </div>
      </footer>
      <BackToTop />
    </>
  );
};
