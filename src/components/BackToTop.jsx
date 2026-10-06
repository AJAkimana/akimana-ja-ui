import { useEffect, useState } from "react";

export const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#hero"
      className={`back-to-top ${visible ? "visible" : ""}`}
      aria-label="Back to top"
    >
      <i className="bx bx-up-arrow-alt"></i>
    </a>
  );
};
