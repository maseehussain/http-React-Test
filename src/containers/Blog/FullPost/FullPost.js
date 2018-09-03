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
  componentDidMount() {
    console.log(this.props);
    this.loadData();
  }

  componentDidUpdate() {
    this.loadData();
  }

  loadData() {
    //27- We take the id we got from the props
    //28- .then to
    //29- We need to make sure it is not null but true with the if statement
    if (this.props.match.params.id) {
      //35- We have created an infinite loop where componentDidUpdate gets called after each request
      //to correct this we need to add another if check inside our outer if statement
      if (
        !this.state.loadedPost ||
        (this.state.loadedPost &&
          this.state.loadedPost.id !== +this.props.match.params.id)
      ) {
        Axios.get("/posts/" + this.props.match.params.id).then(res => {
          //32- set the state to loadedPost with value of the response data
          this.setState({ loadedPost: res.data });
        });
      }
    }
  }
  //42- We need to make a delete request handler
  deletePostHandler = () => {
    //44- We have already imported axios we just need to use the delete method
    //45- We will need the same URL as the componentDidUpdate method
    Axios.delete("/posts/" + this.props.match.params.id).then(res => {
      console.log(res);
    });
  };

  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    //33- We get an error message because the request is a promise first we the id the the post data
    //we need a if request to show a loading message
    if (this.props.match.params.id) {
      post = <p style={{ textAlign: "center" }}>Loading...</p>;
    }
    //25- add an if statement which reads if it is trueish(null is treated as false)
    //then output the post.
    //31- then here we put {loadedPost.title}, {loadedPost.body}
    //32- We need to use this.state
    //34- We to check if state LoadedPost has been checked this.state.loadedPost
    //43- Added the onClick={his.deletePostHandler} in the delete button
    if (this.state.loadedPost) {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className="Edit">
            <button onClick={this.deletePostHandler} className="Delete">
              Delete
            </button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;
