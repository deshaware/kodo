import React, { useState, useEffect } from 'react';
import {  useDispatch, useSelector, shallowEqual } from 'react-redux';

//action
import {clearRecords, fetchRecords} from '../actions';

const Search = () => {
    const [ search, setSearch] = useState('');
    const [ sortBy, setSortBy] = useState('Sort');


    const dispatch = useDispatch()
    const {items, isLoading} = useSelector(state => ({
        items: state.data.records,
        isLoading: state.data.loading
        }), shallowEqual)

    const onChangeInput = e => {
        setSearch(e.target.value)
        e.preventDefault();
    }

    const onChangeSelect = e => {
        setSortBy(e.target.value)
        e.preventDefault();
    }

    useEffect( () => {
        console.log("useEffect")
        console.log("items", items)
        items.length == 0 && fetchData()
    }, [search, sortBy])

    const fetchData = () => {
        dispatch(clearRecords)
        dispatch(fetchRecords(search + sortBy))
    }
    return (
        <div id="form">
            <input 
                type="text" 
                name="search" 
                id="search" 
                placeholder="Search..."
                value={search}
                onChange={ e => onChangeInput(e)}
                autoFocus
            />
                    
            <select name="sort" id="sort" value={sortBy} onChange={ e => onChangeSelect(e) }>
                <option value="name">Title</option>
                <option value="datelastedit">DateLastEdited</option>
            </select>
            
        </div>
    )
}

export default Search;

