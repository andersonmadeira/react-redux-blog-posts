import jsonPlaceholder from '../api'
import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
  HANDLE_REQUEST_POSTS_ERROR,
} from './action-types'

const requestPosts = () => {
  return {
    type: REQUEST_POSTS,
  }
}

const receivePosts = posts => {
  return {
    type: RECEIVE_POSTS,
    payload: {
      posts,
    },
  }
}

const handleRequestPostsError = error => {
  return {
    type: HANDLE_REQUEST_POSTS_ERROR,
    payload: {
      error,
    },
  }
}

export const fetchPosts = () => {
  return (dispatch, getState) => {
    dispatch(requestPosts())
    jsonPlaceholder.get('/posts').then(
      response => {
        dispatch(receivePosts(response.data))
      },
      error => dispatch(handleRequestPostsError(error))
    )
  }
}
