import React, { Component } from "react";
//import logo from '../images/userhome.jpg';
import '../images/bgimage.css';
import './UserHome.css'
import Nav from './nav.js';
import img from '../images/login.jpg';
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
const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validNameRegex = RegExp(/^[a-z A-Z,.'-]+$/i);
const validMobileRegex = RegExp(/^[6-9]{1}[0-9]{9}$/);

export default class EditProfile extends Component{
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMobileChange = this.handleMobileChange.bind(this);  
    this.handleUpdate = this.handleUpdate.bind(this);
        this.state = {
          n:true,
          e:true,
          m:true,
          name: "",
          email:"",
          mobile:"",
          confirmPassword: "",
          errors: {
            name: '',
            email: '',
            mobile : '',
          },
          userdetails :[]
        };
        
    
    
  }
  componentDidMount(){
    this.setState({  
        name : sessionStorage.getItem("TempUserName"),
        email : sessionStorage.getItem("TempUserEmail"),
        mobile : sessionStorage.getItem("TempUserMobile")
    
    })          

    
    } 
    handleNameChange = event => {
        const { name, value } = event.target;
        let errors = this.state.errors;
        errors.name = 
        validNameRegex.test(value)
                ? ''
                : 'Name should contain only letters';
        if(errors.name ===  '')
        {
              this.setState({n : true});
       }
       else{
        this.setState({n : false});
       }
        this.setState({errors, [name]: value});
      }
    
  
    handleEmailChange = event => {
      const { name, value } = event.target;
      let errors = this.state.errors;
      errors.email = 
            validEmailRegex.test(value)
              ? ''
              : 'Email is not valid!';
      if(errors.email ===  '')
        {
           this.setState({e : true});
       }
       else{
        this.setState({e : false});
       }
      this.setState({errors, [name]: value});
    }
  
    handleMobileChange = event => {
      const { name, value } = event.target;
      let errors = this.state.errors;
      errors.mobile = 
      (validMobileRegex.test(value))
        ? ''
        : 'Enter a valid phone number!';
     if(errors.mobile ===  '')
      {
          this.setState({m : true});
      }
      else{
        this.setState({m : false});
       }
      this.setState({errors, [name]: value});
    }
   
    handleUpdate(event) {
      event.preventDefault();
      body = {
        Id : sessionStorage.getItem("Identity"),
        Name: this.state.name,
        Email: this.state.email,
        Mobile: this.state.mobile,
        
        
      }
      console.log(body);
      if (this.state.name ===""){
        alert('Please select the name')
      }
      else if(this.state.email ===""){
        alert('Please select the email')
      }
       else if (this.state.mobile ===""){
        alert('Please select the mobile')
      }
    
      else{
        if(this.state.n === true && this.state.e === true && this.state.m === true){
          console.log("Hello");
         const url = "http://localhost:9000/editprofile";
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
  window.location.href="/profile";
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
                        <br></br><br></br><br></br><br></br>
                    
                      <div className="auth-wrapper">
                      <div className="auth-inner">
                         
                      <form>
                          <h3>Edit Profile</h3>
                          <div className="form-group">
                              <label>Name:</label>
                              <input type="text" name="name" id="name" className="form-control" onChange={this.handleNameChange} value={this.state.name} required
                             />
                              <span style={span1} >{this.state.errors.name}</span> 
                          </div>
                          <div className="form-group">
                              <label>Email address</label>
                              <input type="email" name="email"  className="form-control" onChange={this.handleEmailChange} value={this.state.email}
                             />
                               <span style={span1} className='error'>{this.state.errors.email}</span> 
                          </div>
          
                          <div className="form-group">
                              <label>Mobile</label>
                              <input type="phone" name="mobile" className="form-control" onChange={this.handleMobileChange} value={this.state.mobile}
                             />
                               <span style={span1} className='error'>{this.state.errors.mobile}</span> 
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