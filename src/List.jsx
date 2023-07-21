import React from 'react'
import { people } from './data'

function List() {
    // console.log(people);
  return (
    <>
        {people.map((ele)=> (<li key={ele.id}>{ele.name}</li>) )}
    </>
  )
}

export default List