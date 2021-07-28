import React, { Component } from "react";
import './UserHome.css'

export default class Nav extends Component{
 
    constructor(props){
      super(props);
    }
    render() {       
        return (        
                <div className ="sidebar">
                    <h2>STOCK MARKET CHARTING</h2>
                    <ul>
                        <li><a href="/UserHome"><i className ="fas fa-home"></i>Home</a></li>
                        <li><a href="/Viewipo"><i className="fas fa-address-card"></i>View IPO</a></li>
                        <li><a href="/Viewcompany"><i className="fas fa-address-card"></i>View CompanyDetails</a></li>
                        {/* <li><a href="/pendingusercomplaints"><i className="fas fa-blog"></i>Pending Complaints</a></li>
                        <li><a href="/closedusercomplaints"><i className="fas fa-address-book"></i>Closed Complaints</a></li> */}
                        <li><a href="/profile"><i className="fas fa-address-book"></i>My Profile</a></li>
                        <li><a href="/comparecompany"><i className="fas fa-address-book"></i>Compare Company</a></li>
                        <li><a href="/comparesector"><i className="fas fa-address-book"></i>Compare Sector</a></li>
                        <li><a href="/logout"><i className="fas fa-map-pin"></i>Logout</a></li>
                    </ul> 
                
                </div>
               
        );
}
}