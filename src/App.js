import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./component/dashboard/Dashboard";
import NavBar from "./component/navBar/NavBar";
import BlogDetails from "./component/blogs/BlogDetails";
import SignIn from "./component/auth/SignIn";
import SignUp from "./component/auth/SignUp";
import CreateBlog from "./component/blogs/CreateBlog";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/blog/:id" component={BlogDetails} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/create" component={CreateBlog} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
