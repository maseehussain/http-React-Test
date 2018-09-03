import React from "react";
//38- import axios
import Axios from "axios";
import { Redirect } from "react-router-dom";

import "./NewPost.css";

class NewPost extends React.Component {
  state = {
    title: "",
    content: "",
    author: "Masee"
  };
  //36- How to add new posts, add a method
  postDataHandler = () => {
    //39- The data we want to send is JS object with title, content and author
    const data = {
      title: this.state.title,
      body: this.state.content,
      author: this.state.author
    };
    //38- create your post request
    //40- I also need to add data as a second argument in the .post request
    Axios.post("/posts", data).then(res => {
      //41- We can listen to the response
      console.log(res);
    });
  };

  render() {
    //37- We need to add an onClick={this.postDataHandler} in the add post button
    return (
      <div className="NewPost">
        <h1>Add a Post</h1>
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={event => this.setState({ title: event.target.value })}
        />
        <label>Content</label>
        <textarea
          rows="4"
          value={this.state.content}
          onChange={event => this.setState({ content: event.target.value })}
        />
        <label>Author</label>
        <select
          value={this.state.author}
          onChange={event => this.setState({ author: event.target.value })}
        >
          <option value="Masee">Masee</option>
          <option value="Maiwand">Maiwand</option>
        </select>
        <button onClick={this.postDataHandler}>Add Post</button>
      </div>
    );
  }
}

export default NewPost;
