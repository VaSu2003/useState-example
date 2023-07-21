import React,{useState} from 'react'

function Conditionals() {
    const [user,setUser] = useState(null);
    let text;

    function login(){
        setUser({name : "Vaibhav"})
    }
    function logout(){
        setUser(null)
    }
    
  return (
    <>
        {user ? (
            <>
            <h4>Hello, There {user.name}</h4>
            <button onClick={logout}>Logout</button>    
            </>
        ) :
        (
            <>
            <h4>Please Login</h4>
            <button onClick={login}>Login</button>    
            </>
        )}
    </>
  )
}

export default Conditionals