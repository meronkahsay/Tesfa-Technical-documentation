import Image from "next/image";
export default function ProjectOverview() {
  return (
    <div className="bg-white flex flex-col px-6 py-12 xs:mt-10 lg:mt-20 lg:px-20 2xl:px-40">
      <h2 className="lg:text-5xl text-4xl 2xl:text-6xl font-bold text-[#003D3B] leading-snug">
        Product Overview
      </h2>
      <div className="grid grid-cols-1 lg:py-10 lg:grid-cols-3 gap-12 w-full">
        <div className="flex  flex-col lg:items-start  lg:text-left">
          <div className="w-full h-52 flex items-center  mb-10">
            <Image
              src="/Images/orgDashboard.png"
              alt="Organization Dashboard"
              width={350}
                height={200}
    className="object-contain shadow-2xl transition-transform duration-300 hover:scale-105 active:scale-110"
            />
          </div>
          <h3 className="mt-6 text-2xl md:text-3xl font-semibold text-[#C59D2C]">
            Organization Dashboard
          </h3>
          <p className="mt-4 text-base sm:text-lg lg:text-xl 2xl:text-2xl  text-[#003D3B] leading-relaxed">
            It features secure authentication, interactive maps for visualizing
            risk data by country, and task management tools that allow NGOs to
            view, select, and track interventions. Users can also query the AI
            agent for assistance and predictions.
          </p>
        </div>

        <div className="flex flex-col  lg:items-start  lg:text-left">
          <div className="w-full h-52 flex items-center  mb-10 ">
            <Image
              src="/Images/InformationalWebsite.png"
              alt="Informational Website"
              width={350}
               height={200}
    className="object-contain shadow-2xl transition-transform duration-300 hover:scale-105 active:scale-110"
            />
          </div>
          
          <h3 className="mt-6 text-2xl md:text-3xl font-semibold text-[#C59D2C]">
            <a href="https://tesfa-sepia.vercel.app">Informational Website</a>
          </h3>
          <p className="mt-4 text-base sm:text-lg lg:text-xl 2xl:text-2xl  text-[#003D3B] leading-relaxed">
            The website highlights Tesfa&apos;s mission and key services, as well
            as educational content about post-war health challenges. Visitors
            can learn about the organization, access FAQs, and use the contact
            form for inquiries.
          </p>
        </div>
     
        <div className="flex flex-col lg:text-left">
          <div className="w-full h-52 flex items-center  mb-10">
            <Image
              src="/Images/Dashboard.png"
              alt="Admin Dashboard"
              width={350}
               height={200}
    className="object-contain shadow-2xl transition-transform duration-300 hover:scale-105 active:scale-110"
            />
          </div>
          <h3 className="mt-6 text-2xl md:text-3xl font-semibold text-[#C59D2C]">
            Admin Dashboard
          </h3>
          <p className="mt-4 text-base sm:text-lg lg:text-xl 2xl:text-2xl  text-[#003D3B] leading-relaxed">
            It features analytics for monitoring platform usage and management
            tools for overseeing organizations, users, and interventions. Admins
            can also access system reports and configure settings to ensure
            smooth operations.
          </p>
        </div>
      </div>
    </div>
  );
}