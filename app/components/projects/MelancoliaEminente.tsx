'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Project, projects } from '@/data/projects';
import Footer from '@/app/components/Footer';
import book from '@/app/assets/projects/MelancoliaEminente/book.jpg';
import extra1 from '@/app/assets/projects/MelancoliaEminente/extra1.jpg';
import extra2 from '@/app/assets/projects/MelancoliaEminente/extra2.jpg';
import extra3 from '@/app/assets/projects/MelancoliaEminente/extra3.jpg';
import extra4 from '@/app/assets/projects/MelancoliaEminente/extra4.jpg';

interface MelancoliaEminenteProjectProps {
  project: Project;
  slug: string;
}

export default function MelancoliaEminenteProject({
  project,
  slug,
}: MelancoliaEminenteProjectProps) {
  // Encontrar el siguiente proyecto
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  return (
    <div className='min-h-screen bg-[#022733]'>
      {/* Header con botón de volver */}
      <header className='fixed top-0 left-0 right-0 z-50 bg-[#022733] backdrop-blur-sm border-b'>
        <div className='container mx-auto px-6 py-4 flex items-center justify-between'>
          <Link
            href={`/?project=${slug}#projects`}
            className='flex items-center gap-2 text-white hover:text-gray-600 transition-colors'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
              />
            </svg>
            <span className='font-medium'>Volver</span>
          </Link>
          <div className='text-sm text-white'>{project.year}</div>
        </div>
      </header>

      {/* Contenido del proyecto */}
      <main className='pt-20'>
        {/* Hero Section */}
        <section className='container mx-auto px-6 py-2'>
          <div className='max-w-screen text-[#C2ECFF]/50 mx-auto flex items-center justify-between'>
            <h1 className='text-xl lg:text-4xl font-sora mb-6'>
              {project.title}
            </h1>
            <div className='flex text-[#C2ECFF]/50 flex-wrap gap-2 mb-6'>
              {project.tags.map((tag, index) => (
                <p
                  key={index}
                  className='text-xl lg:text-4xl font-figtree leading-relaxed'
                >
                  {tag}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Imagen principal */}
        <section className='w-full h-[70vh] relative bg-[#022733]'>
          <Image
            src={project.image}
            alt={project.title}
            className='w-full h-full object-cover'
            fill
            priority
            sizes='100vw'
            quality={95}
          />
        </section>

        {/* Sección de contenido personalizable */}
        <section className='container mx-auto px-6 py-20'>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-5xl text-[#C2ECFF] font-big-shoulders mb-8'>
              MELANCOLÍA EMINENTE
            </h2>
            <div className='prose prose-lg max-w-none'>
              <p className='text-[#C2ECFF] text-start font-figtree text-xl leading-relaxed mb-6'>
                Melancolía Eminente es un Imaginario Simbólico de ilustraciones
                inspirado en ‘‘Jícaras Tristes’’ de Alfredo Espino, que traduce
                la euforia y melancolía de sus poemas en un imaginario simbólico
                conectado con la belleza de las colinas cuzcatlecas. <br />
                <br />
                Este desafío implicó transformar palabras en imágenes que
                transmitieran además del significado literal de los poemas,
                también la calidez, dulzura y nostalgia que irradian en cada
                brisa y flor, manteniendo la esencia poética en cada ilustración
              </p>
            </div>
            <p className=' font-figtree text-start text-[#C2ECFF] italic'>
              En colaboración con: <br /> Grecia Romero: Diseño de
              conceptualización <br />
              Apoyo en Ilustraciones y elementos tipográficos.
            </p>
          </div>
        </section>

        {/* Sección de galería adicional (ejemplo) */}
        <section className='flex flex-col gap-20 justify-center pb-10 items-center'>
          <div className='relative w-full max-w-4xl mx-auto px-4 lg:p-0'>
            <Image
              src={book}
              alt='Mapa del evento'
              className='w-full h-auto object-cover rounded-[48px]'
              quality={95}
              style={{
                clipPath: 'inset(0.1% 0.1% 0.1% 0.1% )',
              }}
            />
          </div>
          <p className='text-xl text-justify text-[#C2ECFF] font-figtree'>
            Se inició con una profunda investigación sobre los poemas de Alfredo
            Espino, explorando sus metáforas y <br /> simbolismos para conectar
            sus emociones con elementos visuales. Las ilustraciones, realizadas
            con un estilo <br /> libre y expresivo, para capturar texturas
            orgánicas y transmitir la calidez de los paisajes cuzcatlecos.
          </p>
        </section>

        <section className='md:container md:mx-auto md:px-6 md:py-0'>
          <div className='md:max-w-4xl md:mx-auto'></div>
        </section>
        {/* Galería de imágenes */}
        <section className='w-full px-4 md:px-6 py-10 md:py-20'>
          <div className='max-w-5xl mx-auto flex flex-col gap-4'>
            {/* Primera imagen - ancha arriba */}
            <div className='relative w-full aspect-[21/9] rounded-[24px] overflow-hidden'>
              <Image
                src={extra1}
                alt='Conexión Cultural diseño principal'
                className='object-cover'
                fill
                quality={95}
              />
            </div>

            {/* Dos imágenes horizontales debajo - más altura */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center'>
              <div className='flex flex-col gap-4'>
                <div className='relative w-full aspect-[4/3] rounded-[24px] overflow-hidden'>
                  <Image
                    src={extra2}
                    alt='Conexión Cultural diseño 2'
                    className='object-cover'
                    fill
                    quality={95}
                  />
                </div>
                <div className='relative w-full aspect-[3/4] rounded-[24px] overflow-hidden'>
                  <Image
                    src={extra3}
                    alt='Conexión Cultural diseño 3'
                    className='object-cover'
                    fill
                    quality={95}
                  />
                </div>
              </div>
              {/* Última imagen ancha - sin separación extra */}
              <div className='relative w-full h-full aspect-[9/16] rounded-[24px] overflow-hidden'>
                <Image
                  src={extra4}
                  alt='Conexión Cultural banner final'
                  className='object-cover'
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
