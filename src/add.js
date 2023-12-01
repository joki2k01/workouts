import React from 'react'

const add = ({add,setadd,handleSubmit}) => {
  return (
    <div>
      <form className="add" onSubmit={handleSubmit}>
        add<input type="text"
            placeholder='add'
            value={add}
            onChange={(e)=>setadd(e.target.value)}
            
        />
      </form>  
    </div>
  )
}

export default add