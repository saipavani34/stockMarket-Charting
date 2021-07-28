import React, { Component } from "react";
import logo from '../images/login.jpg';
import '../images/bgimage.css';
import './UserHome.css'
import Nav from './nav.js';
import { CardImgOverlay } from "reactstrap";
import { HelpBlock } from "react-bootstrap";

// const image = {
//     backgroundImage: 'url(' + logo + ')',
//     width: '100%',
//     height: '100%',
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: cover,
   
//   } 

    export default class UserHome extends Component{
    render() {
        var identity=sessionStorage.getItem("Identity");
        
        console.log("session storage:"+identity);
        return (
            <div className = "userhomebg">
                <div className="wrapper">
                    <Nav/>             
                    <div className="main_content">
                        <div className="header"><b>Home Page</b></div>   
                         <center><h2>Welcome {sessionStorage.getItem("UserName")} !!!</h2></center>                     
                    </div>                      
                </div>      
                <div style={{'background-image' : 'url(' + logo +')' }} className = "auth-home" ></div>
                <p>Hello world</p>
           </div>                  
        );
}
}