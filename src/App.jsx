import { useState } from 'react'

import './App.css'
import Dates from './components/Dates'
import { Output } from './components/Output'

function App() {
  const [age, setAge] = useState({})
  const handleAge=(calculateAge)=>{
    
    setAge(calculateAge)
  }
  

  return (
    <div className='app'>
      <div className='app_content'>
        <Dates onAge={handleAge}/>
        <Output age={age}/>
      </div>
    </div>
    
  )
}

export default App
