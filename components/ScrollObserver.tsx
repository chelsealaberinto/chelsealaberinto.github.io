"use client";

import { useEffect } from "react";

export default function ScrollObserver() {
  useEffect(() => {
    // 1. Reveal on scroll observer
    const revealElements = document.querySelectorAll(".reveal-on-scroll:not(.revealed)");

    if (!("IntersectionObserver" in window)) {
      revealElements.forEach((el) => el.classList.add("revealed"));
    } else {
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("revealed");
              obs.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -30px 0px",
        }
      );

      revealElements.forEach((el) => observer.observe(el));
    }

    // 2. Parallax effect on hero glow blobs (Accessibility Aware)
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const blob1 = document.querySelector(".hero-glow-blob") as HTMLElement | null;
    const blob2 = document.querySelector(".hero-glow-blob-2") as HTMLElement | null;

    if (!blob1 && !blob2) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          if (scrollY < 900) {
            if (blob1) blob1.style.transform = `translate3d(0, ${scrollY * 0.18}px, 0)`;
            if (blob2) blob2.style.transform = `translate3d(0, ${scrollY * -0.12}px, 0)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
}
