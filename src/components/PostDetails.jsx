import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import SyncLoader from 'react-spinners/SyncLoader'
import { getPost } from '../services/BaseService';

class PostDetails extends Component {
  state = {
    post: null,
    loading: true
  }

  componentDidMount() {
    this.fetchPost()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.setState({ loading: true })
    }

    if (this.state.loading) {
      this.fetchPost()
    }
  }

  fetchPost = () => {
    const { id } = this.props.match.params

    getPost(id)
      .then(post => this.setState({ post, loading: false }))
  }

  render() {
    const { loading, post } = this.state
    const { id } = this.props.match.params

    return (
      <div className="PostDetails mt-3">
        {
          loading
            ? (
              <div className="text-center">
                <SyncLoader color="blue"  />
              </div>
            ) : (
              <Fragment>
                <h1>{post.title}</h1>
                <p>{post.body}</p>

                <Link className="btn btn-outline-primary" to={`/posts/${Number(id) + 1}`}>Next post</Link>
              </Fragment>
            )
        }
      </div>
    );
  }
}

export default PostDetails;