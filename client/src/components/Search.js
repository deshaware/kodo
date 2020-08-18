import React, { useState, useEffect } from 'react';
import {  useDispatch, useSelector, shallowEqual } from 'react-redux';

//action
import {clearRecords, fetchRecords} from '../actions';

const Search = () => {
    const [ search, setSearch] = useState('');
    const [ sortBy, setSortBy] = useState('name');

    const dispatch = useDispatch()

    const { items } = useSelector(state => ({
            items: state.data.records
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
        fetchData()
    }, [search, sortBy])

    const fetchData = () => {
        dispatch(clearRecords)
        dispatch(fetchRecords(search , sortBy))
    }

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

