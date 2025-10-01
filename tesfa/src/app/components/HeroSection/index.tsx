"use client";
import Image from "next/image";
export default function Home() {
  return (
    <main className=" bg-white p-6 md:px-20">
         <div className="flex items-center gap-2">
            <Image
              src="/Images/Logo-blue.png" 
              alt="Tesfa logo"
              width={70}
              height={70}
              className="lg:w-18 w-12"
            />
    
            <span className="lg:text-6xl text-4xl mt-4 sm:mt-5 font-light  text-gray-800">Tesfa</span>
          
          </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center   w-full">
        
   
        <div className="space-y-6 sm:m-0 mt-7 ">
      
          <h1 className="text-3xl md:text-6xl font-semibold leading-snug text-gray-800">
            Rebuilding{" "}
            <span className="text-yellow-500 font-semibold">hope</span> with
            agentic health risk prediction
          </h1>
        
          <p className="text-gray-600 text-2xl ">
            Tesfa is an agentic AI platform built to empower NGOs working in
            post-conflict regions. By integrating predictive analytics, risk
            modeling, and interactive data visualization, Tesfa enables users to
            identify, monitor, and proactively address long-term health and
            environmental risks stemming from war and conflict.
          </p>
        </div>
     
        <div className="flex  md:justify-end">
          <Image
            src="/Images/global 2.png" 
            alt="Globe visualization"
            width={700}
            height={700}
            className=""
          />
        </div>
      </div>
    </main>
  );
}