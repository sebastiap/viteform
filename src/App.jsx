import { useState } from 'react'
import './App.css'

// My components

import HookForm from './components/HookForm/HookForm'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <About />
      <h1>Vite + React</h1>
      <h2>Login</h2>
    <HookForm/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App
