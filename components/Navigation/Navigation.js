import React from "react";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <a href="/">Home</a>
      <a href="/posts">Posts</a>

      <a href="/register">Register</a>

      <a href="/login">Log in</a>
    </nav>
  );
};

export default Navigation;
