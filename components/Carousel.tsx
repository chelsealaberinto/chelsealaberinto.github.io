"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import { Project } from "@/types/project";

interface CarouselProps {
  items: Project[];
  onSelectProject: (project: Project) => void;
  title?: string;
  badge?: string;
}

export default function Carousel({
  items,
  onSelectProject,
  title = "Recent Studio Highlights",
  badge = "Featured Work",
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const updateVisibleCount = useCallback(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth <= 640) {
      setVisibleCount(1);
    } else if (window.innerWidth <= 992) {
      setVisibleCount(2);
    } else {
      setVisibleCount(3);
    }
  }, []);

  useEffect(() => {
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => {
      window.removeEventListener("resize", updateVisibleCount);
    };
  }, [updateVisibleCount]);

  const maxIndex = Math.max(0, items.length - visibleCount);

  const goToSlide = useCallback(
    (index: number) => {
      if (index < 0) {
        setCurrentIndex(maxIndex);
      } else if (index > maxIndex) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(index);
      }
    },
    [maxIndex]
  );

  const nextSlide = useCallback(() => {
    goToSlide(currentIndex + 1);
  }, [currentIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentIndex - 1);
  }, [currentIndex, goToSlide]);

  // Autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => clearInterval(timer);
  }, [nextSlide]);

  // Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
    const swipeThreshold = 45;
    if (touchEndX.current < touchStartX.current - swipeThreshold) {
      nextSlide();
    } else if (touchEndX.current > touchStartX.current + swipeThreshold) {
      prevSlide();
    }
  };

  // Calculate track transform
  const getTransform = () => {
    if (!trackRef.current) return `translateX(0px)`;
    const slide = trackRef.current.querySelector(".carousel-slide") as HTMLElement | null;
    if (!slide) return `translateX(0px)`;
    const slideWidth = slide.getBoundingClientRect().width;
    const gap = 24;
    const offset = currentIndex * (slideWidth + gap);
    return `translateX(-${offset}px)`;
  };

  return (
    <div
      className="featured-carousel-container"
      id="featuredCarousel"
      aria-label="Featured Works Carousel"
    >
      <div className="carousel-header">
        <div className="carousel-title-group">
          {badge && (
            <span className="section-badge" style={{ marginBottom: 0 }}>
              {badge}
            </span>
          )}
          <h2 className="carousel-title" style={{ fontSize: "1.35rem", marginBottom: 0 }}>
            {title}
          </h2>
        </div>

        <div className="carousel-controls">
          <button
            className="carousel-btn"
            id="carouselPrev"
            aria-label="Previous Featured Project"
            onClick={prevSlide}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              aria-hidden="true"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            className="carousel-btn"
            id="carouselNext"
            aria-label="Next Featured Project"
            onClick={nextSlide}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              aria-hidden="true"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Carousel Slide Track */}
      <div className="carousel-track-wrapper">
        <div
          className="carousel-track"
          ref={trackRef}
          style={{ transform: getTransform() }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {items.map((project) => (
            <div key={project.id} className="carousel-slide">
              <div
                className="featured-card"
                data-project-id={project.id}
                onClick={() => onSelectProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onSelectProject(project);
                  }
                }}
              >
                <div className="featured-card-media">
                  <Image
                    src={project.image}
                    alt={`${project.title} Preview`}
                    width={500}
                    height={320}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    loading="lazy"
                  />
                  <span className="featured-category-badge">{project.categoryLabel}</span>
                </div>
                <div className="featured-card-body">
                  <h4 className="featured-card-title">{project.title}</h4>
                  <p className="featured-card-desc">{project.description}</p>
                  <div className="featured-card-footer">
                    <span>Explore Work</span>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="carousel-indicators" aria-label="Carousel slide navigation">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <button
            key={idx}
            className={`carousel-dot ${idx === currentIndex ? "active" : ""}`}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => goToSlide(idx)}
          />
        ))}
      </div>
    </div>
  );
}
