import React from "react";

import "./Post.css";

const post = props => (
  //11- We add the title from our posts data with {props.title}
  //17- We access {props.author}
  //19- I added a onClick listener to my componet {props.clicked}
  <article className="Post" onClick={props.clicked}>
    <h1>{props.title}</h1>
    <div className="Info">
      <div className="Author">{props.author}</div>
    </div>
  </article>
);

export default post;
