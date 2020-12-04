import React, { Component } from "react";
import Button from "../../utility/Button";
import Input from "../../utility/Input";
import TextField from "../../utility/TextField";
import StyledPage from "../../utility/Styled";
import StyledH1 from "../../utility/StyledH1";
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
      <StyledPage>
        <form onSubmit={this.handleSubmit}>
          <StyledH1>Create new Blog</StyledH1>
          <div>
            <label htmlFor="title">Title</label>
            <Input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="content">Create Blog Content</label>
            <br></br>
            <TextField type="text" id="content" onChange={this.handleChange}>
              Blog Content
            </TextField>
          </div>
          <div>
            <Button>Create</Button>
          </div>
        </form>
      </StyledPage>
    );
  }
}
