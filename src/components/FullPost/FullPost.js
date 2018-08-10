import React from "react";
//25- import Axios
import Axios from "axios";

import "./FullPost.css";

class FullPost extends React.Component {
  //30- add a state to manage
  state = {
    loadedPost: null
  };
  //26- make componentDidUpdate method to make http request
  componentDidUpdate() {
    //27- We take the id we got from the props
    //28- .then to
    //29- We need to make sure it is not null but true with the if statement
    if (this.props.id) {
      Axios.get(
        "https://jsonplaceholder.typicode.com/posts/" + this.props.id
      ).then(res => {
        //32- set the state to loadedPost with value of the response data
        this.setState({ loadedPost: res.data });
      });
    }
  }

  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    //25- add an if statement which reads if it is trueish(null is treated as false)
    //then output the post.

    //31- then here we put {loadedPost.title}, {loadedPost.body}
    if (this.props.id) {
      post = (
        <div className="FullPost">
          <h1>{loadedPost.title}</h1>
          <p>{loadedPost.body}</p>
          <div className="Edit">
            <button className="Delete">Delete</button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;
