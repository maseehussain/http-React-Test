import React from "react";
import Axios from "axios";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

class Blog extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      this.setState({ posts: res.data });
      //console.log(res);
    });
  }

  render() {
    const posts = this.state.posts.map(post => {
      return <Post key={post.id} title={post.title} />;
    });

    return (
      <div>
        <section className="Posts">{posts}</section>
        <section>
          <FullPost />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
