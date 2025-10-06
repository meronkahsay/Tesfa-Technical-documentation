"use client";
import { FaHeartbeat, FaFlask, FaSearch, FaCode, FaRocket } from "react-icons/fa";
export default function TesfaAgent() {
  return (
    <div className="mt-15 lg:px-20 2xl:px-40 px-6 ">
     
      <section className="bg-white w-full   py-12">
        <h1 className="lg:text-5xl text-4xl 2xl:text-6xl font-bold text-[#003D3B] leading-snug">
          Tesfa <span className="text-[#C59D2C]">AI</span> Agent
        </h1>
        <p className="mt-10 text-gray-700 sm:text-lg lg:text-xl 2xl:text-2xl leading-relaxed">
      The Tesfa AI Agent is an intelligent system designed to predict long-term health risks in post-conflict regions, leveraging advanced agentic AI principles with Google's ADK framework. It integrates BioGPT for medical expertise, Gemini (specifically the gemini-2.0-flash model) for reasoning and structured outputs, and utilizes a hybrid Retrieval-Augmented Generation (RAG) approach. The agent retrieves structured data from Supabase, conducts web fallback searches as needed, and communicates risk levels as percentages (0-100%). For medium or high risks, the system provides actionable recommendations for NGOs, presenting all results in a clear, consistent JSON format.
        </p>
        <p className="mt-4 text-gray-700 sm:text-lg lg:text-xl 2xl:text-2xl leading-relaxed">

Powered by a FastAPI and Uvicorn backend, the API server stores session history in SQLite, enables CORS for broad accessibility, and offers an optional web-based interface to enhance usability and integration for humanitarian actors.
        </p>
      </section>
                    <h2 className="text-2xl font-bold text-[#C59D2C] xl:text-4xl">System Overview</h2>
        <section className=" w-full flex justify-center py-20 px-6">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-12 text-white">
  
          <div className="flex items-center border-2 text-[#003D3B] border-[#C59D2C] lg:text-xl rounded-lg p-6 space-x-3 shadow-md">
            <FaHeartbeat className="text-[#003D3B]  text-lg lg:text-2xl" />
            <p>Health risk prediction in conflict-affected regions.</p>
          </div>
        
          <div className="flex items-center border-2 text-[#003D3B]  border-[#C59D2C]  lg:text-xl rounded-lg p-4 space-x-3 shadow-md">
            <FaFlask className="text-[#003D3B] text-lg lg:text-2xl" />
            <p>BioGPT for medical predictions.</p>
          </div>
       
          <div className="flex items-center bg-[#003D3B] border border-[#C59D2C] p-6 lg:text-xl rounded-lg space-x-3 shadow-md">
            <FaSearch className="text-white text-lg lg:text-2xl" />
            <p>Hybrid retrieval from Supabase and web search.</p>
          </div>
       
          <div className="flex items-center bg-[#003D3B] border border-[#C59D2C] rounded-lg lg:text-xl p-4 space-x-3 shadow-md">
            <FaCode className="text-white text-lg lg:text-2xl" />
            <p>Google Gemini for reasoning and structured JSON outputs.</p>
          </div>
       
          <div className="md:col-span-2 flex justify-center">
            <div className="flex items-center border-2 text-[#003D3B] border-yellow-500 rounded-lg lg:text-xl p-6 px-6 space-x-3 shadow-md">
              <FaRocket className="text-[#003D3B] text-lg lg:text-2xl" />
              <p>Deployable via FastAPI + Docker.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}





