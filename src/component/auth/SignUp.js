import React, { Component } from "react";
import Button from "../../utility/Button";
import Input from "../../utility/Input";
import StyledPage from "../../utility/Styled";
import StyledH1 from "../../utility/StyledH1";

export default class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
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
          <StyledH1>Sign Up</StyledH1>
          <div>
            <label htmlFor="firstName">First Name</label>
            <Input type="text" id="firstName" onChange={this.handleChange} />
          </div>{" "}
          <div>
            <label htmlFor="lastName">Last Name</label>
            <Input type="text" id="lastName" onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div>
            <Button>Sign Up</Button>
          </div>
        </form>
      </StyledPage>
    );
  }
}
