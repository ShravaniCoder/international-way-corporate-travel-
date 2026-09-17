import React from "react";
import { Link } from "react-router-dom";
import { Globe2, MapPin } from "lucide-react";
import { IMG } from "../data/siteData";
import PageHero from "../components/PageHero";
import SectionIntro from "../components/SectionIntro";
import Button from "../components/Button";

export default function GlobalReach() {
  const destinations = [
    ["Mumbai / India", IMG.mumbai, "A key business gateway for domestic and international corporate travel."],
    ["Dubai / UAE", IMG.dubai, "A global business hub for executive travel, meetings and hospitality."],
    ["Singapore", IMG.singapore, "A strategic destination for regional and international business movements."],
    ["Kuwait", IMG.kuwait, "Corporate travel coordination for business journeys across the Gulf."],
    ["Other key business destinations", IMG.city, "Flexible coordination for additional destinations based on your itinerary and requirements."]
  ];
  return <>
    <PageHero eyebrow="Global Reach" title="A global perspective, locally coordinated." text="Connecting businesses to destinations worldwide through seamless corporate travel and hospitality coordination." image={IMG.city}/>
    <section className="bg-[#f9f6ef] py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8">
      <div className="mb-12 max-w-2xl"><SectionIntro eyebrow="Destinations" title="Where your business takes you." text="The locations below represent destinations where services can be provided or coordinated. They are not described as offices or partners unless specifically established." /></div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {destinations.map(([name,img,text],i)=><div key={name} className={`group overflow-hidden border border-[#a8977a]/25 bg-white ${i===4 ? "lg:col-span-2" : ""}`}><div className="relative h-64 overflow-hidden"><img src={img} alt={name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105"/><div className="image-overlay absolute inset-0"/><div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-[#f1d295]/60 bg-[#2b1a0f]/70 text-[#f1d295]"><MapPin size={17}/></div></div><div className="p-6"><div className="text-[9px] uppercase tracking-[.18em] text-[#b88b3c]">Destination 0{i+1}</div><h3 className="mt-2 font-display text-2xl text-[#2b1a0f]">{name}</h3><p className="mt-3 text-xs leading-6 text-[#3e3a32]/65">{text}</p></div></div>)}
      </div>
    </div></section>
    <section className="luxury-bg py-20"><div className="mx-auto max-w-4xl px-5 text-center lg:px-8"><Globe2 className="mx-auto text-[#f1d295]" size={42} strokeWidth={1}/><h2 className="mt-6 font-display text-4xl text-white sm:text-5xl">Tell us where business needs to take you.</h2><p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/60">Share your destination, dates and requirements. We’ll help coordinate the journey around your business needs.</p><div className="mt-8"><Button>Request Assistance</Button></div></div></section>
  </>;
}
