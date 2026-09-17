import React from "react";
import { IMG } from "../data/siteData";

export default function PageHero({eyebrow,title,text,image=IMG.hero}) {
  return <section className="relative min-h-[470px] overflow-hidden bg-[#17100b] pt-[78px]">
    <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-55"/>
    <div className="hero-overlay absolute inset-0"/>
    <div className="relative mx-auto flex min-h-[390px] max-w-7xl items-end px-5 pb-20 lg:px-8">
      <div className="max-w-3xl text-white">
        <div className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.28em] text-[#f1d295]"><span className="h-px w-9 bg-current"/>{eyebrow}</div>
        <h1 className="font-display text-5xl sm:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-white/65">{text}</p>
      </div>
    </div>
  </section>;
}
