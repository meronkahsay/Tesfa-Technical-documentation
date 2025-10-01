"use client";
import Image from "next/image";
export default function CodeStructurePage() {
  return (
    <div className="max-w-[100rem] mt-12 mx-auto">

      <div className="flex justify-between items-start w-full mb-20">
  
        <div className="flex items-center space-x-3  ml-10">

          <Image src="/Images/Logo-blue.png" alt="Tesfa Logo" width={70} height={70} />
          <span className="text-4xl mt-7 font-light text-[#00353D]">Tesfa</span>
        </div>
     
        <nav className="flex space-x-12 mt-8">
          <a href="#system-components" className="text-[#00353D] font-semibold text-xl  hover:text-[#B88704] ">System Components</a>
          <a href="#system-architecture" className="text-[#00353D] font-semibold text-xl  hover:text-[#B88704]">System Architecture</a>
          <a href="#code-structure" className="text-[#00353D] font-semibold text-xl  hover:text-[#B88704]">Code Structure</a>
          <a href="#testing" className="text-[#00353D] font-semibold text-xl  hover:text-[#B88704]">Testing & QA Assurance</a>
          <a href="#deployment" className="text-[#00353D] font-semibold text-xl  hover:text-[#B88704]">Deployment</a>
        </nav>
      </div>
    
      <div className="flex flex-col md:flex-row justify-between items-start w-full">
        <div className="flex-1 mt-10 ml-10">
          <h1 className="text-5xl font-bold md:text-6xl font-semi-bold text-[#00353D] mb-4 leading-tight">
            Rebuilding <span className="text-[#B88704] font-semi-bold">hope</span> with agentic<br />
            health risk prediction
          </h1>
          <p className="text-lg md:text-xl text-[#00353D] max-w-2xl leading-relaxed mt-6">
            Tesfa is an agentic AI platform built to empower NGOs working in post-conflict regions. By integrating predictive analytics, risk modeling, and interactive data visualization, Tesfa enables users to identify, monitor, and proactively address long-term health and environmental risks stemming from war and conflict.
          </p>
        </div>
        <div className="flex-1 flex justify-end mt-10 md:mt-0">

          <Image
            src="/Images/global 2.png"
            alt="Globe"
            width={540}
            height={540}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}