"use client";
import React from "react";



export default function Deployment() {
 return (
   <main id="deployment" className=" mt-20 bg-white flex  flex-col">
     
     <div className="bg-[#00353D] w-full px-4 lg:px-40 pt-20 pb-45 ">
       <h1 className="text-white text-4xl md:text-6xl mt-5 font-light">Deployment Methods</h1>
     </div>
     
     <div className="w-full flex justify-center items-start -mt-20 ">
       <div className="flex flex-col    md:flex-row justify-center items-start gap-30 md:gap-20 w-full max-w-8xl px-6">
         <DeploymentStep
           icon={
             <img
               src="/Images/front-end-programming.png"
               alt="Frontend Icon"
               className="w-20 h-20 object-contain"
               style={{ marginTop: 15 }}
             />
           }
           
           text={
             <>
               The frontend dashboard is integrated
               with the backend API for real-time data
               and is reliably hosted on Vercel.
             </>
           }
         />
         <DeploymentStep
           icon={
             <img
               src="/Images/chat-bot.png"
               alt="AI Icon"
               className="w-20 h-20 object-contain"
               style={{ marginTop: 12 }}
             />
           }
           text={
             <>
               The agentic AI is containerized with
               Docker and deployed to Google Cloud
               Run for managed serverless execution.
             </>
           }
         />
         <DeploymentStep
           icon={
             <img
               src="/Images/database.png"
               alt="Backend Icon"
               className="w-20 h-20 object-contain"
               style={{ marginTop: 12 }}
             />
           }
           text={
             <>
               The backend API endpoints are merged
               into a single endpoint and deployed to<br />
               Heroku for cloud-based access.
             </>
           }
         />
       </div>
     </div>
   </main>
 );
}


function DeploymentStep({ icon, text }: { icon: React.ReactNode; text: React.ReactNode }) {
 return (
   <div className="flex flex-col items-center text-center w-full max-w-xs">
   
     <div
        className="bg-white rounded-full "
        style={{
          marginBottom: -36,
          width: 200,
          height: 200,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 16px 32px -8px rgba(0,0,0,0.22), 0 8px 24px -12px rgba(0,0,0,0.19)"
     
        }}
     >
       {icon}
     </div>
   
    <div className="mt-18 text-[17px]  md:text-[20px] text-[#00353D] xl:text-2xl font-medium max-w-xs w-full mx-auto ">
 {text}
</div>
   </div>
 );
}



