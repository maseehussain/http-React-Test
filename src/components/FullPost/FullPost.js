import React from "react";

import "./FullPost.css";

class FullPost extends React.Component {
  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    //24- add a if statement which reads if it is trueish(null is treated as false) then output the post
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
