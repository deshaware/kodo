import axios from 'axios';
import { GET_RECORDS, CLEAR_RECORDS, LOADING, CHANGE_CURRENT_PAGE, ERROR, REFRESH } from './types';

import { generateQuery } from '../service';
import {persistor} from '../store';

export const fetchRecords = (search, sortBy, orderBy) => dispatch => {
    
    dispatch(dataLoading());
    axios.get(generateQuery(search, sortBy, orderBy, 0))
        .then( res => {
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
            dispatch({
                type: ERROR,
                payload: err.message
            })
        })
}

export const clearRecords = () => dispatch => {

    persistor.purge()
    dispatch({
        type: CLEAR_RECORDS
    })
}

export const setCurrentPage = (search, sortBy, orderBy, newPage) => dispatch => {
    dispatch(dataLoading());
    axios.get(generateQuery(search, sortBy, orderBy, (newPage - 1) * 6))
        .then( res => {
            dispatch({
                type: CHANGE_CURRENT_PAGE,
                payload: {records: res.data.response, currentPage: newPage, orderBy}
            })
        })
        .catch( err => {
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
