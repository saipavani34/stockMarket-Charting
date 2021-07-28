import React, { Component } from "react";
//import { useHistory, withRouter,Link } from "react-router-dom";
import './home.css';
import img from '../images/signup.jpeg';
import Navigation from './Navbar.js';
const image = {
  backgroundImage: 'url(' + img + ')',
  width: "100%",
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
const validPasswordRegex = RegExp( /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/);
export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleMobileChange = this.handleMobileChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);

    //
  
    this.state = {
      n:false,
      e:false,
      p:false,
      m:false,
      name: "",
      email:"",
      password: "",
      mobile:"",
      //confirmPassword: ""
      errors: {
        name: '',
        email: '',
        password: '',
        mobile : '',
      }
      
    };

  }
  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 5;
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
    this.setState({errors, [name]: value});
  }

  handlePasswordChange = event => {
    const { name, value } = event.target;
    let errors = this.state.errors;
    errors.password = 
          validPasswordRegex.test(value)
            ? ''
            : 'Password must contain 1 uppercase,1 lowercase,1 special character,1 numeric character and length of 8 - 15';
    if(errors.password ===  '')
      {
         this.setState({p : true});
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
    this.setState({errors, [name]: value});
  }

  handleSubmit(event) {
    event.preventDefault();
    body = {
      Name: this.state.name,
      Password: this.state.password,
      Email: this.state.email,
      Mobile: this.state.mobile,
     //confirmPassword: this.state.confirmPassword,
    }
    console.log(body);
    if (this.state.name === ""){
      alert('Please enter the name')
    }
    else if(this.state.email ===""){
      alert('Please enter the email')

    }
    else if(this.state.mobile ===""){
      alert('Please enter the mobile')
    }
    else if(this.state.password ===""){
      alert('Please enter the password')
    }
  


else{
  if(this.state.n === true && this.state.e === true && this.state.m === true && this.state.p === true){
  console.log(this.state)
  const url = "http://localhost:9000/register";
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
  .then(response => response.json())
  .then(contents => {console.log(contents);})
  .catch(()=> console.log("can't access " + url + " response. "))
  alert("Details inserted successfully!");
  this.props.history.push("/login");
}
else{
  alert("enter details correctly")
}
}
  }

    render() {
      const {errors} = this.state;
        return (<div style={image}>
            
            <Navigation/>
            <div className="auth-wrapper">
            <div className="auth-inner">
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input type="name"
                     name="name"
                     id="examplename"
                     className="form-control"
                     placeholder="Enter name"
                     value = {this.state.name} 
                     onChange = {this.handleNameChange} required/>
                     <span style={span1} className='error'>{errors.name}</span>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email"
                name="email"
                id="exampleEmail"
                className="form-control"
                placeholder="Enter Email"             
                value = {this.state.email} 
                onChange = {this.handleEmailChange} required/>
                <span style={span1} className='error'>{errors.email}</span>
                </div>

                <div className="form-group">
                    <label>Mobile</label>
                    <input type="phone" name="mobile" className="form-control" id="examplePhone" 
                    placeholder="Enter mobile number"
                    value = {this.state.mobile}
                    onChange = {this.handleMobileChange} required/>
                    <span style={span1} className='error'>{errors.mobile}</span>
                </div>

                

                <div className="form-group">
                    <label>Password</label>
                    <input type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
                className="form-control"                
                value = {this.state.password} 
                onChange = {this.handlePasswordChange} required/>
                <span style={span1} className='error'>{errors.password}</span>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick = {this.handleSubmit}>Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/Login">Login?</a>
                    
                </p>
            </form>
            </div>
            </div>
            </div>
        );
    }
}