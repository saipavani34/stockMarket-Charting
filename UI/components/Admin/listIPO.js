import React, { Component } from "react";
import {  withRouter} from "react-router-dom";
import './adminhome.css';
import Navigation  from './nav.js';
import './view.css'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {Container,Row,Col} from 'react-bootstrap';
// import img from '../images/userlogin.jpeg';
// import UserProfile from '../User/UserProfile';
// import {createBrowserHistory} from 'history';


var body;
// let token="";
// var result;
function enumFormatter(cell, row, enumObject) {
    //window.location.reload(false);
  return enumObject[cell];
  }


class listIPO extends Component{
  constructor(props) {
    super(props);
    this.state={
      ipo :[]
    }
    
  }
  indexN(cell, row, enumObject, index) {
    return (<div>{index+1}</div>) 
}
componentDidMount() {
    
    
   
        const url = "http://localhost:9000/getipodetails";
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
                  ipo : res
              })          
            })
          }
          else if(!response.ok){
            console.log("Wrong details")
            alert("No data")
          }
          })    
      
    } 

    expandComponent(row) {
        // var createdimg="/images/"+row.CreatedImage;
        // var closedtime;
        // var closedimg;
         var image;
         //if(row.Name != ""){
          // closedimg = row.ClosedImage;
          // closedtime = "Not Yet Closed";
          image = <Row>
           <Col>
           <button type="submit" className="btn btn-primary btn-block" onClick={(event) => 
             {sessionStorage.setItem("CName",row.CompanyName)
             sessionStorage.setItem("Stockexchange",row.StockExchange)
             sessionStorage.setItem("Price",row.PricePerShare)
             sessionStorage.setItem("Total",row.TotalShares)
             sessionStorage.setItem("Date",row.OpenDateTime)
             sessionStorage.setItem("Remarks",row.Remarks)
             sessionStorage.setItem("id",row.id)
             window.location.href= "/Editipo"}}>Edit</button></Col>
   </Row>
         //}
        // else{
          // var img = "/images/"+row.ClosedImage;
           //closedimg=<img src={img}/>;
           //closedtime = row.ClosedAt;
         //}
         return (
            <div>
            <Container border="5px">
              <Row>
                <Col>Company name: {row.CompanyName}</Col>
                <Col> Stock Exchange: {row.StockExchange}</Col>
                
              </Row>{image}
            
  </Container>
          </div>
         );
       }
   
       isExpandableRow(row) {    
           return true;      
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
          <BootstrapTable data={ this.state.ipo } expandComponent={ this.expandComponent } expandableRow={ this.isExpandableRow }striped hover condensed height='120' scrollTop={ 'Bottom' }>
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
export default withRouter(listIPO);