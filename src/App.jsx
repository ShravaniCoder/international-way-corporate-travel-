import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import CorporateSolutions from "./pages/CorporateSolutions";
import GlobalReach from "./pages/GlobalReach";
import Contact from "./pages/Contact";

export default function App() {
  return <Layout><Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/services" element={<Services/>}/>
    <Route path="/corporate-solutions" element={<CorporateSolutions/>}/>
    <Route path="/global-reach" element={<GlobalReach/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="*" element={<Home/>}/>
  </Routes></Layout>;
}
