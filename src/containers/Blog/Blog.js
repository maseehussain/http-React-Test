import React from "react";
//3- Import Axios
// import Axios from "axios";
import Axios from "../../Axios";
import "./Blog.css";

class Blog extends React.Component {
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
      </div>
    );
  }
}

export default Blog;
