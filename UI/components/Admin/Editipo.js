import React, { Component } from "react";
//import logo from '../images/userhome.jpg';
import '../images/bgimage.css';
import './UserHome.css'
import Nav from './nav.js';
import img from '../images/adminback.jpg';
const image = {
  backgroundImage: 'url(' + img + ')',
  width: '100%',
  height: '100%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 100%',
}
const span1 = {
  color: "red"
}
var body;
//const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
//const validMobileRegex = RegExp(/^[6-9]{1}[0-9]{9}$/);
//const validIPODateRegex=RegExp(/^\d{2}([./-])\d{2}\1\d{4}$/);
const validNameRegex = RegExp(/^[a-z A-Z,.'-]+$/i);
const validtextRegex =RegExp(/^[a-zA-Z0-9_]*$/);
const validnumRegex=RegExp(/^[0-9]*$/);
export default class EditIPO extends Component{
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleStockChange = this.handleStockChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);  
    this.handleTotalsharesChange = this.handleTotalsharesChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this); 
    this.handleRemarksChange = this.handleRemarksChange.bind(this);

        this.handleUpdate = this.handleUpdate.bind(this);
        //this.validateForm = this.validateForm.bind(this);
    
        //
        this.state = {
          cname: "",
          stockexchange:"",
          pricepershare:"",
          totalshares:"",
          datetime:"",
          remarks:"",

          errors: {
          
          }
          
        };
      
        this.state={
            ipodetails :[]
  }
}
 
componentDidMount(){
    //console.log(this.state.Id);
    var body = {
      Id: sessionStorage.getItem("id"),
    
    }
    //console.log("Body"+body.Id);

        const url = "http://localhost:9000/ipodet";
          let headers = new Headers();
      
          headers.append('Content-Type','application/json');
          headers.append('Accept','application/json');
      
          headers.append('Access-Control-Allow-origin',url);
          headers.append('Access-Control-Allow-Credentials','true');
      
          headers.append('POST','GET');
      
          fetch(url, {
            headers:headers,
            method: 'POST',
            body: JSON.stringify(body)
          })
          .then(response => {if(response.ok){
            response.json()
            .then(res=> {
              console.log("Response:"+res)
              this.setState({
                  ipodetails : res,
                  cname : res.CompanyName,
                  stockexchange: res.StockExchange,
                  pricepershare : res.PricePerShare,
                  totalshares : res.TotalShares,
                  datetime : res.OpenDateTime,
                  remarks: res.Remarks,
                  
              })          
            })
          }
          
          })
          console.log(body);
             
    } 
   
    handleNameChange = event => {
      this.setState({
        cname : event.target.value
      });
      console.log(this.state.cname);
    }
    handleStockChange = event => {
      this.setState({
        stockexchange : event.target.value
      });
     
    }
    handlePriceChange = event => {
        this.setState({
          pricepershare: event.target.value
        });
    }
    handleTotalsharesChange = event => {
        this.setState({
            totalshares : event.target.value
        });
    }
     handleDateChange = event => {
        this.setState({
            datetime : event.target.value
        });
    }
    handleRemarksChange = event => {
      this.setState({
        remarks : event.target.value
      });
     
    }
    
  handleUpdate(event) {
    // window.location.href="/editprofile"
    
    //sessionStorage.setItem("TempUserName",this.state.cname)
    //sessionStorage.setItem("TempTurnOver",this.state.turnover)
    //sessionStorage.setItem("TempCEO",this.state.ceo)
    //sessionStorage.setItem("TempBOD",this.state.directors)
    //sessionStorage.setItem("TempSector",this.state.sector)
    //sessionStorage.setItem("TempDescription",this.state.description)
    //sessionStorage.setItem("TempIPO",this.state.ipodate)
    this.props.history.push("/editipodetails");
  }


    

render() {
   //const {errors} = this.state;
    return (
      <div style={image}>
<div className="wrapper">
      <Nav/>
                  
                  <div class="main_content">
                <center>
                
                  <div className="auth-wrapper">
                  <div className="auth-inner">
                     
                  <form>
                      <h3>Edit IPO Details</h3>

                      <div className="form-group">
                                  <label>ID:</label>
                                  <input type="text" name="email"  className="form-control"   value={sessionStorage.getItem("id")}
                                 />
                                 </div>
                              <div className="form-group">
                                  <label>Company Name</label>
                                  <input type="text" name="cname" id="cname" className="form-control" onChange={this.handleNameChange} value={sessionStorage.getItem("CName")} required
                                 />
                                  
                              </div>
                              <div className="form-group">
                                  <label>Stock Exchange</label>
                                  <input type="text" name="stockexchange"  className="form-control" onChange={this.handleStockChange} value={sessionStorage.getItem("Stockexchange")}
                                 />
                                   
                              </div>
                              <div className="form-group">
                                  <label>Price Per Share</label>
                                  <input type="text" name="pricepershare"  className="form-control" onChange={this.handlePriceChange} value={sessionStorage.getItem("Price")}
                                 />
                                     
                              </div>
                              <div className="form-group">
                                  <label>Total Shares</label>
                                  <input type="text" name="totalshares"  className="form-control" onChange={this.handleTotalsharesChange} value={sessionStorage.getItem("Total")}
                                 />
                                     
                              </div>
                              <div className="form-group">
                                  <label>Open Date Time</label>
                                  <input type="text" name="datetime"  className="form-control" onChange={this.handleDateChange} value={sessionStorage.getItem("Date")}
                                 />
                                    
                              </div>
                              <div className="form-group">
                                  <label>Remarks</label>
                                  <input type="text" name="remarks"  className="form-control" onChange={this.handleRemarksChange} value={sessionStorage.getItem("Remarks")}
                                 />
                                  
                              </div>
                             
              
                            <button type="submit" className="btn btn-primary btn-block" onClick={this.handleUpdate}>Update</button>
                                      
                     
                  </form>
                  </div>
                  <br/><br/><br/><br/><br/><br/><br/><br/>
                  <br/><br/><br/><br/><br/><br/><br/><br/>
                  <br/><br/><br/><br/><br/><br/><br/><br/>
                  </div>
                  </center>
                  </div>
                 </div>
                  </div>
    );
}
}
