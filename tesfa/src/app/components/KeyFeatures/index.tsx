export default function KeyFeatures() {
  return (
    <section className="w-full  flex flex-col md:flex-row items-center justify-between px-6 lg:px-40 py-12 mt-45 gap-10">

      <div className="w-full  lg:w-1/3 space-y-8">
        <h2 className="md:text-6xl text-3xl mb-15 font-bold text-[#003333]">Key Features</h2>
        <div >
          <h3 className="md:text-4xl text-2xl font-semibold text-[#D4A323]">Summary</h3>
          <p className="text-[#003333] mt-1 text-xl lg:text-2xl">
            Summaries for each region with relevant health risk highlights.
          </p>
        </div>
        <div>
          <h3 className="md:text-4xl text-2xl font-semibold text-[#003333]">Tasks</h3>
          <p className="text-[#003333] mt-1 text-xl lg:text-2xl">
            Create, assign, and track intervention tasks directly through the
            dashboard.
          </p>
        </div>
        <div>
          <h3 className="md:text-4xl text-2xl font-semibold text-[#D4A323]">Query</h3>
          <p className="text-[#003333] text-xl lg:text-2xl mt-1">
            A natural language query interface that leverages agentic
            AI models.
          </p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center relative">

        <div className="w-full relative flex items-center justify-center">
          <img src={"/Images/Laptop.png"} className=""></img>
        </div>

      </div>
    </section>
  );
}





