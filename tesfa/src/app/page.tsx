import React from 'react'
import Home from './components/HeroSection'
import KeyFeatures from './components/KeyFeatures'
import SystemArchitecture from './components/SystemArchitecture'
import SetupInstructions from './components/SetupInstructions'
import SystemComponents from './components/SystemComponents'
import EntityRelationship from './components/EntityRelationshipDiagram'
import DataFlow from './components/DataFlow'
import TestingQA from './components/QA'
import { User } from 'lucide-react'
import Users from './components/Users'
import ProjectOverview from './components/ProjectOverview'
import CodeStructurePage from './components/CodeStructure'
import Footer from './components/Footer'
import NamingConventions from './components/CodingStandard'
import Deployment from './components/Deployment'


const page = () => {
  return (
    <main>
      <Home />
      <Users />
      <KeyFeatures />
      <ProjectOverview />
      <SystemArchitecture />
      <SetupInstructions />
      <SystemComponents />
      <EntityRelationship />
      <DataFlow />
      <CodeStructurePage />
      <TestingQA />
      <NamingConventions />
      <Deployment />
      <Footer />




    </main>


  )


}


export default page

