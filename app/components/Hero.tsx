import React from "react";

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 md:px-8 lg:px-12 ">
      <div className="max-w-7xl w-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-center font-bold leading-tight">
          Frase inspiradora del día por Maddy
        </h1>
      </div>
    </section>
  );
};

export default Hero;
