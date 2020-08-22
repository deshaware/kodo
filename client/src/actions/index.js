import axios from 'axios';
import { GET_RECORDS, CLEAR_RECORDS, LOADING, CHANGE_CURRENT_PAGE, ERROR, REFRESH } from './types';

import { generateQuery } from '../service';
import {persistor} from '../store';

export const fetchRecords = (search, sortBy, orderBy) => dispatch => {
    //initially state changed to loading
    console.log("Tryina fetch", orderBy)
    
    dispatch(dataLoading());
    axios.get(generateQuery(search, sortBy, orderBy, 0))
        .then( res => {
            console.log(res)
            dispatch({
                type: GET_RECORDS,
                payload: {
                    response: res.data,
                    search,
                    sortBy,
                    orderBy
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

export const setCurrentPage = (search, sortBy, orderBy, newPage) => dispatch => {
    console.log("setCurrentPageAction", newPage)
    dispatch(dataLoading());
    axios.get(generateQuery(search, sortBy, orderBy, (newPage - 1) * 8))
        .then( res => {
            dispatch({
                type: CHANGE_CURRENT_PAGE,
                payload: {records: res.data.response, currentPage: newPage, orderBy}
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
