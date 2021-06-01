import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {getAPI } from './API'

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}



class Search extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      artist: [],
      search: '',
      user: getCookie("user")
    };
  }
  

  callAPI= () =>{
    
  }

  HandleChange = (event) => {
    let url =  "https://api.spotify.com/v1/search?q=" + event.target.value +  "&type=artist"  
    if (event.target.value !== ''){
      const requestOptions = {
        method: 'get',
        headers: { 
          'Content-Type': 'application/json', 
          'Accept':'application/json',
          'Authorization':'Bearer ' + getAPI() }    
        };
      fetch(url, requestOptions)
      .then(response => {return response.json()})
      .then(res => {
        console.log(res['artists']['items'])
        this.setState({ artist: res['artists']['items'] })    
      })
    }else{
      this.setState({ artist: [] })    
    }
    
  }



    render() {
       return (
        <header>
          <h1>Please Search for an Artist</h1>
          <input type="text" onChange={this.HandleChange} placeholder="Search Here" className="search" />

          <div className="grid-container">


          

          {this.state.artist? this.state.artist.map((result,key)=>(


            <a href={"./artist/" + result.id}>
              <div class="card edited">
            {result.images.map((val,key)=>(
                  key === 1? <img height="200px" className="card-img-top" alt="artist_picture"  src={val.url}/> : ''
                ))}
              <div class="card-body">
                <h5 class="card-title">{result.name}</h5>
                <p class="card-text"><p>{result.followers.total} follwers</p></p>
              </div>
            </div>
            </a>

          )):''}
          </div>
          
        {/* <h1>{this.state.artist? return(<Header/>):''}</h1> */}
        </header>
       );
    }

    
  }



  
export default Search;
