import React, { useContext } from 'react'
import { NavbarContext } from './Navbar'
function UserContainer() {

    const {user,logoutHandler} = useContext(NavbarContext)
    
  return (
    <>
        {user ? (
        <>
        <h3>{user.name}</h3>
        <button className='btn' onClick={logoutHandler} >Logout</button>
        </>): (<div>Please Login</div>)}
        
    </>
  )
}

export default UserContainer