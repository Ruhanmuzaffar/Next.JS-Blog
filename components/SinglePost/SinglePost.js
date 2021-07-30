import React from "react";
import styles from "./SinglePost.module.css";
import Cookies from "universal-cookie";
import EditDelete from "./EditDelete";

const SinglePost = ({ post }) => {
  const cookies = new Cookies();
  const cookie = cookies.get("jwtToken");
  console.log("poss>>",typeof post.imageFileName);
  return (
    <div className={styles.main} key={post.id}>
      <h3>{post.title}</h3>

      <img
        src={`https://blogged-for-you.herokuapp.com/uploads/${post.imageFileName}`}
      ></img>
      <h4>{post.author.name}</h4>
      <h5>
        {post.createdAt.toLocaleString("en-US", {
          month: "long",
          day: "numeric",
        })}
      </h5>

      <div className={styles.textArea}>
        <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
      </div>

      {cookie ? <EditDelete /> : ""}
    </div>
  );
};

export default SinglePost;
