import React, { useState,createContext } from 'react'
import NavLinks from './NavLinks'

export const  NavbarContext = createContext() 

function Navbar() {
     
    const [user,setUser] = useState({name:"Zack"})

    function logoutHandler(){
        setUser(null)
    }
  return (
    <NavbarContext.Provider value={{user,logoutHandler}} >
        <nav className='navbar'>
            <div>Navbar</div>
            <NavLinks user={user} logoutHandler = {logoutHandler}/>
        </nav>
    </NavbarContext.Provider>
  )
}

export default Navbar