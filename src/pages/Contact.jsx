import React, { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { IMG } from "../data/siteData";
import PageHero from "../components/PageHero";
import SectionIntro from "../components/SectionIntro";

export default function Contact() {
  const [sent, setSent] = useState(false);
  return <>
    <PageHero eyebrow="Contact / Request Assistance" title="Let's coordinate your next journey." text="Tell us what you need and our team can review the requirement and respond with the appropriate next steps." image={IMG.airport}/>
    <section className="bg-[#f9f6ef] py-24"><div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[.75fr_1.35fr] lg:px-8">
      <div>
        <SectionIntro eyebrow="Corporate Enquiry" title="A better way to begin." text="For corporate travel, executive movements, group travel, accommodation, transfers, visa assistance or hospitality requirements, send us your details."/>
        <div className="mt-9 space-y-5">
          <ContactItem icon={Mail} title="Email" text="corporate@internationalway.com"/>
          <ContactItem icon={Phone} title="Phone" text="+91 00000 00000"/>
          <ContactItem icon={MapPin} title="Service Coverage" text="India · UAE · Singapore · Kuwait · Other business destinations"/>
        </div>
      </div>
      <form onSubmit={(e)=>{e.preventDefault();setSent(true)}} className="luxury-card p-6 sm:p-9">
        {sent && <div className="mb-6 border border-[#b88b3c]/30 bg-[#eee6db] p-4 text-sm text-[#2b1a0f]">Thank you. Your enquiry has been captured for review. Connect this form to your preferred email/API before production.</div>}
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Company Name" name="company" required/>
          <Field label="Contact Person" name="contact" required/>
          <Field label="Email" name="email" type="email" required/>
          <Field label="Phone" name="phone" required/>
          <Field label="Destination" name="destination"/>
          <Field label="Number of Travellers" name="travellers" type="number" min="1"/>
          <Field label="Travel Dates" name="dates" type="text" placeholder="e.g. 12–18 Oct 2026"/>
          <div><label className="mb-2 block text-[9px] font-semibold uppercase tracking-[.16em] text-[#3e3a32]">Service Required</label><select name="service" className="w-full border border-[#a8977a]/35 bg-white px-4 py-3 text-sm text-[#3e3a32]"><option>Corporate Travel</option><option>Hotel & Accommodation</option><option>Executive / VIP Travel</option><option>Corporate Group Travel</option><option>Visa Assistance</option><option>Airport Transfers</option><option>Corporate Hospitality</option></select></div>
          <div className="sm:col-span-2"><label className="mb-2 block text-[9px] font-semibold uppercase tracking-[.16em] text-[#3e3a32]">Message</label><textarea name="message" rows="6" placeholder="Tell us about your travel requirement..." className="w-full resize-none border border-[#a8977a]/35 bg-white px-4 py-3 text-sm text-[#3e3a32] placeholder:text-[#3e3a32]/35"/></div>
          <div className="sm:col-span-2"><button className="inline-flex items-center gap-3 rounded-full bg-[#b88b3c] px-7 py-4 text-[10px] font-semibold uppercase tracking-[.17em] text-white shadow-gold transition hover:bg-[#9d722d]">Submit Request <ArrowRight size={15}/></button></div>
        </div>
      </form>
    </div></section>
  </>;
}

function Field({label, name, type="text", required=false, placeholder="" , min}) {
  return <div><label className="mb-2 block text-[9px] font-semibold uppercase tracking-[.16em] text-[#3e3a32]">{label}{required && " *"}</label><input required={required} name={name} type={type} min={min} placeholder={placeholder} className="w-full border border-[#a8977a]/35 bg-white px-4 py-3 text-sm text-[#3e3a32] placeholder:text-[#3e3a32]/35"/></div>;
}
function ContactItem({icon:Icon,title,text}) { return <div className="flex gap-4 border-b border-[#a8977a]/25 pb-5"><div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#b88b3c]/40 text-[#b88b3c]"><Icon size={17}/></div><div><div className="text-[9px] uppercase tracking-[.18em] text-[#b88b3c]">{title}</div><div className="mt-1 text-sm text-[#3e3a32]/70">{text}</div></div></div>; }
