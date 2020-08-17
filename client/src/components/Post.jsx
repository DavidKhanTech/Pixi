import React, { Component } from 'react';
import imports from '../services/imports';

export default class Post extends Component {
  constructor(props) {
    super(props)
    this.id = props.match.params.id;
    this.state = {
      user: "Not a post",
      post: "This post does not exist",
      edit: false,
      value: ""
    }
    this.handleEdit = this.handleEdit.bind(this)
    this.openEdit = this.openEdit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  async componentDidMount() {
    let result = await imports.getPost(this.id)
    if (result) {
      this.setState({
        user: result.user,
        post: result.post
      })
    }
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  async handleEdit(event) {
    event.preventDefault();
    let post = this.state.value
    let result = await imports.editPost({
      post,
      post_id: this.id
    })
    console.log("RES", result)
  }

  async handleDelete() {
    let result = await imports.deletePost({
      post_id: this.id
    })
    console.log("RES", result)
    this.props.history.push('/posts');
  }

  openEdit() {
    if (!this.state.edit) {
      this.setState({
        edit: true
      })
    } else {
      this.setState({
        edit: false
      })
    }
  }



  render() {
    return (
      <div>
        <h1>{this.state.user}</h1>
        <p>{this.state.post}</p>
        <button onClick={this.openEdit}>Edit</button>
        <button onClick={this.handleDelete}>Delete</button>
        {this.state.edit ?
          <div>
            <form onSubmit={this.handleSubmit}>
              <textarea
                value={this.state.value}
                onChange={this.handleChange}
              />
              <button onClick={this.handleEdit}>Edit</button>
            </form>
          </div>
          : ""}
      </div>
    )
  }
}
