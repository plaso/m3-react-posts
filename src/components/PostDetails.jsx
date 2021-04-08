import React, { Fragment, useEffect, useState, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import SyncLoader from 'react-spinners/SyncLoader'
import { getPost } from '../services/BaseService';

const PostDetails = () => {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
  }, [id])

  useEffect(() => {
    if (post) {
      setLoading(false)
    }
  }, [post])

  const fetchFn = useCallback(() => {
    getPost(id)
      .then(response => setPost(response))
  }, [id])

  useEffect(() => {
    if (loading) {
      fetchFn()
    }
  }, [loading, fetchFn])

  return (
    <div className="PostDetails mt-3">
      {
        loading
          ? (
            <div className="text-center">
              <SyncLoader color="blue"  />
            </div>
          ) : (
            post && (
              <Fragment>
                <h1>{post.title}</h1>
                <p>{post.body}</p>

                <Link className="btn btn-outline-primary" to={`/posts/${Number(id) + 1}`}>Next post</Link>
              </Fragment>
            )
          )
      }
    </div>
  );
}

export default PostDetails;