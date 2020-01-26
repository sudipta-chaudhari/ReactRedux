import * as commentTypes from '../constants/commentTypes'
import axios from 'axios'

export const fetchCommentsRequest = () => {
  return {
    type: commentTypes.FETCH_COMMENTS_REQUEST
  }
}

export const fetchCommentsSuccess = posts => {
  return {
    type: commentTypes.FETCH_COMMENTS_SUCCESS,
    payload: posts
  }
}

export const fetchCommentsFailure = error => {
  return {
    type: commentTypes.FETCH_COMMENTS_FAILURE,
    payload: error
  }
}

export const getComments = () => {

  return async (dispatch) => {

    dispatch(fetchCommentsRequest())

    await axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(response => {
        dispatch(fetchCommentsSuccess(response.data))
      })
      .catch(error => {
        dispatch(fetchCommentsFailure(error.message))
      })
  }
}

