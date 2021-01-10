import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";

function SignedIn() {
  return (
    <ul>
      <Button>
        {" "}
        <NavLink
          to="/create"
          style={{ color: "white", textDecoration: "none" }}
        >
          New Blog
        </NavLink>
      </Button>
      <Button>
        {" "}
        <NavLink to="/" style={{ color: "white", textDecoration: "none" }}>
          Log Out
        </NavLink>
      </Button>
      <Button>
        {" "}
        <NavLink to="/" style={{ color: "white", textDecoration: "none" }}>
          Ibrahim Kurhan
        </NavLink>
      </Button>
    </ul>
  );
}

export default SignedIn;
