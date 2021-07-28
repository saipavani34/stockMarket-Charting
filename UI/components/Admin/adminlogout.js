import React, { Component } from "react";
import './adminhome.css'
//import Nav from './nav.js';
import { Redirect } from "react-router-dom";
function CurDateTime() {
    var tempDate = new Date();
   var date = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate() +' '+ tempDate.getHours()+':'+ tempDate.getMinutes()+':'+ tempDate.getSeconds();
    const currDate = "Current Date= "+date;
    console.log(currDate);
    return (
      // <p>{currDate}</p>
      date
    );
  }
 export default class logout extends Component{

    constructor(props) {
        super(props);
       localStorage.setItem("logout1",localStorage.getItem("logout2"));
       localStorage.setItem("logout2",CurDateTime());
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