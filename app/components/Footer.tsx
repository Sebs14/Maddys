'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/data/projects';

interface FooterProps {
  nextProject?: Project;
}

export default function Footer({ nextProject }: FooterProps) {
  return (
    <footer className="border-t border-[#C2ECFF]/20 bg-[#022733]">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="group flex items-center">
            <Image
              src="/logo.PNG"
              alt="Maddys Logo"
              width={120}
              height={30}
              className="h-30 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
          <Link
            href="https://www.instagram.com/_bymadd?utm_source=qr"
            className="group flex items-center font-figtree text-white"
          >
            <p className="transition-transform duration-300 group-hover:scale-105">
              Instagram
            </p>
          </Link>
          <Link
            href="https://www.behance.net/maddyaguilar?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAOwCCxleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAafHMsfsOgULxaqmbzeWQ69V-olhrvEGcfSKyYLD-T-LYpOg1cSF_GI792Bj1A_aem_eaa9uE4kAzHeRTT8B2vATg"
            className="group flex items-center font-figtree text-white"
          >
            <p className="transition-transform duration-300 group-hover:scale-105">
              Behance
            </p>
          </Link>
          <Link
            href="/"
            className="group flex items-center font-figtree text-white"
          >
            <p className="transition-transform duration-300 group-hover:scale-105">
              Contacto
            </p>
          </Link>
          {nextProject && (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group flex items-center gap-3 px-8 py-4 bg-[#C2ECFF] text-[#022733] rounded-full font-medium hover:bg-white transition-all duration-300 hover:scale-105"
            >
              <span>{nextProject.title}</span>
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
          )}
        </div>
      </div>
    </footer>
  );
}
