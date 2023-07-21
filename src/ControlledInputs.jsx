import React, { useState } from 'react'
import { data } from './data'
function ControlledInputs() {
    const [name,setName] = useState('')
    const [users,setUsers] = useState(data)


    const onChangeHandler = (e)=>{
        setName(e.target.value) 
    }
    const submitHandler = function(e){
        e.preventDefault();
        let num = data.length
      
        users.unshift({name:name,id: num+2})
        
        setUsers([...users])
        
    }

    const deleteHandler = function(id){
        
        setUsers(users.filter((user)=>user.id != id))
    }
  return (
    <>
        <form  className='form' onSubmit={submitHandler}>
            <h4>Controlled inputs</h4>
            <div className="form-row">
                <label htmlFor="name" className='form-label'>name</label>
                <input type="text"  id="name" className='form-input' onChange={onChangeHandler} value={name}/>
            </div>
            <button type="submit" className='btn btn-block'>submit</button>
        </form>
        {
            users.map((user)=>{
                return(
                    <div key={user.id}>
                        <li  >{user.name}</li>
                        <button onClick={()=>{deleteHandler(user.id)}}>Delete</button>
                    </div>
                )
            })
        }
    </>
  )
}

export default ControlledInputs