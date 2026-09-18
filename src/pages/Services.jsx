import React from "react";
import { IMG, services } from "../data/siteData";
import PageHero from "../components/PageHero";
import SectionIntro from "../components/SectionIntro";
import Button from "../components/Button";
import ServiceCard from "../components/ServiceCard";

export default function Services() {
  return <>
    <PageHero eyebrow="Our Services" title="Business travel, from first detail to final arrival." text="A coordinated portfolio of travel and hospitality services for employees, executives, groups and business guests." image={IMG.serviceh}/>
    <section className="bg-[#f9f6ef] py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{services.map(({icon,title,text},i)=><ServiceCard key={title} icon={icon} title={title} text={text} number={`0${i+1}`}/>)}</div>
    </div></section>
    <section className="luxury-bg py-20"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid gap-12 lg:grid-cols-2 lg:items-center"><div><SectionIntro light eyebrow="A single journey, coordinated" title="Designed around the way business moves." text="Combine services around your requirement — from a single executive trip to a multi-city corporate movement."/><div className="mt-8"><Button>Request Assistance</Button></div></div><img src={IMG.hotel} alt="Luxury accommodation" className="h-[390px] w-full object-cover"/></div></div></section>
  </>;
}
