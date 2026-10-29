import { useState, useEffect } from 'react'
import './App.css'
import Cards from './components/Cards'

function App() {
  const [fedat, setFedat] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        )

        const data = await response.json()
        setFedat(data)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="container">
      <Cards data={fedat} />
    </div>
  )
}

export default App