import React,{useState} from 'react';

function Counter() {
    const [count,setCount] = useState(0);
    function increment(){
        setCount(count + 1);
        console.log(count);
    }
  return (
    <>
        <div>{count}</div>
        <button type='button' onClick={increment}>Increment</button>
    </>
  )
}

export default Counter