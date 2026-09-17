import React from "react";
import { Globe2, Star, ShieldCheck, Headphones } from "lucide-react";
import { IMG } from "../data/siteData";
import PageHero from "../components/PageHero";
import SectionIntro from "../components/SectionIntro";
import InfoCard from "../components/InfoCard";
import CTASection from "../components/CTASection";

export default function About() {
  return <>
    <PageHero eyebrow="About International Way" title="Global journeys. Thoughtful coordination." text="A corporate travel and hospitality approach shaped around clarity, discretion and a high standard of service." image={IMG.lounge}/>
    <section className="bg-[#f9f6ef] py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-2 lg:px-8">
        <div><SectionIntro eyebrow="Who We Are" title="A refined approach to business travel." text="International Way coordinates corporate travel and hospitality requirements for organisations, executives and travelling teams. Our role is to simplify the journey by bringing relevant services together with care and consistency."/>
          <div className="mt-8 flex items-center gap-4 text-[10px] uppercase tracking-[.2em] text-[#b88b3c]"><span className="gold-line"/><span>People · Places · Possibilities</span></div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <InfoCard icon={Globe2} title="Our Mission" text="Make business travel feel considered, connected and dependable — wherever the journey leads."/>
          <InfoCard icon={Star} title="Our Vision" text="To be a trusted coordination layer for businesses navigating travel across borders."/>
          <InfoCard icon={ShieldCheck} title="Our Approach" text="Listen first, coordinate carefully, communicate clearly and stay attentive to the details."/>
          <InfoCard icon={Headphones} title="People First" text="Travel is ultimately about people. We design support around real schedules, priorities and expectations."/>
        </div>
      </div>
    </section>
    <section className="bg-[#eee6db] py-20"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid gap-6 md:grid-cols-3">{["Clarity","Responsiveness","Discretion"].map((x,i)=><div key={x} className="border-t border-[#b88b3c]/50 pt-5"><div className="font-display text-3xl text-[#2b1a0f]">0{i+1}</div><h3 className="mt-3 text-xs font-semibold uppercase tracking-[.18em] text-[#2b1a0f]">{x}</h3><p className="mt-3 text-sm leading-6 text-[#3e3a32]/65">A service principle that guides how we coordinate each business journey.</p></div>)}</div></div></section>
    <CTASection/>
  </>;
}
