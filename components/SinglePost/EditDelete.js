import React from "react";
import "./SinglePost.module.css";

const EditDelete = () => {

    const handleDelete= ()=>{

        console.log('delelelele')
    }
  return (
    <div>
      <button id={"edit-buttons"}>
        <a href="/posts/update/<%= post.id%>">EDIT</a>
      </button>

      <button id={"del-button"} onClick={handleDelete}>
        <a href="">DELETE </a>
      </button>
    </div>
  );
};

export default EditDelete;
