import React, { Component } from "react";
import Button from "../../utility/Button";
import Input from "../../utility/Input";
import StyledPage from "../../utility/Styled";
import StyledH1 from "../../utility/StyledH1";

export default class SignIn extends Component {
  state = {
    email: "",
    password: "",
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
          <StyledH1>Sign In</StyledH1>
          <div>
            <label htmlFor="email">Email</label>
            <Input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div>
            <Button>Sign in</Button>
          </div>
        </form>
      </StyledPage>
    );
  }
}
