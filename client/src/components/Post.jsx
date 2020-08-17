import React, { Component } from 'react';
import imports from '../services/imports';
import { postComment } from '../services/comments';

export default class Post extends Component {
  constructor(props) {
    super(props)
    this.id = props.match.params.id;
    this.state = {
      user: "Not a post",
      post: "This post does not exist",
      edit: false,
      value: "",
      currentUser: false,
      comment_form: false,
      comment_value: ""
    }
    this.handleEdit = this.handleEdit.bind(this)
    this.openEdit = this.openEdit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleComment = this.handleComment.bind(this)
    this.handleCommentChange = this.handleCommentChange.bind(this)
    this.handleCommentOpen = this.handleCommentOpen.bind(this)
  }

  async handleComment(event) {
    event.preventDefault();
    let postData = {
      comment: this.state.comment_value,
      user_id: this.state.currentUser.id,
      post_id: this.id
    }
    let res = await postComment(postData)
    console.log(res)
  }

  handleCommentChange(event) {
    this.setState({ comment_value: event.target.value });
  }

  handleCommentOpen() {
    if (!this.state.comment_form) {
      this.setState({
        comment_form: true
      })
    } else {
      this.setState({
        comment_form: false
      })
    }
  }


  async componentDidMount() {
    let currentUser = JSON.parse(localStorage.getItem('user'));
    let result = await imports.getPost(this.id)
    console.log(result)
    let created_at = result.created_at.slice(0, 10)
    if (result) {
      this.setState({
        user: result.user,
        post: result.post,
        created_at,
        currentUser
      })
    }
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  async handleEdit(event) {
    event.preventDefault();
    // let post = this.state.value
    let result = await imports.editPost({
      post: this.state.value,
      id: this.id
    })
    window.location.href = `/post/${result.id}`
  }

  async handleDelete() {
    let result = await imports.deletePost({
      id: this.id
    })
    window.location.href = `/posts`
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
        <h3>{this.state.post}</h3>
        <p>{this.state.created_at}</p>
        {this.state.currentUser ?
          <div>
            <button onClick={this.openEdit}>Edit</button>
            <button onClick={this.handleDelete}>Delete</button>
            <button onClick={this.handleCommentOpen}>Comment</button>
          </div>
          : ""
        }
        {this.state.edit ?
          <div>
            <form>
              <textarea
                value={this.state.value}
                onChange={this.handleChange}
              />
              <button onClick={this.handleEdit}>Edit</button>
            </form>
          </div>
          : ""}
        {this.state.comment_form ?
          <form>
            <textarea
              value={this.state.comment_value}
              onChange={this.handleCommentChange}
            />
            <button onClick={this.handleComment}>Comment</button>
          </form>
          : ""}
      </div>
    )
  }
}
