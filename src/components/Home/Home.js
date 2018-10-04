import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="col-12">
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/" className="tc-black">Home</Link>
          </li>
          <li className="list-group-item">
            <Link to="/posts" className="tc-black">Post</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default  Home;