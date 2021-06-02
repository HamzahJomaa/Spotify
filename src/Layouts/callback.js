import React from 'react';

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
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
    }
    close(){
        window.close()
    }

    render() {
        return (
         <div>
             <h3>Successfully Logged In</h3>
             <button className="close-button" onClick={this.close}>
               Close Window  
             </button>
         </div>
        );
     }
}

export default callback