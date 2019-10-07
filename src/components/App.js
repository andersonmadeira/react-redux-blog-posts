import React from 'react'
import { connect } from 'react-redux'
import PostList from './PostList'
import { getPosts } from '../actions'

const App = props => {
  const errors = props.error ? (
    <p style={{ color: 'red' }}>Error: {props.error}</p>
  ) : null

  const postsCountTitle = props.posts.length ? (
    <h2>Displaying all {props.posts.length} posts:</h2>
  ) : null

  const loadingButtonClass = props.loading ? 'loading' : ''

  return (
    <div className="ui container" style={{ width: 700, margin: 10 }}>
      <div className="ui raised segment">
        {postsCountTitle}
        <PostList />
        <button
          className={`fluid ui ${loadingButtonClass} primary button`}
          onClick={props.getPosts}
        >
          Fetch Posts
        </button>
        {errors}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    posts: state.posts.items,
    loading: state.posts.loading,
    error: state.posts.error,
  }
}

export default connect(
  mapStateToProps,
  { getPosts }
)(App)
