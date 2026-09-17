import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function ServiceCard({icon:Icon,title,text,number}) {
  return <div className="luxury-card group p-7 transition duration-300 hover:-translate-y-1">
    <div className="flex items-start justify-between"><div className="flex h-12 w-12 items-center justify-center border border-[#b88b3c]/45 text-[#b88b3c]"><Icon size={22} strokeWidth={1.4}/></div><span className="font-display text-xl text-[#b88b3c]/50">{number}</span></div>
    <h3 className="mt-7 font-display text-2xl text-[#2b1a0f]">{title}</h3>
    <p className="mt-3 text-xs leading-6 text-[#3e3a32]/65">{text}</p>
    <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[.16em] text-[#b88b3c]">Discuss your requirement <ArrowUpRight size={13}/></Link>
  </div>;
}
