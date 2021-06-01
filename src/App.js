import React from "react";
import './App.css';
import Header from "./Layouts/header"
import Login from "./Layouts/login"
import Search from "./Layouts/search"
import Album from "./Layouts/albums"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
      
        <Header />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>

        <Route path="/artist/:artistId" children={<User />} >
            <Album />
          </Route>

          <Route path="/search">
            <Search />
          </Route>

          <Route path="/">
            <Login />
          </Route>


        </Switch>

      </div>
    </Router>
  );
  function User() {
    let { id } = useParams();
    return <h2>User {id}</h2>;
  }
}


