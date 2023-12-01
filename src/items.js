import React, { useState } from 'react'

const items = () => {
    
    [{
        id:1,
        checked:true,
        item:"practice coding"

},{
    id:2,
    checked:true,
    item:"practice coding"

},{
    id:3,
    checked:true,
    item:"practice coding"

}]
  return (
    <div>
        <ul>
            <li>
                {items.map(item=>(
                    <input type="checkbox"
                           checked={item.checked} 
                    />
                    
                ))}
            </li>
        </ul>
    </div>
  )
}

export default items