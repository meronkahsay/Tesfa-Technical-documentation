"use client";
import React from "react";


const gold = "#B88704";
const darkTeal = "#00353D";


export default function Deployment() {
 return (
   <main className="min-h-screen mt-55 bg-white flex  flex-col">
     
     <div className="bg-[#00353D] w-full px-40 pt-20 pb-45 ">
       <h1 className="text-white text-4xl md:text-6xl mt-5 font-light">Deployment Methods</h1>
     </div>
     
     <div className="w-full flex justify-center items-start -mt-20 ">
       <div className="flex flex-col  md:flex-row justify-center items-start gap-30 md:gap-50 w-full max-w-6xl px-6">
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
   
     <div className="bg-white rounded-t-full rounded-b-none"
       style={{
         marginBottom: -36,
         width: 200,
         height: 200,
         display: "flex",
         alignItems: "center",
         justifyContent: "center",
         boxShadow: "0 2px 14px 0 rgba(0,0,0,0.02)"
       }}
     >
       {icon}
     </div>
   
    <div className="mt-12 text-[17px] md:text-[16px] text-[#00353D] font-medium max-w-xs w-full mx-auto text-left">
 {text}
</div>
   </div>
 );
}



