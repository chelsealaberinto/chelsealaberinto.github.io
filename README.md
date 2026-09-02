# Sea Studio — Freelance Creative Portfolio

Official portfolio of **Sea (Chelsea Laberinto)** — Boutique Creative Designer specializing in video invitations, bespoke event stationery, menu & brand identity, social media kits, presentations, and web design.

Built with **Next.js (App Router)**, **TypeScript**, and modern **Vanilla CSS**. Ready for seamless deployment on **Vercel**.

---

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI & Styling**: Custom Modular CSS with CSS Custom Properties & Responsive Grid
- **Typography**: Google Fonts (`Fredoka` & `Nunito`) optimized with `next/font/google`
- **Deployment**: [Vercel](https://vercel.com/) (Zero Config)

---

## 🛠️ Local Development Setup

### 1. Prerequisites
Ensure [Node.js](https://nodejs.org/) (v18.17+ or v20+) and npm are installed.

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 4. Build for Production
```bash
npm run build
```

### 5. Run Production Server Locally
```bash
npm start
```

---

## 🌐 Deploying to Vercel

This Next.js application is pre-configured for zero-config deployment on Vercel:

1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "Convert portfolio to Next.js App Router"
   git push origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository `chelsealaberinto.github.io`.
4. Vercel will automatically detect Next.js with all default settings. Click **"Deploy"**.

---

## 📂 Project Structure

```
├── app/
│   ├── globals.css        # Core design system tokens, typography, and styles
│   ├── layout.tsx         # Root layout with fonts, metadata, and JSON-LD schema
│   ├── page.tsx           # Single-page application orchestrating all sections
│   ├── robots.ts          # Next.js dynamic robots.txt route
│   └── sitemap.ts         # Next.js dynamic sitemap.xml route
├── components/
│   ├── Navbar.tsx         # Sticky navigation with mobile drawer & scrollspy
│   ├── Hero.tsx           # Introduction, CTA, socials, stickers & parallax
│   ├── Carousel.tsx       # Reusable interactive featured highlights carousel
│   ├── AboutMe.tsx        # Story, pillars, tools cloud, education & credentials
│   ├── Services.tsx       # 7 bespoke service cards with 5-color theme accents
│   ├── Projects.tsx       # Filterable portfolio showcase with dynamic tabs
│   ├── ProjectModal.tsx   # Project details lightbox modal (images & live iframe)
│   ├── Contact.tsx        # Hot Pink solid block contact section with direct links
│   ├── Footer.tsx         # Brand footer with smooth back-to-top button
│   └── ScrollObserver.tsx # IntersectionObserver for scroll animations & scrollspy
├── data/
│   └── projects.ts        # Type-safe project showcases repository
├── types/
│   └── project.ts         # TypeScript interfaces for projects and filters
├── public/
│   └── assets/            # Static images, logos, mockups, and social icons
├── .env.example           # Template for environment variables
└── README.md              # Project documentation and setup guide
```

---

## 📜 License

Created with 💖 by [Chelsea Laberinto (Sea)](https://chelsealaberinto.github.io/). All rights reserved.
