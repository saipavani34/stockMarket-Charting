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
    
    //const Status = {
     // 'Pending': 'Pending',
      //'Closed': 'Closed',
     // };
      function enumFormatter(cell, row, enumObject) {
        //window.location.reload(false);
      return enumObject[cell];
      }
    
    class listcompany extends Component{
      constructor(props) {
        super(props);
        this.state={
          company :[]
        }
        
      }
      indexN(cell, row, enumObject, index) {
        return (<div>{index+1}</div>) 
    }
    
      componentDidMount() {
       
            const url = "http://localhost:9000/getUsers";
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
                      company : res
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
              {sessionStorage.setItem("CName",row.Name)
              sessionStorage.setItem("TurnOver",row.TurnOver)
              sessionStorage.setItem("CEO",row.CEO)
              sessionStorage.setItem("BOD",row.BOD)
              sessionStorage.setItem("Sector",row.Sector)
              sessionStorage.setItem("Description",row.Description)
              sessionStorage.setItem("IPO",row.IPO)
              sessionStorage.setItem("id",row.id)
              window.location.href= "/editcompany"}}>Edit</button></Col>
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
                  <Col>Cid : {row.Name}</Col>
                  <Col>TurnOver : {row.TurnOver}</Col>
                  <Col>CEO : {row.CEO}</Col>
                  <Col>CEO : {row.id}</Col>
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
                        <div className="header"><h2><u>Company Details</u></h2></div>
          <BootstrapTable data={ this.state.company } expandComponent={ this.expandComponent } expandableRow={ this.isExpandableRow } striped hover condensed height='120' scrollTop={ 'Bottom' }>
          <TableHeaderColumn width='250' dataField="any" dataFormat={this.indexN} isKey>S.No</TableHeaderColumn>
          {/* <TableHeaderColumn width='200' dataField='id' isKey>ID</TableHeaderColumn> */}
          <TableHeaderColumn  width='250' dataField='Name'>Company Name</TableHeaderColumn>
          <TableHeaderColumn  width='150' dataField='TurnOver'>TurnOver</TableHeaderColumn>
          <TableHeaderColumn  width='150' dataField='CEO'>CEO</TableHeaderColumn>
          <TableHeaderColumn  width='150' dataField='BOD'>Board of Directors</TableHeaderColumn>
          <TableHeaderColumn  width='150' dataField='Sector'>Sector</TableHeaderColumn>
          <TableHeaderColumn  width='150' dataField='Description'>Description</TableHeaderColumn>
          <TableHeaderColumn  width='150' dataField='IPO'>IPO</TableHeaderColumn>
         
          
      </BootstrapTable>
            
          </div></div>
          </div>
        );
    }
}
export default withRouter(listcompany);