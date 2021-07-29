import React from "react";
import styles from "./Navigation.module.css";

const LoggedInNav = () => {
  return (
    <nav>
      <a href="/">Home</a>
      <a href="/posts">Posts</a>

      <a href="/posts/createpost">Create Post</a>
      <a href="/users/logout" id="logout">
        Logout
      </a>
    </nav>
  );
};

export default LoggedInNav;
