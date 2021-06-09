import React from "react";
import './App.css';
import Header from "./Layouts/header"
import Login from "./Layouts/login"
import Search from "./Layouts/search"
import Album from "./Layouts/albums"
import Callback from "./Layouts/callback"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

require('dotenv').config()



class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      artist: ''
    }
  }

 handleLanguage = () =>{
   console.log(this)
 }
 eventhandler = data =>{
   if (data){
    this.setState({artist:data})
  }else{
    this.setState({artist: ''})
  }

  }
  
  render(){
    return (
      <Router>
        <div>
          <Header onkeyPress={this.eventhandler}/>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
  
          <Route path="/artist/:artistId" >
              <Album />
            </Route>
  
            <Route path="/callback">
              <Callback />
            </Route>
  
            <Route path="/search">
              <Search artist={this.state.artist} />
            </Route>
  
            <Route path="/">
              <Login />
            </Route>
  
            
  
  
          </Switch>
  
        </div>
      </Router>
    );
  }
}

export default App


