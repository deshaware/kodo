import React from 'react'

const Rows = ({item}) => {
    return (
        <tr>
            <td data-label="Title">{item.name}</td>
            <td data-label="Image"> <img src={item.image} alt="img" /> </td>
            <td data-label="Description">{item.description}</td>
            <td data-label="Last Edit Date">{ new Date(item.datelastedited).toUTCString()}</td>
        </tr>
    )
}

export default Rows
