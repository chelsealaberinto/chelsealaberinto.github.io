"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Project } from "@/types/project";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  const isIframe =
    project.actionType === "iframe" &&
    project.liveUrl &&
    project.liveUrl.startsWith("http");

  return (
    <div
      className="project-modal active"
      id="projectModal"
      role="dialog"
      aria-modal="true"
      aria-hidden="false"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="modal-content-box">
        <button
          className="modal-close-btn"
          id="modalCloseBtn"
          aria-label="Close Project Details Dialog"
          onClick={onClose}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            aria-hidden="true"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="modal-media-holder" id="modalMediaHolder">
          {isIframe ? (
            <iframe
              src={project.liveUrl}
              title={`${project.title} Preview Frame`}
              loading="lazy"
              style={{ width: "100%", height: "100%", border: 0 }}
            />
          ) : (
            <Image
              src={project.image}
              alt={`${project.title} Showcase`}
              width={800}
              height={500}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              priority
            />
          )}
        </div>

        <div className="modal-body">
          <div className="modal-header-meta">
            <span className="modal-category-badge" id="modalCategoryBadge">
              {project.categoryLabel}
            </span>
            <span
              style={{
                fontSize: "0.85rem",
                color: "var(--text-muted)",
                fontWeight: 700,
              }}
              id="modalYear"
            >
              {project.year || "2025"}
            </span>
          </div>

          <h3 className="modal-title" id="modalTitle">
            {project.title}
          </h3>
          <p className="modal-description" id="modalDescription">
            {project.longDescription || project.description}
          </p>

          <div className="modal-details-grid">
            <div className="modal-detail-item">
              <h6>Client / Scope</h6>
              <p id="modalClient">{project.client || "Boutique Commission"}</p>
            </div>
            <div className="modal-detail-item">
              <h6>Deliverables &amp; Tools</h6>
              <div id="modalTags" style={{ marginTop: "0.35rem" }}>
                {project.tags.map((tag) => (
                  <span key={tag} className="p-tag" style={{ marginRight: "0.35rem" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="modal-footer-actions">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                id="modalLiveActionBtn"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta"
                style={{ fontSize: "0.92rem", padding: "0.65rem 1.45rem" }}
              >
                <span>
                  {project.liveUrl.startsWith("http")
                    ? "Launch Live Showcase"
                    : "View Full Media"}
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
