import React from "react";
//3- Import Axios
// import Axios from "axios";
//import Axios from "../../Axios";
import { Route, NavLink, Switch } from "react-router-dom";

import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
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
                <NavLink
                  to="/posts/"
                  exact
                  activeClassName="my-active"
                  activeStyle={{
                    color: "#fa923f",
                    textDecoration: "underline"
                  }}
                >
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post"
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/new-post" component={NewPost} />
          <Route path="/posts/" component={Posts} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
