import React from "react";
import Typed from "react-typed";

export const HomeSection = () => {
  return (
    <section
      id="hero"
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <div className="hero-container" data-aos="fade-in">
        <h1>
          <Typed strings={["Jean dAmour AKIMANA"]} typeSpeed={200} />
        </h1>
        <p>
          A{" "}
          <Typed
            strings={["Software Engineer", "Data Analyst"]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </p>
      </div>
    </section>
  );
};
