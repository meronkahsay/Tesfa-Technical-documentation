export default function SystemComponents() {
  const sectionsTop = [
    {
      title: "Agentic AI Layer",
      content: [
        "Combines multiple LLMs",
        "- BioGPT for biomedical text",
        "- SciBert for scientific literature",
        "- GeoLLM for geospatial reasoning",
        "Operates in three stages:",
        "- Ingestion",
        "- Reasoning",
        "- Prediction",
      ],
    },
    {
      title: "Dashboard",
      content: [
        "- Authentication (registration, login, password management)",
        "- Interactive map visualization (OpenStreetMap)",
        "- Intervention tracker (Kanban board, status updates)",
        "- Task management and assignment",
        "- Profile management for NGOs",
      ],
    },
  ];
  const sectionsBottom = [
    {
      title: "Backend (API)",
      content: [
        "RESTful endpoints",
        "- Users: Manage user profiles",
        "- Tasks: Intervention tasks",
        "- Task-assignments: Task assignment tracking",
        "- Agents: AI agent registry",
        "- Predictions: Risk summaries and maps",
        "- Countries: Country boundaries",
        "- Regions: Regional boundaries",
        "- Queries: AI-powered queries",
      ],
    },
    {
      title: "Security",
      content: [
        "Encrypted passwords",
        "- Secure session management",
        "- Role-based access (only authorized NGOs access dashboard)",
        "- API key management for external APIs",
      ],
    },
    {
      title: "External Integrations",
      content: [
        "OpenStreetMap Nominatim API",
        "Integrated for geocoding and reverse geocoding capabilities, the OpenStreetMap Nominatim API accurately converts addresses and coordinates into mapped locations.",
      ],
    },
  ];
  const Card = ({ title, content }: { title: string; content: string[] }) => (
    <div className="flex border rounded-lg shadow-sm bg-white">
     
      <div className="bg-[#0C4A4A] text-white flex items-center justify-center px-2 rounded-l-lg">
        <span className="-rotate-90 whitespace-nowrap text-base md:text-lg font-medium tracking-wide">
          {title}
        </span>
      </div>
    
      <div className="p-6 flex-1">
        <ul className="text-gray-800 text-sm leading-relaxed space-y-1">
          {content.map((c, idx) => (
            <li key={idx}>{c}</li>
          ))}
        </ul>
      </div>
    </div>
  );
  return (
    <main className="min-h-screen px-4 md:px-12 bg-white flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl grid gap-8">
        <div className="grid md:grid-cols-2 gap-6">
          {sectionsTop.map((sec, idx) => (
            <Card key={idx} title={sec.title} content={sec.content} />
          ))}
        </div>
       
        <div className="flex justify-center items-center">
          <h1 className="text-3xl md:text-5xl font-semibold text-gray-800 text-center">
            System Components
          </h1>
        </div>
       
        <div className="grid md:grid-cols-3 gap-6">
          {sectionsBottom.map((sec, idx) => (
            <Card key={idx} title={sec.title} content={sec.content} />
          ))}
        </div>
      </div>
    </main>
  );
}

