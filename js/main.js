/**
 * ==========================================================================
 * SEA STUDIO — PORTFOLIO MAIN JAVASCRIPT
 * Author: Chelsea Laberinto (Sea)
 * Description: Interactive behaviors, featured carousel, extensible project
 *              showcase, modal previews, scroll reveal, and accessible parallax.
 * ==========================================================================
 */

"use strict";

// --------------------------------------------------------------------------
// 01. PROJECTS & PORTFOLIO DATA (Extensible Data Store)
// --------------------------------------------------------------------------
/**
 * Project repository. To add new projects in the future, simply push an object
 * to this array with corresponding metadata.
 */
const projectsData = [
  {
    id: "video-invite-golden",
    title: "The Golden Gala Animated Video Invitation",
    category: "invitations",
    categoryLabel: "Video Invitations",
    image: "assets/mockup_video_invite.jpg",
    description: "Dynamic motion invitation reel featuring elegant typography, sparkling particle effects, and music-synced transitions.",
    longDescription: "A custom animated motion invitation tailored for a grand gala celebration. Designed for mobile-first distribution across Instagram Reels, WhatsApp, and iMessage with fluid animations, glowing gold sparkles, and synchronized ambient background music.",
    tags: ["Motion Graphics", "Video Reel", "Canva", "After Effects"],
    client: "Luxury Event Client",
    year: "2025",
    isFeatured: true,
    liveUrl: "assets/mockup_video_invite.jpg",
    actionType: "image"
  },
  {
    id: "stationery-charlotte",
    title: "Charlotte's Birthday & Event Stationery Suite",
    category: "invitations",
    categoryLabel: "Invitations & Stationery",
    image: "assets/mockup_invitations.jpg",
    description: "Bespoke print & digital invitation suite featuring delicate botanical illustrations, gold foil typography, and RSVP cards.",
    longDescription: "An artisanal stationery suite crafted for an intimate milestone birthday celebration. Includes custom typography, hand-curated botanical floral accents, print-ready gold foil stamping vectors, matching RSVP cards, and personalized envelope seals.",
    tags: ["Print & Digital", "Floral Design", "Typography", "Illustrator"],
    client: "Private Milestone Soirée",
    year: "2025",
    isFeatured: true,
    liveUrl: "assets/mockup_invitations.jpg",
    actionType: "image"
  },
  {
    id: "branding-bloom-bough",
    title: "Bloom & Bough Cafe & Bistro Brand Identity",
    category: "branding",
    categoryLabel: "Menu & Brand Identity",
    image: "assets/mockup_menu_branding.jpg",
    description: "Complete visual identity, arched table menus, specialty coffee cups, and minimal price lists for a modern botanical bistro.",
    longDescription: "Comprehensive brand identity system for 'Bloom & Bough' cafe. The deliverable encompassed the primary logo, earthy color palette, custom illustrated botanical monogram, arched food menu cards, coffee packaging, and stationery assets.",
    tags: ["Branding", "Menu Design", "Figma", "Print Collateral"],
    client: "Bloom & Bough Bistro",
    year: "2024",
    isFeatured: true,
    liveUrl: "assets/mockup_menu_branding.jpg",
    actionType: "image"
  },
  {
    id: "social-brandify-kit",
    title: "Brandify Studio Social Media Content Kit",
    category: "branding",
    categoryLabel: "Social Media Design",
    image: "assets/mockup_social_media.jpg",
    description: "Curated cohesive Instagram carousel layouts, daily inspiration templates, and story mockups with playful organic shapes.",
    longDescription: "A turnkey 30+ template social media design kit created for boutique lifestyle and creative brands. Features customizable Canva & Figma layouts, organic wavy shapes, vibrant pastel tones, engaging call-to-action badges, and cohesive typography guidelines.",
    tags: ["Social Media", "Carousels", "Canva", "Content Strategy"],
    client: "Boutique Creator Agency",
    year: "2025",
    isFeatured: true,
    liveUrl: "assets/mockup_social_media.jpg",
    actionType: "image"
  },
  {
    id: "deck-lumina-pitch",
    title: "Lumina Studio Executive Pitch Deck",
    category: "decks",
    categoryLabel: "Presentation Design",
    image: "assets/mockup_presentation.jpg",
    description: "Sleek executive keynote deck featuring custom data visualizations, growth infographics, and modern frosted glass aesthetics.",
    longDescription: "A high-stakes corporate pitch deck designed to articulate value proposition and metrics with clarity and elegance. Built with modern typography hierarchy, minimalist infographic charts, and glassmorphic slide layouts to captivate investors and clients.",
    tags: ["Pitch Deck", "Keynote", "Data Visualization", "Figma"],
    client: "Lumina Studio Tech",
    year: "2025",
    isFeatured: true,
    liveUrl: "assets/mockup_presentation.jpg",
    actionType: "image"
  },
  {
    id: "web-disney-api",
    title: "Chelsea's Disney Movies API Showcase",
    category: "web",
    categoryLabel: "Web & Apps",
    image: "assets/mockup_social_media.jpg",
    description: "Interactive web application consuming Disney API with dynamic character cards, movie filtering, and fluid animations.",
    longDescription: "A playful web application built to explore the magical universe of Disney films and characters. Features asynchronous API data fetching, real-time search, responsive character grid, and interactive modals.",
    tags: ["JavaScript", "REST API", "CSS3", "Bootstrap"],
    client: "Creative Web Project",
    year: "2024",
    isFeatured: false,
    liveUrl: "https://chelsealaberinto.github.io/chelsea-disney-api.github.io/",
    actionType: "iframe"
  },
  {
    id: "web-hardware-showcase",
    title: "Chelsea's Hardware & Tech Showcase",
    category: "web",
    categoryLabel: "Web & Apps",
    image: "assets/mockup_presentation.jpg",
    description: "Curated interactive product showcase highlighting modern computing hardware, specifications, and design aesthetics.",
    longDescription: "A sleek modern showcase highlighting top-tier tech gadgets, mechanical keyboards, and creative workstation hardware. Built with responsive cards and clean interactive preview layouts.",
    tags: ["HTML5", "CSS Grid", "UI Design", "Responsive"],
    client: "Personal Showcase",
    year: "2024",
    isFeatured: false,
    liveUrl: "https://chelsealaberinto.github.io/chelsea-showcase.github.io/",
    actionType: "iframe"
  },
  {
    id: "web-beaches-showcase",
    title: "Chelsea's Beaches & Coastal Showcase",
    category: "web",
    categoryLabel: "Web & Apps",
    image: "assets/mockup_invitations.jpg",
    description: "Visual travel showcase celebrating scenic coastal destinations, tropical beaches, and photography galleries.",
    longDescription: "An immersive visual journey through picturesque coastal spots and tropical escapes. Features smooth photo galleries, lightbox transitions, and responsive travel cards.",
    tags: ["Web Design", "Photography", "CSS Animations"],
    client: "Travel Showcase Project",
    year: "2024",
    isFeatured: false,
    liveUrl: "https://chelsealaberinto.github.io/chelsea-beaches-showcase.github.io/",
    actionType: "iframe"
  },
  {
    id: "web-princesses-gallery",
    title: "Chelsea's Princesses Gallery",
    category: "web",
    categoryLabel: "Web & Apps",
    image: "assets/mockup_video_invite.jpg",
    description: "Enchanting digital gallery celebrating iconic storybook princesses with curated color palettes and character bios.",
    longDescription: "A digital storybook gallery exploring beloved princess characters. Built with soft pastel cards, whimsical hover animations, and responsive interactive grids.",
    tags: ["Interactive Gallery", "CSS Flexbox", "Web Design"],
    client: "Storybook Showcase",
    year: "2024",
    isFeatured: false,
    liveUrl: "https://chelsealaberinto.github.io/chelsea-gallery-showcase.github.io/",
    actionType: "iframe"
  }
];

// --------------------------------------------------------------------------
// 02. APP LIFECYCLE INITIALIZER
// --------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initFeaturedCarousel();
  initProjectsGrid();
  initProjectModal();
  initContactForm();
  initScrollSpy();
  initScrollAnimations();
  initParallaxEffects();
});

// --------------------------------------------------------------------------
// 03. NAVBAR & MOBILE MENU MODULE
// --------------------------------------------------------------------------
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const mobileToggle = document.getElementById("mobileToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll(".nav-link") : [];

  if (!navbar) return;

  // Header scroll state toggle
  const handleScrollState = () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScrollState, { passive: true });
  handleScrollState();

  // Mobile Drawer Toggle
  if (mobileToggle && mobileMenu) {
    const toggleMenu = (open) => {
      const isCurrentlyOpen = mobileMenu.classList.contains("open");
      const shouldOpen = open !== undefined ? open : !isCurrentlyOpen;
      
      mobileMenu.classList.toggle("open", shouldOpen);
      mobileToggle.classList.toggle("open", shouldOpen);
      mobileToggle.setAttribute("aria-expanded", String(shouldOpen));
    };

    mobileToggle.addEventListener("click", () => toggleMenu());

    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => toggleMenu(false));
    });

    document.addEventListener("click", (e) => {
      if (!navbar.contains(e.target) && !mobileMenu.contains(e.target)) {
        toggleMenu(false);
      }
    });
  }
}

// --------------------------------------------------------------------------
// 04. FEATURED CAROUSEL MODULE
// --------------------------------------------------------------------------
function initFeaturedCarousel() {
  const track = document.getElementById("carouselTrack");
  const prevBtn = document.getElementById("carouselPrev");
  const nextBtn = document.getElementById("carouselNext");
  const dotsContainer = document.getElementById("carouselDots");
  const carouselContainer = document.getElementById("featuredCarousel");

  if (!track) return;

  const featuredItems = projectsData.filter((p) => p.isFeatured);
  track.innerHTML = "";

  featuredItems.forEach((project) => {
    const slide = document.createElement("div");
    slide.className = "carousel-slide";
    slide.innerHTML = `
      <div class="featured-card" data-project-id="${project.id}">
        <div class="featured-card-media">
          <img src="${project.image}" alt="${project.title} Preview" loading="lazy">
          <span class="featured-category-badge">${project.categoryLabel}</span>
        </div>
        <div class="featured-card-body">
          <h4 class="featured-card-title">${project.title}</h4>
          <p class="featured-card-desc">${project.description}</p>
          <div class="featured-card-footer">
            <span>Explore Work</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>
      </div>
    `;

    slide.querySelector(".featured-card").addEventListener("click", () => {
      openProjectModal(project);
    });

    track.appendChild(slide);
  });

  let currentIndex = 0;
  let autoPlayTimer = null;
  const totalSlides = featuredItems.length;

  const getVisibleSlidesCount = () => {
    if (window.innerWidth <= 640) return 1;
    if (window.innerWidth <= 992) return 2;
    return 3;
  };

  const getMaxIndex = () => Math.max(0, totalSlides - getVisibleSlidesCount());

  const renderDots = () => {
    if (!dotsContainer) return;
    dotsContainer.innerHTML = "";
    const maxIdx = getMaxIndex();
    for (let i = 0; i <= maxIdx; i++) {
      const dot = document.createElement("button");
      dot.className = `carousel-dot ${i === currentIndex ? "active" : ""}`;
      dot.setAttribute("aria-label", `Go to slide ${i + 1}`);
      dot.addEventListener("click", () => {
        goToSlide(i);
        resetAutoPlay();
      });
      dotsContainer.appendChild(dot);
    }
  };

  const updateSlidePosition = () => {
    const slides = track.querySelectorAll(".carousel-slide");
    if (!slides.length) return;

    const slideWidth = slides[0].getBoundingClientRect().width;
    const gap = 24;
    const offset = currentIndex * (slideWidth + gap);

    track.style.transform = `translateX(-${offset}px)`;

    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll(".carousel-dot");
      dots.forEach((dot, idx) => {
        dot.classList.toggle("active", idx === currentIndex);
      });
    }
  };

  const goToSlide = (index) => {
    const maxIdx = getMaxIndex();
    if (index < 0) {
      currentIndex = maxIdx;
    } else if (index > maxIdx) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }
    updateSlidePosition();
  };

  const nextSlide = () => goToSlide(currentIndex + 1);
  const prevSlide = () => goToSlide(currentIndex - 1);

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      nextSlide();
      resetAutoPlay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      prevSlide();
      resetAutoPlay();
    });
  }

  const startAutoPlay = () => {
    if (autoPlayTimer) clearInterval(autoPlayTimer);
    autoPlayTimer = setInterval(nextSlide, 4500);
  };

  const stopAutoPlay = () => {
    if (autoPlayTimer) clearInterval(autoPlayTimer);
  };

  const resetAutoPlay = () => {
    stopAutoPlay();
    startAutoPlay();
  };

  if (carouselContainer) {
    carouselContainer.addEventListener("mouseenter", stopAutoPlay);
    carouselContainer.addEventListener("mouseleave", startAutoPlay);
  }

  // Touch gesture support
  let touchStartX = 0;
  let touchEndX = 0;

  track.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
      stopAutoPlay();
    },
    { passive: true }
  );

  track.addEventListener(
    "touchend",
    (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const swipeThreshold = 45;
      if (touchEndX < touchStartX - swipeThreshold) nextSlide();
      if (touchEndX > touchStartX + swipeThreshold) prevSlide();
      startAutoPlay();
    },
    { passive: true }
  );

  window.addEventListener("resize", () => {
    renderDots();
    goToSlide(Math.min(currentIndex, getMaxIndex()));
  });

  renderDots();
  updateSlidePosition();
  startAutoPlay();
}

// --------------------------------------------------------------------------
// 05. PROJECTS GRID & CATEGORY FILTER MODULE
// --------------------------------------------------------------------------
function initProjectsGrid() {
  const grid = document.getElementById("projectsGrid");
  const filterBtns = document.querySelectorAll(".filter-btn");

  if (!grid) return;

  const renderProjects = (filter = "all") => {
    grid.innerHTML = "";

    const filteredList =
      filter === "all"
        ? projectsData
        : projectsData.filter((p) => p.category === filter);

    if (filteredList.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem;">
          <p style="font-size: 1.1rem; color: var(--text-secondary);">No projects found in this category.</p>
        </div>
      `;
      return;
    }

    filteredList.forEach((project, index) => {
      const card = document.createElement("div");
      card.className = "project-card reveal-on-scroll";
      card.style.transitionDelay = `${index * 0.08}s`;

      const tagsHtml = project.tags
        .map((t) => `<span class="p-tag">${t}</span>`)
        .join("");

      const isExternalLink =
        project.liveUrl && project.liveUrl.startsWith("http");

      card.innerHTML = `
        <div class="project-thumbnail-wrapper">
          <img src="${project.image}" alt="${project.title} - Sea Studio" class="project-thumbnail" loading="lazy">
          <span class="project-category-tag">${project.categoryLabel}</span>
        </div>
        <div class="project-body">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-description">${project.description}</p>
          <div class="project-tags">
            ${tagsHtml}
          </div>
          <div class="project-actions">
            <button class="btn-project btn-project-primary btn-view-project" data-id="${project.id}" aria-label="View details for ${project.title}">
              <span>View Details</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
            ${
              isExternalLink
                ? `
              <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-project btn-project-secondary" aria-label="Visit live website for ${project.title}">
                <span>Visit Live</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            `
                : ""
            }
          </div>
        </div>
      `;

      card.querySelector(".btn-view-project").addEventListener("click", () => {
        openProjectModal(project);
      });

      grid.appendChild(card);
    });

    setTimeout(() => {
      initScrollAnimations();
    }, 50);
  };

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-filter");
      renderProjects(category);
    });
  });

  renderProjects("all");
}

// --------------------------------------------------------------------------
// 06. PROJECT LIGHTBOX MODAL MODULE
// --------------------------------------------------------------------------
function initProjectModal() {
  const modal = document.getElementById("projectModal");
  const closeBtn = document.getElementById("modalCloseBtn");

  if (!modal || !closeBtn) return;

  closeBtn.addEventListener("click", closeProjectModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeProjectModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeProjectModal();
    }
  });
}

function openProjectModal(project) {
  const modal = document.getElementById("projectModal");
  const mediaHolder = document.getElementById("modalMediaHolder");
  const categoryBadge = document.getElementById("modalCategoryBadge");
  const title = document.getElementById("modalTitle");
  const description = document.getElementById("modalDescription");
  const clientText = document.getElementById("modalClient");
  const yearText = document.getElementById("modalYear");
  const tagsHolder = document.getElementById("modalTags");
  const liveActionBtn = document.getElementById("modalLiveActionBtn");

  if (!modal) return;

  if (project.actionType === "iframe" && project.liveUrl.startsWith("http")) {
    mediaHolder.innerHTML = `<iframe src="${project.liveUrl}" title="${project.title} Preview Frame" loading="lazy" style="width:100%;height:100%;border:0;"></iframe>`;
  } else {
    mediaHolder.innerHTML = `<img src="${project.image}" alt="${project.title} Showcase" style="width:100%;height:100%;object-fit:cover;">`;
  }

  categoryBadge.textContent = project.categoryLabel;
  title.textContent = project.title;
  description.textContent = project.longDescription || project.description;
  clientText.textContent = project.client || "Creative Commission";
  yearText.textContent = project.year || "2025";

  tagsHolder.innerHTML = project.tags
    .map((t) => `<span class="p-tag">${t}</span>`)
    .join(" ");

  if (project.liveUrl) {
    liveActionBtn.style.display = "inline-flex";
    liveActionBtn.href = project.liveUrl;
    liveActionBtn.target = "_blank";
    liveActionBtn.rel = "noopener noreferrer";
    liveActionBtn.innerHTML = `
      <span>${
        project.liveUrl.startsWith("http")
          ? "Launch Live Showcase"
          : "View Full Media"
      }</span>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
      </svg>
    `;
  } else {
    liveActionBtn.style.display = "none";
  }

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  const modal = document.getElementById("projectModal");
  const mediaHolder = document.getElementById("modalMediaHolder");
  if (!modal) return;

  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";

  if (mediaHolder) {
    mediaHolder.innerHTML = "";
  }
}

// --------------------------------------------------------------------------
// 07. CONTACT FORM & CLIENT-SIDE VALIDATION
// --------------------------------------------------------------------------
function initContactForm() {
  const form = document.getElementById("contactForm");
  const feedback = document.getElementById("formFeedback");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("clientName");
    const emailInput = document.getElementById("clientEmail");
    const serviceInput = document.getElementById("clientService");
    const messageInput = document.getElementById("clientMessage");
    const submitBtn = form.querySelector(".btn-submit-form");

    const name = nameInput ? nameInput.value.trim() : "";
    const email = emailInput ? emailInput.value.trim() : "";
    const service = serviceInput ? serviceInput.value : "";
    const message = messageInput ? messageInput.value.trim() : "";

    if (!name || !email || !message) {
      alert("Please fill in your name, email, and message to proceed.");
      return;
    }

    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" style="animation: spin 0.8s linear infinite;">
        <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
        <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
      </svg>
      <span>Sending Message...</span>
    `;

    const subject = encodeURIComponent(
      `Creative Project Inquiry [${service}] from ${name}`
    );
    const body = encodeURIComponent(
      `Hi Sea,\n\nMy name is ${name} (${email}).\nI am interested in your ${service} service.\n\nProject details:\n${message}\n\nBest regards,\n${name}`
    );
    const mailtoUrl = `mailto:laberintochelsea@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;

      if (feedback) {
        feedback.className = "form-feedback success";
        feedback.innerHTML = `✨ Thank you, <strong>${name}</strong>! Your inquiry has been prepared. Opening your mail client now...`;
        feedback.style.display = "block";
      }

      window.location.href = mailtoUrl;
      form.reset();
    }, 850);
  });
}

// --------------------------------------------------------------------------
// 08. SCROLLSPY (Active Navigation Links)
// --------------------------------------------------------------------------
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id], header[id]");
  const navLinks = document.querySelectorAll(".nav-link[href^='#']");

  if (!sections.length || !navLinks.length) return;

  const updateActiveLink = () => {
    const scrollPosition = window.scrollY + 120;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollPosition >= top && scrollPosition < top + height) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  };

  window.addEventListener("scroll", updateActiveLink, { passive: true });
  updateActiveLink();
}

// --------------------------------------------------------------------------
// 09. SCROLL REVEAL ANIMATIONS
// --------------------------------------------------------------------------
function initScrollAnimations() {
  const revealElements = document.querySelectorAll(".reveal-on-scroll:not(.revealed)");

  if (!("IntersectionObserver" in window)) {
    revealElements.forEach((el) => el.classList.add("revealed"));
    return;
  }

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
      rootMargin: "0px 0px -30px 0px"
    }
  );

  revealElements.forEach((el) => observer.observe(el));
}

// --------------------------------------------------------------------------
// 10. SUBTLE PARALLAX EFFECT (Accessibility Aware)
// --------------------------------------------------------------------------
function initParallaxEffects() {
  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) return;

  const blob1 = document.querySelector(".hero-glow-blob");
  const blob2 = document.querySelector(".hero-glow-blob-2");

  if (!blob1 && !blob2) return;

  let ticking = false;

  window.addEventListener(
    "scroll",
    () => {
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
    },
    { passive: true }
  );
}
