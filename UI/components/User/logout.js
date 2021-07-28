import React, { Component } from "react";
import './UserHome.css'
//import Nav from './nav.js';
import { Redirect } from "react-router-dom";

    export default class logout extends Component{
    constructor(props) {
        super(props);
        sessionStorage.clear();
    }
    render() {
        
        
        
        return (

            <div className = "adminhomebg">
                {/* {alert("Logged out")  }      */}
                <Redirect to = "/Home"/>          
                </div>      
             
                
                        
        );
}
}