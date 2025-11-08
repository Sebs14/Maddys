"use client";

import Link from "next/link";
import Image from "next/image";
import { Project, projects } from "@/data/projects";
import mapImage from "@/app/assets/projects/janeWalks/map.jpg";
import extra1 from "@/app/assets/projects/janeWalks/extra1.jpg";
import extra2 from "@/app/assets/projects/janeWalks/extra2.jpg";
import extra3 from "@/app/assets/projects/janeWalks/extra3.jpg";
import extra4 from "@/app/assets/projects/janeWalks/extra4.jpg";
import { useEffect, useRef } from "react";

interface DefaultProjectLayoutProps {
  project: Project;
  slug: string;
}

export default function DefaultProjectLayout({
  project,
  slug,
}: DefaultProjectLayoutProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 } // Se reproduce cuando el 50% del video es visible
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Encontrar el siguiente proyecto
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  return (
    <div className="min-h-screen bg-[#022733]">
      {/* Header con botón de volver */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#022733] backdrop-blur-sm border-b">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href={`/?project=${slug}#projects`}
            className="flex items-center gap-2 text-white hover:text-gray-600 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            <span className="font-medium">Volver</span>
          </Link>
          <div className="text-sm text-white">{project.year}</div>
        </div>
      </header>

      {/* Contenido del proyecto */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-2">
          <div className="max-w-screen text-[#C2ECFF]/50 mx-auto flex items-center justify-between">
            <h1 className="text-xl lg:text-4xl font-sora mb-6">
              {project.title}
            </h1>
            <div className="flex text-[#C2ECFF]/50 flex-wrap gap-2 mb-6">
              {project.tags.map((tag, index) => (
                <p
                  key={index}
                  className="text-xl lg:text-4xl font-figtree leading-relaxed"
                >
                  {tag}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Imagen principal */}
        <section className="w-full h-[70vh] relative bg-[#022733]">
          <Image
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            fill
            priority
            sizes="100vw"
            quality={95}
          />
        </section>

        {/* Sección de contenido personalizable */}
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl text-[#728A95] font-big-shoulders mb-8">
              #WALK WITH US
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-[#C2ECFF] text-start font-figtree text-xl leading-relaxed mb-6">
                El Jane’s Walk Festival es un evento internacional que celebra
                el legado de Jane Jacobs, una escritora y activista urbana
                reconocida por su defensa de las comunidades locales y su visión
                humana del urbanismo, esta edición es la de Toronto, Canada
                2025. Mediante caminatas guiadas por ciudadanos, donde se
                comparten experiencias y reflexiones sobre los barrios y la vida
                urbana. <br />
                <br />
                Elaboré la imagen gráfica a través de ilustraciones, un proceso
                que disfruté profundamente desde el inicio. Conocer la historia
                y filosofía de Jane Jacobs me conmovió como artista, y me
                inspiró a desarrollar una imagen que transmitiera su espíritu
                curioso, cercano y observador. La ilustración que diseñé combina
                dinamismo, diversidad y calidez humana, reflejando cómo las
                personas dan vida a la ciudad en su cotidianidad.
              </p>
            </div>
          </div>
        </section>

        {/* Sección de galería adicional (ejemplo) */}
        <section className="flex flex-col gap-20 justify-center pb-10 items-center">
          <Image
            src={mapImage}
            alt="Mapa del evento"
            className="px-4 lg:p-0 rounded-[48px]"
            quality={95}
          />
          <p className="text-xl text-center text-[#C2ECFF] font-figtree">
            Jane Jacobs fue una activista urbana que promovió ciudades vivas,
            diversas y pensadas para las personas. <br /> Esa esencia la quise
            reflejar en las ilustraciones, dando vida a su espíritu en cada
            elemento.
          </p>
        </section>

        <section className="md:container md:mx-auto md:px-6 md:py-20">
          <div className="md:max-w-4xl md:mx-auto">
            <video
              ref={videoRef}
              className="w-full md:rounded-[24px] md:shadow-lg"
              preload="metadata"
              loop
              muted
              playsInline
            >
              <source
                src="/projects/janes-walk/characterVideo.mp4"
                type="video/mp4"
              />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>
        </section>
        <section className="container mx-auto px-4 md:px-6 py-10 md:py-20">
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <div className="relative w-full aspect-square rounded-[48px] overflow-hidden bg-white">
              <Image
                src={extra1}
                alt="evento jane's walks"
                className="object-cover"
                fill
                quality={95}
              />
            </div>
            <div className="relative w-full aspect-square rounded-[48px] overflow-hidden">
              <Image
                src={extra2}
                alt="evento jane's walks"
                className="object-cover"
                fill
                quality={95}
              />
            </div>
            <div className="relative w-full aspect-square rounded-[48px] overflow-hidden">
              <Image
                src={extra3}
                alt="evento jane's walks"
                className="object-cover"
                fill
                quality={95}
              />
            </div>
            <div className="relative w-full aspect-square rounded-[48px] overflow-hidden">
              <Image
                src={extra4}
                alt="evento jane's walks"
                className="object-cover"
                fill
                quality={95}
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer con botón siguiente proyecto */}
      <footer className="border-t border-[#C2ECFF]/20 bg-[#022733]">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-[#728A95] text-sm mb-2">Siguiente proyecto</p>
              <h3 className="text-[#C2ECFF] text-2xl font-sora">
                {nextProject.title}
              </h3>
            </div>
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group flex items-center gap-3 px-8 py-4 bg-[#C2ECFF] text-[#022733] rounded-full font-medium hover:bg-white transition-all duration-300 hover:scale-105"
            >
              <span>Ver proyecto</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
