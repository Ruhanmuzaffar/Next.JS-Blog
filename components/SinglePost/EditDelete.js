import React from "react";
import "./SinglePost.module.css";
import axios from "axios";
import Cookies from "universal-cookie";
import { useRouter } from "next/dist/client/router";

const EditDelete = ({ id }) => {
  const router = useRouter();
  const apiUrl = "https://blogged-for-you.herokuapp.com/api/posts";

  const cookies = new Cookies();
  const cookie = cookies.get("jwtToken");

  const handleDelete = async () => {
    await axios
      .delete(`${apiUrl}/${id}`, {
        headers: {
          Authorization: `Bearer ${cookie}`,
        },
      })
      .catch((err) => console.log("err in delete req", err));

    console.log("delelelele");
  };

  const handleEdit = async () => {
    const postData = await axios.get(`${apiUrl}/${id}`);
    const { data } = postData;
    console.log("psot data>>", postData);
    console.log("data.>>", data);

    // get post by id
    // send the data to form
    // update using put req
    router.push({
      pathname: "/simple",
      query: { abc: "apple", data: 'data' },
    });
    // router.push('/simple?abc="xyz"');
  };
  return (
    <div>
      <p>{id}</p>
      <button id={"edit-buttons"} onClick={handleEdit}>
        <a>EDIT</a>
      </button>

      <button id={"del-button"} onClick={handleDelete}>
        <a>DELETE </a>
      </button>
    </div>
  );
};

export default EditDelete;
/**
 * 
database se get request 
data lekar form me daalo
edit karne ke baad put request bejo
 */
