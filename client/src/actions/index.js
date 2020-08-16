import axios from 'axios';
import { GET_RECORDS, CLEAR_RECORDS, LOADING } from './types';

export const fetchRecords = (query) => dispatch => {
    //initially state changed to loading
    console.log("Tryina fetch")
    dispatch(dataLoading());
    axios.get(generateQuery(query))
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

const generateQuery = (query) => {
    console.log(query)
    return "/api/v1/data/getData";
}