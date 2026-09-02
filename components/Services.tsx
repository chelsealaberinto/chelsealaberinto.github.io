export default function Services() {
  return (
    <section className="services-section section-padding" id="services" aria-label="Creative Services">
      <div className="site-container">
        <div className="section-header">
          <span className="section-badge badge-olive">Services</span>
          <h2 className="section-title">Bespoke Design Services</h2>
          <p className="section-subtitle">
            Tailored creative packages designed with thoughtful aesthetics, harmonious palettes, and meticulous attention to detail.
          </p>
        </div>

        <div className="services-grid">
          {/* Service 1: Video Invitations (Purple Theme) */}
          <div className="service-card theme-purple reveal-on-scroll">
            <div className="service-card-icon-wrap" aria-hidden="true">🎬</div>
            <h3 className="service-card-title">Video Invitations</h3>
            <p className="service-card-desc">
              Animated motion video invitations for weddings, birthdays, debutantes, and galas with music
              synchronization, elegant typographic reveals, and gold particle effects.
            </p>
            <div className="service-tags-list">
              <span className="service-tag">Instagram Reels</span>
              <span className="service-tag">Music Sync</span>
              <span className="service-tag">Motion Graphics</span>
            </div>
            <a href="#contact" className="service-card-link">
              <span>Book This Service</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>

          {/* Service 2: Event Invitations & Stationery (Hot Pink Theme) */}
          <div className="service-card theme-pink reveal-on-scroll">
            <div className="service-card-icon-wrap" aria-hidden="true">💌</div>
            <h3 className="service-card-title">Invitations &amp; Stationery</h3>
            <p className="service-card-desc">
              Luxury print and digital invitation suites, RSVP cards, save-the-dates, wax seal elements,
              and event programs crafted with delicate botanical and minimalist aesthetics.
            </p>
            <div className="service-tags-list">
              <span className="service-tag">Wedding Suites</span>
              <span className="service-tag">RSVP &amp; Details</span>
              <span className="service-tag">Print Ready (CMYK)</span>
            </div>
            <a href="#contact" className="service-card-link">
              <span>Book This Service</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>

          {/* Service 3: Menu Design & Brand Identity (Olive Theme) */}
          <div className="service-card theme-olive reveal-on-scroll">
            <div className="service-card-icon-wrap" aria-hidden="true">☕</div>
            <h3 className="service-card-title">Menu &amp; Brand Identity</h3>
            <p className="service-card-desc">
              Modern cafe and restaurant food menus, beverage cards, coffee cup branding, table talkers,
              logo monograms, and cohesive business stationery kits.
            </p>
            <div className="service-tags-list">
              <span className="service-tag">Cafe &amp; Bistro</span>
              <span className="service-tag">Table Cards</span>
              <span className="service-tag">Brand Palettes</span>
            </div>
            <a href="#contact" className="service-card-link">
              <span>Book This Service</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>

          {/* Service 4: Social Media Design (Orange-Red Theme) */}
          <div className="service-card theme-orange-red reveal-on-scroll">
            <div className="service-card-icon-wrap" aria-hidden="true">📱</div>
            <h3 className="service-card-title">Social Media Design</h3>
            <p className="service-card-desc">
              Vibrant Instagram grid carousels, aesthetic story templates, promotional banners, Facebook
              covers, and social branding kits tailored to elevate online presence.
            </p>
            <div className="service-tags-list">
              <span className="service-tag">IG Carousels</span>
              <span className="service-tag">Story Sets</span>
              <span className="service-tag">Promo Banners</span>
            </div>
            <a href="#contact" className="service-card-link">
              <span>Book This Service</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>

          {/* Service 5: Presentation Design (Orange-Yellow Theme) */}
          <div className="service-card theme-yellow reveal-on-scroll">
            <div className="service-card-icon-wrap" aria-hidden="true">📊</div>
            <h3 className="service-card-title">Presentation Design</h3>
            <p className="service-card-desc">
              High-impact pitch decks, keynote presentations, corporate proposals, and school report
              slides designed with clarity, modern infographics, and persuasive layouts.
            </p>
            <div className="service-tags-list">
              <span className="service-tag">Investor Pitch Decks</span>
              <span className="service-tag">Infographics</span>
              <span className="service-tag">Keynote / PowerPoint</span>
            </div>
            <a href="#contact" className="service-card-link">
              <span>Book This Service</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>

          {/* Service 6: School & Academic Materials (Hot Pink Theme) */}
          <div className="service-card theme-pink reveal-on-scroll">
            <div className="service-card-icon-wrap" aria-hidden="true">🎓</div>
            <h3 className="service-card-title">School &amp; Event Materials</h3>
            <p className="service-card-desc">
              Academic research posters, visual summaries, infographics, event banners, stage backdrops,
              certificate designs, and organization collateral.
            </p>
            <div className="service-tags-list">
              <span className="service-tag">Research Posters</span>
              <span className="service-tag">Certificates</span>
              <span className="service-tag">Event Collateral</span>
            </div>
            <a href="#contact" className="service-card-link">
              <span>Book This Service</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>

          {/* Service 7: Other Digital Creatives (Purple Theme, Full Width) */}
          <div
            className="service-card theme-purple reveal-on-scroll"
            style={{ gridColumn: "1 / -1", maxWidth: "600px", margin: "0 auto", width: "100%" }}
          >
            <div className="service-card-icon-wrap" aria-hidden="true">✨</div>
            <h3 className="service-card-title">Other Digital Creatives</h3>
            <p className="service-card-desc">
              Have a custom creative project in mind? I craft bespoke digital illustrations, custom
              stickers, digital merchandise, website UI mockups, and client-tailored digital assets.
            </p>
            <div className="service-tags-list">
              <span className="service-tag">Custom Requests</span>
              <span className="service-tag">UI / Web Mockups</span>
              <span className="service-tag">Digital Stickers</span>
            </div>
            <a href="#contact" className="service-card-link">
              <span>Inquire Custom Project</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
