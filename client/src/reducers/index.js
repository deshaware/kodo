import { combineReducers } from 'redux';
import { GET_RECORDS, CLEAR_RECORDS, LOADING } from '../actions/types';

const initialState = {
    records: [],
    loading: false
}

const data = (state = initialState, action) => {
    switch(action.type) {
        case LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_RECORDS:
            return {
                ...state,
                loading: false,
                records: action.payload
            };
        case CLEAR_RECORDS:
            return {
                ...state,
                loading: false,
                records: null
            }
        default:
            return state;
    }
}

export default combineReducers({
    data
})