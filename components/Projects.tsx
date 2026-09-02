"use client";

import { useState } from "react";
import Image from "next/image";
import { Project, ProjectCategory } from "@/types/project";
import { projectsData } from "@/data/projects";

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

const filterTabs: { label: string; filter: ProjectCategory }[] = [
  { label: "All Works", filter: "all" },
  { label: "Invitations & Motion", filter: "invitations" },
  { label: "Branding & Social", filter: "branding" },
  { label: "Presentations & Decks", filter: "decks" },
  { label: "Websites & Apps", filter: "web" },
];

export default function Projects({ onSelectProject }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");

  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section className="projects-section section-padding" id="projects" aria-label="Portfolio Projects">
      <div className="site-container">
        <div className="section-header">
          <span className="section-badge">Portfolio</span>
          <h2 className="section-title">Selected Works &amp; Showcases</h2>
          <p className="section-subtitle">
            Explore a curated collection of creative designs, invitations, branding kits, and web showcases.
          </p>
        </div>

        {/* Filterable Tabs */}
        <div className="filter-tabs-wrapper" role="tablist" aria-label="Project Categories">
          {filterTabs.map((tab) => (
            <button
              key={tab.filter}
              className={`filter-btn ${activeFilter === tab.filter ? "active" : ""}`}
              data-filter={tab.filter}
              role="tab"
              aria-selected={activeFilter === tab.filter}
              onClick={() => setActiveFilter(tab.filter)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Projects Grid */}
        <div className="projects-grid" id="projectsGrid">
          {filteredProjects.length === 0 ? (
            <div style={{ gridColumn: "1 / -1", textAlign: "center", padding: "3rem 1rem" }}>
              <p style={{ fontSize: "1.15rem", color: "var(--text-body)", fontWeight: 700 }}>
                No projects found in this category.
              </p>
            </div>
          ) : (
            filteredProjects.map((project, index) => {
              const isExternalLink =
                project.liveUrl && project.liveUrl.startsWith("http");

              return (
                <div
                  key={project.id}
                  className="project-card reveal-on-scroll"
                  style={{ transitionDelay: `${index * 0.08}s` }}
                >
                  <div className="project-thumbnail-wrapper">
                    <Image
                      src={project.image}
                      alt={`${project.title} - Sea Studio`}
                      width={600}
                      height={400}
                      className="project-thumbnail"
                      loading="lazy"
                    />
                    <span
                      className={`project-category-tag ${
                        project.tagClass || "tag-pink"
                      }`}
                    >
                      {project.categoryLabel}
                    </span>
                  </div>

                  <div className="project-body">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>

                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="p-tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="project-actions">
                      <button
                        className="btn-project btn-project-primary btn-view-project"
                        data-id={project.id}
                        aria-label={`View details for ${project.title}`}
                        onClick={() => onSelectProject(project)}
                      >
                        <span>View Details</span>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          aria-hidden="true"
                        >
                          <circle cx="11" cy="11" r="8" />
                          <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                      </button>

                      {isExternalLink && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-project btn-project-secondary"
                          aria-label={`Visit live website for ${project.title}`}
                        >
                          <span>Visit Live</span>
                          <svg
                            width="15"
                            height="15"
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
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
