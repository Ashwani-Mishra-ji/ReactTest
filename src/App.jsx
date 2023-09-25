import { useState } from 'react'
import './App.css'
import Navigation from './Components/Navigation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
     {/* <img src="src/assets/Rectangle.png" alt="home Content" /> */}
       <Navigation/>
      
     </div>
    </>
  )
}

export default App
