import React,{useState} from 'react'

function Conditionals() {
    const [bool,setBool] = useState(true);
    let text;
    
  return (
    <>
        {bool ? text = (<div>Truthy Component</div>) : text = (<div>False Component</div>)}
        <button onClick={()=>{bool? setBool(false) : setBool(true)}}>Toggle Element</button>
    </>
  )
}

export default Conditionals