import React from "react";
import { BrowserRouter } from "react-router-dom";

import Blog from "./containers/Blog/Blog";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Blog />
      </div>
    );
  }
}

export default App;
