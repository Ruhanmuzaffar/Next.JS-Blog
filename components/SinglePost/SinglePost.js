import React from "react";
import styles from "./SinglePost.module.css";

const SinglePost = ({ post }) => {
  return (
    <div className={styles.main} key={post.id}>
      <h3>{post.title}</h3>

      <h3>{post.name}</h3>

      <div className={styles.textArea}>
        <div dangerouslySetInnerHTML={{ __html: post.content }}>
          
        </div>
      </div>

      <div>
        <button id={"edit-buttons"}>
          <a href="/posts/update/<%= post.id%>">EDIT</a>
        </button>
        <button id={"del-button"}>
          <a href="/posts/delete/<%= post.id%>">DELETE </a>
        </button>
      </div>
    </div>
  );
};

export default SinglePost;
