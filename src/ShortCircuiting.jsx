import React,{useState} from 'react'

function ShortCircuiting() {
  const [text,setText] = useState('')
  const [name,setName] = useState('Vaibhav')
  return (
    <div>{text || name}</div>
  )
}

export default ShortCircuiting