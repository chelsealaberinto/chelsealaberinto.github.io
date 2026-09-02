"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ProjectModal from "@/components/ProjectModal";
import ScrollObserver from "@/components/ScrollObserver";
import { Project } from "@/types/project";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <ScrollObserver />
      <Navbar />
      <main>
        <Hero onSelectProject={handleSelectProject} />
        <AboutMe />
        <Services />
        <Projects onSelectProject={handleSelectProject} />
        <Contact />
      </main>
      <Footer />
      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </>
  );
}
