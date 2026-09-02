import type { Metadata, Viewport } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-fredoka",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://chelsealaberinto.github.io"),
  title: "Sea | Freelance Creative Designer — Invitations, Video Invitations & Digital Design",
  description:
    "Official portfolio of Sea (Chelsea Laberinto) — Boutique Creative Designer specializing in video invitations, event stationery, menu & brand identity, social media kits, and web design.",
  keywords: [
    "Sea",
    "Chelsea Laberinto",
    "Freelance Creative Designer",
    "Video Invitations",
    "Event Stationery",
    "Menu Design",
    "Brand Identity",
    "PUP Sto. Tomas",
    "Graphic Design",
    "Web Portfolio",
  ],
  authors: [{ name: "Chelsea Laberinto (Sea)", url: "https://chelsealaberinto.github.io/" }],
  creator: "Chelsea Laberinto (Sea)",
  alternates: {
    canonical: "https://chelsealaberinto.github.io/",
  },
  icons: {
    icon: "/assets/sea-logo.png",
    apple: "/assets/sea-logo.png",
  },
  openGraph: {
    type: "website",
    siteName: "Sea Studio",
    title: "Sea | Freelance Creative Designer — Invitations & Digital Design",
    description:
      "Turning ideas into thoughtful, polished, and engaging designs. Video invitations, bespoke stationery, branding, presentations, and digital experiences.",
    url: "https://chelsealaberinto.github.io/",
    images: [
      {
        url: "/assets/mockup_invitations.jpg",
        width: 1200,
        height: 630,
        alt: "Sea Studio Portfolio Showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sea | Freelance Creative Designer — Invitations & Digital Design",
    description:
      "Turning ideas into thoughtful, polished, and engaging designs. Video invitations, bespoke stationery, branding, and digital experiences.",
    images: ["/assets/mockup_invitations.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Chelsea Laberinto",
  "alternateName": "Sea",
  "jobTitle": "Freelance Creative Designer & Digital Creator",
  "url": "https://chelsealaberinto.github.io/",
  "image": "https://chelsealaberinto.github.io/assets/chelseapfp.png",
  "email": "laberintochelsea@gmail.com",
  "telephone": "+639944003121",
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "Polytechnic University of the Philippines - Sto. Tomas Campus",
  },
  "sameAs": [
    "https://github.com/chelsealaberinto",
    "https://www.linkedin.com/in/chelsea-laberinto-b40422372",
    "https://www.facebook.com/sea.laberinto/",
    "https://www.instagram.com/chelsealaberinto",
  ],
  "knowsAbout": [
    "Video Invitations",
    "Event Stationery",
    "Menu Design",
    "Brand Identity",
    "Social Media Design",
    "Presentation Design",
    "UI/UX Web Design",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fredoka.variable} ${nunito.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
