import React from 'react';
import Header from "./header"
import 'bootstrap/dist/css/bootstrap.min.css';

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

class Search extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      artist: [],
      search: ''
    };
  }
  

  callAPI= () =>{
    
  }

  HandleChange = (event) => {
    let url =  "https://api.spotify.com/v1/search?q=" + event.target.value +  "&type=artist"  
    if (event.target.value != ''){
      const requestOptions = {
        method: 'get',
        headers: { 
          'Content-Type': 'application/json', 
          'Accept':'application/json',
          'Authorization':'Bearer BQAcx_EC9DCrNSbULkzbalcrQvaUz2mSrXnyVzTSHjo8-vj8y4Xs9hmIDC_sS-ngVXjlJ7ZZakavswT2xzsJoFlQiPTJK21gy4uvHWOGcuwcl5As8pSq0g3HvD2dy3aXzjcWYV-pDUZmZu_muPbUsTiE0eIrKRDQdZPJ075LYNV0UYX4SmljZBC4PAnaGNnNkXKy4TDiPWjOKdDlsBckLTvAwvGBX09sa67fZW6tEA6t9-oVGYBXEGtOY41I6-EW9eTtsqdJD8x2_4PefY7azOIP00MRJemwnwvMK4rKx53o' }    
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
                  key == 1? <img height="200px" className="card-img-top"  src={val.url}/> : ''
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
