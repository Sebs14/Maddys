"use client";

import Link from "next/link";
import Image from "next/image";
import { Project, projects } from "@/data/projects";
import Footer from "@/app/components/Footer";
import panaderia from "@/app/assets/projects/CrostaPanaderia/panaderia.jpg";
import extra1 from "@/app/assets/projects/CrostaPanaderia/extra1.jpg";
import extra2 from "@/app/assets/projects/CrostaPanaderia/extra2.jpg";
import extra3 from "@/app/assets/projects/CrostaPanaderia/extra3.jpg";
import extra4 from "@/app/assets/projects/CrostaPanaderia/extra4.jpg";

interface CrostaPanaderiaProjectProps {
  project: Project;
  slug: string;
}

export default function CrostaPanaderiaProject({
  project,
  slug,
}: CrostaPanaderiaProjectProps) {
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
        <section className="container mx-auto px-6 py-10 md:py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl lg:text-5xl text-[#C2ECFF] font-big-shoulders mb-8">
              CROSTA - Desde el Alma, de lo artesanal & Gourmet
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-[#C2ECFF] text-start font-figtree text-base md:text-lg lg:text-xl leading-relaxed mb-6">
                Una propuesta innovadora en Suchitoto, enfocada en panadería y
                repostería orgánica con énfasis en masa madre y fermentaciones
                naturales. Su concepto combina técnicas artesanales con un
                enfoque gourmet, diferenciándose de la oferta actual en la zona.{" "}
                <br /> <br />
                El proposito de la identidad visual busca transmitir esta
                identidad a través de una estética con lo artesanal, natural y
                sofisticado, utilizando formas y colores inspirados en la
                tierra, los granos y el proceso de horneado.
              </p>
            </div>
          </div>
        </section>

        {/* Sección de galería adicional (ejemplo) */}
        <section className="flex flex-col gap-20 justify-center pb-10 items-center">
          <div className="relative w-full max-w-4xl mx-auto px-4 lg:p-0">
            <Image
              src={panaderia}
              alt="Mapa del evento"
              className="w-full h-auto object-cover rounded-[48px]"
              quality={95}
              style={{
                clipPath: "inset(0.1% 0.1% 0.1% 0.1% )",
              }}
            />
          </div>
          <p className="text-base md:text-lg lg:text-xl text-center lg:text-justify text-[#C2ECFF] font-figtree px-4 md:px-0">
            La estructura del símbolo utiliza formas redondeadas y texturas
            sutiles inspiradas en la superficie de una <br className="hidden lg:inline" /> baguette (uno de
            los panes principales de la marca) y en la irregularidad propia de
            lo artesanal. Esta identidad <br className="hidden lg:inline" /> visual transmite calidez,
            autenticidad y sentido de lugar, destacándose en Suchitoto al
            ofrecer una <br className="hidden lg:inline" />
            experiencia gastronómica artesanal con un toque gourmet.
          </p>
        </section>

        <section className="md:container md:mx-auto md:px-6 md:py-0">
          <div className="md:max-w-4xl md:mx-auto"></div>
        </section>
        {/* Galería de imágenes */}
        <section className="w-full px-4 md:px-6 py-10 md:py-20">
          <div className="max-w-5xl mx-auto flex flex-col gap-4">
            {/* Primera imagen - ancha arriba */}
            <div className="relative w-full aspect-[21/9] rounded-[24px] overflow-hidden">
              <Image
                src={extra1}
                alt="Conexión Cultural diseño principal"
                className="object-cover"
                fill
                quality={95}
              />
            </div>

            {/* Dos imágenes horizontales debajo - más altura */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <div className="flex flex-col gap-4">
                <div className="relative w-full aspect-square rounded-[24px] overflow-hidden">
                  <Image
                    src={extra2}
                    alt="Conexión Cultural diseño 2"
                    className="object-cover scale-105"
                    fill
                    quality={95}
                  />
                </div>
                <div className="relative w-full aspect-square rounded-[24px] overflow-hidden">
                  <Image
                    src={extra3}
                    alt="Conexión Cultural diseño 3"
                    className="object-cover scale-105"
                    fill
                    quality={95}
                  />
                </div>
              </div>

              <div className="relative w-full h-full aspect-[9/16] rounded-[24px] overflow-hidden">
                <Image
                  src={extra4}
                  alt="Conexión Cultural banner final"
                  className="object-cover"
                  fill
                  quality={95}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer nextProject={nextProject} />
    </div>
  );
}
