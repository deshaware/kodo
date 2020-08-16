import React from 'react'
import CardItem from './CardItem'
import Loader from '../Loader';

const CardGrid = ( {items, isLoading} ) => {

    console.log("CardGrid", items)
    return isLoading ? (
            <Loader />
        ) : (
            <div className="cards">
            { items.map( (item, index) => {
                return <CardItem key={index} item={item} ></CardItem>
            })
        }
            </div>
        )
}

export default CardGrid;
