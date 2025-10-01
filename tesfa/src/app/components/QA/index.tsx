export default function TestingQA() {
  return (
    <div className="min-h-screen  flex flex-col items-center justify-center px-4 py-10">
 
        <h1 className="text-3xl md:text-6xl font-bold text-center text-[#003D3B]">
        Testing & QA <span className="text-[#C59D2C]">Assurance</span>
      </h1>
      <div className="bg-[#004240] mt-15">

      <div className=" grid grid-cols-1 md:grid-cols-3 w-full md:px-50 md:py-20">
      
        <div className="bg-[#004240] md:mb-45 text-white p-6 border-t-2 border-l-2 border-r-2 border-dashed border-[#C59D2C]">
          <h2 className="text-xl font-semibold md:text-4xl mb-5">Frontend (Jest)</h2>
          <p className="text-sm md:text-xl leading-relaxed">
            Unit tests for React dashboard components and UI snapshot tests
            for core views.
          </p>
        </div>
      
        <div className="bg-[#004240] text-white md:mt-45 p-6 border-b-2 border-l-2 border-r-2 border-dashed border-[#C59D2C]">
          <h2 className="text-xl font-semibold md:text-4xl mb-5">Backend (Pytest)</h2>
          <p className="text-sm md:text-xl leading-relaxed">
            API endpoint and response validation, Database migration and schema
            integrity tests, Agentic AI workflow and prediction tests.
          </p>
        </div>
      
        <div className="bg-[#004240] md:mb-45 text-white p-6 border-t-2 border-l-2 border-r-2 border-dashed border-[#C59D2C]">
          <h2 className="text-xl md:text-4xl font-semibold mb-5">Automation</h2>
          <p className="text-sm md:text-xl leading-relaxed">
            Continuous Integration (CI) pipeline runs Jest and Pytest on each
            commit and Automated accessibility audit is triggered before
            production deployments.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}





