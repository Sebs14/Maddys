"use client";

import { useRef, useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image, { StaticImageData } from "next/image";

interface ProjectItem {
  image: StaticImageData;
  text: string;
  slug?: string;
}

interface ProjectCarouselProps {
  items: ProjectItem[];
}

export default function ProjectCarousel({ items }: ProjectCarouselProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasScrolledToInitial, setHasScrolledToInitial] = useState(false);
  const [isAutoHovered, setIsAutoHovered] = useState(false);

  // Auto-play del carrusel
  useEffect(() => {
    const autoPlayInterval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % items.length;
        scrollToIndex(nextIndex);

        // Activar el efecto hover automático por 3 segundos
        setIsAutoHovered(true);
        setTimeout(() => setIsAutoHovered(false), 3000);

        return nextIndex;
      });
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(autoPlayInterval);
  }, [items.length]);

  // Scrollear al proyecto inicial si viene de la URL
  useEffect(() => {
    const projectSlug = searchParams?.get("project");
    if (projectSlug && !hasScrolledToInitial && scrollRef.current) {
      const index = items.findIndex((item) => item.slug === projectSlug);
      if (index !== -1) {
        // Esperar un momento para que el componente se monte completamente
        setTimeout(() => {
          scrollToIndex(index);
          setHasScrolledToInitial(true);
        }, 100);
      }
    }
  }, [searchParams, items, hasScrolledToInitial]);

  // Detectar el índice activo mientras se hace scroll
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollPosition = scrollRef.current.scrollLeft;
        const itemWidth = scrollRef.current.offsetWidth;
        const index = Math.round(scrollPosition / itemWidth);
        setActiveIndex(index);
      }
    };

    const ref = scrollRef.current;
    ref?.addEventListener("scroll", handleScroll);
    return () => ref?.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollRef.current) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  const handleProjectClick = (item: ProjectItem) => {
    if (!isDragging && item.slug) {
      router.push(`/projects/${item.slug}`);
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const itemWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: itemWidth * index,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full relative">
      {/* Carousel container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleEnd}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex-none w-full snap-center px-4 md:px-8"
          >
            <div className="w-full max-w-5xl mx-auto">
              <div
                className={`relative group cursor-pointer ${
                  isAutoHovered ? "auto-hovered" : ""
                }`}
                onClick={() => handleProjectClick(item)}
              >
                {/* Contenedor de imagen sin sombra externa */}
                <div className="aspect-[4/5] md:aspect-[3/4] lg:aspect-video w-full overflow-hidden rounded-2xl bg-gray-100 relative">
                  <Image
                    src={item.image}
                    alt={item.text}
                    className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 ${
                      isAutoHovered && index === activeIndex ? "scale-110" : ""
                    } ${
                      item.slug === "melancolia-eminente"
                        ? "object-[13%_center] md:object-center"
                        : ""
                    } ${
                      item.slug === "crostaPanaderia"
                        ? "object-[25%_center] md:object-center"
                        : ""
                    }`}
                    draggable={false}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 1216px"
                    quality={95}
                  />

                  {/* Sombra interna sutil */}
                  <div
                    className={`absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.2)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                      isAutoHovered && index === activeIndex
                        ? "opacity-100"
                        : ""
                    }`}
                  />

                  {/* Overlay con gradiente */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      isAutoHovered && index === activeIndex
                        ? "opacity-100"
                        : ""
                    }`}
                  />

                  {/* Texto del overlay */}
                  <div
                    className={`absolute inset-0 flex items-end justify-center p-6 md:p-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 ${
                      isAutoHovered && index === activeIndex
                        ? "opacity-100 translate-y-0"
                        : ""
                    }`}
                  >
                    <div className="text-center">
                      <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">
                        {item.text}
                      </h3>
                      <p className="text-white/90 text-sm md:text-base font-medium">
                        Click para ver más →
                      </p>
                    </div>
                  </div>
                </div>

                {/* Título siempre visible en móvil */}
                <div className="mt-4 text-center md:hidden">
                  <h3 className="text-xl font-bold text-white">{item.text}</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicadores de navegación */}
      <div className="flex justify-center gap-2 mt-8">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "w-8 bg-black"
                : "w-2 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Ir al proyecto ${index + 1}`}
          />
        ))}
      </div>

      {/* Flechas de navegación (solo desktop) */}
      <button
        onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
        disabled={activeIndex === 0}
        className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.18)] items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110 transition-all duration-300 z-10"
        aria-label="Proyecto anterior"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        onClick={() =>
          scrollToIndex(Math.min(items.length - 1, activeIndex + 1))
        }
        disabled={activeIndex === items.length - 1}
        className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.18)] items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110 transition-all duration-300 z-10"
        aria-label="Proyecto siguiente"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
