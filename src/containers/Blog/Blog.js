import React from "react";
//3- Import Axios
// import Axios from "axios";
//import Axios from "../../Axios";
import Posts from "./Posts/Posts";
import "./Blog.css";

class Blog extends React.Component {
  render() {
    //10- We output our array of {posts}
    //22- id={this.state.selectedPostId} gets passed to my FullPosts component
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/new-post">New Post</a>
              </li>
            </ul>
          </nav>
        </header>
        <Posts />
      </div>
    );
  }
}

export default Blog;
