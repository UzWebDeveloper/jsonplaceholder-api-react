import React from "react";
import axios from "axios";
import "../components/style.css";
// import {} from "react-router-dom";


export default class PersonList extends React.Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts/1/comments`).then((res) => {
      const posts = res.data;
      this.setState({ posts });
    });
  }

  click(id){
    // console.log(id)
    this.props.history.push(`/post/${id}`);
  }

  render() {
    return (
      <section className="section">
        <div className="continer">
          <h1 className="title">Posts of list</h1>
          
          <div className="cards">
            {this.state.posts.length > 0 ?
              this.state.posts.map((posts) => (
                <div className="card" key={posts.id} onClick={() => this.click(posts.id)}>
                  <p className="cardTitle">{posts.name}</p>
                  <p className="cardBody">{posts.body}</p>
                </div>
              )) : <div>Loading ....</div>}
          </div>
        </div>
      </section>
    );
  }
}

