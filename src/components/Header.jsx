import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Globe2, Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const nav = [
    ["Home", "/"],
    ["About", "/about"],
    ["Services", "/services"],
    ["Corporate Solutions", "/corporate-solutions"],
    ["Global Reach", "/global-reach"],
    ["Contact", "/contact"]
  ];
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0f0f0f]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/" className="group flex items-center gap-3 text-white" onClick={() => setOpen(false)}>
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#b88b3c]/70 text-[#f1d295]">
            <Globe2 size={21} strokeWidth={1.4}/>
          </div>
          <div>
            <div className="font-display text-[18px] tracking-[.08em]">INTERNATIONAL WAY</div>
            <div className="mt-0.5 text-[8px] tracking-[.35em] text-[#f1d295]">CORPORATE TRAVEL & HOSPITALITY</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map(([label, path]) => (
            <NavLink key={path} to={path} className={({isActive}) => `nav-link text-[10px] font-medium uppercase tracking-[.16em] transition ${isActive ? "active text-[#f1d295]" : "text-white/75 hover:text-white"}`}>
              {label}
            </NavLink>
          ))}
        </nav>
        <Link to="/contact" className="hidden rounded-full border border-[#b88b3c] bg-[#b88b3c] px-5 py-3 text-[10px] font-semibold uppercase tracking-[.16em] text-white shadow-gold transition hover:bg-[#9d722d] lg:block">
          Request Assistance
        </Link>
        <button onClick={() => setOpen(!open)} className="text-white lg:hidden" aria-label="Toggle menu">
          {open ? <X/> : <Menu/>}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-[#17100b] px-5 py-5 lg:hidden">
          {nav.map(([label, path]) => (
            <NavLink key={path} to={path} onClick={() => setOpen(false)} className="block border-b border-white/10 py-4 text-xs uppercase tracking-[.16em] text-white/80">
              {label}
            </NavLink>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="mt-5 block rounded-full bg-[#b88b3c] px-5 py-3 text-center text-xs font-semibold uppercase tracking-[.15em] text-white">Request Assistance</Link>
        </div>
      )}
    </header>
  );
}
