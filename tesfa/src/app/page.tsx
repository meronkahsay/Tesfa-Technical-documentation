import React from 'react'
import Home from './components/HeroSection'
import KeyFeatures from './components/KeyFeatures'
import SystemArchitecture from './components/SystemArchitecture'
import SetupInstructions from './components/SetupInstructions'
import SystemComponents from './components/SystemComponents'
import EntityRelationship from './components/EntityRelationshipDiagram'

const page = () => {
  return (
    <main>
<Home/>
<KeyFeatures/>
<SystemArchitecture/>
<SetupInstructions/>
<SystemComponents/>
<EntityRelationship/>

    </main>

  )

}

export default page