import React from "react";
import { Link } from "react-router-dom";
import { Check, MapPin } from "lucide-react";
import { IMG, services } from "../data/siteData";
import Button from "../components/Button";
import SectionIntro from "../components/SectionIntro";
import ServiceCard from "../components/ServiceCard";
import CTASection from "../components/CTASection";

export default function Home() {
  return (
    <>
      <section className="relative min-h-[760px] overflow-hidden bg-[#17100b] pt-[78px]">
        <img
          src={IMG.hero}
          alt="Premium corporate travel"
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-5 py-24 lg:px-8">
          <div className="max-w-3xl text-white">
            <div className="mb-6 flex items-center gap-4 text-[10px] font-medium uppercase tracking-[.38em] text-[#f1d295]">
              <span className="gold-line" />
              <span>WHERE BUSINESS TRAVELS</span>
            </div>
            <h1 className="font-display text-5xl leading-[1.03] sm:text-7xl lg:text-[82px]">
              Connecting people,{" "}
              <span className="text-gold-gradient">and possibilities.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Our global travel and hospitality coordination is designed to keep
              business journeys seamless, considered and connected from one
              destination to the next.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button>Request Assistance</Button>
              <Button to="/services" variant="dark">
                Explore Services
              </Button>
            </div>
            <div className="mt-14 grid max-w-2xl grid-cols-3 border-t border-white/15 pt-6">
              {[
                ["01", "Corporate Travel"],
                ["02", "Global Coordination"],
                ["03", "Premium Hospitality"],
              ].map(([n, t]) => (
                <div key={n}>
                  <div className="font-display text-2xl text-[#f1d295]">
                    {n}
                  </div>
                  <div className="mt-1 text-[9px] uppercase tracking-[.15em] text-white/55">
                    {t}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pattern bg-[#f9f6ef] py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionIntro
            eyebrow="What we coordinate"
            title="Every detail, connected with purpose."
            text="From executive journeys to corporate group movements, Edora International Way brings travel, accommodation and hospitality together with precision and ease."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 4).map(({ icon: Icon, title, text }, i) => (
              <ServiceCard
                key={title}
                icon={Icon}
                title={title}
                text={text}
                number={`0${i + 1}`}
              />
            ))}
          </div>
          <div className="mt-7 text-center">
            <Button to="/services" variant="outline">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      <section className="luxury-bg relative overflow-hidden py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <SectionIntro
              light
              eyebrow="Why International Way"
              title="Professional detail. Global perspective. Human service."
              text="We coordinate the moving parts of corporate travel so your people can focus on the purpose of the journey. Every request is approached with clarity, responsiveness and care."
            />
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {[
                "One coordinated point of contact",
                "Business-ready travel planning",
                "Executive & group flexibility",
                "Destination-aware assistance",
              ].map((x) => (
                <div key={x} className="flex gap-3 text-sm text-white/70">
                  <Check className="mt-0.5 text-[#f1d295]" size={17} />
                  {x}
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[440px] overflow-hidden rounded-[2px] border border-[#f1d295]/25 shadow-2xl">
            <img
              src={IMG.executive}
              alt="Executive travel"
              className="h-full w-full object-cover"
            />
            <div className="image-overlay absolute inset-0" />
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <div className="font-display text-3xl">More than travel.</div>
              <div className="mt-2 text-sm text-white/60">
                A better tomorrow.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eee6db] py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
            <SectionIntro
              eyebrow="Global Reach"
              title="Connected to the world's business destinations."
              text="We coordinate services across key business hubs and destinations, with the flexibility to support travel beyond the locations highlighted here."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Mumbai / India", IMG.mumbai, "Business & corporate travel"],
                ["Dubai / UAE", IMG.dubai, "Executive & hospitality"],
                ["Singapore", IMG.singapore, "International business"],
                ["Kuwait", IMG.kuwait, "Corporate movements"],
              ].map(([name, img, desc]) => (
                <Link
                  to="/global-reach"
                  key={name}
                  className="group relative h-52 overflow-hidden rounded-sm"
                >
                  <img
                    src={img}
                    alt={name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="image-overlay absolute inset-0" />
                  <div className="absolute bottom-0 left-0 p-5 text-white">
                    <div className="font-display text-2xl">{name}</div>
                    <div className="mt-1 text-[9px] uppercase tracking-[.14em] text-white/60">
                      {desc}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
