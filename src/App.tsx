import { useState } from 'react'
import './App.css'
import BlocklyWorkspace from './components/BlocklyWorkspace';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello World</h1>
      <BlocklyWorkspace />
    </>
  )
}

export default App
