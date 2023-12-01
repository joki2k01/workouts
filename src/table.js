import React from 'react'

const table = ({data}) => {
  return (
    <div>
        <table>
            <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Email</th>
            </tr>
            {data.map(item=>(
            <tr key={item.id}>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
            </tr>
            ))}
        </table>
    </div>
  )
}

export default table