import _ from 'lodash';
import React, { Component } from 'react'

class Post extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  renderPosts() {
    const {posts} = this.props;
    return _.map(posts, post => {
      return (
        <li key={post.id}>{post.title}</li>
      )
    })
  }
  render() {
    return (
      <div>
        <h1>Posts View</h1>
        <ul>
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}

export default Post;