import React, { useState, useEffect } from 'react';
import {  useDispatch } from 'react-redux';

//action
import {clearRecords, fetchRecords} from '../actions';

const Search = () => {
    console.log("In Search JS")
    const [ search, setSearch] = useState('');
    const [ sortBy, setSortBy] = useState('name');
    const [ orderBy, setOrderBy] = useState('asc');

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
        // dispatch(clearRecords())
        dispatch(fetchRecords(search , sortBy, orderBy))
    }

    useEffect( () => {
        fetchData()
    }, [search, sortBy, orderBy])

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

            <ul className="order">
                <li>
                    <input type="radio" id="asc" name="selector" defaultChecked onClick={ () => setOrderBy('asc')} />
                    <label for="asc">Top-Bottom</label>
                </li>
                <li>
                    <input type="radio" id="desc" name="selector" onClick={ () => setOrderBy('desc') } />
                    <label for="desc">Bottom-Top</label>
                </li>
            </ul>
                    
            <select name="sort" id="sort" value={sortBy} onChange={ e => onChangeSelect(e) }>
                <option value="name">Title</option>
                <option value="datelastedited">Last Edited Date</option>
            </select>
            
        </div>
    )
}

export default Search;

