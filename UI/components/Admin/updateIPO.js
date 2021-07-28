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
export default class updateIPO extends Component{
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleStockChange = this.handleStockChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);  
    this.handleTotalsharesChange = this.handleTotalsharesChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this); 
    this.handleRemarksChange = this.handleRemarksChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.validateForm = this.validateForm.bind(this);
     this.handleUpdate = this.handleUpdate.bind(this);
       
        //this.validateForm = this.validateForm.bind(this);
    
        //
        this.state = {
          c:false,
          s:false,
          p:false,
          t:false,
          d:false,
          r:false,
          cname: "",
          stockexchange:"",
          pricepershare:"",
          totalshares:"",
          datetime:"",
          remarks:"",

          errors: {
          cname: '',
          stockexchange:'',
          pricepershare:'',
          totalshares:'',
          datetime:'',
          remarks:'',
          }
          
        };
      // this.state={
        // userdetails :[]
        
        //}
        
  }
 
  handleNameChange = event => {
    const { name, value } = event.target;
    let errors = this.state.errors;
    errors.cname = 
    validNameRegex.test(value)
            ? ''
            : 'Name should contain only letters';
    if(errors.cname ===  '')
    {
          this.setState({c : true});
   }
    this.setState({errors, [name]: value});
  }
  handleStockChange = event => {
    const { name, value } = event.target;
    let errors = this.state.errors;
    errors.stockexchange = 
    validNameRegex.test(value)
            ? ''
            : 'stock exchange should contain  text ';
    if(errors.stockexchange ===  '')
    {
          this.setState({s : true});
   }
    this.setState({errors, [name]: value});
  }
  handlePriceChange = event => {
    const { name, value } = event.target;
    let errors = this.state.errors;
    errors.pricepershare= 
    validnumRegex.test(value)
            ? ''
            : 'CEO should contain only numbers';
    if(errors.pricepershare ===  '')
    {
          this.setState({p : true});
   }
    this.setState({errors, [name]: value});
  }
  handleTotalsharesChange = event => {
    const { name, value } = event.target;
    let errors = this.state.errors;
    errors.totalshares = 
    validnumRegex.test(value)
            ? ''
            : 'Totalshares can contain only numbers ';
    if(errors.totalshares ===  '')
    {
          this.setState({t : true});
   }
    this.setState({errors, [name]: value});
  }
  handleDateChange = event => {
    const { name, value } = event.target;
    let errors = this.state.errors;
    errors.datetime = 
    validtextRegex.test(value)
            ? ''
            : 'Date contain both numbers and letters';
    if(errors.datetime ===  '')
    {
          this.setState({d : true});
   }
    this.setState({errors, [name]: value});
  }
  handleRemarksChange = event => {
    const { name, value } = event.target;
    let errors = this.state.errors;
    errors.remarks= 
    validtextRegex.test(value)
            ? ''
            : 'Description should contain only letters';
    if(errors.remarks ===  '')
    {
          this.setState({r: true});
   }
    this.setState({errors, [name]: value});
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
    this.props.history.push("/listIPO");
  }

handleSubmit(event) {
  event.preventDefault();
  body = {
   // Id : sessionStorage.getItem("Identity"),
    CompanyName: this.state.cname,
    StockExchange: this.state.stockexchange,
    PricePerShare: this.state.pricepershare,
    TotalShares: this.state.totalshares,
    OpenDateTime: this.state.datetime,
    Remarks: this.state.remarks,
    
    
  }
  console.log(body);
  if (this.state.cname ===""){
    alert('Please select the name')
  }
  else if(this.state.stockexchange ===""){
    alert('Please select the stockexchange')
  }
  else if(this.state.pricepershare ===""){
    alert('Please select the price')
  }
  else if(this.state.totalshares ===""){
    alert('Please select the totalshares')
  }
  else if(this.state.datetime ===""){
    alert('Please select the date')
  }
  else if(this.state.remarks ===""){
    alert('Please select the remarks')
  }
  

  else{
    if(this.state.c === true && this.state.s=== true && this.state.p === true &&this.state.t === true  && this.state.d=== true  && this.state.r=== true ){
      console.log("Hello");
     const url = "http://localhost:9000/addipo";
     let headers = new Headers();

     headers.append('Content-Type','application/json');
     headers.append('Accept','application/json');

     headers.append('Access-Control-Allow-origin',url);
     headers.append('Access-Control-Allow-Credentials','true');

     headers.append('GET','POST');

     fetch(url, {
      headers:headers,
      method: 'POST',
      body: JSON.stringify(body)
   })
    .then(response => response.json())
    .then(contents => {console.log(contents);})
    // .then(response =>{window.location.href="/Login"}); 
                
.catch(()=> console.log("can't access" + url + "response. "))
alert("Details added successfully!");
  //this.props.history.push("/managecompany");
//window.location.href="/managecompany";
}
else{
  alert("enter details correctly")
}


}
}
render() {
   const {errors} = this.state;
    return (
      <div style={image}>
<div className="wrapper">
      <Nav/>
                  
                  <div class="main_content">
                <center>
                
                  <div className="auth-wrapper">
                  <div className="auth-inner">
                     
                  <form>
                      <h3>Add IPO Details</h3>
                      <div className="form-group">
                    <label>Company Name</label>
                    <input type="text"
                     name="cname"
                     id="examplename"
                     className="form-control"
                     placeholder="Enter name"
                     value = {this.state.cname} 
                     onChange = {this.handleNameChange} required/>
                     <span style={span1} className='error'>{errors.cname}</span>
                </div>

                <div className="form-group">
                    <label>Stock Exchange</label>
                    <input type="text"
                name="stockexchange"
                id="examplestockexchange"
                className="form-control"
                placeholder="*******"             
                value = {this.state.stockexchange} 
                onChange = {this.handleStockChange} required/>
                <span style={span1} className='error'>{errors.stockexchange}</span>
                </div>

                <div className="form-group">
                    <label>Price Per Share</label>
                    <input type="text" name="pricepershare" className="form-control" id="examplepricepershare" 
                    placeholder="******"
                    value = {this.state.pricepershare}
                    onChange = {this.handlePriceChange} required/>
                    <span style={span1} className='error'>{errors.pricepershare}</span>
                </div>
                <div className="form-group">
                    <label>Total Shares</label>
                    <input type="text" name="totalshares" className="form-control" id="exampleshares" 
                    placeholder="***"
                    value = {this.state.totalshares}
                    onChange = {this.handleTotalsharesChange} required/>
                    <span style={span1} className='error'>{errors.totalshares}</span>
                </div>
                <div className="form-group">
                    <label>Date </label>
                    <input type="text" name="datetime" className="form-control" id="exampledate" 
                    placeholder="*****"
                    value = {this.state.datetime}
                    onChange = {this.handleDateChange} required/>
                    <span style={span1} className='error'>{errors.datetime}</span>
                </div>
                <div className="form-group">
                    <label>Remarks</label>
                    <input type="text" name="remarks" className="form-control" id="exampleremarks" 
                    placeholder="******"
                    value = {this.state.remarks}
                    onChange = {this.handleRemarksChange} required/>
                    <span style={span1} className='error'>{errors.remarks}</span>
                </div>

                
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>       
              <button type="submit" className="btn btn-primary btn-block" onClick={this.handleSubmit}>Add</button>  
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
             {/*} <Link to="/listcompany" className="btn btn-primary">List</Link> */}
           <button type="submit" className="btn btn-primary btn-block" onClick={this.handleUpdate}>List</button>
    
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
