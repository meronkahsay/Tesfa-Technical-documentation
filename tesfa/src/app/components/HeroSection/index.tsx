"use client";
import { useState } from "react";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { name: "System Components", id: "system-components" },
    { name: "System Architecture", id: "system-architecture" },
    { name: "Code Structure", id: "code-structure" },
    { name: "Testing & QA Assurance", id: "testing-qa-assurance" },
    { name: "Deployment", id: "deployment" },
  ];
  const scrollToSection = (id:string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); 
  };
  return (
    <main className="lg:px-40 lg:py-20 bg-white">
      <header className="lg:fixed lg:top-0 lg:left-0  lg:w-full lg:bg-white lg:z-50 flex justify-between items-center px-8 py-4 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-12 h-10 flex items-center justify-center">
            <img src={"/Images/Logo-blue.png"} alt="Logo"/>
          </div>
          <h1 className="text-2xl mt-5 font-light text-gray-800">Tesfa</h1>
        </div>
        <nav className="hidden lg:flex gap-8 text-[#003D3B] lg:text-[14px] xl:text-2xl mt-5 font-medium">
          {menuItems.map((item, i) => (
            <button
              key={i}
              onClick={() => scrollToSection(item.id)}
              className="relative group cursor-pointer bg-transparent border-none p-0 text-left text-[#003D3B] group-hover:text-[#C59D2C]"
            >
              {item.name}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#C59D2C] transition-all group-hover:w-full"></span>
            </button>
          ))}
        </nav>
        <button
          className="lg:hidden text-[#C19300] text-3xl"
          onClick={() => setIsOpen(true)}
        >
          <HiMenu />
        </button>
      </header>
      {isOpen && (
        <div className="fixed inset-0 w-full px-15 py-30 h-full bg-white z-50 flex flex-col space-y-8 text-2xl font-medium">
          <button
            className="absolute top-6 left-82 text-4xl text-[#C19300]"
            onClick={() => setIsOpen(false)}
          >
            <HiX/>
          </button>
          {menuItems.map((item, i) => (
            <button
              key={i}
              onClick={() => scrollToSection(item.id)}
              className="relative group cursor-pointer bg-transparent border-none p-0 text-left text-[#003D3B] group-hover:text-[#C59D2C]"
            >
              {item.name}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#C19300] transition-all group-hover:w-full"></span>
            </button>
          ))}
        </div>
      )}
      <section className="flex flex-col lg:flex-row items-center justify-between py-16">
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#003D3B] leading-snug">
            Rebuilding <span className="text-[#C19300]">hope</span> with agentic <br /> health risk prediction
          </h2>
          <p className="text-[#003D3B] lg:text-2xl text-xl leading-relaxed">
            Tesfa is an agentic AI platform built to empower NGOs working in post-conflict regions.
            By integrating predictive analytics, risk modeling, and interactive data visualization,
            Tesfa enables users to identify, monitor, and proactively address long-term health and
            environmental risks stemming from war and conflict.
          </p>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-end">
          <Image
            src="/Images/global 2.png"
            alt="Globe"
            width={500}
            height={500}
            className="max-w-full h-auto"
          />
        </div>
      </section>
    </main>
  );
}