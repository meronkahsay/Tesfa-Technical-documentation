export default function FrontendDeployment() {
  const steps = [
    {
      title: "Prepare Next.js Application",
      description: [
         "Review project dependencies and update them if necessary.",
      "Ensure the tesfa folder contains the production-ready Next.js app.",
      "Define environment variables prefixed with BASE_URL.",
      ],
    },
    {
      title: "Connect Vercel to GitHub Repository",
      description: [
        "In Vercel Dashboard, create a new project linked to the relevant GitHub repository.",
        "Add environment variables in Vercel’s Settings for each environment (Production, Preview, Development).",
      ],
    },
    {
      title: "Configure GitHub Actions Pipeline",
      description: [
        "Run tests.",
        "Build project (npm run build inside tesfa/).",
        "Deploy to Vercel (production deploy only on main branch) via: npx vercel --prod --confirm --token $VERCEL_TOKEN",
      ],
    },
    {
      title: "Monitor and Manage Deployments",
      description: [
        "Vercel provides build logs and deployment URLs via dashboard.",
        "Pull requests auto-generate preview deployments for testing.",
        "Rollback to previous versions instantly via Vercel interface.",
      ],
    },
  ];



  return (
    <div className="w-full mt-35">
    
      <div className="bg-[#00353D] py-6 lg:pb-55 lg:py-16 text-center">
        <h2 className="text-3xl lg:text-6xl font-semibold text-white">
          Frontend Deployment
        </h2>
      </div>
    
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:px-25 mx-auto">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center  h-full"
          >
        
            <div className="bg-[#B88704] lg:-mt-17 border-6 border-white lg:text-3xl text-white text-lg font-bold px-4 py-2 lg:px-10 lg:py-10 rounded-md shadow-md">
              {String(idx + 1).padStart(2, "0")}
            </div>
         
            <h3 className={`text-xl text-left font-semibold lg:text-2xl text-teal-900  w-full xl:mt-5 xl:py-5  `}>
              {step.title}
            </h3>
         
            <ul className="text-sm lg:text-xl text-teal-900 leading-relaxed list-disc list-inside w-full text-left mt-2">
              {step.description.map((desc, i) => (
                <li key={i} className="mb-2">{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}