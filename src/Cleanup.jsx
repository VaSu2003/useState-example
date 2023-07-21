import React,{useEffect, useState} from 'react'

function Cleanup() {
    const [toggle,setToggle] = useState(false)
  return (
    <>
        {toggle ? (<SecondComp/>) : (<div>This is first Component</div>) }
        <button onClick={()=>{toggle ? setToggle(false): setToggle(true)}}>Toggle</button>
    </>
  )     
}


function SecondComp(){
    useEffect(()=>{
        console.log('hmm, thats interesting')
    },[])
    return(
        <div>This is Second Component</div>
    )
}

export default Cleanup