import React from 'react'
import { connect } from 'react-redux'

const PostList = props => {
  const posts = props.posts.map(p => <li key={p.id}>{p.title}</li>)
  return <ul>{posts}</ul>
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
  }
}

export default connect(mapStateToProps)(PostList)
