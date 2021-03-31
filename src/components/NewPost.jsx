import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { createPost } from '../services/BaseService';

class NewPost extends Component {
  state = {
    title: '',
    body: '',
    redirect: false
  }

  onChange = (e) => {
    const { name, value } = e.target

    this.setState({
      [name]: value
    })
  }

  onSubmit = (e) => {
    const { title, body } = this.state
    e.preventDefault()

    createPost({ title, body })
      .then(() => {
        this.setState({ redirect: true })
      })
  }

  render() {
    const { title, body, redirect } = this.state

    if (redirect) {
      return <Redirect to="/" />
    }

    return (
      <div className="NewPost">
        <form onSubmit={this.onSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input
              type="text" className="form-control" name="title"
              id="title" placeholder="Insert post title" autoComplete="off"
              onChange={this.onChange} value={title}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="body" className="form-label">Body</label>
            <input
              type="text" className="form-control" name="body"
              id="body" placeholder="Insert post body" autoComplete="off"
              onChange={this.onChange} value={body}
            />
          </div>

          <button type="submit" className="btn btn-outline-primary">Create post</button>
        </form>
      </div>
    );
  }
}

export default NewPost;