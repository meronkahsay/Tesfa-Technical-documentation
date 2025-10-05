export default function ToolsUtilities() {
  const tools = [
    {
      name: "predict_health_risk()",
      description:
        "The system uses BioGPT to generate domain-specific analysis, and then Google Gemini reformats the output into structured JSON.",
      align: "ml-25", 
    },
    {
      name: "get_bio_gpt()",
      description:
        "Loads Microsoft’s BioGPT from HuggingFace, configured to run on GPU if available.",
      align: "ml-0", 
    },
    {
      name: "retrieve_context(query)",
      description:
        "The hybrid retrieval pipeline first queries Supabase embeddings, and if results are insufficient, it falls back to DuckDuckGo search, returning structured data for prediction.",
      align: "ml-25", 
    },
  ];
  return (
    <div className="lg:px-40 ">
      <div className="w-full flex flex-col px-4 py-12">
  
        <div className="flex items-center gap-3  text-[#C19300] mb-4">
          <div className="h-[2px] w-30 bg-[#C19300]"></div>
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rotate-45 bg-[#C19300]"></div>
            <div className="w-3 h-3 rotate-45 bg-[#C19300]"></div>
            <div className="w-5 h-5 rotate-45 bg-[#C19300]"></div>
          </div>
          <div className="h-[2px] w-30 bg-[#C19300]"></div>
        </div>
    
        <h2 className="text-3xl lg:text-5xl font-semibold text-teal-900 mt-6 xl:mt-10 mb-10 lg:ml-44">
          Tools & Utilities
        </h2>
      
        <div className="space-y-20 w-full mt-12 xl:px-85">
          {tools.map((tool, idx) => (
            <div
              key={idx}
              className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 ${tool.align}`}
            >
              <div className="flex-shrink-0 mr-25">
                <div className="relative w-8 h-8 flex items-center justify-center sm:w-12 sm:h-12">
                  <div className="w-14 h-14 p-2 border-2 border-[#C19300] rotate-45 flex items-center justify-center sm:w-22 sm:h-22">
                    <div className="w-9 h-9 bg-[#C19300] rotate-90 sm:w-15 sm:h-15"></div>
                  </div>
                </div>
              </div>
      
              <div>
                <h3 className="text-xl lg:text-3xl font-semibold text-[#C19300] mb-1">
                  {tool.name}
                </h3>
                <p className="text-teal-900 lg:text-xl 2xl:text-2xl text-sm leading-relaxed max-w-2xl">
                  {tool.description}
                </p>
              </div>
            </div>
          ))}
        </div>
  
        <div className="flex justify-end w-full mt-20" >
          <div className="flex items-center gap-3  text-[#C19300] mb-4">
            <div className="h-[2px] w-30  bg-[#C19300]"></div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rotate-45 bg-[#C19300]"></div>
              <div className="w-3 h-3 rotate-45 bg-[#C19300]"></div>
              <div className="w-5 h-5 rotate-45 bg-[#C19300]"></div>
            </div>
            <div className="h-[2px] w-30 bg-[#C19300]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
