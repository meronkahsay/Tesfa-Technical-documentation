import React from "react";
export default function DataFlow() {
  const steps = [
    {
      title: "Data Ingestion",
      number: "1",
      details: [
        "Sources: Local NGO reports, Scientific literature and research articles",
        "Process: HTML Processing,White space normalization,Recursive Text Extraction",
      ],
    },
    {
      title: "Data Processing",
      number: "2",
      details: [
        "Unstructured data processed via LLMs",
        "Embeddings generated for semantic search and RAG",
      ],
    },
    {
      title: "Prediction & Insights",
      number: "3",
      details: [
        "AI models generate: Disease risk levels & Intervention recommendations",
        "Output stored in the Predictions table, delivered to frontend for visualization",
      ],
    },
    {
      title: "Visualization & Reporting",
      number: "4",
      details: [
        "Visualization & Reporting: Interactive maps",
        "Task dashboards, Summary and detail reports",
      ],
    },
  ];
  return (
    <main className="min-h-screen bg-white flex flex-col mt-25 px-4 md:px-22 py-12">
      <h1 className="text-4xl md:text-6xl ml-18 font-semibold text-gray-800  mb-16">
        Data Flow
      </h1>
      {/* Steps wrapper */}
      <div className="flex flex-col md:flex-row items-center md:items-stretch justify-between w-full gap-12 mt-20 md:gap-6">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center md:w-1/4"
          >
        
            <div className="relative flex items-center justify-center">
              <div className="w-40 h-40 md:w-50 md:h-50 rounded-full bg-[#0D3B3A] flex items-center justify-center text-white text-lg md:text-2xl font-medium shadow-lg">
                {step.title}
              </div>
            
              <div className="absolute rotate-90 -right-9 w-24 h-24 border-t-12 border-[#C19300] rounded-full md:w-70 md:h-70"></div>
          
              <div className="absolute -right-12 bg-[#0D3B3A] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                {step.number}
              </div>
            </div>
         
            <ul className="text-sm md:text-xl text-[#003333]  leading-relaxed mt-25 text-left list-disc list list-outside pl-4 ml-10 marker:text-[#C19300]">
              {step.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}