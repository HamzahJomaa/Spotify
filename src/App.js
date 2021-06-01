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
} from "react-router-dom";

require('dotenv').config()

export default function App() {
  return (
    <Router>
      <div className="App">
      
        <Header />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>

        <Route path="/artist/:artistId" >
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
  
}


