import React from "react";
import Notification from "./Notifications";
import BlogList from "../blogs/BlogList";
import style from "./Dasboard.module.scss";

const Dashboard = () => {
  return (
    <div className={style.Dash}>
      <div>
        <BlogList />
      </div>
      <div>
        <Notification />
      </div>
    </div>
  );
};
export default Dashboard;
