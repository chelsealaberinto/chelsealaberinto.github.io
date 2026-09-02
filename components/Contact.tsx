import Image from "next/image";

export default function Contact() {
  return (
    <section className="contact-section section-padding" id="contact" aria-label="Contact and Collaboration">
      <div className="contact-glow" aria-hidden="true" />

      <div className="site-container">
        <div className="contact-content-center reveal-on-scroll">
          <div className="status-indicator-badge">
            <span className="pulse-dot" aria-hidden="true" />
            <span>Available for freelance projects &amp; commissions</span>
          </div>

          <h2 className="contact-headline">
            Let&apos;s make something <span style={{ textDecoration: "underline" }}>extraordinary</span> together.
          </h2>

          <p className="contact-lead">
            Have a project in mind, need custom event stationery, an animated video invitation, or a
            creative design partner? Let’s chat and bring your vision to life!
          </p>

          {/* Contact Cards Grid */}
          <div className="contact-cards-grid">
            {/* Phone */}
            <a
              href="tel:09944003121"
              className="contact-method-card"
              aria-label="Call Chelsea Laberinto at 09944003121"
            >
              <div className="contact-icon-box" aria-hidden="true">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <div className="contact-method-label">Direct Phone / SMS</div>
                <div className="contact-method-value">09944003121</div>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:laberintochelsea@gmail.com"
              className="contact-method-card"
              aria-label="Email Chelsea Laberinto at laberintochelsea@gmail.com"
            >
              <div className="contact-icon-box" aria-hidden="true">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <div className="contact-method-label">Email Inbox</div>
                <div className="contact-method-value">laberintochelsea@gmail.com</div>
              </div>
            </a>
          </div>

          {/* Social Links */}
          <div className="hero-socials" style={{ marginTop: "1.5rem" }}>
            <a
              href="https://www.facebook.com/sea.laberinto/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              aria-label="Facebook Profile"
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
              aria-label="GitHub Profile"
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
              aria-label="LinkedIn Profile"
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
              aria-label="Instagram Profile"
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
      </div>
    </section>
  );
}
