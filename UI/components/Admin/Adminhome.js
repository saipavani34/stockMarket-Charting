import React, { Component } from "react";
import '../images/bgimage.css';
import './adminhome.css'
import Nav from './nav.js';

    export default class Adminhomeome extends Component{
    render() {
        return (

            <div className = "adminhomebg">
                <div className="wrapper">
                    <Nav/>             
                    <div className="main_content">
                        <div className="header">Admin Home</div>                         
                    </div>                      
                </div>      
             
                
           </div>                  
        );
}
}