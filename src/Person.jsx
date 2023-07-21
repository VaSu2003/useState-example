import React from 'react'
import { people } from './data'

function Person() {
    console.log(people)
    return (
        <>
            <h2>This is a person list</h2>
            {people.map((ele)=>{
                return(
                    <div key={ele.id}>
                        <li >{ele.name},{ele.nickName}</li>
                        <img src={ele.images?.[0].small.url} alt="Image"/>
                    </div>                    
                )} )}
        </>
      )
}

export default Person