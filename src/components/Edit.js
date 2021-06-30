import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./style.css";

const Edit = ({ match }) => {
  let history = useHistory();

  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    if (match.params.id) {
      axios.get(`http://localhost:3001/post/${match.params.id}`).then((res) => {
        console.log(res);
        setId(res.data.id);
        setTitle(res.data.title);
        setBody(res.data.body);
      });
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    let post = { title: title, body: body };
    axios.put(`http://localhost:3001/post/${id}`, post).then((res) => {
      console.log(res);
      history.push("/");
    });
  };

  return (
    <div className="section">
      <div className="continer">
        <h2 className="title">Edit Post</h2>
        <form onSubmit={onSubmit}>
          <div className="form-card">
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-card">
            <input
              type="text"
              name="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>

          <button className="form-card__btn" type="submit">
            Edit Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
