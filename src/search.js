import React from 'react'
import {v4 as uuidv4} from "uuid"

const search = ({set,setSearch,todos,todoList}) => {
const   handSubmit=(e)=>{
 e.preventDefault()
todoList ([...todos,{id:uuidv4(),title:set}])
 setSearch("")
}
  
  return (
    <div>
      <form onSubmit={handSubmit}>
        search<input 
          type="text"
          placeholder='search'
          value={set}
          onChange={(e)=>setSearch(e.target.value)}/>
      </form>
    </div>
  )
}

export default search