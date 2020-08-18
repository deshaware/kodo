import { combineReducers } from 'redux';
import { GET_RECORDS, CLEAR_RECORDS, LOADING, CHANGE_CURRENT_PAGE } from '../actions/types';

//service
import { setPages } from '../service';

const initialState = {
    records: [],
    pages: [],
    recordsCount: 0,
    currentPage: 1,
    search: '',
    sortBy: '',
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
            const { search, sortBy } = action.payload;
            return {
                ...state,
                loading: false,
                pages: parseInt(action.payload.response.responseCount/8 + 1),
                records: action.payload.response.response,
                recordsCount: action.payload.response.responseCount,
                search: search,
                sortBy: sortBy,
                currentPage: 1
            };
        case CLEAR_RECORDS:
            return {
                ...state,
                loading: false,
                pages: [],
                records: [],
                search: '',
                sortBy: ''
            }
        case CHANGE_CURRENT_PAGE:
            return {
                ...state,
                loading: false,
                records: action.payload.response,
                currentPage: action.payload.currentPage
            };
        default:
            return state;
    }
}

export default combineReducers({
    data
})