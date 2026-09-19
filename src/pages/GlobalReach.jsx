import React from "react";
import { Link } from "react-router-dom";
import { Globe2, MapPin } from "lucide-react";
import { IMG } from "../data/siteData";
import PageHero from "../components/PageHero";
import SectionIntro from "../components/SectionIntro";
import Button from "../components/Button";

export default function GlobalReach() {
  const destinations = [
    ["Mumbai / India", IMG.mumbai, "We coordinate business journeys through a key gateway for corporate travel and international connectivity."],
    ["Dubai / UAE", IMG.dubai, "We support business journeys through a leading destination for international meetings, executive travel and corporate engagements."],
    ["Singapore", IMG.singapore, "We coordinate corporate journeys through a highly connected destination for regional and international business travel."],
    ["London", IMG.london, "We support business journeys to a prominent international destination for corporate meetings and professional engagements."],
    ["Beyond", IMG.europe, "We coordinate additional destinations according to your itinerary, business priorities and specific requirements."]
  ];
  return <>
    <PageHero eyebrow="Global Reach" title="Beyond borders. Precisely coordinated." text="Supporting business journeys across key international destinations through refined corporate travel and hospitality coordination." image={IMG.city}/>
    <section className="bg-[#f9f6ef] py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8">
      <div className="mb-12 max-w-2xl"><SectionIntro eyebrow="Destinations" title="Where business connects globally." text="Our destination coverage reflects the markets and locations across which EDORA International Way can support or coordinate corporate travel and hospitality requirements." /></div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {destinations.map(([name,img,text],i)=><div key={name} className={`group overflow-hidden border border-[#a8977a]/25 bg-white ${i===4 ? "lg:col-span-2" : ""}`}><div className="relative h-64 overflow-hidden"><img src={img} alt={name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105"/><div className="image-overlay absolute inset-0"/><div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-[#f1d295]/60 bg-[#2b1a0f]/70 text-[#f1d295]"><MapPin size={17}/></div></div><div className="p-6"><div className="text-[9px] uppercase tracking-[.18em] text-[#b88b3c]">Destination 0{i+1}</div><h3 className="mt-2 font-display text-2xl text-[#2b1a0f]">{name}</h3><p className="mt-3 text-xs leading-6 text-[#3e3a32]/65">{text}</p></div></div>)}
      </div>
    </div></section>
    <section className="luxury-bg py-20"><div className="mx-auto max-w-4xl px-5 text-center lg:px-8"><Globe2 className="mx-auto text-[#f1d295]" size={42} strokeWidth={1}/><h2 className="mt-6 font-display text-4xl text-white sm:text-5xl">Wherever business takes you, let’s make the journey seamless.</h2><p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/60">Share your travel requirements with EDORA International Way, and we’ll coordinate the details with precision and care.</p><div className="mt-8"><Button>Request Assistance</Button></div></div></section>
  </>;
}
