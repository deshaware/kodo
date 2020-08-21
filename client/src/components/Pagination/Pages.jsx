import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { setCurrentPage } from '../../actions';
import PageItems from './PageItems';

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
        for (let index = 1; index <= totalPages; index++) {
            arr.push( <a  
                key={index} 
                onClick={ (e) => setPage(index) }
                style={{color: currentPage === index ? '#4CAF50': '#fff'}}
            >{index}</a>)
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
            <PageItems pages={generatePages()} />
        </div>
    )
}

export default Pagiation
