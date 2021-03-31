import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = ({ title, body, id }) => {
  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{body}</p>
        <Link to={`/posts/${id}`} className="btn btn-outline-primary btn-sm">See details</Link>
      </div>
    </div>
  );
};

export default PostItem;