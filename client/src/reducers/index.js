import { combineReducers } from 'redux';
import { GET_RECORDS, CLEAR_RECORDS, LOADING, CHANGE_CURRENT_PAGE, ERROR, REFRESH } from '../actions/types';

const initialState = {
    records: [],
    pages: 0,
    recordsCount: 0,
    currentPage: 1,
    search: '',
    sortBy: '',
    loading: false,
    error: false
}

const data = (state = initialState, action) => {
    switch(action.type) {
        case LOADING:
            return {
                ...state,
                error: false,
                loading: true
            };
        case GET_RECORDS:
            const { search, sortBy } = action.payload;
            return {
                ...state,
                loading: false,
                pages: parseInt(action.payload.response.responseCount/8 + 1),
                records: action.payload.response.response,
                recordsCount: action.payload.response.responseCount,
                search: search,
                sortBy: sortBy,
                error: false,
                currentPage: 1
            };
        case CLEAR_RECORDS:
            return {
                ...state,
                records: [],
                pages: 0,
                recordsCount: 0,
                currentPage: 1,
                search: '',
                sortBy: '',
            }
        case CHANGE_CURRENT_PAGE:
            return {
                ...state,
                loading: false,
                records: action.payload.response,
                currentPage: action.payload.currentPage,
                error: false,
            };
        
        case ERROR:
            return {
                ...state,
                records: [],
                error: action.payload
            }
        case REFRESH:
            return {
                ...state,
                error: false
            }
        default:
            return state;
    }
}

export default combineReducers({
    data
})