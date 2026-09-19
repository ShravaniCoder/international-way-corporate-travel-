import React from "react";
import { IMG, services } from "../data/siteData";
import PageHero from "../components/PageHero";
import SectionIntro from "../components/SectionIntro";
import Button from "../components/Button";
import ServiceCard from "../components/ServiceCard";

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Business travel, thoughtfully managed at every stage."
        text="International Way integrates travel and hospitality solutions to support executives, teams, corporate groups and business guests with precision and ease."
        image={IMG.serviceh}
        mobileImage={IMG.servicehMobile}
      />
      <section className="bg-[#f9f6ef] py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon, title, text }, i) => (
              <ServiceCard
                key={title}
                icon={icon}
                title={title}
                text={text}
                number={`0${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="luxury-bg py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionIntro
                light
                eyebrow="ONE JOURNEY. FULLY COORDINATED."
                title="Designed around your business needs."
                text="International Way connects travel and hospitality services into one seamless corporate solution."
              />
              <div className="mt-8">
                <Button>Request Assistance</Button>
              </div>
            </div>
            <img
              src={IMG.hotel}
              alt="Luxury accommodation"
              className="h-[390px] w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
