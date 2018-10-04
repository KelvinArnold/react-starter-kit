import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class PostDetail extends Component {
  componentDidMount() {
    if (!this.props.post) {
      const { id } = this.props.match.params;
      this.props.fetchPost(id);
    }
  }
  onDeletePost() {
    const {id} = this.props.match.params;
    console.log(`Id: ${id}`);
  }
  render() {
    const {post} = this.props;
    if (!post) {
      return (
        <div className="col-12">
          <h3>Post detail</h3>
          <span>Loading...</span>
        </div>
      )
    }
    return (
      <div className="col-12">
        <nav className="navbar p-0">
          <div>
            <Link
              to="/posts"
              className="tc-link">
              Back to List
            </Link>
            <h3>{post.title}</h3>
          </div>
          <button
            className="btn btn-sm btn-danger"
            onClick={this.onDeletePost.bind(this)}>
            Delete Post
          </button>
        </nav>
        <div className="p-3 border rounded mt-3 mb-3">
          <small className="tc-primary">Categories: {post.categories}</small>
          <p>{post.content}</p>
        </div>
      </div>
    )
  }
}

export default PostDetail;
