import React, { Component } from "react";
//import { useHistory, withRouter,Link } from "react-router-dom";
import './home.css';
import Navigation from './Navbar.js';
import { Container, Row, Col } from 'reactstrap';
import image from '../images/logo.png';
// import Collapsible from 'react-collapsible';
import cx from "classnames";
import Collapse from "@kunukn/react-collapse";
import './app.scss';


export default class About extends Component{
    // constructor(props) {
    //     super(props);
    //   }
      state = {
        isOpen1: false,
        isOpen2: false,
        isOpen3: false,
        isOpen4: false,
        spy3: {}
      };
    
    render() {
        return (
        <div > <Navigation/>
        <Container>
            <Row>
                <Col><br/><i>Helpdesk is a portal, or an application which is an integral part of project GHMC Applications.<br/>

       &nbsp; &nbsp;It is designed to provide the general public to log in and submit complaints or any issues regarding application. The complaints raised are sent over to the administrator of the portal and Admin may assign the raised issues to an appropriate member of the management team for resolving the problem.
<br/><br/>
<b>Raise Complaint</b> : The user can use this interface to raise complaint, along with the complaint against, subject of the issue, and contact details.
<br/><br/>
<b>View Complaints </b>: The user can view his complaint and its status under the option 'View Complaints'.
<br/><br/>
Using this portal, User can upload image related to the complaint.
</i> </Col>

                <Col> <img src={ image } alt="Image"/>
                
                </Col>

            </Row>
<br/>
<br/>
            <Row>
        <Col> 
        <h4>FAQs</h4>
        <div className="app">
        
        <button
          className={cx("app__toggle", {
            "app__toggle--active": this.state.isOpen1
          })}
          onClick={() => this.toggle(1)}
        >
          What is GHMC?
        </button>

        <Collapse isOpen={this.state.isOpen1}
          className={"app__collapse app__collapse--gradient " +(this.state.isOpen1 ? "app__collapse--active" : "")}
          transition="height 300ms cubic-bezier(0.4, 0, 0.2, 1)"
          aria-hidden={this.state.isOpen1 ? "false" : "true"}
          elementType="article"
          render={collapseState => (
            <React.Fragment>
              <div className="app__content">
               
              Greater Hyderabad Municipal Corporation (GHMC) is the urban local body responsible for civic management of the Hyderabad City. Hyderabad city is the capital of newly created vibrant Telangana State of India and known for its rich heritage, culture and architectural importance.
              GHMC undertakes illumination of all important streets, monuments and landmark buildings on all important occasions and festivals. These arrangements are done temporary basis/ event basis and outsourced to local agencies. 
              </div>
            </React.Fragment>
          )}
        />
        <button
          className={cx("app__toggle", {
            "app__toggle--active": this.state.isOpen2
          })}
          onClick={() => this.toggle(2)}
        >
         What are the online services provided by www.ghmc.gov.in ?
        </button>

        <Collapse
          isOpen={this.state.isOpen2}
          className={
            "app__collapse app__collapse--gradient " +
            (this.state.isOpen2 ? "app__collapse--active" : "")
          }
          transition="height 300ms cubic-bezier(0.4, 0, 0.2, 1)"
          aria-hidden={this.state.isOpen2 ? "false" : "true"}
          elementType="article"
          render={collapseState => (
            <React.Fragment>
              <div className="app__content">
               
              www.ghmc.gov.in is the official portal of Greater Hyderabad Municipal Corporation. It is a one stop place to avail the online services provided by the Corporation.

The online services provided are :

Search facility on Birth Verification, Death Verification, Trade License Payments, Engineering Work Status, Registered Contractors, New House Numbers, Building Permission Status

A unique Grievance Redressal System called Parishkruthi to increase the transparency and efficiency in the system.

Information about the Corporation, Budget, Citizens' Charter, Building Permission Procedure, Building Fee Details, new FSI Policy, Rationalisation of House Numbers, Properties on Lease and such other information.

Application forms for Birth Certificate, Death Certificate, Self Assessment, License for Advertisement, Building Application Form, Building Construction Permission, Balika Samriddhi Yojana, Thrift & Credit Application Form, Transfer of Property etc. can be downloaded from the net.
                
              </div>
            </React.Fragment>
          )}
        />
         <button
          className={cx("app__toggle", {
            "app__toggle--active": this.state.isOpen3
          })}
          onClick={() => this.toggle(3)}
        >
          How to lodge complaint in citizens engage?
        </button>

        <Collapse
          isOpen={this.state.isOpen3}
          className={
            "app__collapse app__collapse--gradient " +
            (this.state.isOpen3 ? "app__collapse--active" : "")
          }
          transition="height 300ms cubic-bezier(0.4, 0, 0.2, 1)"
          aria-hidden={this.state.isOpen3 ? "false" : "true"}
          elementType="article"
          render={collapseState => (
            <React.Fragment>
              <div className="app__content">
               
               Firstly you should have an account.To create an account signup as a user.Once you have registered yourself, login as a user.Then you will be redirected to user home place where there will be an option to register a complaint.
               Once you click on the register complaint button you can lodge your complaint by filling all the details.          
              </div>
            </React.Fragment>
          )}
        />    
      </div>
      <button
          className={cx("app__toggle", {
            "app__toggle--active": this.state.isOpen4
          })}
          onClick={() => this.toggle(4)}
        >
          Who is the commissioner of GHMC?
        </button>

        <Collapse isOpen={this.state.isOpen4}
          className={"app__collapse app__collapse--gradient " +(this.state.isOpen4 ? "app__collapse--active" : "")}
          transition="height 300ms cubic-bezier(0.4, 0, 0.2, 1)"
          aria-hidden={this.state.isOpen4 ? "false" : "true"}
          elementType="article"
          render={collapseState => (
            <React.Fragment>
              <div className="app__content">
               
               <b>Lokesh Kumar is new GHMC commissioner.</b><br/>
                
              </div>
            </React.Fragment>
          )}
        />
                </Col>
            </Row>
        </Container>
        </div>
    
        );
    }
    toggle = index => {
        let collapse = "isOpen" + index;
    
        this.setState(prevState => ({ [collapse]: !prevState[collapse] }));
      };
    }