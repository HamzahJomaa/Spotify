import React from 'react';


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


class Body extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            url : window.location.href.split('/'),
            albums: [],
            artist: []
        }
    }
    

    componentDidMount(){
        
        let url =  "https://api.spotify.com/v1/artists/"+this.state.url[this.state.url.length-1] + "/albums"
        const requestOptions = {
            method: 'get',
            headers: { 
              'Content-Type': 'application/json', 
              'Accept':'application/json',
              'Authorization':'Bearer ' + getCookie('Token') }    
            };
          fetch(url, requestOptions)
          .then(response => {return response.json()})
          .then(res => {
            let url =  "https://api.spotify.com/v1/artists/" + this.state.url[this.state.url.length-1]
            const requestOptions = {
                method: 'get',
                headers: { 
                  'Content-Type': 'application/json', 
                  'Accept':'application/json',
                  'Authorization':'Bearer ' + getCookie('Token') }    
                };
              fetch(url, requestOptions)
              .then(response => {return response.json()})
              .then(_artist => {
                this.setState({ albums: res['items']})    
                this.setState({ artist: _artist})   
                console.log(this.state.artist)
              })
              
          })

    }
    
  
    render() {
       return (
        <div className="main-wrapper">
          <div className="artist_name">

              <h3>Artist: <span className="artist">{this.state.artist.name}</span></h3>
          </div>
          <hr />
          <div className="grid-container">
                {this.state.albums? this.state.albums.map((result,key)=>(
                    <div className="card edited">
                  {result.images.map((val,key)=>(
                        key === 1? <img height="200px" className="card-img-left" alt="album_picture"  src={val.url}/> : ''
                      ))}
                    <div className="card-body">
                      <h5 className="card-title">{result.name}</h5>
                      <p className="card-text">{this.state.artist.name}</p>
                    </div>
                    <div className="card-body">
                     
                    {result.release_date}<br/>
                    {result.total_tracks} tracks

                    </div>
                    <a href={result.external_urls.spotify} className="card-footer">
                      Preview on Spotify
                    </a>
                  </div>




                )):''}
            </div>
        </div>
       );
    }
  }



  export default Body;
