import React from 'react'
import useToggle from './useToggle';
function ToggleExample() {
    const{show,toggle}=useToggle(false)
  return (
    <div>
        <h4>Toggle custom hook</h4>
        <button className='btn' onClick={toggle}>Toggle</button>
        {show && <h4>Some Stuff</h4>}
    </div>
  )
}

export default ToggleExample