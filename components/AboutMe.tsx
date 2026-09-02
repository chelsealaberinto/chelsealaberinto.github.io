import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="about-section section-padding" id="about" aria-label="About Chelsea Laberinto">
      <div className="site-container">
        <div className="section-header">
          <span className="section-badge badge-purple">About Me</span>
          <h2 className="section-title">Turning Creative Visions Into Reality</h2>
          <p className="section-subtitle">
            A designer and creative freelancer dedicated to crafting polished, engaging visuals tailored to every client’s unique story.
          </p>
        </div>

        <div className="about-grid">
          {/* Main Story Card */}
          <article className="about-card-main reveal-on-scroll">
            <p className="about-lead">
              Hi, I’m <span className="text-accent">Chelsea (Sea)!</span> ✨
            </p>
            <p className="about-text">
              I’m a creative freelancer passionate about turning ideas into thoughtful, polished, and
              engaging designs. I create branding materials, social media graphics, digital products,
              presentations, and business creatives tailored to each client’s needs. Let’s bring your
              ideas to life through design.
            </p>
            <p className="about-text">
              Currently an Information Technology student at the Polytechnic University of the
              Philippines, I bring a unique blend of technical precision and artistic intuition to every
              project. Whether it’s an animated video invitation with musical rhythm, a luxury wedding
              stationery suite, or clean web showcases, I design with heart, attention to detail, and a
              boutique flair.
            </p>

            {/* Core Pillars with Mood Board Color Accents */}
            <div className="pillars-grid">
              <div className="pillar-item">
                <div className="pillar-icon" aria-hidden="true">💡</div>
                <h3 className="pillar-title">Intentional</h3>
                <p className="pillar-desc">Designs aligned with your goals &amp; brand voice</p>
              </div>
              <div className="pillar-item">
                <div className="pillar-icon" aria-hidden="true">🌸</div>
                <h3 className="pillar-title">Boutique Style</h3>
                <p className="pillar-desc">Clean, playful, and elegantly balanced</p>
              </div>
              <div className="pillar-item">
                <div className="pillar-icon" aria-hidden="true">✨</div>
                <h3 className="pillar-title">Pixel-Perfect</h3>
                <p className="pillar-desc">Print-ready vectors and crisp digital assets</p>
              </div>
            </div>

            {/* Skills & Tools Pill Cloud */}
            <div className="skills-group">
              <h3 className="skills-title">
                <span>🛠️ Tools &amp; Specialties</span>
              </h3>
              <div className="pill-cloud">
                <span className="skill-pill">🎨 Figma</span>
                <span className="skill-pill pill-purple">🖌️ Adobe Illustrator</span>
                <span className="skill-pill pill-purple">🖼️ Photoshop</span>
                <span className="skill-pill pill-orange">✨ Canva Pro</span>
                <span className="skill-pill pill-orange">🎬 Motion &amp; Video Reels</span>
                <span className="skill-pill pill-olive">🌐 Web &amp; UI Design</span>
                <span className="skill-pill pill-yellow">💻 HTML5 / CSS3 / JS</span>
                <span className="skill-pill pill-purple">🏷️ Brand Identity</span>
                <span className="skill-pill pill-olive">📜 Event Stationery</span>
                <span className="skill-pill pill-yellow">📊 Pitch Decks</span>
              </div>
            </div>
          </article>

          {/* Sidebar: Education & Credentials */}
          <aside className="about-sidebar-cards">
            {/* Education Card */}
            <div className="info-card reveal-on-scroll">
              <div className="card-header-with-icon">
                <div className="icon-box-accent" aria-hidden="true">🎓</div>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 700 }}>Education &amp; Honors</h3>
              </div>

              <div className="education-item">
                <Image
                  src="/assets/PUPLogo.png"
                  alt="Polytechnic University of the Philippines Official Seal"
                  width={56}
                  height={56}
                  className="pup-logo"
                />
                <div>
                  <h4 className="edu-title">Polytechnic University of the Philippines</h4>
                  <div className="edu-sub">Bachelor of Science in Information Technology</div>
                  <div className="edu-campus">Sto. Tomas Campus</div>
                </div>
              </div>

              {/* Academic Timeline */}
              <ul className="timeline-list">
                <li className="timeline-item">
                  <strong>President’s Lister</strong> — 1st &amp; 2nd Sem, A.Y. 2024–2025
                </li>
                <li className="timeline-item">
                  <strong>President’s Lister &amp; Dean’s Lister</strong> — A.Y. 2023–2024
                </li>
                <li className="timeline-item">
                  <strong>With Honors</strong> — 2021–2023
                </li>
                <li className="timeline-item">
                  <strong>With High Honors</strong> — 2017–2021
                </li>
              </ul>

              {/* Leadership */}
              <div
                style={{
                  marginTop: "1.25rem",
                  paddingTop: "1rem",
                  borderTop: "1.5px solid var(--border-light)",
                }}
              >
                <h4
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: "var(--text-dark)",
                    marginBottom: "0.5rem",
                  }}
                >
                  Leadership &amp; Involvement
                </h4>
                <p style={{ fontSize: "0.88rem", color: "var(--text-body)", marginBottom: "0.25rem" }}>
                  • <strong>Computer Society Deputy Secretary</strong> (A.Y. 2024–2025)
                </p>
                <p style={{ fontSize: "0.88rem", color: "var(--text-body)" }}>
                  • <strong>BSIT 2-1 Class Treasurer</strong> (A.Y. 2024–2025)
                </p>
              </div>
            </div>

            {/* Credentials Card */}
            <div className="info-card reveal-on-scroll">
              <div className="card-header-with-icon">
                <div className="icon-box-accent purple" aria-hidden="true">📜</div>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 700 }}>Verified Credentials</h3>
              </div>

              <ul className="credentials-list">
                <li className="credential-item">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span><strong>I2CS Update 2025</strong> — Issued by I2CS Organization</span>
                </li>
                <li className="credential-item">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span><strong>Data Science Essentials with Python (v1.2)</strong> — DataCamp</span>
                </li>
                <li className="credential-item">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span><strong>GenLit (General Literacy)</strong> — Pinas Forward Academy</span>
                </li>
                <li className="credential-item">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span><strong>A-SYS Official Program Certificate</strong> — A-SYS Organization</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
