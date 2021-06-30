import React from "react";
import "./style.css";

class AddJsPost extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      title: "",
      body: "",
      editing: false,
      post: [
        {
          id: 1,
          title: "ea molestias quasi exercitaui ",
          body: "et iusto sed quo iure\nvoluptatem occaecati t",
        },
        {
          id: 2,
          title: "ea molestias quasi exercitaui ",
          body: "et iusto sed quo iure\nvoluptatem occaecati t",
        },
      ],
    };
  }
  //{this.state.color}

  onChangeText(e) {
    e.preventDefault();
    console.log(e.target.title.value);
    console.log(e.target.body.value);
    this.setState({
      post: [
        ...this.state.post,
        {
          id: Date.now(),
          title: e.target.title.value,
          body: e.target.body.value,
        },
      ],
    });

    e.target.title.value = "";
    e.target.body.value = "";
  }

  onDeleteText(id) {
    console.log(id);
    this.setState({
      post: this.state.post.filter((post) => {
        if (post.id !== id) return post;
      }),
    });
  }

  onEditPost(item) {
    console.log(item);
    this.setState({
      id: item.id,
      title: item.title,
      body: item.body,
    });
  }

  
  
  render() {
    console.log(this.state.post);
    return (
      <div>
        <h1 className="title">Add state post</h1>
        <div>
          <form onSubmit={this.onChangeText.bind(this)}>
            <div className="form-card">
              <input
                type="text"
                placeholder="Enter Your Post Title"
                name="title"
                required
                defaultValue={this.state.title}
                // onChange={(e) => this.onChangeText(e)}
              />
            </div>
            <div className="form-card">
              <input
                type="text"
                placeholder="Enter Your Post Body"
                name="body"
                required
                defaultValue={this.state.body}
                // onChange={(e) => this.onChangeText(e)}
              />
            </div>

            <button type="submit" className="form-card__btn">
              {this.state.id !== 0 ? "Edit Post" : "Add Post"}
            </button>
          </form>
        </div>
        <div className="sectionOne-continer">
          <div className="cards-one">
            {this.state.post.map((post) => (
              <div className="card" key={post.id}>
                <p className="cardTitle">{post.title}</p>
                <p className="cardBody">{post.body}</p>
                <div className="btns">
                  <button onClick={() => this.onEditPost(post)}>edit</button>
                  <button onClick={() => this.onDeleteText(post.id)}>
                    delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default AddJsPost;
