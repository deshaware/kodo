import React, { useState, useEffect } from 'react';
import {  useDispatch } from 'react-redux';

//action
import {clearRecords, fetchRecords} from '../actions';

const Search = () => {
    console.log("In Search JS")
    const [ search, setSearch] = useState('');
    const [ sortBy, setSortBy] = useState('name');

    const dispatch = useDispatch()

    const onChangeInput = e => {
        setSearch(e.target.value)
        e.preventDefault();
    }

    const onChangeSelect = e => {
        setSortBy(e.target.value)
        e.preventDefault();
    }

    const fetchData = () => {
        dispatch(clearRecords())
        dispatch(fetchRecords(search , sortBy))
    }

    useEffect( () => {
        fetchData()
    }, [search, sortBy])

    // fetchData()
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
                <option value="datelastedited">DateLastEdited</option>
            </select>
            
        </div>
    )
}

export default Search;

