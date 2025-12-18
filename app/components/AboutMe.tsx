import React from "react";
import Lanyard from "../../components/Lanyard";
import Link from "next/link";
import Image from "next/image";
import carnet from "../assets/aboutMe/carnet.png";

const AboutMe = () => {
  return (
    <div
      id="about"
      className="min-h-screen w-full relative bg-[#d0fce3] flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-6 sm:py-0"
    >
      <div className="w-full absolute left-0 -ml-40 sm:-ml-60 md:-ml-80 hidden sm:flex">
        <Lanyard position={[0, 0, 10]} gravity={[0, -40, 0]} />
      </div>
      <div className="w-full pt-4 sm:hidden flex justify-center">
        <Image
          src={carnet}
          alt="Carnet"
          className="w-2/3 max-w-[250px] h-auto"
        />
      </div>
      <div className="flex flex-col gap-3 sm:gap-4 items-center justify-center w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-auto sm:h-full overflow-visible sm:absolute top-0 right-0 sm:ml-auto bg-transparent px-4 pb-6 sm:pb-0">
        <h2 className="font-big-shoulders mt-2 sm:mt-20 text-4xl sm:text-7xl uppercase leading-tight">
          Para mí diseñar es observar desde otras alturas.
        </h2>
        <p className="font-figtree text-lg sm:text-2xl">
          Diseñadora multifacética que percibe el diseño como un acto de
          observación y expansión creativa. Con excelente habilidad entre lo
          manual y digital
        </p>
        <div className="w-full flex items-start">
          <Link
            href="/getToKnowMe"
            className="mt-3 sm:mt-6 bg-[#EF7A30] rounded-4xl px-8 sm:px-10 py-2 sm:py-3 text-white font-bold text-base sm:text-lg hover:bg-[#d96c1f] transition-colors duration-300"
          >
            Get to know me
            <svg
              className="inline-block ml-2"
              width="40"
              height="16"
              viewBox="0 0 40 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M39.7071 8.70711C40.0976 8.31658 40.0976 7.68342 39.7071 7.29289L33.3431 0.928932C32.9526 0.538408 32.3195 0.538408 31.9289 0.928932C31.5384 1.31946 31.5384 1.95262 31.9289 2.34315L37.5858 8L31.9289 13.6569C31.5384 14.0474 31.5384 14.6805 31.9289 15.0711C32.3195 15.4616 32.9526 15.4616 33.3431 15.0711L39.7071 8.70711ZM0 9H39V7H0V9Z"
                fill="white"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
