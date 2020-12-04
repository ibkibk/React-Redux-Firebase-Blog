import React, { Component } from "react";

export default class CreateBlog extends Component {
  state = {
    title: "",
    content: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h5>Create new Blog</h5>
          <div>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="content">Password</label>
            <textarea type="text" id="content" onChange={this.handleChange}>
              Blog Content
            </textarea>
          </div>
          <div>
            <button>Create</button>
          </div>
        </form>
      </div>
    );
  }
}
