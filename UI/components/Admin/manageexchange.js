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

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validNameRegex = RegExp(/^[a-z A-Z,.'-]+$/i);
const validtextRegex =RegExp(/^[a-zA-Z0-9_+]*$/);
const validMobileRegex = RegExp(/^[6-9]{1}[0-9]{9}$/);
const validPasswordRegex = RegExp( /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/);
export default class manageexchange extends Component{
  constructor(props) {
    super(props);
    this.handleStockexchangeChange = this.handleStockexchangeChange.bind(this);
    this.handleBriefChange = this.handleBriefChange.bind(this);
    this.handleContactChange = this.handleContactChange.bind(this);  
    this.handleRemarksChange = this.handleRemarksChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
     this.handleUpdate = this.handleUpdate.bind(this);
        //this.validateForm = this.validateForm.bind(this);
    
        //
        this.state = {
          s:false,
          b:false,
          c:false,
          r:false,
          stockexc: "",
          brief:"",
          contact:"",
          remarks:"",

          errors: {
          stockexc: '',
          brief:'',
          contact:'',
          remarks:'',
          }
          
        };
      // this.state={
        // userdetails :[]
        
        //}
        
  }
 
 // validateForm() {
   // return this.state.cname.length > 0 ;
  //}

  handleStockexchangeChange = event => {
    const { name, value } = event.target;
    let errors = this.state.errors;
    errors.stockexc = 
    validNameRegex.test(value)
            ? ''
            : 'StockExchange should contain only letters';
    if(errors.stockexc ===  '')
    {
          this.setState({s : true});
   }
    this.setState({errors, [name]: value});
  }
  handleBriefChange = event => {
    const { name, value } = event.target;
    let errors = this.state.errors;
    errors.brief = 
    validtextRegex.test(value)
            ? ''
            : 'Brief can contain both text and numbers';
    if(errors.brief ===  '')
    {
          this.setState({b : true});
   }
    this.setState({errors, [name]: value});
  }
  handleContactChange = event => {
    const { name, value } = event.target;
    let errors = this.state.errors;
    errors.contact= 
    validtextRegex.test(value)
            ? ''
            : 'contact can contain both numbers and letters';
    if(errors.contact ===  '')
    {
          this.setState({c : true});
   }
    this.setState({errors, [name]: value});
  }
  handleRemarksChange = event => {
    const { name, value } = event.target;
    let errors = this.state.errors;
    errors.remarks = 
    validtextRegex.test(value)
            ? ''
            : 'Remarks can contain both letters and number';
    if(errors.remarks ===  '')
    {
          this.setState({r : true});
   }
    this.setState({errors, [name]: value});
  }
  
  handleUpdate(event) {
    // window.location.href="/editprofile"
    
   // sessionStorage.setItem("TempUserName",this.state.cname)
    //sessionStorage.setItem("TempTurnOver",this.state.turnover)
    //sessionStorage.setItem("TempCEO",this.state.ceo)
    //sessionStorage.setItem("TempBOD",this.state.directors)
    //sessionStorage.setItem("TempSector",this.state.sector)
    //sessionStorage.setItem("TempDescription",this.state.description)
    //sessionStorage.setItem("TempIPO",this.state.ipodate)
    this.props.history.push("/listStockexchanges");
  }
  

handleSubmit(event) {
  event.preventDefault();
  body = {
   // Id : sessionStorage.getItem("Identity"),
    StockExchange: this.state.stockexc,
    Brief: this.state.brief,
    Contact: this.state.contact,
    Remarks: this.state.remarks,
    
    
  }
  console.log(body);
  if (this.state.stockexc ===""){
    alert('Please select the stockexchange')
  }
  else if(this.state.brief ===""){
    alert('Please select the brief')
  }
  else if(this.state.contact ===""){
    alert('Please select the contact')
  }
  else if(this.state.remarks ===""){
    alert('Please select the remarks')
  }
  

  else{
    if(this.state.s === true && this.state.b=== true && this.state.c === true &&this.state.r === true ){
      console.log("Hello");
     const url = "http://localhost:9000/stockexchange";
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
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                      
                      <div class="main_content">
                    <center>
                    
                      <div className="auth-wrapper">
                      <div className="auth-inner">
                      
                      <form>
                          
                          <h3>Add StockExchange</h3>
                          <div className="form-group">
                    <label>StockExchange</label>
                    <input type="text"
                     name="stockexc"
                     id="examplestockexchange"
                     className="form-control"
                     placeholder="*******"
                     value = {this.state.stockexc} 
                     onChange = {this.handleStockexchangeChange} required/>
                     <span style={span1} className='error'>{errors.stockexc}</span>
                </div>

                <div className="form-group">
                    <label>Brief</label>
                    <input type="text"
                name="brief"
                id="examplebrief"
                className="form-control"
                placeholder="******"             
                value = {this.state.brief} 
                onChange = {this.handleBriefChange} required/>
                <span style={span1} className='error'>{errors.brief}</span>
                </div>

                <div className="form-group">
                    <label>Contact</label>
                    <input type="text" name="contact" className="form-control" id="examplecontact" 
                    placeholder="******"
                    value = {this.state.contact}
                    onChange = {this.handleContactChange} required/>
                    <span style={span1} className='error'>{errors.contact}</span>
                </div>
                <div className="form-group">
                    <label>Remarks</label>
                    <input type="text" name="remarks" className="form-control" id="exampleremarks" 
                    placeholder="***"
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