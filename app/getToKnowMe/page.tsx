"use client";

import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import me from "@/app/assets/aboutMe/me.png";
import heyIm from "@/app/assets/aboutMe/heyImM.svg";
import logos from "@/app/assets/aboutMe/logos.png";
import draw from "@/app/assets/aboutMe/draw.png";
import Footer from "@/app/components/Footer";
import Navbar from "../components/Navbar";

const GetToKnowMe = () => {
  const [visibleElements, setVisibleElements] = useState({
    image: false,
    svg: false,
    text: false,
    brands: false,
    logos: false,
    draw: false,
  });
  const imageRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const brandsRef = useRef<HTMLParagraphElement>(null);
  const logosRef = useRef<HTMLDivElement>(null);
  const drawRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -100px 0px",
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;

          if (target === imageRef.current) {
            setVisibleElements((prev) => ({ ...prev, image: true }));
          } else if (target === svgRef.current) {
            setVisibleElements((prev) => ({ ...prev, svg: true }));
          } else if (target === textRef.current) {
            setVisibleElements((prev) => ({ ...prev, text: true }));
          } else if (target === brandsRef.current) {
            setVisibleElements((prev) => ({ ...prev, brands: true }));
          } else if (target === logosRef.current) {
            setVisibleElements((prev) => ({ ...prev, logos: true }));
          } else if (target === drawRef.current) {
            setVisibleElements((prev) => ({ ...prev, draw: true }));
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    if (imageRef.current) observer.observe(imageRef.current);
    if (svgRef.current) observer.observe(svgRef.current);
    if (textRef.current) observer.observe(textRef.current);
    if (brandsRef.current) observer.observe(brandsRef.current);
    if (logosRef.current) observer.observe(logosRef.current);
    if (drawRef.current) observer.observe(drawRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="bg-[#002939] min-h-screen flex flex-col items-center justify-center pt-20 px-4 md:px-8 lg:px-12">
        <Navbar />

        {/* Imagen con animación fade-in desde arriba */}
        <div
          ref={imageRef}
          className={`transition-all duration-1000 ${
            visibleElements.image
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          <Image
            src={me}
            alt="Madelyn Aguilar"
            className="h-48 w-48 sm:h-64 sm:w-64 md:h-80 md:w-80"
          />
        </div>

        {/* SVG "Hey I'm" con animación fade-in y escala */}
        <div
          ref={svgRef}
          className={`transition-all duration-1000 ${
            visibleElements.svg ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <Image
            src={heyIm}
            alt="Hey, I'm Madelyn Aguilar"
            className="mt-4 mb-2 w-72 h-auto sm:mt-6 sm:mb-4 sm:w-72 md:w-72 lg:w-112"
          />
        </div>

        {/* Texto descriptivo con animación fade-in desde abajo */}
        <p
          ref={textRef}
          className={`text-white font-figtree text-justify max-w-2xl mt-10 sm:mt-16 md:mt-20 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl transition-all duration-1000 ${
            visibleElements.text
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          Desde pequeña descubrí el arte como un lenguaje que captó mi atención
          y despertó mi curiosidad. Ese primer acercamiento me llevó más
          adelante al diseño, y en lugar de elegir entre uno u otro, decidí
          integrarlos. Hoy baso mi trabajo en esa fusión, creando proyectos con
          propósito, esencia y vida, donde la expresión artística convive con la
          funcionalidad del diseño.
        </p>

        {/* Título de marcas con animación */}
        <p
          ref={brandsRef}
          className={`text-center mt-6 sm:mt-8 md:mt-10 font-figtree text-white text-lg sm:text-xl md:text-2xl transition-all duration-1000 ${
            visibleElements.brands
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          Algunas marcas con las que trabajado
        </p>

        {/* Logos con animación fade-in */}
        <div
          ref={logosRef}
          className={`w-full mt-4 sm:mt-6 transition-all duration-1000 ${
            visibleElements.logos
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95"
          }`}
        >
          <Image
            src={logos}
            alt="Marcas con las que he trabajado"
            className="w-full h-auto"
          />
        </div>

        {/* Imagen draw con animación fade-in */}
        <div
          ref={drawRef}
          className={`w-full mt-10 sm:mt-12 md:mt-16 transition-all duration-1000 ${
            visibleElements.draw
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <Image src={draw} alt="Dibujo decorativo" className="w-full h-auto" />
        </div>
      </div>

      {/* Footer sin nextProject */}
      <Footer />
    </>
  );
};

export default GetToKnowMe;
