"use client";
export default function DeploymentDetail() {
  return (
    <div className="bg-white px-4 sm:px-6 md:px-10 lg:px-20 2xl:px-40 mt-20 md:mt-40">
      <div className="flex flex-col md:grid md:grid-cols-2 md:gap-16">
     
        <div
          className="
            space-y-14
            border-r border-[#004f4f]
            pr-0 sm:pr-4 md:pr-6 lg:pr-4 xl:pr-2 2xl:pr-0
            md:border-r md:border-[#004f4f]
        
            pb-12 md:pb-0
            "
        >
          <h2 className="text-2xl font-bold text-[#C59D2C] xl:text-4xl">
            Agentic AI Deployment
          </h2>
        
          <div className="flex flex-col sm:flex-row border-r-4 rounded-r-full border-[#B88704] p-4 sm:p-6 2xl:w-9/10 items-center relative">
            <div className="absolute border-t-2 left-6 border-[#B88704] border-dashed top-0 w-1/3 hidden sm:block"></div>
            <div className="border-t-2 border-[#B88704] absolute w-1/2 top-0 right-25 hidden sm:block"></div>
            <div className="flex-1">
              <h3 className="text-lg lg:text-2xl font-semibold mb-2 text-[#004f4f]">
                Dockerfile Setup
              </h3>
              <ul className="text-sm lg:text-xl text-gray-600 leading-relaxed list-disc ml-4">
                <li>Create a Dockerfile to containerize the AI app</li>
                <li>Build Docker Image Locally</li>
                <li>Push Image to Google Container Registry</li>
              </ul>
            </div>
            <div className="ml-0 sm:ml-4 md:-ml-4 lg:-ml-12 xl:-ml-16 2xl:-ml-20 w-16 h-16 sm:w-20 sm:h-20 lg:w-30 lg:h-30 2xl:w-40 2xl:h-40 rounded-full bg-[#B88704] flex items-center justify-center text-white text-2xl font-bold mt-4 sm:mt-0">
              01
            </div>
            <div className="border-t-2 border-[#B88704] absolute w-1/2 bottom-0 right-25 hidden sm:block"></div>
          </div>
       
          <div className="flex flex-col sm:flex-row lg:mt-12 border-r-4 2xl:w-9/10 rounded-r-full items-center p-4 sm:p-6 border-[#B88704] relative">
            <div className="flex-1">
              <div className="absolute border-t-2 left-6 border-[#B88704] border-dashed top-0 w-1/2 hidden sm:block"></div>
              <div className="border-t-2 border-[#B88704] absolute w-1/2 top-0 right-35 hidden sm:block"></div>
              <h3 className="text-lg font-semibold lg:text-2xl mb-2 text-[#004f4f]">
                GitHub Actions Workflow
              </h3>
              <ul className="text-sm text-gray-600 lg:w-7/10 lg:text-xl leading-relaxed list-disc ml-4">
                <li>On push to main, GitHub Actions authenticates with Google Cloud</li>
                <li>Sets up Cloud SDK, Python, installs ADK.</li>
                <li>
                  Run adk deploy cloud_run to deploy the containerized AI app to
                  Cloud Run service.
                </li>
              </ul>
            </div>
            <div className="ml-0 sm:ml-4 md:-ml-4 lg:-ml-12 xl:-ml-16 2xl:-ml-20 w-16 h-16 sm:w-20 sm:h-20 lg:w-30 lg:h-30 2xl:w-40 2xl:h-40 rounded-full bg-[#B88704] flex items-center justify-center text-white text-2xl font-bold mt-4 sm:mt-0">
              02
            </div>
            <div className="border-t-2 border-[#B88704] absolute w-1/2 bottom-0 right-35 hidden sm:block"></div>
          </div>
     
          <div className="flex flex-col sm:flex-row lg:mt-12 border-r-4 2xl:w-9/10 rounded-r-full p-4 sm:p-6 items-center border-[#B88704] relative">
            <div className="flex-1 w-full sm:w-2/3">
              <div className="absolute border-t-2 left-6 border-[#B88704] border-dashed top-0 w-1/2 hidden sm:block"></div>
              <div className="border-t-2 border-[#B88704] absolute w-1/2 top-0 right-25 hidden sm:block"></div>
              <h3 className="text-lg font-semibold lg:text-2xl mb-2 text-[#004f4f]">
                Access and Monitor
              </h3>
              <ul className="text-sm text-gray-600 lg:text-xl lg:w-77/100 leading-relaxed list-disc ml-4">
                <li>Once deployed, the Cloud Run service scales automatically</li>
                <li>and logs can be monitored via Google Cloud Console.</li>
              </ul>
            </div>
            <div className="ml-0 sm:ml-4 md:-ml-4 lg:-ml-12 xl:-ml-16 2xl:-ml-20 w-16 h-16 sm:w-20 sm:h-20 lg:w-30 lg:h-30 2xl:w-40 2xl:h-40 rounded-full bg-[#B88704] flex items-center justify-center text-white text-2xl font-bold mt-4 sm:mt-0">
              03
            </div>
            <div className="border-t-2 border-[#B88704] absolute w-1/2 bottom-0 right-25 hidden sm:block"></div>
          </div>
        </div>
    
        <div className="space-y-12 lg:pl-0 2xl:pl-5 mt-12 md:mt-0">
          <h2 className="text-2xl font-bold text-[#C59D2C] xl:text-4xl">Backend Deployment</h2>
       
          <div className="flex flex-col sm:flex-row border-l-4 rounded-l-full p-4 border-[#B88704] items-center relative">
            <div className="mr-0 sm:mr-6 w-16 h-16 sm:w-20 sm:h-20 lg:w-30 lg:h-30 2xl:w-40 2xl:h-40 rounded-full bg-[#B88704] flex items-center justify-center text-white text-2xl font-bold mb-4 sm:mb-0">
              01
            </div>
            <div className="border-t-2 border-[#B88704] absolute w-1/3 bottom-0 left-25 hidden sm:block"></div>
            <div className="flex-1 text-left">
              <h3 className="text-lg lg:text-xl font-semibold mb-2 text-[#004f4f]">Prepare Project for Heroku</h3>
              <ul className="text-sm lg:text-xl text-gray-600 leading-relaxed list-disc ml-4">
                <li>Secure requirements.txt (gunicorn, psycopg2).</li>
                <li>Create a Procfile.</li>
                <li>Update settings.py for Heroku configs.</li>
                <li>Configure ALLOWED_HOSTS.</li>
                <li>Install Heroku CLI & authenticate.</li>
              </ul>
            </div>
            <div className="absolute border-t-2 left-23 border-[#B88704] top-0 w-1/3 hidden sm:block"></div>
            <div className="border-t-2 border-dashed border-[#B88704] absolute w-1/2 top-0 right-32 hidden sm:block"></div>
          </div>
      
          <div className="flex flex-col sm:flex-row lg:mt-12 border-l-4 rounded-l-full items-center p-4 border-[#B88704] relative">
            <div className="mr-0 sm:mr-6 w-16 sm:w-20 lg:w-30 2xl:w-40 h-16 sm:h-20 lg:h-30 2xl:h-40 rounded-full bg-[#B88704] flex items-center justify-center text-white text-2xl font-bold mb-4 sm:mb-0">
              02
            </div>
            <div className="border-t-2 border-[#B88704] absolute w-1/3 bottom-0 left-25 hidden sm:block"></div>
            <div className="flex-1 text-left">
              <h3 className="text-lg font-semibold lg:text-2xl mb-2 text-[#004f4f]">Heroku login</h3>
              <ul className="text-sm text-gray-600 lg:text-xl leading-relaxed list-disc ml-4">
                <li>Create Heroku Application</li>
                <li>Navigate to TEST-BACKEND root & run</li>
                <li>Provision PostgreSQL Database</li>
                <li>Push codebase</li>
                <li>Set environment variables</li>
              </ul>
            </div>
            <div className="absolute border-t-2 left-23 border-[#B88704] top-0 w-1/3 hidden sm:block"></div>
            <div className="border-t-2 border-dashed border-[#B88704] absolute w-1/2 top-0 right-45 hidden sm:block"></div>
          </div>
        
          <div className="flex flex-col sm:flex-row lg:mt-12 border-l-4 rounded-l-full border-[#B88704] p-4 sm:p-6 items-center relative">
            <div className="mr-0 sm:mr-6 w-16 sm:w-20 lg:w-30 2xl:w-40 h-16 sm:h-20 lg:h-30 2xl:h-40 rounded-full bg-[#B88704] flex items-center justify-center text-white text-2xl font-bold mb-4 sm:mb-0">
              03
            </div>
            <div className="border-t-2 border-[#B88704] absolute w-1/3 bottom-0 left-25 hidden sm:block"></div>
            <div className="flex-1 text-left">
              <h3 className="text-lg font-semibold mb-2 lg:text-2xl text-[#004f4f]">Monitor and Verify Deployment</h3>
              <ul className="text-sm text-gray-600 lg:text-xl leading-relaxed list-disc ml-4">
                <li>Open the app in browser</li>
                <li>Stream logs</li>
                <li>Manage scaling & configs in Heroku Dashboard</li>
              </ul>
            </div>
            <div className="absolute border-t-2 left-23 border-[#B88704] top-0 w-1/3 hidden sm:block"></div>
            <div className="border-t-2 border-dashed border-[#B88704] absolute w-1/2 top-0 right-26 hidden sm:block"></div>
          </div>
        </div>
      </div>
    </div>
  );
}