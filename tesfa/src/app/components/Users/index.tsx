import Image from "next/image";
export default function Users() {
  return (
    <div className=" bg-white flex items-center justify-center px-6 py-12">
      <div className=" md:px-15 w-full grid grid-cols-1 md:grid-cols-2 md:gap-25 gap-8 items-center">
 
        <div className="grid grid-cols-2 gap-4">
          
          <div className="border border-[#C59D2C] flex items-center justify-center p-4 bg-white">
            <Image
              src="/Images/who 1.png"
              alt="World Health Organization"
              width={250}
              height={120}
              className="object-contain"
            />
          </div>
      
          <div className="border md:mt-10 md:h-45 border-[#C59D2C] flex items-center justify-center p-4 bg-white">
            <Image
              src="/Images/RedCross.png"
              alt="Red Cross"
              width={250}
              height={120}
              className="object-contain"
            />
          </div>
      
          <div className="col-span-2 border border-[#C59D2C] flex items-center justify-center p-4 bg-white">
            <Image
              src="/Images/SaveChildren.png"
              alt="Save the Children"
              width={300}
              height={120}
              className="object-contain"
            />
          </div>
        </div>
    
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-6xl font-bold text-[#003D3B]">
            Who Are Our <span className="text-[#C59D2C]">Users?</span>
          </h2>
          <p className="mt-12 text-[#003D3B] text-sm md:text-2xl text-end leading-relaxed">
            Our main users are NGOs and humanitarian agencies focused on
            rebuilding post-conflict communities. Tesfa equips them with
            AI-powered insights, risk maps, and intervention tracking, helping
            these organizations identify health and environmental risks, plan
            effective actions, and measure the results of their interventions.
          </p>
        </div>
      </div>
    </div>
  );
}