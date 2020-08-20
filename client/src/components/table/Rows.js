import React from 'react'

const Rows = ({item}) => {
    return (
        <tr>
            <td data-label="Title" style={{color:'#3fb573'}}>{item.name}</td>
            <td data-label="Image"> <img src={item.image} alt="img" /> </td>
            <td data-label="Description">{item.description}</td>
            <td data-label="Last Edit Date">{ new Date(item.datelastedited).toUTCString().split('GMT')[0]}</td>
        </tr>
    )
}

export default Rows
