import * as postTypes from '../constants/postTypes'

const initialState = {
    posts: [],
    loading: false,
    error: ''
}

const postsReducer = (state = initialState, action) => {

    switch(action.type){
        case postTypes.FETCH_POSTS_REQUEST: 
            return {
                ...state,
                loading: true
            }
        case postTypes.FETCH_POSTS_SUCCESS: 
            return {
                ...state,
                posts: action.payload,
                loading: false,
                error: ''
            }
        case postTypes.FETCH_POSTS_FAILURE: 
            return {
                ...state,
                loading: false,
                posts: [],
                error: action.payload
            }
        default: return state;
    }  
}

export default postsReducer