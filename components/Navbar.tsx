"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ["home", "about", "services", "projects", "contact"];
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const id = sections[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar-wrapper ${isScrolled ? "scrolled" : ""}`} id="navbar">
      <div className="site-container">
        <nav className="nav-container" aria-label="Main Navigation">
          {/* Logo */}
          <a href="#home" className="brand-logo" aria-label="Sea Studio Home" onClick={closeMenu}>
            <Image
              src="/assets/sea-logo.png"
              alt="Sea Studio Flower Motif Logo"
              width={44}
              height={44}
              className="logo-img"
              priority
            />
            <div className="logo-text-group">
              <span className="logo-text">Sea Studio</span>
              <span className="logo-sub">Creative Designer</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="nav-links">
            <li>
              <a
                href="#home"
                className={`nav-link ${activeSection === "home" ? "active" : ""}`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={`nav-link ${activeSection === "about" ? "active" : ""}`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className={`nav-link ${activeSection === "services" ? "active" : ""}`}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={`nav-link ${activeSection === "projects" ? "active" : ""}`}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`nav-link ${activeSection === "contact" ? "active" : ""}`}
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Action CTA */}
          <div className="nav-actions">
            <a href="#contact" className="btn-cta" aria-label="Navigate to contact form">
              <span>Let&apos;s Talk</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>

            {/* Mobile Menu Hamburger Button */}
            <button
              className={`mobile-toggle ${mobileMenuOpen ? "open" : ""}`}
              id="mobileToggle"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobileMenu"
              onClick={toggleMenu}
            >
              <span className="hamburger-line" />
              <span className="hamburger-line" />
              <span className="hamburger-line" />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`mobile-menu-drawer ${mobileMenuOpen ? "open" : ""}`}
        id="mobileMenu"
        aria-label="Mobile Navigation"
      >
        <a
          href="#home"
          className={`nav-link ${activeSection === "home" ? "active" : ""}`}
          onClick={closeMenu}
        >
          Home
        </a>
        <a
          href="#about"
          className={`nav-link ${activeSection === "about" ? "active" : ""}`}
          onClick={closeMenu}
        >
          About Me
        </a>
        <a
          href="#services"
          className={`nav-link ${activeSection === "services" ? "active" : ""}`}
          onClick={closeMenu}
        >
          Services
        </a>
        <a
          href="#projects"
          className={`nav-link ${activeSection === "projects" ? "active" : ""}`}
          onClick={closeMenu}
        >
          Projects
        </a>
        <a
          href="#contact"
          className={`nav-link ${activeSection === "contact" ? "active" : ""}`}
          onClick={closeMenu}
        >
          Contact
        </a>
        <a
          href="#contact"
          className="btn-cta"
          style={{ marginTop: "0.5rem" }}
          onClick={closeMenu}
        >
          Let&apos;s Talk ✨
        </a>
      </div>
    </header>
  );
}
