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
const validtextRegex =RegExp(/^[a-zA-Z0-9_]*$/);
const validMobileRegex = RegExp(/^[6-9]{1}[0-9]{9}$/);
const validPasswordRegex = RegExp( /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/);
export default class managecompany extends Component{
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleTurnoverChange = this.handleTurnoverChange.bind(this);
    this.handleCEOChange = this.handleCEOChange.bind(this);  
    this.handleBODChange = this.handleBODChange.bind(this);
    this.handleSectorChange = this.handleSectorChange.bind(this); 
    this.handleDescripChange = this.handleDescripChange.bind(this);
    this.handleIPOChange = this.handleIPOChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
     this.handleUpdate = this.handleUpdate.bind(this);
        //this.validateForm = this.validateForm.bind(this);
    
        //
        this.state = {
          c:false,
          t:false,
          ce:false,
          di:false,
          s:false,
          d:false,
          i:false,
          cname: "",
          turnover:"",
          ceo:"",
          directors:"",
          sector:"",
          description:"",
          ipodate:"",

          errors: {
          cname: '',
          turnover:'',
          ceo:'',
          directors:'',
          sector:'',
          description:'',
          ipodate:'',
          }
          
        };
      // this.state={
        // userdetails :[]
        
        //}
        
  }
 
  validateForm() {
    return this.state.cname.length > 0 ;
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
  handleTurnoverChange = event => {
    const { name, value } = event.target;
    let errors = this.state.errors;
    errors.turnover = 
    validtextRegex.test(value)
            ? ''
            : 'Turnover can contain both text and numbers';
    if(errors.turnover ===  '')
    {
          this.setState({t : true});
   }
    this.setState({errors, [name]: value});
  }
  handleCEOChange = event => {
    const { name, value } = event.target;
    let errors = this.state.errors;
    errors.ceo= 
    validNameRegex.test(value)
            ? ''
            : 'CEO should contain only letters';
    if(errors.ceo ===  '')
    {
          this.setState({ce : true});
   }
    this.setState({errors, [name]: value});
  }
  handleBODChange = event => {
    const { name, value } = event.target;
    let errors = this.state.errors;
    errors.directors = 
    validNameRegex.test(value)
            ? ''
            : 'BOD should contain only letters';
    if(errors.directors ===  '')
    {
          this.setState({di : true});
   }
    this.setState({errors, [name]: value});
  }
  handleSectorChange = event => {
    const { name, value } = event.target;
    let errors = this.state.errors;
    errors.sector = 
    validNameRegex.test(value)
            ? ''
            : 'Sector should contain only letters';
    if(errors.sector ===  '')
    {
          this.setState({s : true});
   }
    this.setState({errors, [name]: value});
  }
  handleDescripChange = event => {
    const { name, value } = event.target;
    let errors = this.state.errors;
    errors.description = 
    validtextRegex.test(value)
            ? ''
            : 'Description should contain only letters';
    if(errors.description ===  '')
    {
          this.setState({d: true});
   }
    this.setState({errors, [name]: value});
  }
  handleIPOChange = event => {
    const { name, value } = event.target;
    let errors = this.state.errors;
    errors.ipodate = 
    validtextRegex.test(value)
            ? ''
            : 'IPO should be in date format';
    if(errors.ipodate===  '')
    {
          this.setState({i : true});
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
    this.props.history.push("/listcompany");
  }

handleSubmit(event) {
  event.preventDefault();
  body = {
   // Id : sessionStorage.getItem("Identity"),
    Name: this.state.cname,
    TurnOver: this.state.turnover,
    CEO: this.state.ceo,
    BOD: this.state.directors,
    Sector: this.state.sector,
    Description: this.state.description,
    IPO: this.state.ipodate,
    
    
  }
  console.log(body);
  if (this.state.cname ===""){
    alert('Please select the name')
  }
  else if(this.state.turnover ===""){
    alert('Please select the turnover')
  }
  else if(this.state.ceo ===""){
    alert('Please select the ceo')
  }
  else if(this.state.directors ===""){
    alert('Please select the directors')
  }
  else if(this.state.sector ===""){
    alert('Please select the sector')
  }
  else if(this.state.description ===""){
    alert('Please select the description')
  }
  else if(this.state.ipodate ===""){
    alert('Please select the ipodate')
  }

  else{
    if(this.state.c === true && this.state.t=== true && this.state.ce === true &&this.state.di === true  && this.state.s === true  && this.state.d === true&& this.state.i === true ){
      console.log("Hello");
     const url = "http://localhost:9000/company";
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
                          <h3>Create Company</h3>
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
                    <label>TurnOver</label>
                    <input type="text"
                name="turnover"
                id="exampleturnover"
                className="form-control"
                placeholder="Enter turnover"             
                value = {this.state.turnover} 
                onChange = {this.handleTurnoverChange} required/>
                <span style={span1} className='error'>{errors.turnover}</span>
                </div>

                <div className="form-group">
                    <label>CEO</label>
                    <input type="text" name="ceo" className="form-control" id="exampleceo" 
                    placeholder="******"
                    value = {this.state.ceo}
                    onChange = {this.handleCEOChange} required/>
                    <span style={span1} className='error'>{errors.ceo}</span>
                </div>
                <div className="form-group">
                    <label>Board of Directors</label>
                    <input type="text" name="directors" className="form-control" id="exampledirectors" 
                    placeholder="***"
                    value = {this.state.directors}
                    onChange = {this.handleBODChange} required/>
                    <span style={span1} className='error'>{errors.directors}</span>
                </div>
                <div className="form-group">
                    <label>Sector</label>
                    <input type="text" name="sector" className="form-control" id="examplesector" 
                    placeholder="Enter sector"
                    value = {this.state.sector}
                    onChange = {this.handleSectorChange} required/>
                    <span style={span1} className='error'>{errors.sector}</span>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input type="text" name="description" className="form-control" id="exampledescription" 
                    placeholder="******"
                    value = {this.state.description}
                    onChange = {this.handleDescripChange} required/>
                    <span style={span1} className='error'>{errors.description}</span>
                </div>

                

                <div className="form-group">
                    <label>IPO</label>
                    <input type="text"
                name="ipodate"
                id="exampleipodate"
                placeholder="********"
                className="form-control"                
                value = {this.state.ipodate} 
                onChange = {this.handleIPOChange} required/>
                <span style={span1} className='error'>{errors.ipodate}</span>
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