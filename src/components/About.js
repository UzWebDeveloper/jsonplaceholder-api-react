import axios from "axios";
import "../components/style.css";
import React from "react";

export default class PersonList extends React.Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/photos`).then((res) => {
      const posts = res.data;
      this.setState({ posts });
    });
  }

  render() {
    return (
      <section className="section">
        <div className="continer">
          <h1 className="title">Posts of list</h1>
          <div className="cards">
            {this.state.posts.length > 0 ?
              this.state.posts.map((posts) => (
                <div className="card cardImg">
                 {/* <p className="card-title">{posts.title}</p>*/}
                  <img src={posts.thumbnailUrl} alt="img"/>
                </div>
              )) : <div>Loading...</div>}
          </div>
        </div>
      </section>
    );
  }
}
