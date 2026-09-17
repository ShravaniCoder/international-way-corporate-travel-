import React from "react";

export default function SectionIntro({eyebrow, title, text, light=false}) {
  return (
    <div className={light ? "text-white" : "text-[#2b1a0f]"}>
      <div className={`mb-4 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.25em] ${light ? "text-[#f1d295]" : "text-[#b88b3c]"}`}>
        <span className="h-px w-9 bg-current"/>{eyebrow}
      </div>
      <h2 className="font-display text-4xl leading-tight sm:text-5xl">{title}</h2>
      {text && <p className={`mt-5 max-w-2xl text-sm leading-7 ${light ? "text-white/60" : "text-[#3e3a32]/70"}`}>{text}</p>}
    </div>
  );
}
