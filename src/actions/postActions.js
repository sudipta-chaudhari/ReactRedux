import * as postTypes from '../constants/postTypes'
import axios from 'axios'

export const fetchPostsRequest = () => {
  return {
    type: postTypes.FETCH_POSTS_REQUEST
  }
}

export const fetchPostsSuccess = posts => {
  return {
    type: postTypes.FETCH_POSTS_SUCCESS,
    payload: posts
  }
}

export const fetchPostsFailure = error => {
  return {
    type: postTypes.FETCH_POSTS_FAILURE,
    payload: error
  }
}

export const getPosts = () => {

  return async (dispatch) => {

    dispatch(fetchPostsRequest())

    await axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        dispatch(fetchPostsSuccess(response.data))
      })
      .catch(error => {
        dispatch(fetchPostsFailure(error.message))
      })
  }
}

