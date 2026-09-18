import React from "react";
import { IMG, solutions } from "../data/siteData";
import PageHero from "../components/PageHero";
import SectionIntro from "../components/SectionIntro";
import Button from "../components/Button";
import CTASection from "../components/CTASection";

export default function CorporateSolutions() {
  return <>
  <PageHero
  eyebrow="Corporate Solutions"
  title="Travel solutions aligned to business needs."
  text="Structured support for employee travel, executive movements, group requirements and corporate hospitality."
  image={IMG.business}
  mobileImage={IMG.solutionMobile}
/>
    <section className="bg-[#f9f6ef] py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-2">{solutions.map(({icon,title,text},i)=><div key={title} className="luxury-card flex gap-6 p-8"><div className="flex h-14 w-14 shrink-0 items-center justify-center border border-[#b88b3c]/40 text-[#b88b3c]">{React.createElement(icon, {size:23, strokeWidth:1.4})}</div><div><div className="text-[9px] uppercase tracking-[.18em] text-[#b88b3c]">Solution 0{i+1}</div><h3 className="mt-2 font-display text-3xl text-[#2b1a0f]">{title}</h3><p className="mt-3 text-sm leading-7 text-[#3e3a32]/65">{text}</p></div></div>)}</div>
    </div></section>
    <section className="bg-[#eee6db] py-20"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid gap-8 md:grid-cols-4">{[["24/7","Travel attention"],["1","Coordinated experience"],["Global","Destination reach"],["Premium","Service mindset"]].map(([big,small])=><div key={big} className="text-center"><div className="font-display text-4xl text-[#b88b3c]">{big}</div><div className="mt-2 text-[9px] uppercase tracking-[.18em] text-[#3e3a32]/60">{small}</div></div>)}</div></div></section>
    <CTASection/>
  </>;
}
