import React, { Component } from "react";
import logo from '../images/stock-2.gif';
import './home.css';
import Nav from './Navbar.js';
import '../images/bgimage.css';
import Foot from './footer.js';

export default class Home extends Component {
    render() {
        return (<div>
            <Nav/>

            <div className="auth-wrapper">
            <h1 style={{'background-image' : 'url(' + logo +')' }} className = "auth-home" ></h1>
            
            </div>
            <Foot/>
            </div>
        );
    }
}

