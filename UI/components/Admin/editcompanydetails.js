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
const validNameRegex = RegExp(/^[a-z A-Z,.'-]+$/i);
const validtextRegex =RegExp(/^[a-zA-Z0-9_]*$/);
const validIPODateRegex=RegExp(/^\d{2}([./-])\w{3}\d{4}$/);

export default class editcompanydetails extends Component{
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleTurnoverChange = this.handleTurnoverChange.bind(this);
    this.handleCEOChange = this.handleCEOChange.bind(this);  
    this.handleBODChange = this.handleBODChange.bind(this);
    this.handleSectorChange = this.handleSectorChange.bind(this); 
    this.handleDescripChange = this.handleDescripChange.bind(this);
    this.handleIPOChange = this.handleIPOChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
        this.state = {
          c:true,
          t:true,
          ce:true,
          di:true,
          s:true,
          d:true,
          i:true,
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
          },
          userdetails :[]
        };
        
    
    
  }
  componentDidMount(){
    
    this.setState({  
          cname : sessionStorage.getItem("CName"),
          turnover:sessionStorage.getItem("TurnOver"),
          ceo:sessionStorage.getItem("CEO"),
          directors:sessionStorage.getItem("BOD"),
          sector:sessionStorage.getItem("Sector"),
          description:sessionStorage.getItem("Description"),
          ipodate:sessionStorage.getItem("IPO")
        
    })          

   
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
       else{
        this.setState({c : false});
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
       else{
        this.setState({t : false});
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
       else{
        this.setState({ce : false});
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
       else{
        this.setState({di : false});
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
       else{
        this.setState({s : false});
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
       else{
        this.setState({d : false});
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
       else{
        this.setState({i : false});
       }
        this.setState({errors, [name]: value});
      }
    
    handleUpdate(event) {
      event.preventDefault();
      body = {
        Id : sessionStorage.getItem("id"),
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
         const url = "http://localhost:9000/editdetails";
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
        .then(contents => {console.log(contents);
        // .then(response =>{window.location.href="/Login"});             
     })
   .catch(()=> console.log("can't access" + url + "response. "))
   alert("Details updated successfully!");
//   this.props.history.push("/profile");
  window.location.href="/managecompany";
    }
    else{
      alert("enter details correctly")
    }
  
    
    }
  }

    render() {
    //   const {errors} = this.state;
        return (
          <div style={image}>
<div className="wrapper">
          <Nav/>
                      
                      <div class="main_content">
                    <center>
                    
                      <div className="auth-wrapper">
                      <div className="auth-inner">
                         
                      <form>
                          <h3>Edit Company Details</h3>
                          
                          <div className="form-group">
                              <label>Company Name</label>
                              <input type="text" name="cname" id="cname" className="form-control" onChange={this.handleNameChange} value={this.state.cname} required
                             />
                              <span style={span1} >{this.state.errors.cname}</span> 
                          </div>
                          <div className="form-group">
                              <label>TurnOver</label>
                              <input type="text" name="turnover"  className="form-control" onChange={this.handleTurnoverChange} value={this.state.turnover}
                             />
                               <span style={span1} >{this.state.errors.turnover}</span>
                          </div>
                          <div className="form-group">
                              <label>CEO</label>
                              <input type="text" name="ceo"  className="form-control" onChange={this.handleCEOChange} value={this.state.ceo}
                             />
                                <span style={span1}>{this.state.errors.ceo}</span>  
                          </div>
                          <div className="form-group">
                              <label>Board of Directors</label>
                              <input type="text" name="directors"  className="form-control" onChange={this.handleBODChange} value={this.state.directors}
                             />
                                <span style={span1}>{this.state.errors.directors}</span>  
                          </div>
                          <div className="form-group">
                              <label>Sector</label>
                              <input type="text" name="sector"  className="form-control" onChange={this.handleSectorChange} value={this.state.sector}
                             />
                                <span style={span1} >{this.state.errors.sector}</span> 
                          </div>
                          <div className="form-group">
                              <label>Brief Description</label>
                              <input type="text" name="description"  className="form-control" onChange={this.handleDescripChange} value={this.state.description}
                             />
                               <span style={span1}>{this.state.errors.description}</span>
                          </div>
                          <div className="form-group">
                              <label>IPO Date</label>
                              <input type="text" name="ipodate"  className="form-control" onChange={this.handleIPOChange} value={this.state.ipodate}
                             />
                                <span style={span1} >{this.state.errors.ipodate}</span>
                          </div>
          
                        <button type="submit" className="btn btn-primary btn-block" onClick={this.handleUpdate}>Update</button>
                                  
                      </form>
                      </div>
                      </div>
                      </center>
                      </div>
                     </div>
                      </div>
        );
    }
}