import axios from 'axios'

const http = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

http.interceptors.response.use(response => response.data)

export const getPosts = () => {
  return http.get('/posts')
}

export const getPost = (id) => {
  return http.get(`/posts/${id}`)
}

export const createPost = (fields) => {
  return http.post('/posts', {
    ...fields,
    userId: 1
  })
}