import React from 'react'
import { connect } from 'react-redux'
import PostList from './PostList'
import { fetchPosts } from '../actions'

const App = props => {
  const errors = props.error ? (
    <p style={{ color: 'red' }}>Error: {props.error}</p>
  ) : null

  const postsCountTitle = props.posts.length ? (
    <p>Displaying all {props.posts.length} posts:</p>
  ) : null

  return (
    <div>
      {postsCountTitle}
      <PostList />
      <button onClick={props.fetchPosts}>Fetch Posts</button>
      {errors}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
    error: state.error,
  }
}

export default connect(
  mapStateToProps,
  { fetchPosts }
)(App)
