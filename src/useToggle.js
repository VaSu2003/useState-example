import { useState } from "react";

import React from 'react'

function useToggle(defaultValue) {
    const [show,setShow] = useState(defaultValue);
    const toggle =()=>{
        setShow(!show)
    }

  return {show,toggle}
}

export default useToggle