import * as commentTypes from '../constants/commentTypes'

const initialState = {
    comments: [],
    loading: false,
    error: ''
}

const commentsReducer = (state = initialState, action) => {

    switch(action.type){
        case commentTypes.FETCH_COMMENTS_REQUEST: 
            return {
                ...state,
                loading: true
            }
        case commentTypes.FETCH_COMMENTS_SUCCESS: 
            return {
                ...state,
                comments: action.payload,
                loading: false,
                error: ''
            }
        case commentTypes.FETCH_COMMENTS_FAILURE: 
            return {
                ...state,
                loading: false,
                commnets: [],
                error: action.payload
            }
        default: return state;
    }  
}

export default commentsReducer