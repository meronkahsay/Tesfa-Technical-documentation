"use client"
import { Mail, Phone, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";

import {useRef, useEffect} from "react";

export default function Footer() {
 const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    emailjs.init("DYVsRNFQ75C3lYDYB");
  }, []);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    emailjs.sendForm(
      "service_ws2u2zd",
      "template_tgh8f97",
      form.current,
      "DYVsRNFQ75C3lYDYB"
    ).then(
      () => alert("Message sent!"),
      () => alert("Message failed. Try again.")
    );
  };

  return (
    <footer id="contact-us-section" className="bg-[#004240] text-white px-6 py-12 md:-mt-40  md:px-15">
      <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row justify-between lg:pr-17">
        <div className="">
          <div className="flex items-center space-x-2 mb-8 sm:mb-15 ">
            <img
              src="/Images/Logo.png"
              alt="Tesfa Logo"
              width={150}
              height={150}
              className="object-contain"
            />
          </div>
          <div className="lg:ml-18 ">
            <h2 className=" font-semibold mb-5 md:text-4xl text-xl lg:text-[23px]">Company</h2>
            <ul className="space-y-7 text-gray-200 text-xl md:text-3xl lg:text-[20px]">
              <li className="hover:text-yellow-400 cursor-pointer">
                <a href="#about-us-section">About Us</a>
              </li>
              <li className="hover:text-yellow-400 cursor-pointer">
                <a href="#contact-us-section">Contact Us</a>
              </li>
              <li className="hover:text-yellow-400 cursor-pointer">
                <a href="#services-section">Services</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 md:mt-20 lg:mt-4  md:w-full lg:w-[40%]">
          <h2 className="font-semibold mb-5 text-3xl sm:mb-15 text-left md:text-6xl lg:text-[40px] lg:text-center ">
            Get in touch
          </h2>
            <form ref={form} className="space-y-4" onSubmit={sendEmail}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full md:text-2xl lg:text-xl  px-3 py-2 rounded text-black bg-amber-50 focus:border-[#FFC321] focus:ring-2 focus:ring-[#FFC321] focus:outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-3 md:text-2xl  lg:text-xl py-2 md:py-3 rounded text-black  bg-amber-50 focus:border-[#FFC321] focus:ring-2 focus:ring-[#FFC321] focus:outline-none"
              />
            </div>
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full md:h-1/2 px-3 py-1 md:text-2xl lg:text-xl md:py-9 lg:py-4 rounded text-black  bg-amber-50  focus:border-[#FFC321] focus:ring-2 focus:ring-[#FFC321] focus:outline-none "
            />
            <button
              type="submit"
              className="w-full bg-[#FFC321] font-semibold py-2 md:py-3 rounded hover:bg-yellow-500 transition cursor-pointer text-[20px]"
            >
              Submit Form
            </button>
          </form>
        </div>
        <div className="mt-10 md:mt-27">
          <h2 className="font-semibold mb-4  md:text-4xl text-xl lg:text-[23px]">Contact</h2>
          <ul className="space-y-7 lg:text-[20px] text-xl md:text-3xl text-gray-200 ">
            <li className="flex items-center gap-3 cursor-pointer hover:text-[#FFC321] transition-colors">
              <MapPin className="w-5 md:w-7 lg:w-6 lg:h-6 md:h-7 h-5  text-[#FFC321]" />
              AkiraChix, Nairobi
            </li>
            <li className="flex items-center gap-3  cursor-pointer hover:text-[#FFC321] transition-colors">
              <Phone className="w-5 h-5 md:w-7 lg:w-6 lg:h-6  md:h-7 text-[#FFC321]" />
              +254798477079
            </li>
            <li className="flex items-center gap-3 cursor-pointer hover:text-[#FFC321] transition-colors">
              <Mail className="w-5 h-5 md:w-7 md:h-7 lg:w-6 lg:h-6  text-[#FFC321]" />
              tesfa@gmail.com
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-600 mt-10 pt-4 text-center text-gray-300 md:text-2xl lg:text-[18px]">
        &copy; {new Date().getFullYear()} Tesfa. All Rights Reserved
      </div>
    </footer>
  );
}