import React from 'react';
import $ from 'jquery'; 



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
              'Authorization':'Bearer BQAcx_EC9DCrNSbULkzbalcrQvaUz2mSrXnyVzTSHjo8-vj8y4Xs9hmIDC_sS-ngVXjlJ7ZZakavswT2xzsJoFlQiPTJK21gy4uvHWOGcuwcl5As8pSq0g3HvD2dy3aXzjcWYV-pDUZmZu_muPbUsTiE0eIrKRDQdZPJ075LYNV0UYX4SmljZBC4PAnaGNnNkXKy4TDiPWjOKdDlsBckLTvAwvGBX09sa67fZW6tEA6t9-oVGYBXEGtOY41I6-EW9eTtsqdJD8x2_4PefY7azOIP00MRJemwnwvMK4rKx53o' }    
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
                  'Authorization':'Bearer BQAcx_EC9DCrNSbULkzbalcrQvaUz2mSrXnyVzTSHjo8-vj8y4Xs9hmIDC_sS-ngVXjlJ7ZZakavswT2xzsJoFlQiPTJK21gy4uvHWOGcuwcl5As8pSq0g3HvD2dy3aXzjcWYV-pDUZmZu_muPbUsTiE0eIrKRDQdZPJ075LYNV0UYX4SmljZBC4PAnaGNnNkXKy4TDiPWjOKdDlsBckLTvAwvGBX09sa67fZW6tEA6t9-oVGYBXEGtOY41I6-EW9eTtsqdJD8x2_4PefY7azOIP00MRJemwnwvMK4rKx53o' }    
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
                        key == 1? <img height="200px" className="card-img-top"  src={val.url}/> : ''
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
