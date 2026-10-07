import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedText = ({ strings, ...options }) => {
  const el = useRef(null);
  const key = strings.join("|");

  useEffect(() => {
    const typed = new Typed(el.current, { strings: key.split("|"), ...options });
    return () => typed.destroy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return <span ref={el} />;
};

export const HomeSection = ({ profile }) => {
  return (
    <section
      id="hero"
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <div className="hero-container" data-aos="fade-in">
        <h1>{profile.fullName}</h1>
        <p className="hero-title">
          A{" "}
          <TypedText
            strings={profile.titles}
            typeSpeed={40}
            backSpeed={50}
            backDelay={2000}
            loop
          />
        </p>
        {profile.heroDescription && (
          <p className="hero-description">{profile.heroDescription}</p>
        )}
      </div>
    </section>
  );
};
