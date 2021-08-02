import React from "react";
import "./SinglePost.module.css";
import axios from "axios";
import Cookies from "universal-cookie";
import { useRouter } from "next/dist/client/router";

const EditDelete = ({ id }) => {
  const router = useRouter();
  const apiUrl = `https://blogged-for-you.herokuapp.com/api/posts`;

  const cookies = new Cookies();
  const token = cookies.get("jwtToken");

  const handleDelete = async () => {
    await axios
      .delete(`https://blogged-for-you.herokuapp.com/api/posts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => console.log("err in delete req", err));

    console.log("delelelele");

    router.push('/posts')
  };

  return (
    <div>
      <button
        id={"edit-buttons"}
        onClick={() => router.push(`/posts/edit/${id}`)}
      >
        <a>EDIT</a>
      </button>

      <button id={"del-button"} onClick={handleDelete}>
        <a>DELETE </a>
      </button>
    </div>
  );
};

export default EditDelete;
