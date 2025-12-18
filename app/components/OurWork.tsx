"use client";

import React, { Suspense } from "react";
import ProjectCarousel from "./ui/ProjectCarousel";
import { projects } from "@/data/projects";
import { useTranslations } from "next-intl";

const OurWork = () => {
  // Convertir proyectos al formato que espera el carousel
  const galleryItems = projects.map((project) => ({
    image: project.image,
    text: project.title,
    slug: project.slug,
  }));

  const t = useTranslations('ourWork');
  

  return (
    <div
      id="projects"
      className="min-h-screen flex items-center justify-center flex-col py-20 px-4 scroll-mt-16 bg-[#002939]"
    >
      <div className="max-w-7xl w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-white md:text-5xl lg:text-6xl font-bold font-big-shoulders mb-4">
            {t('title').toUpperCase()}
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-figtree">
            {t('subtitle')}
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
