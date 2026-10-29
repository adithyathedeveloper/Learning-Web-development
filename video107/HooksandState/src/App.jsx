import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(3)

  return (
    <>
      <div>The count is {count}</div>
      <button onClick={() => setCount(count + 3)}>Increment</button>
    </>
  )
}

export default App
