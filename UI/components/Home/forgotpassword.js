import React, { Component } from "react";
import { withRouter} from "react-router-dom";
import './home.css';
import Navigation  from './Navbar.js';
import img from '../images/userlogin.jpeg';

const image = {
  backgroundImage: 'url(' + img + ')',
  width: '100%',
  height: '100%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 100%',
}
// var body;
// let token="";
const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);


class forgotPassword extends Component{
  constructor(props) {
    super(props);
    this.state={
      email : '',
      password : '',
      confirmpassword : '',
      errors : {
        email: '',
        password : '',
        confirmpassword : '',
        
      }
    }
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {

  event.preventDefault();
    console.log(this.state)
     var body = {
      Email : this.state.email,
      Password : this.state.password,
    }
    console.log(body);
    if(this.state.email === ""){
      alert('Please enter the email')

    }
    else if(this.state.password === ""){
      alert('Please enter the password')
    }
    else if(this.state.confirmpassword === ""){
        alert('Please enter the confirm password')
      }
    else if(this.state.password != this.state.confirmpassword){
        alert('Password and confirm password should be same')
      }
    else{
        const url = "http://localhost:9000/forgotPassword";
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
            // UserProfile.setEmail(this.state.email);
            return response.text()
            .then(res=> {
              console.log(res)
              window.location.href="/Login";
            })
          }
          else if(!response.ok){
            console.log("Wrong email or password")
            alert("Enter details correctly")
          }
          })
          {/*}.catch((error)=> {console.log("can't access" + url + "response. " +error )},
            alert("Wrong email or password"))*/}

          }
      
    } 

  validateForm() {
    return this.state.name.length > 0 && this.state.password.length > 5;
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
    value.length < 8
      ? 'Password must be 8 characters long!'
      : '';
    if(errors.password ===  '')
      {
        this.setState({p : true});
      }
    this.setState({errors, [name]: value});
  }
  handleConfirmPasswordChange = event => {
    const { name, value } = event.target;
    let errors = this.state.errors;
    errors.confirmpassword = 
    value.length < 8
      ? 'Password must be 8 characters long!'
      : '';
    if(errors.confirmpassword ===  '')
      {
        this.setState({p : true});
      }
    this.setState({errors, [name]: value});
  }

    render() {
      const {errors} = this.state;
        return (<div style={image}>

<Navigation/>
            <br></br><br/>
            <br/><br></br><br/>
            <br/><br></br><br/>
            <br/>

            <div className="auth-wrapper">
            <div className="auth-inner">
               
            <form>
                <h3>Forgot Password</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="text" name="email" id="exampleEmail" className="form-control" placeholder="Enter email"
                    onChange = {this.handleEmailChange} />
                     <span className='error'>{errors.email}</span>
                </div>

                <div className="form-group">
                    <label>New Password</label>
                    <input type="password" name="password" id="examplePassword" className="form-control" placeholder="Enter new password" 
                    onChange = {this.handlePasswordChange}/>
                     <span className='error'>{errors.password}</span>
                </div>
                
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" name="confirmpassword" id="examplePassword" className="form-control" placeholder="Enter password again" 
                    onChange = {this.handleConfirmPasswordChange}/>
                     <span className='error'>{errors.confirmpassword}</span>
                </div>
                

                <button type="submit" className="btn btn-primary btn-block" onClick={this.handleSubmit}>Submit</button>
        

            </form>
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
            </div>
        );
    }
}
export default withRouter(forgotPassword);