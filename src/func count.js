import React from 'react'

const Content = () => {
    function handleNameChange(){
        const name = ["Earn","Grow","Give"];
        const int = Math.floor(Math.random()*3)
        return name[int]
    }   
    
    function handleClick(name){
       return console.log(`thanks ${name}`)
    }
    const handleClick2=(e)=>{
        return console.log(e.target.innerText)
     }
  return (
    <main>
    <p onDoubleClick={()=>handleClick("prithiv")}>let{handleNameChange()}money</p>
    <button onClick={()=>handleClick("joki")}> subcribe</button>
    <button onClick={(e)=>handleClick2(e)}> subcribe</button> 
    
    </main>
  )
}

export default Content