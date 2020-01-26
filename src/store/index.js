import { combineReducers, createStore, applyMiddleware } from 'redux'
import postsReducer from '../reducers/postsReducer'
import commentsReducer from '../reducers/commentsReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    postsRed: postsReducer,
    commentsRed: commentsReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store