// import React from "react";
// export default function DataFlow() {
//   const steps = [
//     {
//       title: "Data Ingestion",
//       number: "1",
//       details: [
//         "Sources: Local NGO reports, Scientific literature and research articles",
//         "Process: ETL pipeline for cleaning, normalization, and validation",
//       ],
//     },
//     {
//       title: "Data Processing",
//       number: "2",
//       details: [
//         "Unstructured data processed via LLMs",
//         "Embeddings generated for semantic search and RAG",
//       ],
//     },
//     {
//       title: "Prediction & Insights",
//       number: "3",
//       details: [
//         "AI models generate: Disease risk levels & Intervention recommendations",
//         "Output stored in the Predictions table, delivered to frontend for visualization",
//       ],
//     },
//     {
//       title: "Visualization & Reporting",
//       number: "4",
//       details: [
//         "Visualization & Reporting: Interactive maps",
//         "Task dashboards, Summary and detail reports",
//       ],
//     },
//   ];
//   return (
//     <main className="min-h-screen bg-white flex flex-col items-center justify-center px-4 md:px-12 py-12">
//       <h1 className="text-4xl md:text-6xl font-semibold text-gray-800 text-center mb-16">
//         Data Flow
//       </h1>
//       {/* Steps wrapper */}
//       <div className="flex flex-col md:flex-row items-center justify-between w-full gap-12 md:gap-6">
//         {steps.map((step, idx) => (
//           <div
//             key={idx}
//             className="flex flex-col items-center text-center md:w-1/4"
//           >
        
//             <div className="relative flex items-center justify-center">
//               <div className="w-40 h-40 md:w-44 md:h-44 rounded-full bg-[#0D3B3A] flex items-center justify-center text-white text-lg md:text-xl font-medium shadow-lg">
//                 {step.title}
//               </div>
            
//               <div className="absolute rotate-90 -right-18 w-24 h-24 border-t-8 border-[#C19300] rounded-full md:w-48 md:h-28"></div>
          
//               <div className="absolute -right-12 bg-[#0D3B3A] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
//                 {step.number}
//               </div>
//             </div>
         
//             <ul className="text-sm text-gray-700 leading-relaxed mt-6 text-left list-disc list-outside pl-4">
//               {step.details.map((detail, i) => (
//                 <li key={i}>{detail}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }



// import React from "react";
// export default function DataFlow() {
//   const steps = [
//     {
//       title: "Data Ingestion",
//       number: "1",
//       details: [
//         "Sources: Local NGO reports, Scientific literature and research articles",
//         "Process: ETL pipeline for cleaning, normalization, and validation",
//       ],
//     },
//     {
//       title: "Data Processing",
//       number: "2",
//       details: [
//         "Unstructured data processed via LLMs",
//         "Embeddings generated for semantic search and RAG",
//       ],
//     },
//     {
//       title: "Prediction & Insights",
//       number: "3",
//       details: [
//         "AI models generate: Disease risk levels & Intervention recommendations",
//         "Output stored in the Predictions table, delivered to frontend for visualization",
//       ],
//     },
//     {
//       title: "Visualization & Reporting",
//       number: "4",
//       details: [
//         "Visualization & Reporting: Interactive maps",
//         "Task dashboards, Summary and detail reports",
//       ],
//     },
//   ];
//   return (
//     <main className="min-h-screen bg-white flex flex-col items-center justify-center px-4 md:px-12 py-12">
//       <h1 className="text-4xl md:text-6xl font-semibold text-gray-800 text-center mb-16">
//         Data Flow
//       </h1>
//       {/* Steps wrapper */}
//       <div className="flex flex-col md:flex-row items-center justify-between w-full gap-12 md:gap-6">
//         {steps.map((step, idx) => (
//           <div
//             key={idx}
//             className="flex flex-col items-center text-center md:w-1/4"
//           >
        
//             <div className="relative flex items-center justify-center">
//               <div className="w-40 h-40 md:w-44 md:h-44 rounded-full bg-[#0D3B3A] flex items-center justify-center text-white text-lg md:text-xl font-medium shadow-lg">
//                 {step.title}
//               </div>
            
//               <div className="absolute -right-8 w-24 h-24 border-t-8 border-[#C19300] rounded-full md:w-28 md:h-28"></div>
          
//               <div className="absolute -right-12 bg-[#0D3B3A] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
//                 {step.number}
//               </div>
//             </div>
         
//             <ul className="text-sm text-gray-700 leading-relaxed mt-6 text-left list-disc list-outside pl-4">
//               {step.details.map((detail, i) => (
//                 <li key={i}>{detail}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }



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
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-4 md:px-12 py-12">
      <h1 className="text-4xl md:text-6xl font-semibold text-gray-800 text-center mb-16">
        Data Flow
      </h1>
      {/* Steps wrapper */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-12 md:gap-6">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center md:w-1/4"
          >
        
            <div className="relative flex items-center justify-center">
              <div className="w-40 h-40 md:w-50 md:h-50 rounded-full bg-[#0D3B3A] flex items-center justify-center text-white text-lg md:text-xl font-medium shadow-lg">
                {step.title}
              </div>
            
              <div className="absolute rotate-90 -right-9 w-24 h-24 border-t-12 border-[#C19300] rounded-full md:w-70 md:h-70"></div>
          
              <div className="absolute -right-12 bg-[#0D3B3A] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                {step.number}
              </div>
            </div>
         
            <ul className="text-sm md:text-xl  text-gray-700 leading-relaxed mt-15 text-left list-disc list list-outside pl-4 md:pl-20 marker:text-[#C19300]">
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
