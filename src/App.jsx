import { useState } from 'react'
import './App.css'

// My components
import ApiProp from './components/API'
import HookForm from './components/HookForm/HookForm'
import About from './components/About'

// Chakra
import { Tabs, TabList, TabPanels, Tab, TabPanel, Heading } from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
    <Heading mb={6}> ViteForm</Heading>
    <Tabs isFitted variant='enclosed' defaultIndex={1}>
    <TabList mb='1em' >
      <Tab>Api</Tab>
      <Tab>Login</Tab>
      <Tab>About</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>
        <ApiProp/>
      </TabPanel>
      <TabPanel>
      <HookForm/>
      </TabPanel>
      <TabPanel>
      <About />
      </TabPanel>
  </TabPanels>
</Tabs>

    


    </div>
  )
}

export default App
