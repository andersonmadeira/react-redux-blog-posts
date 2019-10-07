import React from 'react'
import { connect } from 'react-redux'

const PostList = props => {
  const postsItems = props.posts.length
    ? props.posts.map(p => (
        <div className="item" key={p.id}>
          <img
            className="ui avatar image"
            src={`https://robohash.org/${p.userId}`}
            alt={p.userId}
          ></img>
          <div className="content">
            <a className="header" href="#?">
              {p.title}
            </a>
            <div className="description">{p.body}</div>
          </div>
        </div>
      ))
    : null

  const posts = props.posts.length ? (
    <div className="ui relaxed list">{postsItems}</div>
  ) : null

  return posts
}

const mapStateToProps = state => {
  return {
    posts: state.posts.items,
    postsLoading: state.posts.loading,
  }
}

export default connect(mapStateToProps)(PostList)
