import React from 'react';
import Loader from '../Loader';

import Rows from './Rows'

const Table = ( {items, isLoading} ) => {
    console.log("table", items.length)
    return (
             isLoading ? (
                <Loader />
            ) : (
                <table>
                    <caption>Feed Summary</caption>
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Image</th>
                            <th scope="col">Description</th>
                            <th scope="col">Last Edit Date</th>
                        </tr>
                    </thead>
                    <tbody>
                    {   items.map( (item, index) => {
                            return <Rows key={index} item={item} ></Rows>
                        })
                    }
                    </tbody>
                </table>
            )
    )
}

export default Table
