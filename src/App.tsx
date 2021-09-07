import {BrowserRouter, Route, Switch} from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Post from "./components/Post";
import Project from "./components/Project";
import SinglePost from "./components/SinglePost";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={About} path="/about" />
          <Route component={SinglePost} path="/post/:slug" />
          <Route component={Post} path="/post" />
          <Route component={Project} path="/project" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
