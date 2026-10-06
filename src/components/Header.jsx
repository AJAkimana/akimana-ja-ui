export const Header = ({
  profile,
  navs,
  active,
  mobileNavOpen,
  onToggleMobileNav,
  onNavigate,
}) => {
  const links = [{ id: "hero", name: "Home", icon: "home" }, ...navs];
  return (
    <>
      <button
        type="button"
        className="mobile-nav-toggle d-xl-none"
        aria-label="Toggle navigation"
        onClick={onToggleMobileNav}
      >
        <i className={`bx ${mobileNavOpen ? "bx-x" : "bx-menu"}`}></i>
      </button>
      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img
              src={profile.avatar}
              alt={profile.fullName}
              className="img-fluid rounded-circle"
            />
            <h1 className="text-light">{profile.displayName}</h1>
            <div className="social-links mt-3 text-center">
              {profile.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  className={social.name}
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`bx bxl-${social.name}`}></i>
                </a>
              ))}
            </div>
          </div>

          <nav className="nav-menu">
            <ul>
              {links.map((nav) => (
                <li key={nav.id} className={active === nav.id ? "active" : ""}>
                  <a href={`#${nav.id}`} onClick={onNavigate}>
                    <i className={`bx bx-${nav.icon}`}></i>
                    <span>{nav.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
