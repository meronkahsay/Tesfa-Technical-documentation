"use client"

import React from "react";
export default function SystemComponents() {
  return (
    <div id="system-components" className="bg-white mt-5 flex flex-col items-center  justify-center 2xl:px-40 px-6  py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 2xl:gap-10 mt-8  items-start">
        <div className="border border-[#CEA524] rounded-lg shadow-sm">
          <div className="flex flex-col md:flex-row shadow-2xl transition-transform duration-300 hover:scale-95 active:scale-100">
            <div className="bg-[#CEA524] text-white font-medium 2xl:p-4 p-2 rounded-tl-lg rounded-tr-lg md:rounded-tr-lg md:rounded-br-lg text-center text-base md:text-xl xl:text-3xl writing-vertical">
              Agentic AI Layer
            </div>
            <div className="p-6 2xl:py-13 text-gray-800 text-lg 2xl:text-2xl w-full md:ml-4 md:w-auto">
              <p>Combines multiple LLMs</p>
              <ul className="list-disc list-inside">
                <li>BioGPT for biomedical text</li>
                <li>SciBert for scientific literature</li>
              </ul>
              <p className="mt-2">Operates in three stages:</p>
              <ul className="list-disc list-inside">
                <li>Ingestion</li>
                <li>Reasoning</li>
                <li>Prediction</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center text-center xl:mt-18 xl:col-start-2">
          <h2 className="2xl:text-7xl  md:text-4xl font-semibold text-[#003D3B] leading-snug">
            System <br /> Components
          </h2>
        </div>
        <div className="border border-[#CEA524] rounded-lg mb-8 shadow-sm">
          <div className="flex flex-col md:flex-row shadow-2xl transition-transform duration-300 hover:scale-95 active:scale-100">
            <div className="bg-[#CEA524] text-white font-medium rounded-tl-lg rounded-tr-lg md:rounded-tr-lg md:rounded-br-lg text-center 2xl:p-4 p-2 text-base md:text-xl xl:text-3xl writing-vertical">
              Dashboard
            </div>
            <div className="lg:p-4 text-gray-800 text-lg 2xl:text-2xl p-4 2xl:py-12 w-full md:ml-4 md:w-auto">
              <ul className="list-disc list-inside">
                <li>Authentication (registration, login, password management)</li>
                <li>Interactive map visualization (OpenStreetMap)</li>
                <li>Intervention tracker (Kanban board, status updates)</li>
                <li>Task management and assignment</li>
                <li>Profile management for NGOs</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border border-[#CEA524] rounded-lg shadow-sm">
          <div className="flex flex-col md:flex-row shadow-2xl transition-transform duration-300 hover:scale-95 active:scale-100">
            <div className="bg-[#CEA524] text-white  font-medium text-center 2xl:p-4 p-2 rounded-tl-lg rounded-tr-lg md:rounded-tr-lg md:rounded-br-lg text-base md:text-xl xl:text-3xl writing-vertical">
              Backend (API)
            </div>
            <div className="2xl:p-6 text-gray-800 text-lg p-2 2xl:text-2xl w-full md:ml-4 md:w-auto">
              <p>RESTful endpoints</p>
              <ul className="list-disc list-inside">
                <li>Users: Manage user profiles</li>
                <li>Tasks: Intervention tasks</li>
                <li>Task-assignments: Task assignment tracking</li>
                <li>Agents: AI agent registry</li>
                <li>Predictions: Risk summaries and maps</li>
                <li>Countries: Country boundaries</li>
                <li>Regions: Regional boundaries</li>
                <li>Queries: AI-powered queries</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border border-[#CEA524] rounded-lg shadow-sm">
          <div className="flex flex-col  md:flex-row shadow-2xl transition-transform duration-300 hover:scale-95 active:scale-100">
            <div className="bg-[#CEA524] text-white font-medium text-center 2xl:p-4 p-2 rounded-tl-lg rounded-tr-lg md:rounded-tr-lg md:rounded-br-lg text-base md:text-xl xl:text-3xl writing-vertical">
              Security
            </div>
            <div className="2xl:py-22 xl:py-16 p-6 text-gray-800 text-lg 2xl:text-2xl lg:py-14 w-full md:ml-4 md:w-auto">
              <ul className="list-disc list-inside">
                <li>Encrypted passwords</li>
                <li>Secure session management</li>
                <li>Authorized NGOs access (dashboard)</li>
                <li>API key management for external APIs</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border border-[#CEA524] rounded-lg shadow-sm">
          <div className="flex flex-col md:flex-row shadow-2xl transition-transform duration-300 hover:scale-95 active:scale-100">
            <div className="bg-[#CEA524] text-white font-medium text-center 2xl:p-4 p-2 rounded-tl-lg rounded-tr-lg md:rounded-tr-lg md:rounded-br-lg text-base md:text-xl xl:text-3xl writing-vertical">
              External Integrations
            </div>
            <div className="2xl:py-20.5 lg:py-15.5 p-6 text-gray-800 text-lg 2xl:text-2xl w-full md:w-auto">
              <p>OpenStreetMap Nominatim API</p>
              <p>
                Integrated for geocoding and reverse geocoding capabilities, the
                OpenStreetMap Nominatim API accurately converts addresses and
                coordinates into mapped locations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}