"use client";
import { useState } from "react";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";

export default function Home() {
  const menuItems = [
    { name: "System Components", id: "system-components" },
    { name: "System Architecture", id: "system-architecture" },
    { name: "Code Structure", id: "code-structure" },
    { name: "Testing & QA Assurance", id: "testing-qa-assurance" },
    { name: "Deployment", id: "deployment" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(menuItems[0].id);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(id);
    setIsOpen(false);
  };
  return (
    <main className="2xl:px-40 lg:px-20 lg:py-20 bg-white">
      <header className="lg:fixed lg:top-0 lg:left-0  lg:w-full lg:bg-white lg:z-50 flex justify-between items-center px-8 py-4 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-12 h-10 flex items-center justify-center">
            <img src={"/Images/Logo-blue.png"} alt="Logo" />
          </div>
          <h1 className="text-2xl mt-5 font-light text-gray-800">Tesfa</h1>
        </div>

        <nav className="hidden lg:flex gap-8 text-[#003D3B] lg:text-[16px] xl:text-2xl  mt-5 font-medium">
          {menuItems.map((item, i) => (
            <button
              key={i}
              onClick={() => scrollToSection(item.id)}
              className={`
                relative group cursor-pointer bg-transparent border-none p-0 text-left transition-colors
                ${activeSection === item.id ? "text-[#C59D2C]" : "text-[#003D3B] hover:text-[#C59D2C]"}
              `}
            >
              {item.name}
              <span
                className={`
                  absolute left-0 bottom-0 h-[2px] bg-[#C59D2C] transition-all duration-300
                  ${activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"}
                `}
              ></span>
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
            <HiX />
          </button>
          {menuItems.map((item, i) => (
            <button
              key={i}
              onClick={() => scrollToSection(item.id)}
              className={`
                relative group cursor-pointer bg-transparent border-none p-0 text-left transition-colors
                ${activeSection === item.id ? "text-[#C59D2C]" : "text-[#003D3B] hover:text-[#C59D2C]"}
              `}
            >
              {item.name}
              <span
                className={`
                  absolute left-0 bottom-0 h-[2px] bg-[#C59D2C] transition-all duration-300
                  ${activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"}
                `}
              ></span>
            </button>
          ))}
        </div>
      )}
      <section className="flex flex-col lg:flex-row items-center justify-between py-16 max-w-[90%] lg:max-w-[1200px] xl:max-w-[95%] mx-auto">
        <div className="lg:w-2/3 space-y-6">
          <h2 className="lg:text-5xl text-3xl 2xl:text-6xl font-bold text-[#003D3B] leading-snug">
            Rebuilding <span className="text-[#C59D2C]">hope</span> with agentic <br /> health risk prediction
          </h2>
          <p className="text-[#003D3B] text-base sm:text-lg lg:text-xl 2xl:text-2xl leading-relaxed">
            Tesfa is an agentic AI platform built to empower NGOs working in post-conflict regions.
            By integrating predictive analytics, risk modeling, and interactive data visualization,
            Tesfa enables users to identify, monitor, and proactively address long-term health and
            environmental risks stemming from war and conflict.
          </p>
        </div>
        <div className="lg:w-2/5 2xl:w-1/2 xs:w-1/4 sm:w-1/3 mt-10 lg:mt-0 flex justify-end">
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