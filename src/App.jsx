import { useState } from 'react'
import PeopleList from './PeopleList';
import UseStateObject from './useStateObject';
import Counter from './Counter';
import UseEffectsBasics from './UseEffectsBasics';
import Multiple_returns_basics from './Multiple_returns_basics';
import ShortCircuiting from './ShortCircuiting';
import Conditionals from './Conditionals';
import Cleanup from './Cleanup';
import { ExComp1,ExComp2 } from './Example';
import List from './List';
import Person from './Person';
import './app.css'
import ControlledInputs from './controlledInputs';
import UseRefBasics from './UseRefBasics';
import ToggleExample from './ToggleExample';
import Navbar from './Navbar';
import { useGlobalContext } from './Context';
import ReducerBasics from './useReducer';

function App() {
  const {user,setUser} = useGlobalContext()
  
  return (
    <>
      {/* <h2>This is the list of people</h2> */}
      {/* <PeopleList/> */}
      {/* <UseStateObject/> */}
      {/* <Counter/> */}
      {/* <UseEffectsBasics/> */}
      {/* <Multiple_returns_basics/> */}
      {/* <ShortCircuiting/> */}
      {/* <Conditionals/> */}
      {/* <Cleanup/> */}  
      {/* <ExComp1/>
      <ExComp2/> */}
      {/* <List/>
      <Person/> */}
      {/* <ControlledInputs/> */}
      {/* <UseRefBasics/> */}
      {/* <ToggleExample/> */}
      {/* <Navbar/> */}
      <ReducerBasics/>
    </>
  )
}

export default App;
