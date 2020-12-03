import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";

function SignedOut() {
  return (
    <ul>
      {/* <li> */}
      <Button>
        {" "}
        <NavLink to="/">SignUp</NavLink>
      </Button>
      <Button>
        {" "}
        <NavLink to="/">Login</NavLink>
      </Button>

      {/* </li> */}
    </ul>
  );
}

export default SignedOut;
