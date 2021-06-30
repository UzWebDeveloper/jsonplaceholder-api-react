import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./style.css";


const AddPost = () => {
  let history = useHistory();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    let post = { id: Date.now(), title: title, body: body };
    axios.post("http://localhost:3001/post", post)
    .then(res => {
      console.log(res)    
    });
    history.push("/");
    
  };

  return (
    <div className="section">
      <div className="continer">
        <h2 className="title">Add Post</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-card">
            <input
              type="text"
              placeholder="Enter Your Post Title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-card">
            <input
              type="text"
              placeholder="Enter Your Post Body"
              name="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>

          <button className=" form-card__btn">Add Post</button>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
