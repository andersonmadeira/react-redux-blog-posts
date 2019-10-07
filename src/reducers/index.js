import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
  HANDLE_REQUEST_POSTS_ERROR,
} from '../actions/action-types'
import { combineReducers } from 'redux'

const postsInitialState = {
  items: [],
  loading: false,
  error: null,
}

const postsReducer = (state = postsInitialState, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return {
        items: [],
        loading: true,
        error: null,
      }
    case RECEIVE_POSTS:
      return {
        items: action.payload.items,
        loading: false,
        error: null,
      }
    case HANDLE_REQUEST_POSTS_ERROR:
      return {
        items: [],
        loading: false,
        error: action.payload.error,
      }
    default:
      return state
  }
}

export default combineReducers({
  posts: postsReducer,
})
