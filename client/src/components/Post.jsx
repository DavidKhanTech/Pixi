import React, { Component } from 'react';
import api from '../services/api-helper';

export default class Post extends Component {
  constructor(props) {
    super(props)
    this.id = props.match.params.id;
    this.state = {
      user: "Not a post",
      post: "This post does not exist"
    }
  }

  async componentDidMount() {
    let result = await api.getPost(this.id)
    if (result) {
      this.setState({
        user: result.user,
        post: result.post
      })
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.user}</h1>
        <p>{this.state.post}</p>
      </div>
    )
  }
}
