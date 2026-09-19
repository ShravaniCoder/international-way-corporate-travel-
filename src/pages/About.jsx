import React from "react";
import { Globe2, Star, ShieldCheck, Headphones } from "lucide-react";
import { IMG } from "../data/siteData";
import PageHero from "../components/PageHero";
import SectionIntro from "../components/SectionIntro";
import InfoCard from "../components/InfoCard";
import CTASection from "../components/CTASection";

export default function About() {
  return <>
    <PageHero eyebrow="About EDORA International Way" title="Where business journeys come together." text="EDORA International Way brings together corporate travel and hospitality coordination through a refined, responsive and detail-led approach." image={IMG.lounge}/>
    <section className="bg-[#f9f6ef] py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-2 lg:px-8">
        <div><SectionIntro eyebrow="Who We Are" title="A considered partner for modern business travel." text="At EDORA International Way, we support organisations, executives and travelling teams with carefully coordinated travel and hospitality requirements. Our team focuses on making every journey organised, seamless and professionally managed."/>
          <div className="mt-8 flex items-center gap-4 text-[10px] uppercase tracking-[.2em] text-[#b88b3c]"><span className="gold-line"/><span>People · JOURNEYS · CONNECTIONS</span></div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <InfoCard icon={Globe2} title="Our Mission" text="To simplify business travel through thoughtful coordination, reliable support and meaningful service."/>
          <InfoCard icon={Star} title="Our Vision" text="To build EDORA International Way into a trusted name for corporate travel and hospitality across global destinations."/>
          <InfoCard icon={ShieldCheck} title="Our Approach" text="We understand the requirement, plan with purpose, coordinate with precision and remain connected throughout the journey."/>
          <InfoCard icon={Headphones} title="People First" text="At EDORA International Way, we understand that every journey is different. We shape our support around your schedules, priorities and expectations, with thoughtful attention to every detail."/>
        </div>
      </div>
    </section>
 <section className="bg-[#eee6db] py-20">
  <div className="mx-auto max-w-7xl px-5 lg:px-8">

  {/* Section Heading */}
<div className="mb-14 max-w-3xl text-left">
  <SectionIntro
    eyebrow="How Edora International Way Works"
  />
</div>

    {/* Principles */}
    <div className="grid gap-8 md:grid-cols-3">
      {[
        {
          number: "01",
          title: "UNDERSTAND",
          text: "We begin by understanding your travel requirements, priorities and expectations.",
        },
        {
          number: "02",
          title: "COORDINATE",
          text: "Our team brings the relevant travel and hospitality arrangements together with careful attention to detail.",
        },
        {
          number: "03",
          title: "SUPPORT",
          text: "We stay connected throughout the journey, providing responsive coordination when you need it.",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="border-t border-[#b88b3c]/50 pt-5"
        >
          <div className="font-display text-3xl text-[#2b1a0f]">
            {item.number}
          </div>

          <h3 className="mt-3 text-xs font-semibold uppercase tracking-[.18em] text-[#2b1a0f]">
            {item.title}
          </h3>

          <p className="mt-3 max-w-md text-sm leading-6 text-[#3e3a32]/65">
            {item.text}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>
    <CTASection/>
  </>;
}
