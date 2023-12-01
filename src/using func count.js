import React from 'react';
import { useState } from 'react';

const Content2 = () => {

  const [name,setName]=useState("earn")
  function handleNameChange(){
      const name = ["Earn","Grow","Give"];
      const int = Math.floor(Math.random()*3)
      setName (name[int])
  }

    const [count, setCount]=useState(99); 
    function incrementFunction(){
      setCount(count + 1)
    }
    function decrementFunction(){
      setCount(pervcount=>pervcount - 1)
      
    }
  return (
    <main>
        <p> Let {name} Money </p>
        <button onClick={handleNameChange}>subscribe</button>
        <button  onClick={decrementFunction}>-</button>
        <span>{count}</span>
        <button onClick={incrementFunction}>+</button>
        <button> subscribe </button>
        
    </main>
      
  )
}

export default Content2 