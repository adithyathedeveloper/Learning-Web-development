import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Navbar from '../components/navbar'
// import './App.css'

// import React from 'react'

// const App = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default App


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar logotext="My React App"/>
    <div className='counter'><div className='numberofcounts'>
        {count}
      </div>
      <button onClick={() => setCount(count + 1)}>
        Increment Button
      </button>
      </div>
      
    </>
  )
}

export default App
