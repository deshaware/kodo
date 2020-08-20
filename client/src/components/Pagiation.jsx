import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { setCurrentPage } from '../actions';

const Pagiation = () => {

    const [ page, setPage ] = useState(1)

    const dispatch = useDispatch()

    const { search, sortBy, totalPages, currentPage } = useSelector(state => ({
        search: state.data.search,
        sortBy: state.data.sortBy,
        totalPages: state.data.pages,
        currentPage: state.data.currentPage
      }),
      shallowEqual)
    
    
    const generatePages = () => {
        let arr = [];

        for (let index = currentPage; index <= totalPages; index++) {
            console.log("GENERATING PAGE NUMBER", currentPage)
            arr.push( <a  
                key={index} 
                onClick={ (e) => setPage(index) }
                style={{border: currentPage === index ? '#4CAF50': '#fff'}}
            >{index}</a>)
            if(arr.length == 6)
                return arr
        }
        return arr;
    }

    useEffect(() => {
        console.log("UseEffectPagination", page)
        changePage()
        // return () => {
        //     console.log("UseEffectPaginationReturn")
        // }
    }, [page])

    const changePage = () => {
        dispatch(setCurrentPage(search, sortBy, page))
    }

    return (
        <div className="pagination">
        <a  onClick={ e  => currentPage > 1 ? setPage(page-1) : ''} >&laquo;</a>
            {generatePages()}
        <a onClick={ e  => page + 5 < totalPages ? setPage(page+1): ''} >&raquo;</a>
        </div>
    )
}

export default Pagiation
