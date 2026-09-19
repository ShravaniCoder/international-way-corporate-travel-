import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#17100b] text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="font-display text-2xl tracking-[.07em]">EDORA INTERNATIONAL WAY</div>
            <div className="mt-1 text-[9px] tracking-[.35em] text-[#f1d295]">CORPORATE TRAVEL & HOSPITALITY</div>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/55">EDORA International Way delivers a refined approach to corporate travel and hospitality, connecting people, places and arrangements with precision, discretion and purpose.</p>
          </div>
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[.2em] text-[#f1d295]">Explore</div>
            <div className="mt-5 grid gap-3 text-sm text-white/65">
              <Link to="/about" className="hover:text-white">About</Link>
              <Link to="/services" className="hover:text-white">Services</Link>
              <Link to="/corporate-solutions" className="hover:text-white">Corporate Solutions</Link>
              <Link to="/global-reach" className="hover:text-white">Global Reach</Link>
            </div>
          </div>
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[.2em] text-[#f1d295]">Connect</div>
            <div className="mt-5 space-y-3 text-sm text-white/65">
              <div className="flex gap-3"><Mail size={16}/> corporate@internationalway.com</div>
              <div className="flex gap-3"><Phone size={16}/> +91 00000 00000</div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-[9px] uppercase tracking-[.18em] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} International Way. All rights reserved.</span>
          <span>People · Places · Possibilities</span>
        </div>
      </div>
    </footer>
  );
}
