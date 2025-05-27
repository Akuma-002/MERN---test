import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home'
import { About } from './Pages/About'
import { Contact } from './Pages/Contact'
import { DataContext } from './ContextAPI/Usercontext'
const App = () => {
  const name = useContext(DataContext)
  console.log(name[0])
  
  console.log(name[0])
  return (
    <div>
      <h1>{name[0]}</h1>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
              <button onClick={()=>{name[1]("SK")}}>Change</button>
    </div>
  )
}

export default App