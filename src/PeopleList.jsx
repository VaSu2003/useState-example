import { useState } from "react";
import {data} from './data.js'
  
function PeopleList() {

    const [people, setPeople] = useState(data);
    function deletePerson(id){
        setPeople(people.filter((person)=> person.id !== id))
    }
    function clearPerson(){
        setPeople([])
    }
    return (
        <>
            <ul>
                {
                    people.map((person)=>{
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
        </>
    )
}

export default PeopleList