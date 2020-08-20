import React from 'react'

const CardItem = ({item}) => {
    // console.log(item)
    return (
        <div className="card">
            <img src={item.image} alt="img" />
            <h1>{item.name}</h1>
            <p><strong style={{fontFamily:'cursive'}}>Description:</strong> {item.description}</p>
            <p><strong style={{fontFamily:'cursive'}}>Last Edited:</strong> <br></br> { new Date(item.datelastedited).toUTCString().split('GMT')[0]}</p>
        </div>
    )
}

export default CardItem
