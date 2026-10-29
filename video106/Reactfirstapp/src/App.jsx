import Navbar from "./components/Navbar"
import Card from "./components/Card"

function App() {

  return (
    <> 
    <div className="mainincnav"><Navbar />
    <div className="main">
      <Card title="Card 1" description="This is the first card" />
      <Card title="Card 2" description="This is the second card" />
      <Card title="Card 3" description="This is the third card" />
      </div></div>
    
    
     </>
  )
}

export default App
