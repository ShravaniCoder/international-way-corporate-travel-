import React from "react";
import SectionIntro from "./SectionIntro";
import Button from "./Button";

export default function CTASection() {
  return <section className="relative overflow-hidden bg-[#eee6db] py-24"><div className="absolute right-0 top-0 h-full w-1/2 bg-[url('../images/ctaaa.png')] bg-cover bg-center opacity-15"/><div className="relative mx-auto max-w-7xl px-5 lg:px-8"><div className="max-w-3xl"><SectionIntro eyebrow="Start a conversation" title="More than travel. A better tomorrow." text="Bring us your next corporate travel requirement and let’s coordinate the details around your people, priorities and destination."/><div className="mt-8"><Button>Request Assistance</Button></div></div></div></section>;
}
