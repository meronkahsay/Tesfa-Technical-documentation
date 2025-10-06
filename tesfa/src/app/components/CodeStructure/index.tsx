"use client";
export default function CodeStructurePage() {
  return (
    <div id="code-structure" className="min-h-screen bg-[#fdfbf9] mt-40 px-15 lg:px-20 2xl:px-40 ">
      <h1 className="lg:text-5xl text-4xl 2xl:text-6xl font-bold text-[#003D3B] leading-snug">Code Structure</h1>
      <p className="text-[#003333]  sm:text-lg lg:text-xl 2xl:text-2xl mt-10  leading-relaxed mb-12">
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
     
      <div className="w-full flex flex-wrap  justify-around  mt-30  items-end">
       
        <div className="flex flex-col items-center">
          <div className="bg-[#04373b] rounded-md shadow-lg md:px-25 px-20 py-5  w-full md:w-90">
            <pre className="text-white font-mono text-xs md:text-sm bg-transparent px-0 py-0">
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
 ├── media/
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
          <p className="mt-8 text-xl md:text-3xl lg:mb-0 mb-5 font-semibold text-[#C59D2C]">Backend</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-[#04373b] rounded-md shadow-lg md:px-25 px-8 py-5  w-full md:w-90">
            <pre className="text-white font-mono text-xs md:text-sm bg-transparent px-0 py-0">
{`TESFA-FRONTEND/
 ├── .github/
 │   └── workflows/
 │       └── pr_pull_request_template.md
 ├── testa/
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
          <p className="mt-8 text-xl md:text-3xl lg:mb-0 mb-5 font-semibold text-[#C59D2C]">Frontend</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-[#04373b] rounded-md shadow-lg md:px-25 px-20 py-20  w-full md:w-90">
            <pre className="text-white font-mono text-xs md:text-sm bg-transparent px-0 py-0">
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
          <p className="mt-8 text-xl md:text-3xl lg:mb-0 mb-5  font-semibold text-[#C59D2C]">AI</p>
        </div>
      </div>
    </div>
  );
}