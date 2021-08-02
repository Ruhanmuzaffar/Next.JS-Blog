import React from "react";
import styles from "./Navigation.module.css";
import Link from "next/dist/client/link";
import Cookies from "universal-cookie";

const LoggedInNav = () => {
  const cookies = new Cookies();
  const handleLogout = () => {
    // delete cookie
    cookies.remove("jwtToken");
    console.log("logout pressed");
  };
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/posts">
        <a>Posts</a>
      </Link>
      <Link href="/createpost">
        <a>CreatePost</a>
      </Link>
      <Link href="/posts">
        <a onClick={handleLogout}>Log out</a>
      </Link>
    </nav>
  );
};

export default LoggedInNav;
