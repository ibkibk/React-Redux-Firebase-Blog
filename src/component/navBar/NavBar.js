import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const links = isLoggedIn ? (
    <SignedIn onClick={() => setIsLoggedIn((isLoggedIn) => !isLoggedIn)} />
  ) : (
    <SignedOut onClick={() => setIsLoggedIn((isLoggedIn) => isLoggedIn)} />
  );
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              React Blog
            </Link>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              React Blog
            </Link>
          </Typography>
          {links}
          {/* <Button color="inherit">
            <SignedOut onClick={() => setIsLoggedIn(false)} />
          </Button>
          <Button color="inherit">
            <SignedIn onClick={() => setIsLoggedIn(true)} />
          </Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
