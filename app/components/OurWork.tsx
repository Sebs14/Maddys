"use client";

import React, { Suspense } from "react";
import ProjectCarousel from "./ui/ProjectCarousel";
import { projects } from "@/data/projects";

const OurWork = () => {
  // Convertir proyectos al formato que espera el carousel
  const galleryItems = projects.map((project) => ({
    image: project.image,
    text: project.title,
    slug: project.slug,
  }));

  return (
    <div
      id="projects"
      className="min-h-screen flex items-center justify-center flex-col py-20 px-4 scroll-mt-16"
    >
      <div className="max-w-7xl w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Mi Trabajo
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Aquí puedes ver algunos de mis proyectos destacados.
          </p>
        </div>
        <Suspense
          fallback={
            <div className="text-center py-20">Cargando proyectos...</div>
          }
        >
          <ProjectCarousel items={galleryItems} />
        </Suspense>
      </div>
    </div>
  );
};

export default OurWork;
