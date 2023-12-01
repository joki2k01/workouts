import React from 'react'
import Search from "./search"
import {useState} from "react"
import Todolist from './todolist'

const App = () => {
  const [set,setSearch]=useState("")
  const [todos,todoList]=useState([
          "blue pant"
        , "black pant"
        , "blue shirt"
        , "black shoes"
        , "brown shoes"
        , "white pant"
  ])
  
  return (
    <div>
      <Search
        set={set}
        setSearch={setSearch}
        todos={todos}
        todoList={todoList}
      />
      
      <Todolist todos={todos} todoList={todoList}/>
      
    </div>
  )
}

export default App