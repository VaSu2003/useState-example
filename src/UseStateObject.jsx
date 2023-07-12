import { useState } from "react"

function UseStateObject() {
    const [person,setPerson] = useState({
        name: "Peter",
        age: 24,
        hobby: "Reading Books"
    })

    function displayPerson(){
        setPerson({
            name: "Jhon",
            age: 26,
            hobby: "Trekking"
        })
    }
  return (
    <>
        <h3>{person.name}</h3>
        <h3>{person.age}</h3>
        <h3>{person.hobby}</h3>
        <button type="button" onClick={displayPerson}>Show Jhon</button>
    </>
  )
}

export default UseStateObject