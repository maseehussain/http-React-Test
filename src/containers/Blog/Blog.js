import React from "react";
//3- Import Axios
// import Axios from "axios";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

class Blog extends React.Component {
  //7- Created a state for my posts where I can manage them.
  //23- We create that selectedPostId in out state with a null value
  //47- You can update the state with err: false to show someting went wrong
  state = {
    posts: [],
    selectedPostId: null,
    err: false
  };

  //1-Install Axios
  //2- Implement componentDidMount method
  componentDidMount() {
    //4- Use axios .get request to access URL for the data
    //5- Axios uses promises and .get returns a promise
    //6- We chain .then onto our .get request .then is a method which takes a function as an input.
    Axios.get("/posts")
      .then(res => {
        //14- We reduce the amount of posts we recieve and we only get the from their index 0 to 4
        const posts = res.data.slice(0, 4);
        //15- I take the post and map through them and distribute the property of the post
        // I also added a new author property
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: "Masee"
          };
        });
        //16- set updatedPost to my setState
        this.setState({ posts: updatedPosts });
        //console.log(res);
      })
      //46- Catch the error
      .catch(err => {
        //48- We removed the log and instead call setState
        this.setState({ err: true });
      });
  }

  //21- Method for my click event with an id argument
  //24- In the handler get the setState and set selectedPostId to our argument id
  postSelectedHandler = id => {
    this.setState({ selectedPostId: id });
  };

  render() {
    //49- Instead of creatinfg a constant we create a varaible post with an if statement
    //if it is true it display
    let posts = <p style={{ textAlign: "center" }}>Something went wrong!</p>;
    if (!this.state.err) {
      //8- Set my setState to the post and map through them
      posts = this.state.posts.map(post => {
        //9- I return my JSX here
        //12- need to set a title property here and pass through {post.title}
        //13- also add the key prop which makes each post unique
        //18- I pass {post.author}
        //20- In the blog container I now need to pass that click prop to the post
        return (
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}
          />
        );
      });
    }

    //10- We output our array of {posts}
    //22- id={this.state.selectedPostId} gets passed to my FullPosts component
    return (
      <div>
        <section className="Posts">{posts}</section>
        <section>
          <FullPost id={this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
