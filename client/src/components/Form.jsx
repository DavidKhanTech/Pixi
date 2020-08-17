// import React, { Component } from 'react'
// import api from '../services/api-helper';

// export default class Form extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       value: ""
//     }
//     this.handleChange = this.handleChange.bind(this)
//     this.handleSubmit = this.handleSubmit.bind(this)
//   }
//   handleChange(event) {
//     this.setState({ value: event.target.value });
//   }

//   async handleSubmit(event) {
//     event.preventDefault();
//     console.log("POST:", this.state.value)
//     let post = this.state.value

//     let result = await api.savePost({
//       post,
//       id: { user_id }
//     })
//     console.log("RES", result)
//   }

//   render() {

//     return (
//       <form onSubmit={this.handleSubmit}>
//         <textarea
//           value={this.state.value}
//           onChange={this.handleChange}
//         />
//         <button onClick={this.handleSubmit}>Post</button>
//       </form>
//     )
//   }
// }

import React, { Component } from 'react'
import api from '../services/api-helper';
import imports from '../services/imports'

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    console.log("POST:", this.state.value)
    let post = this.state.value
    let id = 1
    // let result = await api.savePost({
    //   post,
    //   user_id: id
    // })
    // console.log("RES", result)
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <textarea
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Post</button>
      </form>
    )
  }
}