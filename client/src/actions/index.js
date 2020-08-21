import axios from 'axios';
import { GET_RECORDS, CLEAR_RECORDS, LOADING, CHANGE_CURRENT_PAGE, ERROR, REFRESH } from './types';

import { generateQuery } from '../service';
import {persistor} from '../store';

export const fetchRecords = (search, sortBy) => dispatch => {
    //initially state changed to loading
    console.log("Tryina fetch")
    
    dispatch(dataLoading());
    axios.get(generateQuery(search, sortBy, 0))
        .then( res => {
            console.log(res)
            dispatch({
                type: GET_RECORDS,
                payload: {
                    response: res.data,
                    search,
                    sortBy
                }
            })
        })
        .catch( err => {
            console.log("error in fetchRecordsAction", err)
            dispatch({
                type: ERROR,
                payload: err.message
            })
        })
}

export const clearRecords = () => dispatch => {
    console.log("clearRecords")
    persistor.purge()
    dispatch({
        type: CLEAR_RECORDS
    })
}

export const setCurrentPage = (search, sortBy, newPage) => dispatch => {
    console.log("setCurrentPageAction", newPage)
    dispatch(dataLoading());
    axios.get(generateQuery(search, sortBy, (newPage - 1) * 8))
        .then( res => {
            dispatch({
                type: CHANGE_CURRENT_PAGE,
                payload: {response: res.data.response, currentPage: newPage}
            })
        })
        .catch( err => {
            console.log("Error in set current page action",err)
            dispatch({
                type: ERROR,
                payload: err.message
            })
        });
}

export const dataLoading = () => {
    return {
        type: LOADING
    }
}

export const refresh = () => {
    return {
        type: REFRESH
    }
}
