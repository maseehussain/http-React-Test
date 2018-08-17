import React from "react";

class Posts extends React.Component {
  //7- Created a state for my posts where I can manage them.
  //23- We create that selectedPostId in out state with a null value
  //47- You can update the state with err: false to show someting went wrong
  state = {
    posts: []
  };

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
    return <section className="Posts">{posts}</section>;
  }
}

export default Posts;
