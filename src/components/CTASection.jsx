import React from "react";
import SectionIntro from "./SectionIntro";
import Button from "./Button";

export default function CTASection() {
  return <section className="relative overflow-hidden bg-[#eee6db] py-24"><div className="absolute right-0 top-0 h-full w-1/2 bg-[url('https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&w=1400&q=70')] bg-cover bg-center opacity-15"/><div className="relative mx-auto max-w-7xl px-5 lg:px-8"><div className="max-w-3xl"><SectionIntro eyebrow="Start a conversation" title="More than travel. A better tomorrow." text="Bring us your next corporate travel requirement and let’s coordinate the details around your people, priorities and destination."/><div className="mt-8"><Button>Request Assistance</Button></div></div></div></section>;
}
