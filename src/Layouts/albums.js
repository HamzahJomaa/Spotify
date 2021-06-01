import React from 'react';
import {getAPI} from './API'



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
              'Authorization':'Bearer ' + getAPI() }    
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
                  'Authorization':'Bearer ' + getAPI() }    
                };
              fetch(url, requestOptions)
              .then(response => {return response.json()})
              .then(_artist => {
                console.log(res['items'])
                this.setState({ albums: res['items']})    
                this.setState({ artist: _artist})   
              })
              
          })

    }
    
  
    render() {
       return (
        <div>
            <h1>Artist Name: {this.state.artist.name}</h1>
          <div className="grid-container">




                {this.state.albums? this.state.albums.map((result,key)=>(
                    <div class="card edited">
                  {result.images.map((val,key)=>(
                        key === 1? <img height="200px" className="card-img-top" alt="album_picture"  src={val.url}/> : ''
                      ))}
                    <div class="card-body">
                      <h5 class="card-title">{result.name}</h5>
                      <p class="card-text">{this.state.artist.name}</p>
                    </div>
                    <div class="card-body">
                     
                    {result.release_date}<br/>
                    {result.total_tracks} tracks

                    </div>
                    <a href={result.external_urls.spotify} class="card-footer">
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
