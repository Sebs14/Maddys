"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link href="/" className="group flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Maddys
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#about"
              className="relative text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors duration-200 group"
            >
              Sobre Mí
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="#projects"
              className="relative text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors duration-200 group"
            >
              Proyectos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="#skills"
              className="relative text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors duration-200 group"
            >
              Habilidades
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="#experience"
              className="relative text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors duration-200 group"
            >
              Experiencia
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="#contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full font-medium text-sm hover:shadow-lg hover:scale-105 transform transition-all duration-200"
            >
              Contacto
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative w-6 h-6 focus:outline-none"
          >
            <div className="absolute inset-0 flex flex-col justify-center space-y-1">
              <span
                className={`block h-0.5 bg-gray-700 transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-1" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 bg-gray-700 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 bg-gray-700 transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-1" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="py-4 space-y-3 border-t border-gray-200/20">
            <Link
              href="#about"
              className="block text-gray-700 hover:text-gray-900 font-medium py-2 px-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre Mí
            </Link>
            <Link
              href="#projects"
              className="block text-gray-700 hover:text-gray-900 font-medium py-2 px-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Proyectos
            </Link>
            <Link
              href="#skills"
              className="block text-gray-700 hover:text-gray-900 font-medium py-2 px-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Habilidades
            </Link>
            <Link
              href="#experience"
              className="block text-gray-700 hover:text-gray-900 font-medium py-2 px-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Experiencia
            </Link>
            <Link
              href="#contact"
              className="block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full font-medium text-center hover:shadow-lg transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
