import React from "react";

export default function InfoCard({icon:Icon,title,text}) {
  return <div className="luxury-card p-7"><Icon size={22} className="text-[#b88b3c]" strokeWidth={1.4}/><h3 className="mt-5 font-display text-2xl text-[#2b1a0f]">{title}</h3><p className="mt-3 text-xs leading-6 text-[#3e3a32]/65">{text}</p></div>;
}
