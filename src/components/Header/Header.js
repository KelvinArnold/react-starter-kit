import React from 'react';
import {Link} from 'react-router-dom';

const Header = ({logo}) => {
  return (
    <div className="row">
      <header className="col-12 p-0">
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
          <Link to="/" className="navbar-brand tc-primary">
            Starter Kit
          </Link>
          <div>
            Menu
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header;
