export default function SetupInstructions() {
  return (
    <section className="w-full mt-40 px-6 lg:px-20 2xl:px-40">
      <h2 className="lg:text-5xl text-4xl 2xl:text-6xl font-bold text-[#003D3B] leading-snug">Setup Instructions</h2>

      <div className="mt-10">
        <div className="mb-6">
          <h3 className="text-3xl md:text-4xl font-semibold text-[#003333]">Frontend</h3>
          <div className="h-[3px] w-35 bg-[#D4A323] mt-1" />
        </div>
    
        <div className="w-full ">
         
          <div className="flex justify-between mt-10 text-[#003333] md:text-3xl font-medium">
            <span>cd frontend</span>
            <span>npm install</span>
            <span>npm run dev</span>
            <span>npm run build</span>
            <span>npm start</span>
          </div>
          <div className="relative mt-6 ">

            <div className="flex items-center">
          
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className={
                    i % 2 === 0
                      ? "h-[3px] flex-1 bg-[#D4A323]"
                      : "w-4 h-4 ml-5 mr-5 rounded-full bg-[#D4A323]"
                  }
                />
              ))}
            </div>
          </div>
          <div className="flex  justify-between text-[#003333] text-lg font-semibold mt-3">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
          </div>
        </div>
      </div>
      <div className="mt-35  text-center mb-10">
        <div className="mb-16 flex flex-col items-start ">
          <div className="text-3xl md:text-4xl font-semibold text-[#003333]">Backend</div>
          <div className="h-[3px] w-31 bg-[#D4A323] mt-1" />
        </div>
    
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6">
     
          <div className="bg-[#003333] mb-15  text-white px-4 py-6 rounded-md shadow-sm">
            <div className="font-semibold mb-1 ">1. Navigate to backend directory</div>
            <code className="block text-sm ">cd backend</code>
          </div> 
       
          <div className="bg-[#D4A323] px-4 py-6 mt-15 md:text-xl text-white  rounded-md shadow-sm">
            <div className="font-semibold mb-1">2. Create virtual environment</div>
            <code className="block text-sm">python -m venv venv</code>
            <code className="block text-sm ">source venv/bin/activate</code>
          </div>
       
          <div className="bg-[#003333] md:text-xl px-4 py-6 mb-15 text-white rounded-md shadow-sm">
            <div className="font-semibold mb-1">3. Install dependencies</div>
            <code className="block text-sm">pip install -r requirements.txt</code>
          </div>
    
          <div className="bg-[#D4A323] mt-15 md:text-xl text-white px-4 py-6 rounded-md shadow-sm">
            <div className="font-semibold mb-1">4. Run migrations</div>
            <code className="block text-sm">python manage.py migrate</code>
          </div>
       
          <div className="bg-[#003333] mb-15 md:text-xl text-white px-4 py-6 rounded-md shadow-sm">
            <div className="font-semibold mb-1">5. Start dev server</div>
            <code className="block text-sm">python manage.py runserver</code>
          </div>
        </div>
      </div>
    </section>
  );
}