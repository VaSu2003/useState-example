import { useReducer, useState } from "react";
import {data} from './data.js'

const defaultState = {
    people:data,
}

const reducer = (state,action)=>{
    if(action.type === "CLEAR_LIST"){
        return {...state,people:[]}
    }else if(action.type === "RESET_LIST"){
        return {...state,people:data}
    }else if(action.type === "DELETE"){
        return {...state,people: state.people.filter((person)=> person.id !== action.id)}
    }
    throw new Error(`No matching ${action.type} - action type`)
}


  
function ReducerBasics() {

    const [state,dispatch] = useReducer(reducer,defaultState)

    // const [people, setPeople] = useState(data);
    function deletePerson(id){
        dispatch({type:"DELETE",id:id})
        // setPeople(people.filter((person)=> person.id !== id))
    }
    function clearPerson(){
        dispatch({type:"CLEAR_LIST"})
        // setPeople([])
    }
    function resetList(){
        dispatch({type:"RESET_LIST"})
        // setPeople(data)
    }
    
    return (
        <>
        {state.people.length === 0 ? <button onClick={resetList}>Reset</button> : <>
        <ul>
                {
                    state.people.map((person)=>{
                    return (
                        
                        <li key={person.id}>
                            {person.name}
                            <button id = {person.id} onClick = {()=>deletePerson(person.id)} className="btn">Delete</button>
                        </li>
                        

                    )
                    })
                }
            </ul>
            <button onClick = {clearPerson}>Clear Person List</button>
        </>}
            
        </>
    )
}

export default ReducerBasics