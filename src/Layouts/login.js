import React from 'react';
import $ from 'jquery'; 


function login(callback) {
  var CLIENT_ID = '6b284830006843e7ae7b170725715aed';
  var REDIRECT_URI = 'http://jmperezperez.com/spotify-oauth-jsfiddle-proxy/';
  function getLoginURL(scopes) {
      return 'https://accounts.spotify.com/authorize?client_id=' + CLIENT_ID +
        '&redirect_uri=' + encodeURIComponent(REDIRECT_URI) +
        '&scope=' + encodeURIComponent(scopes.join(' ')) +
        '&response_type=token';
  }
  
  var url = getLoginURL([
      'user-read-email'
  ]);
  
  var width = 450,
      height = 730,
      left = 100,
      top = 100;

  window.addEventListener("message", function(event) {
      var hash = JSON.parse(event.data);
      if (hash.type == 'access_token') {
          callback(hash.access_token);
      }
  }, false);
  
  var w = window.open(url,
                      'Spotify',
                      'menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left
                     );
  
}

function getUserData(accessToken) {
  console.log("get user")
  return $.ajax({
      url: 'https://api.spotify.com/v1/me',
      headers: {
         'Authorization': 'Bearer ' + accessToken
      }
  });
}
var accessToken = "BQAcx_EC9DCrNSbULkzbalcrQvaUz2mSrXnyVzTSHjo8-vj8y4Xs9hmIDC_sS-ngVXjlJ7ZZakavswT2xzsJoFlQiPTJK21gy4uvHWOGcuwcl5As8pSq0g3HvD2dy3aXzjcWYV-pDUZmZu_muPbUsTiE0eIrKRDQdZPJ075LYNV0UYX4SmljZBC4PAnaGNnNkXKy4TDiPWjOKdDlsBckLTvAwvGBX09sa67fZW6tEA6t9-oVGYBXEGtOY41I6-EW9eTtsqdJD8x2_4PefY7azOIP00MRJemwnwvMK4rKx53o"
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

class Body extends React.Component {


    handleClick = () => {
      login();
      getUserData(accessToken)
      .then(function(response) {
        setCookie("user",JSON.stringify(response),5)
        console.log(response)
        window.location.assign("./search")
        });
    }
  
  
    render() {
       return (
        <div>
          <button onClick={this.handleClick} className="login">
            Login
          </button>
        </div>
       );
    }
  }

  export default Body;
