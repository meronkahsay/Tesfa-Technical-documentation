"use client";
export default function CodeStructurePage() {
  return (
    <div id="code-structure" className="min-h-screen bg-[#fdfbf9] px-15 md:px-40 ">
  
      <h1 className="text-4xl md:text-6xl font-semibold text-[#04373b] mb-4">Code Structure</h1>
    
      <p className="text-[#003333]  text-xl md:text-2xl mt-20  leading-relaxed mb-12">
        The architecture of this project is divided into three main components: AI, Frontend, and Backend,
        each organized for clarity, scalability, and ease of maintenance. The AI module is structured to
        encapsulate intelligent agents and tools, allowing for seamless integration and future expansion of
        advanced features. The Frontend adopts a feature-based folder structure, which promotes modular
        development; each key domain or user-facing flow is isolated in its own directory, enhancing
        developer productivity and supporting rapid growth. The Backend is organized by application domains
        and services, with clear separation of concerns for models, APIs, and business logic, ensuring robust
        data handling and secure operations. Together, this organization supports efficient development,
        testing, and evolution of the entire platform as new features and improvements are introduced.
      </p>
   
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-35  justify-normal">
      
        <div className="flex flex-col items-center md:mt-55">
          <div className="bg-[#04373b] text-white px-25 py-85 rounded-md shadow-lg font-mono text-sm">
            <pre>
{`TESFA-AI/
 ├── .github/
 ├── multi_tool_agent/
 │   ├── __init__.py
 │   ├── agent.py
 │   └── tools.py
 ├── .gitignore
 ├── Dockerfile
 ├── main.py
 ├── README.md
 ├── requirements.txt
 └── sessions.db`}
            </pre>
          </div>
          <p className="mt-10 text-xl md:text-4xl font-semibold text-[#b8860b]">AI</p>
        </div>
      
        <div className="flex flex-col items-center">
          <div className="bg-[#04373b]  text-white px-10 py-45 rounded-md shadow-lg font-mono text-sm">
            <pre>
{`TESFA-FRONTEND/
 ├── .github/
 │   └── workflows/
 │       └── pr_pull_request_template.md
 ├── testaf/
 │   └── .next/
 │   └── node_modules/
 │   └── public/
 │   └── src/
         └── app/
 │           ├── admin/
 │           ├── api/
 │           ├── edit-profile/
 │           ├── hooks/
 │           ├── kanban/
 │           ├── onboarding/
 │           ├── profile/
 │           ├── reset/
 │           ├── reset-password/
 │           ├── reset-success/
 │           ├── sharedComponents/
 │           ├── tasks/
 │           ├── util/
 │           ├── favicon.ico
 │           ├── globals.css
 │           ├── layout.tsx
 │           └── page.tsx
 ├── .env
 ├── .gitignore
 ├── eslint.config.js
 ├── jest.config.js
 ├── jest-setup.ts
 ├── next-env.d.ts
 ├── next.config.ts
 ├── package-lock.json
 ├── package.json
 ├── postcss.config.js
 ├── README.md
 └── tsconfig.json`}
            </pre>
          </div>
          <p className="mt-10 text-xl md:text-4xl font-semibold text-[#b8860b]">Frontend</p>
        </div>
        
        <div className="flex mt-52 flex-col items-center ">
          <div className="bg-[#04373b] text-white px-25 py-6 rounded-md shadow-lg font-mono text-sm">
            <pre>
{`TESFA-BACKEND/
 ├── .github/
 ├── agents/
 ├── api/
 │  ├── __pycache__/
 │  ├── migrations/
 │  ├── __init__.py
 │  ├── admin.py
 │  ├── models.py
 │  ├── serializers.py
 │  ├── tests.py
 │  ├── url.py
 │  ├── views.py
 ├── locations/
 ├── medis/
 ├── organizations/
 ├── prediction/
 │  ├── __pycache__/
 │  ├── migrations/
 │  ├── __init__.py
 │  ├── admin.py
 │  ├── models.py
 │  ├── tests.py
 │  ├── apps.py
 │  ├── views.py
 ├── querylog/
 ├── tasks/
 ├── tesfa/
 ├── tesfaenv/
 │  ├── bin/
 │  ├── include/
 │  ├── lib/
 │  ├── lib64/
 │  ├── .lock
 │  ├── pyvenv.cfg
 ├── .env
 ├── .gitignore
 ├── db.sqlite3
 ├── manage.py
 ├── Procfile
 ├── runtime.txt
 ├── pytest.ini
 ├── requirements.txt
 └── README.md`}
            </pre>
          </div>
          <p className="mt-10 md:text-4xl text-xl font-semibold text-[#b8860b]">Backend</p>
        </div>
      </div>
    </div>
  );
}