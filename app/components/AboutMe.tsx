import React from "react";
import Lanyard from "../../components/Lanyard";
import Link from "next/link";

const AboutMe = () => {
  return (
    <div className="h-screen w-full relative bg-[#d0fce3] flex justify-between items-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <div className="w-full flex absolute left-0 -ml-40 sm:-ml-60 md:-ml-80 hidden sm:flex">
        <Lanyard position={[0, 0, 10]} gravity={[0, -40, 0]} />
      </div>
      <div className="flex items-center justify-center w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-full overflow-visible absolute top-0 right-0 sm:relative sm:ml-auto bg-transparent px-4">
        <Link
          href="/about"
          className="font-figtree text-center text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-8xl font-bold text-[var(--color-orange)] hover:text-[var(--color-mint)] transition-colors duration-300"
          style={{ textShadow: "4px 4px 0px rgba(0, 0, 0, 0.10)" }}
        >
          <p>¿Quieres conocer más sobre mí?</p>
        </Link>
      </div>
    </div>
  );
};

export default AboutMe;
