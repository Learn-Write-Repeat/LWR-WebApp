import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import Create from "./Components/Create/Create";
import Blog from "./Components/Blog/Blog";
import Update from "./Components/Update/Update";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App h-screen">
        <Header />
        <div className="content">
          <Switch>
            {/* Redirect to api/blogs route */}
            <Route exact path="/">
              <Redirect to="/api/blogs" />
            </Route>

            <Route exact path="/api/blogs">
              <Content />
            </Route>

            <Route exact path="/api/blogs/create">
              <Create />
            </Route>

            <Route exact path="/api/blogs/edit/:id">
              <Update />
            </Route>

            <Route exact path="/api/blogs/:id">
              <Blog />
            </Route>

            <Route exact path="/signup">
              <Signup />
            </Route>

            <Route exact path="/login">
              <Login />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
