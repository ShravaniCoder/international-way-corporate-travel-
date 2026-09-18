import React from "react";
import { IMG } from "../data/siteData";

export default function PageHero({
  eyebrow,
  title,
  text,
  image = IMG.hero,
  mobileImage,
}) {
  return (
    <section className="relative min-h-[420px] overflow-hidden bg-[#17100b] pt-[78px] md:min-h-[470px]">

      {/* Desktop Image */}
      <img
        src={image}
        alt=""
        className="absolute inset-0 hidden h-full w-full object-cover opacity-55 md:block"
      />

      {/* Mobile Image */}
      <img
        src={mobileImage || image}
        alt=""
        className="absolute inset-0 block h-full w-full object-cover opacity-55 md:hidden"
      />

      {/* Dark Overlay */}
      <div className="hero-overlay absolute inset-0" />

      {/* Hero Content */}
      <div className="relative mx-auto flex min-h-[482px] max-w-7xl items-end px-5 pb-12 md:min-h-[390px] md:pb-20 lg:px-8">
        
        <div className="max-w-3xl text-white">

          {/* Eyebrow */}
          <div className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.28em] text-[#f1d295]">
            <span className="h-px w-9 bg-current" />
            {eyebrow}
          </div>

          {/* Title */}
          <h1 className="font-display text-5xl sm:text-6xl">
            {title}
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/65">
            {text}
          </p>

        </div>
      </div>
    </section>
  );
}