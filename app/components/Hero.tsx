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
import bird4 from "@/app/assets/hero/bird4.jpg";
import flame from "@/app/assets/hero/flame.jpg";

const Hero = () => {
  return (
    <section className="w-full">
      {/* ==================== MOBILE LAYOUT (< md) ==================== */}
      <div className="md:hidden grid grid-cols-2 auto-rows-[minmax(140px,1fr)]">
        {/* Row 1: Bird - 2 columns, taller */}
        <div className="col-span-2 row-span-1 relative overflow-hidden aspect-[2/1.2] bg-[#022733]">
          <Image
            src={bird}
            alt="Bird illustration"
            fill
            className="object-cover"
            quality={95}
            sizes="100vw"
          />
        </div>

        {/* Row 2: Logo Maddy + Maddy face (row-span-2) */}
        <div className="col-span-1 row-span-2 relative flex items-center justify-center bg-[#022733]">
          <Image src={name} alt="Maddy logo" className="w-3/4 h-auto" />
        </div>
        <div className="col-span-1 row-span-1 relative overflow-hidden bg-[#022733]">
          <Image
            src={maddy}
            alt="Maddy illustration"
            fill
            className="object-cover"
            sizes="50vw"
          />
        </div>

        {/* Row 3: ILUSTRATION (maddy continues) */}
        <div className="col-span-1 row-span-1 flex items-center justify-center bg-[#EF7B32]">
          <span className="font-bold text-4xl tracking-wide font-dogurtlen text-[#F1EBDF]">
            ILUSTRATION
          </span>
        </div>

        {/* Row 4: VISUAL IDENTITY + Flame */}
        <div className="col-span-1 row-span-1 flex items-center justify-center bg-[#F1EBDF]">
          <span className="font-bold text-4xl font tracking-wide font-dogurtlen text-[#022733] text-center leading-8 ">
            VISUAL
            <br />
            IDENTITY
          </span>
        </div>
        <div className="col-span-1 row-span-1 relative overflow-hidden bg-[#EF9BBC]">
          <Image
            src={flame}
            alt="Flame illustration"
            fill
            className="object-cover"
            sizes="50vw"
          />
        </div>

        {/* Row 5: Bird2 + EDITORIAL */}
        <div className="col-span-1 row-span-1 relative overflow-hidden bg-[#022733]">
          <Image
            src={bird2}
            alt="Blue bird illustration"
            fill
            className="object-cover"
            sizes="50vw"
          />
        </div>
        <div className="col-span-1 row-span-1 flex items-center justify-center bg-[#EF9BBC]">
          <span className="font-bold text-4xl  tracking-wide font-dogurtlen text-[#F1EBDF] text-center">
            EDITORIAL
          </span>
        </div>
      </div>

      {/* ==================== DESKTOP LAYOUT (>= md) ==================== */}
      <div className="hidden md:grid grid-cols-4 lg:grid-cols-6 auto-rows-[calc(100vw/4)] lg:auto-rows-[calc(100vw/6)]">
        {/* Row 1 */}
        {/* Bird + Hand - spans 2 columns */}
        <div className="col-span-2 row-span-1 relative overflow-hidden bg-[#022733]">
          <Image
            src={bird}
            alt="Bird illustration"
            fill
            className="object-cover"
            quality={95}
            sizes="(max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Maddy face */}
        <div className="col-span-1 row-span-1 relative overflow-hidden bg-[#022733]">
          <Image
            src={maddy}
            alt="Maddy illustration"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 25vw, 16vw"
          />
        </div>

        {/* Logo/Name */}
        <div className="col-span-1 row-span-1 relative flex justify-center bg-[#022733]">
          <Image
            src={name}
            alt="Maddy logo"
            className="w-3/4 h-auto absolute -bottom-12 lg:-bottom-15 z-10"
          />
        </div>

        {/* Pink box with forms */}
        <div className="col-span-1 row-span-1 relative overflow-hidden bg-[#EF9BBC]">
          <Image
            src={forms}
            alt="Forms illustration"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 25vw, 16vw"
          />
        </div>

        {/* Eyes illustration - only on lg+ */}
        <div className="hidden lg:block col-span-1 row-span-1 relative overflow-hidden bg-[#EF7B32]">
          <Image
            src={eyes}
            alt="Eyes illustration"
            fill
            className="object-cover"
            sizes="16vw"
          />
        </div>

        {/* Row 2 */}
        {/* Cream empty */}
        <div className="col-span-1 row-span-1 bg-[#F1EBDF]" />

        {/* Orange with ILUSTRATION text */}
        <div className="col-span-1 row-span-1 flex items-center justify-center bg-[#EF7B32]">
          <span className="font-bold text-3xl lg:text-5xl tracking-wide font-dogurtlen text-[#F1EBDF]">
            ILUSTRATION
          </span>
        </div>

        {/* Bird/Rooster - spans 1 col, 2 rows */}
        <div className="col-span-1 row-span-2 relative overflow-hidden bg-[#022733]">
          <Image
            src={bird3}
            alt="Rooster illustration"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 25vw, 16vw"
          />
        </div>

        {/* Dark empty - only lg+ */}
        <div className="hidden lg:block col-span-1 row-span-1 bg-[#022733]" />

        {/* Pink with EDITORIAL text */}
        <div className="col-span-1 row-span-1 flex items-center justify-center bg-[#EF9BBC]">
          <span className="font-bold text-3xl lg:text-5xl tracking-wide font-dogurtlen text-[#F1EBDF] text-center">
            EDITORIAL
          </span>
        </div>

        {/* Snail - spans 1 col, 2 rows */}
        <div className="col-span-1 row-span-2 relative overflow-hidden bg-[#022733]">
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
        <div className="col-span-1 row-span-1 relative overflow-hidden bg-[#022733]">
          <Image
            src={bird2}
            alt="Blue bird illustration"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 25vw, 16vw"
          />
        </div>

        {/* Mint/Green empty */}
        <div className="col-span-1 row-span-1 bg-[#8BC9AA]" />

        {/* Cream with VISUAL IDENTITY text */}
        <div className="col-span-1 row-span-1 flex items-center justify-center bg-[#F1EBDF]">
          <span className="font-bold text-3xl lg:text-5xl tracking-wide font-dogurtlen text-[#022733] text-center leading-10 ">
            VISUAL
            <br />
            IDENTITY
          </span>
        </div>

        {/* Flame/Abstract form */}
        <div className="col-span-1 row-span-1 relative overflow-hidden bg-[#EF9BBC]">
          <Image
            src={flame}
            alt="Flame illustration"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 25vw, 16vw"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
