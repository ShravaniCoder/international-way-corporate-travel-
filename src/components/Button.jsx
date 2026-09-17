import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Button({children, to="/contact", variant="primary"}) {
  const styles = variant === "primary"
    ? "bg-[#b88b3c] text-white shadow-gold hover:bg-[#9d722d]"
    : variant === "dark"
    ? "bg-[#2b1a0f] text-white hover:bg-[#17100b]"
    : "border border-[#8e806d] text-[#2b1a0f] hover:border-[#b88b3c] hover:bg-white";
  return <Link to={to} className={`inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[.16em] transition ${styles}`}>{children}<ArrowRight size={15}/></Link>;
}
