import React, { Component } from "react";
import './adminhome.css'
export default class Nav extends Component{
    render() {
        return (

            
                <div className ="sidebar">
                    <h2>STOCKMARKET CHARTING</h2>
                    <ul>
                        <li><a href="/adminhome"><i className ="fas fa-home"></i>Home</a></li>
                        <li><a href="/importdata"><i className="fas fa-address-card"></i>Import Data</a></li>
                        <li><a href="/managecompany"><i className="fas fa-address-card"></i>Manage Company</a></li>
                        <li><a href="/manageexchange"><i className="fas fa-address-card"></i>Manage Exchange</a></li>
                        <li><a href="/updateIPO"><i className="fas fa-address-card"></i>update IPO</a></li>
                        <li><a href="/adminlogout"><i className="fas fa-map-pin"></i>Logout</a></li>
                    </ul> 
                
                </div>
               
        );
}
}