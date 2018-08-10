import React from "react";
//25- import Axios
import Axios from "axios";

import "./FullPost.css";

class FullPost extends React.Component {
  //26- make componentDidUpdate method to make http request
  componentDidUpdate() {
    Axios.get();
  }

  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    //25- add an if statement which reads if it is trueish(null is treated as false)
    //then output the post.
    if (this.props.id) {
      post = (
        <div className="FullPost">
          <h1>Title</h1>
          <p>Content</p>
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
