import React, { Component } from "react";
import {  withRouter} from "react-router-dom";
import './UserHome.css';
import Navigation  from './nav.js';
import './view1.css'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
// import img from '../images/userlogin.jpeg';
// import UserProfile from '../User/UserProfile';
// import {createBrowserHistory} from 'history';


var body;
// let token="";
// var result;

class listcompany extends Component{
  constructor(props) {
    super(props);
    this.state={
      ipos :[]
    }
    

  
    console.log(body);
    
   
        const url = "http://localhost:9000/viewipo";
          let headers = new Headers();
      
          headers.append('Content-Type','application/json');
          headers.append('Accept','application/json');
      
          headers.append('Access-Control-Allow-origin',url);
          headers.append('Access-Control-Allow-Credentials','true');
      
          headers.append('POST','GET');
      
          fetch(url, {
            headers:headers,
            method: 'GET',
            body: JSON.stringify(body)
          })
          .then(response => {if(response.ok){
            // UserProfile.setEmail(this.state.email);
            response.json()
            .then(res=> {
              console.log(res)
              this.setState({
                  ipos : res
              })          
            })
          }
          else if(!response.ok){
            console.log("Wrong details")
            alert("Wrong details")
          }
          })    
      
    } 

    indexN(cell, row, enumObject, index) {
      return (<div>{index+1}</div>) 
    }

    render() {
        return (
        <div>
       <div className="wrapper">
            <Navigation/>
            <br></br><br/>
            <br/>
           <div className="main_content">
                        <div className="header"><h2><u>IPO Details</u></h2></div>
          <BootstrapTable data={ this.state.ipos } striped hover condensed height='120' scrollTop={ 'Bottom' }>
          <TableHeaderColumn width='250' dataField="any" dataFormat={this.indexN} isKey>S.No</TableHeaderColumn>
          {/* <TableHeaderColumn width='200' dataField='id' isKey>ID</TableHeaderColumn> */}
          <TableHeaderColumn  width='250' dataField='CompanyName'>Company Name</TableHeaderColumn>
          <TableHeaderColumn  width='250' dataField='StockExchange'>Stock Exchange</TableHeaderColumn>
          <TableHeaderColumn  width='150' dataField='PricePerShare'>Price per share</TableHeaderColumn>
          <TableHeaderColumn  width='150' dataField='TotalShares'>Total number of shares</TableHeaderColumn>
          <TableHeaderColumn  width='150' dataField='OpenDateTime'>Open Date Time</TableHeaderColumn>
          <TableHeaderColumn  width='150' dataField='Remarks'>Remarks</TableHeaderColumn>
 

         
         
          
      </BootstrapTable>
            
          </div></div>
          </div>
        );
    }
}
export default withRouter(listcompany);