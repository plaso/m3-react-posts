import React from 'react';
import SyncLoader from 'react-spinners/SyncLoader'
import usePostsFetch from '../hooks/usePostsFetch';
import PostItem from './PostItem';

const PostsList = () => {
  const { loading, posts } = usePostsFetch()

  return (
    <div className="PostList my-3">
      {
        loading
          ? (
            <div className="text-center">
              <SyncLoader color="blue"  />
            </div>
          )
          : (
            <div className="row row-cols-1 row-cols-md-2 g-4">
              {posts && posts.map(post => (
                <div className="col" key={post.id}>
                  <PostItem {...post} />
                </div>
              ))}
            </div>
          )
      }
    </div>
  );
}

export default PostsList;