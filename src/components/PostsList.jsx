import React, { Component } from 'react';
import { getPosts } from '../services/BaseService';
import SyncLoader from 'react-spinners/SyncLoader'
import PostItem from './PostItem';

class PostsList extends Component {
  state = {
    posts: [],
    loading: true
  }

  componentDidMount() {
    getPosts()
      .then(posts => this.setState({ posts, loading: false }))
  }
  

  render() {
    const { posts, loading } = this.state

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
                {posts.map(post => (
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
}

export default PostsList;