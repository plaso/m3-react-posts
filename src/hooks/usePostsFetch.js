import { useEffect, useState } from 'react'
import { getPosts } from '../services/BaseService'

const usePostsFetch = () => {
  const [state, setState] = useState({ loading: true, posts: null })
  const { loading, posts } = state

  useEffect(() => {
    getPosts()
      .then(response => setState({ posts: response, loading: false }))
  }, [])

  return { loading, posts }
}

export default usePostsFetch