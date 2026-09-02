"use client";

import Image from "next/image";
import Carousel from "@/components/Carousel";
import { Project } from "@/types/project";
import { projectsData } from "@/data/projects";

interface HeroProps {
  onSelectProject: (project: Project) => void;
}

export default function Hero({ onSelectProject }: HeroProps) {
  const featuredItems = projectsData.filter((p) => p.isFeatured);

  return (
    <section className="hero-section" id="home" aria-label="Hero and Introduction">
      <div className="hero-glow-blob" aria-hidden="true" />
      <div className="hero-glow-blob-2" aria-hidden="true" />

      <div className="site-container">
        <div className="hero-content-grid">
          {/* Hero Text */}
          <div className="hero-text-col">
            <div className="hero-tag">
              <span>✨ Creative Freelancer &amp; Digital Designer</span>
            </div>

            <h1 className="hero-title">
              Hello!<br />
              I&apos;m <span className="gradient-text">Sea</span>
            </h1>

            <p className="hero-bio">
              Hi, I’m <strong>Chelsea!</strong> Turning ideas into thoughtful, polished, and engaging
              designs. From custom event stationery and animated video invitations to brand identities,
              presentations, and sleek digital experiences.
            </p>

            <div className="hero-cta-group">
              <a href="#projects" className="btn-cta">
                <span>Explore Projects</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <polyline points="19 12 12 19 5 12" />
                </svg>
              </a>

              <a href="#contact" className="btn-cta btn-cta-outline">
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Social Quick Links */}
            <div className="hero-socials">
              <a
                href="https://www.facebook.com/sea.laberinto/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Sea on Facebook"
                title="Facebook"
              >
                <Image
                  src="/assets/facebook.png"
                  alt="Facebook Icon Logo"
                  width={22}
                  height={22}
                />
              </a>
              <a
                href="https://github.com/chelsealaberinto"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Sea on GitHub"
                title="GitHub"
              >
                <Image
                  src="/assets/github.png"
                  alt="GitHub Icon Logo"
                  width={22}
                  height={22}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/chelsea-laberinto-b40422372"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Sea on LinkedIn"
                title="LinkedIn"
              >
                <Image
                  src="/assets/linkedin.png"
                  alt="LinkedIn Icon Logo"
                  width={22}
                  height={22}
                />
              </a>
              <a
                href="https://www.instagram.com/chelsealaberinto?igsi=dWh0YmdmMzllZzJy"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Sea on Instagram"
                title="Instagram"
              >
                <Image
                  src="/assets/instagram.png"
                  alt="Instagram Icon Logo"
                  width={22}
                  height={22}
                />
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Hero Portrait Image Card (Sticker / Decal Style) */}
          <div className="hero-portrait-wrapper">
            <div className="portrait-card">
              <Image
                src="/assets/chelseapfp.png"
                alt="Portrait photo of Chelsea Laberinto (Sea), Creative Freelancer and Designer"
                width={380}
                height={460}
                priority
                className="portrait-img"
              />
              <div className="badge-floating top-left">
                <span>🌸</span>
                <span>100% Bespoke Craft</span>
              </div>
              <div className="badge-floating bottom-right">
                <span>🎨</span>
                <span>Digital Creatives</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Featured Work Carousel Component */}
        <Carousel items={featuredItems} onSelectProject={onSelectProject} />
      </div>
    </section>
  );
}
