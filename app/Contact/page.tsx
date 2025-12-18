"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Footer from "@/app/components/Footer";

const Contact = () => {
  const [scrollY, setScrollY] = useState(0);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.scrollY;
        setScrollY(scrollPosition);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#022733] overflow-hidden">
      {/* Header con efecto parallax */}
      <div
        ref={parallaxRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        {/* Background con formas decorativas */}
        <div
          className="absolute inset-0 bg-[#022733]"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        >
          {/* Círculos decorativos con parallax */}
          <div
            className="absolute top-20 right-10 w-64 h-64 bg-[#EF9BBC] rounded-full opacity-20 blur-3xl"
            style={{
              transform: `translateY(${scrollY * 0.4}px)`,
            }}
          />
          <div
            className="absolute bottom-40 left-20 w-96 h-96 bg-[#8BC9AA] rounded-full opacity-15 blur-3xl"
            style={{
              transform: `translateY(${scrollY * 0.2}px)`,
            }}
          />
          <div
            className="absolute top-1/3 left-1/3 w-80 h-80 bg-[#EF7B32] rounded-full opacity-10 blur-3xl"
            style={{
              transform: `translateY(${scrollY * 0.35}px)`,
            }}
          />
        </div>

        {/* Contenido principal */}
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <h1
            className="font-dogurtlen text-6xl md:text-8xl lg:text-9xl text-[#F1EBDF] mb-8 tracking-wider"
            style={{
              textShadow: "6px 6px 0px rgba(239, 155, 188, 0.3)",
              transform: `translateY(${scrollY * 0.15}px)`,
            }}
          >
            HABLEMOS
          </h1>
          <p
            className="font-figtree text-xl md:text-2xl lg:text-3xl text-[#8BC9AA] font-light"
            style={{
              transform: `translateY(${scrollY * 0.1}px)`,
            }}
          >
            Convirtamos tus ideas en realidad visual
          </p>
        </div>

        {/* Flecha scroll indicator */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
          style={{
            opacity: Math.max(0, 1 - scrollY / 300),
          }}
        >
          <svg
            className="w-8 h-8 text-[#EF9BBC]"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      {/* Sección de información de contacto */}
      <div className="relative bg-[#F1EBDF] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Grid de información de contacto */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 mb-16">
            {/* Email */}
            <div
              className="group bg-[#022733] p-8 rounded-3xl hover:scale-105 transition-all duration-500 cursor-pointer border-4 border-[#EF9BBC]"
              style={{
                boxShadow: "8px 8px 0px rgba(239, 123, 50, 0.4)",
              }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-[#EF9BBC] p-4 rounded-2xl group-hover:rotate-12 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-[#022733]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-dogurtlen text-3xl text-[#8BC9AA] mb-2">
                    EMAIL
                  </h3>
                  <a
                    href="mailto:hola@maddy.com"
                    className="font-figtree text-xl text-[#F1EBDF] hover:text-[#EF9BBC] transition-colors"
                  >
                    hola@maddy.com
                  </a>
                </div>
              </div>
            </div>

            {/* Instagram */}
            <div
              className="group bg-[#022733] p-8 rounded-3xl hover:scale-105 transition-all duration-500 cursor-pointer border-4 border-[#8BC9AA]"
              style={{
                boxShadow: "8px 8px 0px rgba(239, 155, 188, 0.4)",
              }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-[#8BC9AA] p-4 rounded-2xl group-hover:rotate-12 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-[#022733]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-dogurtlen text-3xl text-[#EF7B32] mb-2">
                    INSTAGRAM
                  </h3>
                  <a
                    href="https://instagram.com/maddy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-figtree text-xl text-[#F1EBDF] hover:text-[#8BC9AA] transition-colors"
                  >
                    @maddy
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="bg-[#022733] p-8 md:p-12 rounded-3xl border-4 border-[#EF7B32]">
            <h2 className="font-dogurtlen text-4xl md:text-5xl text-[#F1EBDF] mb-8 text-center">
              CUÉNTAME TU PROYECTO
            </h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-figtree text-[#8BC9AA] mb-2 text-lg"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-6 py-4 bg-[#F1EBDF] text-[#022733] rounded-xl font-figtree text-lg focus:outline-none focus:ring-4 focus:ring-[#EF9BBC] transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block font-figtree text-[#8BC9AA] mb-2 text-lg"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-6 py-4 bg-[#F1EBDF] text-[#022733] rounded-xl font-figtree text-lg focus:outline-none focus:ring-4 focus:ring-[#EF9BBC] transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block font-figtree text-[#8BC9AA] mb-2 text-lg"
                >
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-6 py-4 bg-[#F1EBDF] text-[#022733] rounded-xl font-figtree text-lg focus:outline-none focus:ring-4 focus:ring-[#EF9BBC] transition-all"
                  placeholder="¿En qué puedo ayudarte?"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block font-figtree text-[#8BC9AA] mb-2 text-lg"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-6 py-4 bg-[#F1EBDF] text-[#022733] rounded-xl font-figtree text-lg focus:outline-none focus:ring-4 focus:ring-[#EF9BBC] transition-all resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>
              <button
                type="submit"
                className="w-full md:w-auto px-12 py-5 bg-[#EF7B32] hover:bg-[#EF9BBC] text-[#022733] font-dogurtlen text-3xl rounded-xl transition-all duration-300 hover:scale-105 border-4 border-[#F1EBDF]"
                style={{
                  boxShadow: "6px 6px 0px rgba(241, 235, 223, 0.5)",
                }}
              >
                ENVIAR MENSAJE
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;