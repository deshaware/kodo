import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { setCurrentPage } from '../actions';

const Pagiation = ({ pages, currentPage }) => {

    const [ page, setPage ] = useState(1)

    const dispatch = useDispatch()

    const { search, sortBy } = useSelector(state => ({
        search: state.data.search,
        sortBy: state.data.sortBy
      }),
      shallowEqual)
    
    
    const generatePages = () => {
        let arr = []
        for (let index = 1; index <= pages; index++) {
            console.log("GENERATING PAGE NUMBER", pages)
            arr.push( <a  key={index} onClick={ (e) => setPage(index) }>{index}</a>)
        }
        return arr;
    }

    useEffect(() => {
        console.log("UseEffectPagination")
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
        <a onClick={ e  => setPage(page-1)} >&laquo;</a>
            {generatePages()}
        <a onClick={ e  => setPage(page-1)} >&raquo;</a>
        </div>
    )
}

export default Pagiation
