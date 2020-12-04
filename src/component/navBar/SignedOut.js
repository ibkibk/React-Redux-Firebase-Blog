import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";

function SignedOut() {
  return (
    <ul>
      {/* <li> */}
      <Button>
        {" "}
        <NavLink
          to="/signup"
          style={{ color: "white", textDecoration: "none" }}
        >
          SignUp
        </NavLink>
      </Button>
      <Button>
        {" "}
        <NavLink
          to="/signin"
          style={{ color: "white", textDecoration: "none" }}
        >
          Login
        </NavLink>
      </Button>

      {/* </li> */}
    </ul>
  );
}

export default SignedOut;
