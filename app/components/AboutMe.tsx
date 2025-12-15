import React from "react";
import Lanyard from "../../components/Lanyard";
import Link from "next/link";

const AboutMe = () => {
  return (
    <div className="h-screen w-full bg-[#aae8c5] flex justify-between items-center px-20">
      <div className=" w-1/2 ">
        <Lanyard position={[0, 0, 10]} gravity={[0, -40, 0]} />
      </div>
      <div className="flex items-center justify-center w-1/2 h-full overflow-visible">
        <Link
          href="/about"
          className=" font-figtree text-center text-4xl md:text-6xl lg:text-8xl font-bold text-[var(--color-orange)] hover:text-[var(--color-mint)] transition-colors duration-300"
          style={{ textShadow: "4px 4px 0px rgba(0, 0, 0, 0.10)" }}
        >
          <p>¿Quieres conocer más sobre mí?</p>
        </Link>
      </div>
    </div>
  );
};

export default AboutMe;
