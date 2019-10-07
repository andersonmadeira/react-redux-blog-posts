import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
  HANDLE_REQUEST_POSTS_ERROR,
} from '../actions/action-types'

const initialState = {
  loading: false,
  error: null,
  posts: [],
}

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return {
        loading: true,
        error: null,
        posts: [],
      }
    case RECEIVE_POSTS:
      return {
        loading: false,
        error: null,
        posts: action.payload.posts,
      }
    case HANDLE_REQUEST_POSTS_ERROR:
      return {
        loading: false,
        posts: [],
        error: action.payload.error,
      }
    default:
      return state
  }
}

export default postsReducer
