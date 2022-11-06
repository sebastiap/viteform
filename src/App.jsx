import { useState } from 'react'
import './App.css'

// My components
import ApiProp from './components/API'
import HookForm from './components/HookForm/HookForm'
import About from './components/About'

// Chakra
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
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
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

    </TabPanel>
    <TabPanel>
    <About />
      <h1>Vite + React</h1>
      <h2>Login</h2>
    </TabPanel>
  </TabPanels>
</Tabs>

    


    </div>
  )
}

export default App
