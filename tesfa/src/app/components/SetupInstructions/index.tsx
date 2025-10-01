export default function SetupInstructions() {
  return (
    <section className="w-full px-6 md:px-16 py-12">
      <h2 className="text-4xl md:text-6xl font-bold text-[#003333]">Setup Instructions</h2>

      <div className="mt-8">
        <div className="mb-6">
          <h3 className="text-3xl md:text-4xl font-semibold text-[#003333]">Frontend</h3>
          <div className="h-[3px] w-24 bg-[#D4A323] mt-1" />
        </div>
    
        <div className="w-full ">
         
          <div className="flex justify-between text-[#003333] text-lg font-medium">
            <span className="shrink-0">cd frontend</span>
            <span className="shrink-0">npm install</span>
            <span className="shrink-0">npm run dev</span>
            <span className="shrink-0">npm run build</span>
            <span className="shrink-0">npm start</span>
          </div>
        
          <div className="relative mt-6">

            <div className="flex items-center">
          
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className={
                    i % 2 === 0
                      ? "h-[3px] flex-1 bg-[#D4A323]"
                      : "w-4 h-4 ml-5 rounded-full bg-[#D4A323]"
                  }
                />
              ))}
            </div>
          </div>
       
          <div className="flex justify-between text-[#003333] text-lg font-semibold mt-3">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
          </div>
        </div>
      </div>
    
      <div className="mt-12">

        <div className="mb-6 flex flex-col items-start md:items-end">
          <div className="text-3xl md:text-4xl font-semibold text-[#003333]">Backend</div>
          <div className="h-[3px] w-24 bg-[#D4A323] mt-1" />
        </div>
    
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6">
     
          <div className="bg-[#003333] mb-15 text-white p-4 rounded-md shadow-sm">
            <div className="font-semibold mb-1">1. Navigate to backend directory</div>
            <code className="block text-sm">cd backend</code>
          </div>
       
          <div className="bg-[#D4A323] mt-15 text-white p-4  rounded-md shadow-sm">
            <div className="font-semibold mb-1">2. Create virtual environment</div>
            <code className="block text-sm">python -m venv venv</code>
            <code className="block text-sm">source venv/bin/activate</code>
          </div>
       
          <div className="bg-[#003333] mb-15 text-white p-4 rounded-md shadow-sm">
            <div className="font-semibold mb-1">3. Install dependencies</div>
            <code className="block text-sm">pip install -r requirements.txt</code>
          </div>
    
          <div className="bg-[#D4A323] mt-15 text-white p-4 rounded-md shadow-sm">
            <div className="font-semibold mb-1">4. Run migrations</div>
            <code className="block text-sm">python manage.py migrate</code>
          </div>
       
          <div className="bg-[#003333] mb-15 text-white p-4 rounded-md shadow-sm">
            <div className="font-semibold mb-1">5. Start dev server</div>
            <code className="block text-sm">python manage.py runserver</code>
          </div>
        </div>
      </div>
    </section>
  );
}