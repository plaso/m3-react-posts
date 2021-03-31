import React from 'react';
import PostsList from './PostsList';

const Home = () => {
  return (
    <div className="Home">
      <div className="p-3 pb-md-4 mx-auto text-center">
        <h1 className="display-4 fw-normal">Latest posts</h1>

        <p className="fs-5 text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis facere soluta consectetur eos eaque ipsum dolore quisquam temporibus, provident magni, maxime facilis error impedit optio minus inventore fuga in itaque?
        </p>
      </div>

      <PostsList />
    </div>
  );
};

export default Home;