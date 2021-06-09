import React from 'react';
import {Button} from '@material-ui/core'


function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
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
    if (getCookie('user')){
      window.location.assign("./search")
    }
  }


    handleClick = () => {
      var CLIENT_ID = 'ad8e87bfab9e4df19fb2d8690cbab07c';
  var REDIRECT_URI = 'http://localhost:3000/callback';
  function getLoginURL(scopes) {
      return 'https://accounts.spotify.com/authorize?client_id=' + CLIENT_ID +
        '&redirect_uri=' + encodeURIComponent(REDIRECT_URI) +
        '&scope=' + encodeURIComponent(scopes.join(' ')) +
        '&response_type=token';
  }
  
  var url = getLoginURL([
      'user-read-email'
  ]);

    window.location.assign(url)
      
    }

    
  
    render() {
       return (
        <div className="App">
          <div className="wrapper search-box">  
                <div className="row"> 
                  <div className="col">
                  <Button
                    variant="contained"
                    color="primary"
                    className="login"
                    onClick={this.handleClick}
                  >
                  Login
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="icon" width="30pt" height="30pt" viewBox="0 0 170.05 170.05">
                  <g>
                  <g id="Layer-1" data-name="Layer 1">
                  <clipPath id="cp0">
                  <path transform="matrix(1,0,0,-1,0,170.05)" d="M 0 170.05 L 170.05 170.05 L 170.05 0 L 0 0 Z "/>
                  </clipPath>
                  <g>
                  <path transform="matrix(1,0,0,-1,134.5619,75.52161)" d="M 0 0 C -26.994 16.031 -71.52 17.505 -97.289 9.684 C -101.428 8.428 -105.804 10.764 -107.057 14.902 C -108.311 19.043 -105.978 23.416 -101.837 24.674 C -72.255 33.653 -23.081 31.919 7.995 13.472 C 11.718 11.262 12.938 6.455 10.732 2.739 C 8.524 -.983 3.713 -2.21 0 0 M -.884 -23.744 C -2.778 -26.817 -6.796 -27.781 -9.865 -25.894 C -32.369 -12.061 -66.687 -8.053 -93.312 -16.135 C -96.764 -17.178 -100.411 -15.232 -101.46 -11.785 C -102.5 -8.333 -100.553 -4.693 -97.106 -3.643 C -66.691 5.587 -28.88 1.117 -3.032 -14.768 C .037 -16.658 1.003 -20.678 -.884 -23.744 M -11.131 -46.547 C -12.636 -49.015 -15.849 -49.788 -18.308 -48.284 C -37.973 -36.265 -62.725 -33.551 -91.875 -40.209 C -94.684 -40.853 -97.484 -39.093 -98.124 -36.285 C -98.768 -33.476 -97.014 -30.676 -94.199 -30.035 C -62.299 -22.743 -34.936 -25.881 -12.863 -39.369 C -10.402 -40.872 -9.627 -44.087 -11.131 -46.547 M -49.537 74.24 C -95.786 74.24 -133.28 36.747 -133.28 -9.502 C -133.28 -55.756 -95.786 -93.247 -49.537 -93.247 C -3.286 -93.247 34.207 -55.756 34.207 -9.502 C 34.207 36.747 -3.286 74.24 -49.537 74.24 " fill="#1ed760"/>
                  </g>
                  </g>
                  </g>
                  </svg>
                </Button>
               
                     </div>
                </div>
              </div>
          

        </div>
       );
    }

  }

  export default Body;