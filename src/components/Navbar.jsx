import { useState } from "react";

export default function Navbar({ profileName, sectionIds }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = sectionIds.map((id) => ({
    id,
    label: id.charAt(0).toUpperCase() + id.slice(1),
  }));

  return (
    <header className="topbar">
      <a href="#home" className="brand">
        <span className="brand-mark" aria-hidden="true">
          RY
        </span>
        {profileName}
      </a>

      <button
        className="menu-toggle"
        type="button"
        onClick={() => setMobileMenuOpen((prev) => !prev)}
        aria-label="Toggle navigation"
        aria-expanded={mobileMenuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`nav-links ${mobileMenuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <a key={link.id} href={`#${link.id}`} onClick={() => setMobileMenuOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
