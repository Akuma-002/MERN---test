import React, { createContext, useState } from 'react'
export const DataContext = createContext()
const Usercontext = ({children}) => {
    
    const [user, setUser] = useState("Sahil");
  return (
    <DataContext.Provider value={[user, setUser]}>
      {children}
    </DataContext.Provider>
  )
}

export default Usercontext
