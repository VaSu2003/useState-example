import React,{useState,useRef,useEffect} from 'react'

function UseRefBasics() {
    const [value,setValue] = useState(0);
    const refContainer = useRef(null);
    // console.log(refContainer)

    // useEffect(()=>{
    //     console.log(refContainer.current.value)
    // })

    const handleSubmit = (e)=>{
        e.preventDefault();
        const name = refContainer.current.value;
        console.log(name)
    }

  return (
    <div>
        <form className='form' onSubmit={handleSubmit}>
            <div className="form-row">
                <label htmlFor="name" className='form-label'>Name</label>
                <input type="text" ref={refContainer} id="name"  className='form-input'/>
            </div>
            <button type="submit" className='btn btn-block'>Submit</button>
        </form>
        <h1>value : {value}</h1>
        <button onClick={()=>setValue(value+1)} className='btn'>Increase</button>
    </div>
  )
}

export default UseRefBasics