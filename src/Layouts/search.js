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






class Search extends React.Component {

    render() {

      return (
        <Grid container style={{flexGrow: 1}}>
          <Grid item xs={5} style={{ textAlign: 'center', position:'relative', left:'25%'}}>
            <Grid container justify="center" >        
            {this.props.artist? this.props.artist.map((result,key)=>(
              <Grid key={key} item style={{margin: 20}}>
              <Card>
              <Link href={result.external_urls.spotify}>

              <CardActionArea>
              
              {result.images.map((val,key)=>(
                          key === 1?
                          <CardMedia
                          style={{ height: 140 }}
                  image={val.url}
                  title="Contemplative Reptile"
                />: ''  ))}
                
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {result.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  {result.followers.total} follwers
                  </Typography>
                </CardContent>
              </CardActionArea>
              </Link>
              <CardActions>
                <Link href={"/artist/" + result.id}>
                <Button size="small" color="primary">
                  Check Albums
                </Button>
                </Link>
                
              </CardActions>
              </Card>
            </Grid>
        )):''}
        </Grid>
        </Grid>
        </Grid>
      );
    }
  }

  

  



  
export default Search;
