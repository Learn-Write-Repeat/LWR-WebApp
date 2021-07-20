import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


function Header() {
  return (
    
    <div className="navigation">

      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container-fluid">
          <Link class="navbar-brand" to="/">DevIncept LWR</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              <Link className="nav-link" to="/api/blogs/create">Create</Link>
              <Link className="nav-link" to="/signup">Sign up</Link>
              <Link className="nav-link" to="/login">Login</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;