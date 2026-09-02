import Image from "next/image";

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="site-container">
        <div className="footer-top">
          <div className="footer-brand">
            <Image
              src="/assets/sea-logo.png"
              alt="Sea Studio Logo Icon"
              width={40}
              height={40}
              style={{
                borderRadius: "50%",
                background: "#fff",
                padding: "2px",
              }}
            />
            <div>
              <h3
                style={{
                  color: "#ffffff",
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  marginBottom: 0,
                }}
              >
                Sea Studio
              </h3>
              <span
                style={{
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.85)",
                  fontWeight: 600,
                }}
              >
                Chelsea Laberinto • Digital Creative
              </span>
            </div>
          </div>

          <a href="#home" className="btn-back-top" aria-label="Back to top of page">
            <span>Back to Top</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              aria-hidden="true"
            >
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
