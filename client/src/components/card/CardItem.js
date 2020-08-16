import React from 'react'

const CardItem = ({item}) => {
    // console.log(item)
    return (
        <div className="card">
            <img src={item.image} alt="img" />
            <h1>{item.name}</h1>
            <p><strong>Description:</strong> {item.description}</p>
            <p><strong>Last Edited:</strong> <br></br> { new Date(item.datelastedited).toUTCString()}</p>
        </div>
    )
}

export default CardItem
