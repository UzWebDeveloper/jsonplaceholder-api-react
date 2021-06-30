import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../components/style.css";
import { FaPlus } from 'react-icons/fa'

const Home = () => {
  const [post, setPost] = useState([]);
  
  useEffect(() => {
    loadPost();
  }, []);

  const loadPost = async () => {
    const result = await axios.get("http://localhost:3001/post");
    setPost(result.data.reverse());
  };

  const deletePost = async (id) => {
    const res = await axios.delete(`http://localhost:3001/post/${id}`);
    if (res.status === 200) {
      console.log(res);
    }
    loadPost();
  };

  return (
    <section className="sectionOne">
      <h1 className="sectionOne-title">Add post</h1>
      <div className="addPost-block">
      <Link className="addPost" to="/addPost"><FaPlus size="20"/></Link>
      </div>
      <div className="sectionOne-continer">
        <div className="cards-one">
          {post.map((post) => (
            <div className="card" key={post.id}>
              <p className="cardTitle">{post.title}</p>
              <p className="cardBody">{post.body}</p>
              <div className="btns">
                <Link className="btn btn-edit" to={`/edit/${post.id}`}>
                  Edit
                </Link>
                <Link
                  className="btn btn-delete"
                  onClick={() => deletePost(post.id)}
                >
                  Delete
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
