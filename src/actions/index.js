import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
  HANDLE_REQUEST_POSTS_ERROR,
} from './action-types'

import { fetchPosts } from '../api'

const requestPosts = () => {
  return {
    type: REQUEST_POSTS,
  }
}

const receivePosts = items => {
  return {
    type: RECEIVE_POSTS,
    payload: {
      items,
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

export const getPosts = () => {
  return dispatch => {
    dispatch(requestPosts())
    fetchPosts().then(
      response => {
        dispatch(
          receivePosts(
            response.data.sort(() => 0.5 - Math.random()).slice(0, 10)
          )
        )
      },
      error => dispatch(handleRequestPostsError(error))
    )
  }
}
