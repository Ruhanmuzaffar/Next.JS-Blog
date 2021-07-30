import React from "react";
import styles from "./Navigation.module.css";
import Link from "next/dist/client/link";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/posts">
        <a>Posts</a>
      </Link>
      <Link href="/register">
        <a>Register</a>
      </Link>
      <Link href="/login">
        <a>Log in</a>
      </Link>
    </nav>
  );
};

export default Navigation;
