import React, { createContext, useContext, useState } from 'react'

export const GlobalContext = createContext() 

//custom hook 

export const useGlobalContext = ()=> useContext(GlobalContext)

function AppContext({children}) {
  const[user,setUser] = useState("Peter")
  return (
    <GlobalContext.Provider value={{user,setUser}} >
        <div>{children}</div>
    </GlobalContext.Provider>
  )
}

export default AppContext