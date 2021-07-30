import React from "react";
import { useState } from "react";
import axios from "axios";

import Cookies from "universal-cookie";

const CreatePost = (event) => {
  const cookies = new Cookies();
  const cookie = cookies.get("jwtToken");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [cover, setCover] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("submittes");

    let formData = new FormData();

    formData.append("title", title);
    formData.append("content", content);
    formData.append("cover", cover);
    axios
      .post("https://blogged-for-you.herokuapp.com/api/posts/", formData, {
        headers: {
          Authorization: `Bearer ${cookie}`,
          "Content-Type": "multipart/form-data",
        },
      })

      .catch((err) => console.log("Some error occured", err));
  };
  return (
    <form>
      <label htmlFor="title">title</label>
      <input
        type="text"
        name="title"
        id="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="content">content</label>
      <textarea
        name="content"
        id="content"
        cols="30"
        rows="10"
        onChange={(e) => setContent(e.target.value)}
      >
        Write your content here
      </textarea>
      <label htmlFor="coverImage">upload cover</label>
      <input
        type="file"
        name="cover"
        id="cover"
        onChange={(e) => setCover(e.target.files[0])}
      />
      <input type="button" value="Sumbit" onClick={handleSubmit} />
    </form>
  );
};

export default CreatePost;

/**
 * 
 * 
 * let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTksIm5hbWUiOiJSdWhhbiIsImVtYWlsIjoicnVAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkcVlKb2dsbTR5MUo1WXJ0bnoxeHhFdUNTYngzWjFwQUJ4LkdwRTdlZzlIQkNTT1VDblFMWHUiLCJyb2xlIjoiQVVUSE9SIiwiaWF0IjoxNjI3NTg3MjQyfQ.0t77u8DA1tcaSfqMvQCmo-qkcbXbPcng9r_bBXYv4eY"

let formData = new FormData();

formData.append('title', 'hello');
formData.append('content', 'this is new content');
formData.append('cover', fs.createReadStream("/Users/zop7612/Desktop/r.png"))

axios.post("https://blogged-for-you.herokuapp.com/api/posts/", formData, {
    headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": formData.getHeaders()
    }
}).then(res => console.log(res.data.message)).catch(() => console.log("Some error occured"))
 */
