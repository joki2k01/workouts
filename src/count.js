import { useState } from "react"

const Counter = () => {
   const [count,setCount]=useState(0)
   const [counts,setCounts]=useState(5)
  return (
<div>
    <p>{count}</p>
    <button onClick={()=>setCount(count+1)}>click</button>
    <p>{counts}</p>
    <button onClick={()=>setCounts(counts-1)}>click</button>
    </div>
  )
}

export default Counter