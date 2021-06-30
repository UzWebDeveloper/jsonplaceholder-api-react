import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Posts from "./components/Posts";
import About from "./components/About";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Post from "./components/PostContent";
import AddPost from "./components/AddPost"
import Edit from "./components/Edit"
import AddJsPost from "./components/AddJsPost"

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/posts" component={Posts} />
            <Route path="/post/:id" component={Post} />
            <Route path="/addPost" component={AddPost} />
            <Route path="/edit/:id" component={Edit}/>
            <Route path="/addJsPost" component={AddJsPost}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;


