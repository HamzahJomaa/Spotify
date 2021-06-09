import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';


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
                console.log(this.state.albums)
              })
              
          })

    }
    
  
    render() {
       return (        
       <Grid container style={{flexGrow: 1}}>
        <Grid item xs={5} style={{ textAlign: 'center', position:'relative', left:'25%'}}>
          <Grid container justify="center" >        
          {this.state.albums? this.state.albums.map((result,key)=>(
            <Grid key={key} item style={{margin: 20}}>
            <Card>
            
            <CardActionArea>
            
            {result.images.map((val,key)=>(
                        key === 1?
                        <CardMedia
                        style={{ height: 140 }}
                image={val.url}
                title="Contemplative Reptile"
              />: ''  ))}
              
              <CardContent style={{width:'355px'}}>
                <Typography gutterBottom variant="h5" component="h2">
                  {result.name}
                </Typography>
                
              </CardContent>
            </CardActionArea>
            
            <CardActions>
              <Link href={result.external_urls.spotify} target='_blank'>
              <Button size="small" color="primary">
                Preview on Spotify
              </Button>
              </Link>
              
            </CardActions>
            </Card>
          </Grid>
      )):''}
      </Grid>
      </Grid>
      </Grid>);
    }
  }



  export default Body;
