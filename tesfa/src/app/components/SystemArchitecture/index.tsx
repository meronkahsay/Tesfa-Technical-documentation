export default function SystemArchitecture() {
  return (
    <section id="system-architecture" className="w-full px-6 lg:px-40 mt-30 ">
 
      <h2 className="text-4xl md:text-6xl font-bold text-center text-[#003333] mb-25">
        System <span className="text-[#D4A323]">Architecture</span>
      </h2>
   
      <div className="grid grid-cols-1 md:grid-cols-2 gap-55 mb-10 md:mb-40">

        <div className="space-y-15 text-2xl">
          <div>
            <h3 className="text-3xl font-semibold text-[#003333] border-l-4 border-[#D4A323] pl-3">
              Frontend (Dashboard)
            </h3>
            <p className="text-[#003333] text-xl lg:text-2xl  mt-4 ml-4">
              React-based SPA (Single Page Application) visualizing maps,
              tasks, reports, interventions. Authentication and profile
              management for NGOs.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold text-[#003333] border-l-4 border-[#D4A323] pl-3">
              Backend (API & Model Serving)
            </h3>
            <p className="text-[#003333] text-xl lg:text-2xl mt-4 ml-4">
            Django REST Framework handles API endpoints, managing HTTP requests, data serialization, validation, authentication, and permissions and connection to AI models.
            </p>
          </div>
        </div>
      
        <div className="space-y-15 text-2xl">
          <div>
            <h3 className="text-3xl  font-semibold text-[#003333] border-l-4 border-[#D4A323] pl-3">
              AI Layer (Orchestrates LLMs)
            </h3>
            <p className="text-[#003333] mt-4 ml-4 text-xl lg:text-2xl">
              BioGPT process unstructured and generate
              predictions and recommendations with the help of Google Gemini.
            </p>
          </div>
          <div className="py-7">
            <h3 className="text-3xl font-semibold text-[#003333] border-l-4 border-[#D4A323] pl-3">
              Database
            </h3>
            <p className="text-[#003333] mt-4 ml-4 text-xl lg:text-2xl">
              PostgreSQL for relational data; vector database for semantic
              search (RAG embeddings).
            </p>
          </div>
        </div>
      </div>
    
      <div className="flex justify-center">
        <img
          src="/Images/SystemArchitecture.png"
          alt="System Architecture Diagram"
          className="w-full max-w-8xl h-auto"
        />
      </div>
    </section>
  );
}
