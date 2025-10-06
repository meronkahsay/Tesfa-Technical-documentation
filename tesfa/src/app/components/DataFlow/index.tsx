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
    <main className="bg-white flex flex-col  px-4 lg:px-10 2xl:px-40 py-12">
      <h2 className="text-2xl font-bold text-[#C59D2C] xl:text-4xl">
        Data Flow
      </h2>
      <div className="flex flex-col xl:flex-row items-center xl:items-stretch justify-between w-full gap-12 xl:gap-6  mt-20">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center xl:w-1/4"
          >
            <div className="relative  flex  items-center justify-center">
              <div className="w-40 h-40 xl:w-50 xl:h-50 rounded-full bg-[#0D3B3A] flex items-center justify-center text-white text-lg xl:text-2xl font-medium shadow-lg">
                {step.title}
              </div>
              <div className="absolute rotate-90 -right-10 w-24 h-24 border-t-12 border-[#C19300] rounded-full xl:w-70 xl:h-70"></div>
              <div className="absolute -right-13 bg-[#0D3B3A] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                {step.number}
              </div>
            </div>
            <ul className="text-sm  2xl:text-2xl md:text-xl text-[#003333] leading-relaxed mt-25 text-left list-disc list-outside pl-4 ml-10 marker:text-[#C19300]">
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