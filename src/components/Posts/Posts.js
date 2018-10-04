import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Post extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  renderPosts() {
    const {posts} = this.props;
    return _.map(posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`/posts/${post.id}`}
            className="tc-black">
            {post.title}
          </Link>
        </li>
      )
    })
  }
  render() {
    return (
      <div className="col-12">
        <nav className="navbar p-0">
          <div>
            <Link
              to="/"
              className="tc-link">
              Back to Home
            </Link>
            <h3>Posts View</h3>
          </div>
        </nav>
        <div className="mt-3 mb-3">
          <ul className="list-group">
            {this.renderPosts()}
          </ul>
        </div>
      </div>
    )
  }
}

export default Post;