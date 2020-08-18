import { combineReducers } from 'redux';
import { GET_RECORDS, CLEAR_RECORDS, LOADING } from '../actions/types';

//service
import { setPages } from '../service';

const initialState = {
    records: [],
    pages:[],
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
                pages: setPages(action.payload),
                records: action.payload
            };
        case CLEAR_RECORDS:
            return {
                ...state,
                loading: false,
                pages: [],
                records: []
            }
        default:
            return state;
    }
}

export default combineReducers({
    data
})