import React from 'react'
import { useState } from 'react'
const App = () => {
  const [var_Name, setVar_Name] = useState(2)
  
  return (
    <div>
      <div>{var_Name}</div>
      <button onClick={()=>{}}>Change</button>
    </div>
  )
}

export default App