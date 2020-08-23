import { combineReducers } from 'redux';
import { GET_RECORDS, CLEAR_RECORDS, LOADING, CHANGE_CURRENT_PAGE, ERROR, REFRESH } from '../actions/types';

const initialState = {
    records: [],
    pages: 0,
    recordsCount: 0,
    currentPage: 1,
    search: '',
    sortBy: '',
    orderBy: 'asc',
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
            const { search, sortBy, orderBy, response : {responseCount, response} } = action.payload;
            return {
                ...state,
                loading: false,
                pages: parseInt(responseCount/6),
                records: response,
                recordsCount: responseCount,
                search, sortBy, orderBy,
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
                orderBy: 'asc'
            }
        case CHANGE_CURRENT_PAGE:
            const { currentPage, records } = action.payload;
            return {
                ...state,
                loading: false,
                records,
                currentPage,
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