import axios from 'axios';
import { GET_RECORDS, CLEAR_RECORDS, LOADING } from './types';

import { generateQuery } from '../service';

export const fetchRecords = (search, sortBy) => dispatch => {
    //initially state changed to loading
    console.log("Tryina fetch")
    
    dispatch(dataLoading());
    axios.get(generateQuery(search, sortBy))
        .then( res => {
            dispatch({
                type: GET_RECORDS,
                payload: res.data.response
            })
        })
        .catch( err => {
            console.log(err)
            dispatch({
                type: GET_RECORDS,
                payload: {}
            })
        })
}

export const clearRecords = () => dispatch => {
    console.log("clearRecords")
    dispatch({
        type: CLEAR_RECORDS
    })
}

export const dataLoading = () => {
    return {
        type: LOADING
    }
}

