import Image from "next/image";
import React from "react";

// Row 1 images
import bird from "@/app/assets/hero/bird.jpg";
import maddy from "@/app/assets/hero/maddy.jpg";
import name from "@/app/assets/hero/name.svg";
import forms from "@/app/assets/hero/form.jpg";
import eyes from "@/app/assets/hero/eye.jpg";

// Row 2 & 3 images
import bird2 from "@/app/assets/hero/bird2.jpg";
import bird3 from "@/app/assets/hero/bird3.jpg";
import bird4 from "@/app/assets/hero/bird4.png";
import flame from "@/app/assets/hero/flame.jpg";

// Color palette based on the design
const colors = {
  dark: "#1a2f38", // Dark teal/navy
  cream: "#f5f0e8", // Cream/off-white
  orange: "#e86f3a", // Orange
  pink: "#e8a0b0", // Pink
  mint: "#b8d4c8", // Mint green
};

const Hero = () => {
  return (
    <section className="w-full">
      {/* 
        Responsive Grid:
        - Mobile: 2 columnas
        - Tablet (md): 4 columnas  
        - Desktop (lg): 6 columnas
      */}
      <div className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-6 auto-rows-[minmax(120px,1fr)] md:auto-rows-[minmax(150px,1fr)] lg:auto-rows-[minmax(180px,1fr)]">
        {/* Row 1 */}
        {/* Bird + Hand - spans 2 columns on all sizes */}
        <div
          className="col-span-2 row-span-1 relative overflow-hidden aspect-[2/1] md:aspect-auto"
          style={{ backgroundColor: colors.dark }}
        >
          <Image
            src={bird}
            alt="Bird illustration"
            fill
            className="object-cover"
            quality={95}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Maddy face */}
        <div
          className="col-span-1 row-span-1 relative aspect-square md:aspect-auto"
          style={{ backgroundColor: colors.dark }}
        >
          <Image
            src={maddy}
            alt="Maddy illustration"
            fill
            className="object-cover absolute"
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 16vw"
          />
        </div>

        {/* Logo/Name - cream background */}
        <div className="col-span-1 row-span-1 relative flex justify-center bg-[#022733] aspect-square md:aspect-auto">
          <Image
            src={name}
            alt="Maddy logo"
            className="w-3/4 h-auto absolute -bottom-8 md:-bottom-12 lg:-bottom-15 z-10"
          />
        </div>

        {/* Pink box with forms - hidden on mobile, shows on md+ */}
        <div
          className="hidden md:block col-span-1 row-span-1 relative"
          style={{ backgroundColor: colors.pink }}
        >
          <Image
            src={forms}
            alt="Forms illustration"
            className="object-cover"
          />
        </div>

        {/* Eyes illustration */}
        <div
          className="hidden lg:block col-span-1 row-span-1 relative overflow-hidden"
          style={{ backgroundColor: colors.orange }}
        >
          <Image
            src={eyes}
            alt="Eyes illustration"
            fill
            className="object-cover"
            sizes="16vw"
          />
        </div>

        {/* Row 2 */}
        {/* Cream empty - hidden on mobile */}
        <div className="hidden md:block col-span-1 row-span-1 bg-[#F1EBDF]" />

        {/* Orange with ILUSTRATION text */}
        <div className="col-span-1 row-span-1 flex items-center justify-center bg-[#EF7B32] aspect-square md:aspect-auto">
          <span className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-5xl tracking-wide font-dogurtlen text-[#F1EBDF]">
            ILUSTRATION
          </span>
        </div>

        {/* Bird/Rooster - spans 1 col, 2 rows */}
        <div
          className="col-span-1 row-span-2 relative overflow-hidden"
          style={{ backgroundColor: colors.dark }}
        >
          <Image
            src={bird3}
            alt="Rooster illustration"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 16vw"
          />
        </div>

        {/* Dark empty - hidden on mobile, shows on lg+ */}
        <div className="hidden lg:block col-span-1 row-span-1 bg-[#022733]" />

        {/* Pink with EDITORIAL text */}
        <div className="col-span-1 row-span-1 flex items-center justify-center bg-[#EF9BBC] aspect-square md:aspect-auto">
          <span className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-5xl tracking-wide font-dogurtlen text-[#F1EBDF] text-center">
            EDITORIAL
          </span>
        </div>

        {/* Snail - spans 1 col, 2 rows - hidden on mobile */}
        <div
          className="hidden md:block col-span-1 row-span-2 relative overflow-hidden"
          style={{ backgroundColor: colors.dark }}
        >
          <Image
            src={bird4}
            alt="Snail illustration"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 25vw, 16vw"
          />
        </div>

        {/* Row 3 */}
        {/* Bird 2 */}
        <div
          className="col-span-1 row-span-1 relative overflow-hidden aspect-square md:aspect-auto"
          style={{ backgroundColor: colors.dark }}
        >
          <Image
            src={bird2}
            alt="Blue bird illustration"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 16vw"
          />
        </div>

        {/* Mint/Green empty */}
        <div className="col-span-1 row-span-1 bg-[#8BC9AA] aspect-square md:aspect-auto" />

        {/* Cream with VISUAL IDENTITY text */}
        <div className="col-span-1 row-span-1 flex items-center justify-center bg-[#F1EBDF] aspect-square md:aspect-auto">
          <span className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-5xl tracking-wide font-dogurtlen text-[#022733] text-center leading-tight">
            VISUAL
            <br />
            IDENTITY
          </span>
        </div>

        {/* Flame/Abstract form - hidden on mobile */}
        <div
          className="hidden md:block col-span-1 row-span-1 relative overflow-hidden"
          style={{ backgroundColor: colors.pink }}
        >
          <Image
            src={flame}
            alt="Flame illustration"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 25vw, 16vw"
          />
        </div>

        {/* Eyes on mobile row - shows only on mobile to fill grid */}
        <div
          className="md:hidden col-span-1 row-span-1 relative overflow-hidden aspect-square"
          style={{ backgroundColor: colors.orange }}
        >
          <Image
            src={eyes}
            alt="Eyes illustration"
            fill
            className="object-cover"
            sizes="50vw"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
