import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { createPost } from '../services/BaseService';

const validations = {
  title: (value) => {
    let message;

    if (!value) {
      message = 'Title is required'
    } else if(value.length < 5) {
      message = 'Title should have at least 5 chars'
    }

    return message
  },
  body: (value) => {
    let message;

    if (!value) {
      message = 'Body is required'
    } else if(value.length < 15) {
      message = 'Title should have at least 15 chars'
    }

    return message
  }
}

const NewPost = () => {
  const { push } = useHistory()

  const [state, setState] = useState({
    values: {
      title: '',
      body: ''
    },
    errors: {
      title: validations.title(),
      body: validations.body()
    }
  })
  
  const { errors } = state
  const { title, body } = state.values

  const [touched, setTouched] = useState({})

  const isValid = () => {
    return !Object.keys(state.errors).some(key => state.errors[key])
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (isValid()) {
      createPost({ title, body })
        .then(() => {
          push('/')
        })
    }

  }

  const onChange = (e) => {
    const { name, value } = e.target

    setState(prevState => ({
      values: {
        ...prevState.values,
        [name]: value
      },
      errors: {
        ...prevState.errors,
        [name]: validations[name] && validations[name](value)
      }
    }))
  }

  const onBlur = (e) => {
    const { name } = e.target

    setTouched(prevTouched => ({
      ...prevTouched,
      [name]: true
    }))
  }

  const onFocus = (e) => {
    const { name } = e.target

    setTouched(prevTouched => ({
      ...prevTouched,
      [name]: false
    }))
  }

  return (
    <div className="NewPost">
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text" className={`form-control ${errors.title && touched.title ? 'is-invalid' : ''}`} name="title"
            id="title" placeholder="Insert post title" autoComplete="off"
            onChange={onChange} value={title} onBlur={onBlur} onFocus={onFocus}
          />
          {errors.title && touched.title && (
            <div className="invalid-feedback">
              {errors.title}
            </div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">Body</label>
          <input
            type="text" className={`form-control ${errors.body && touched.body ? 'is-invalid' : ''}`} name="body"
            id="body" placeholder="Insert post body" autoComplete="off"
            onChange={onChange} value={body} onBlur={onBlur}
          />
          {errors.body && touched.body && (
            <div className="invalid-feedback">
              {errors.body}
            </div>
          )}
        </div>

        <button type="submit" className={`btn btn${!isValid() ? '-outline' : ''}-primary`} disabled={!isValid()}>
          Create post
        </button>
      </form>
    </div>
  );
}

export default NewPost;