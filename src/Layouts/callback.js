import React from 'react';
import $ from 'jquery'; 

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  function getUserData(token) {
    return $.ajax({
        url: 'https://api.spotify.com/v1/me',
        headers: {
           'Authorization': 'Bearer ' + token
        }
    });
  }
class callback extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            url : window.location.href.split('=')
        }
    }
    

    componentDidMount(){
        setCookie("Token",this.state.url[this.state.url.length - 3],"2")
        console.log(this.state.url[this.state.url.length - 3],"2")
        getUserData(this.state.url[this.state.url.length - 3],"2")
        .then(function(response) {
            console.log(response)
            setCookie("user",JSON.stringify(response),5)
            window.location.assign("./search")
            });
    }
    

    render() {
        return (
         <div>
             
         </div>
        );
     }
}

export default callback