import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";

function SignedIn() {
  return (
    <ul>
      {/* <li> */}
      <Button>
        {" "}
        <NavLink to="/">New Blog</NavLink>
      </Button>
      <Button>
        {" "}
        <NavLink to="/">Log Out</NavLink>
      </Button>
      <Button>
        {" "}
        <NavLink to="/">Ibrahim Kurhan</NavLink>
      </Button>
      {/* </li> */}
    </ul>
  );
}

export default SignedIn;
