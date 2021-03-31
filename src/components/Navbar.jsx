import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
      <Link to="/" className="d-flex align-items-center text-dark text-decoration-none">
        <span className="fs-4">IronPosts</span>
      </Link>

      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <Link className="py-2 text-dark text-decoration-none" to="/posts/new">
          New post
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;