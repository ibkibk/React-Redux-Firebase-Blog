import React, { Component } from "react";
import Notification from "./Notifications";
import BlogList from "../blogs/BlogList";
export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <BlogList />
        <Notification />
      </div>
    );
  }
}
