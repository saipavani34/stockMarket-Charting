import React, { Component } from "react";
import {withRouter} from "react-router-dom";
import './home.css';
import Navigation from './Navbar.js';
import img from '../images/adminback.jpg';
// import { Redirect } from "react-router-dom";
// import {createBrowserHistory} from 'history';

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

const validPasswordRegex = RegExp( /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/);
const validNameRegex = RegExp(/^[a-z A-Z,.'-]+$/i);

class Adminlogin extends Component{
    constructor(props) {
        super(props);
        this.state={
          name : '',
          password : '',
          errors : {
            name : '',
            password : ''
          }
        }
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      CurDateTime() {
        var tempDate = new Date();
       var date = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate() +' '+ tempDate.getHours()+':'+ tempDate.getMinutes()+':'+ tempDate.getSeconds();
        const currDate = "Current Date= "+date;
        console.log(currDate);
        return (
          // <p>{currDate}</p>
          date
        );
      }

      handleNameChange = event => {
        const { name, value } = event.target;
        let errors = this.state.errors;
        errors.name = 
        validNameRegex.test(value)
                ? ''
                : 'Username is not valid';
        if(errors.name ===  '')
        {
              this.setState({n : true});
       }
        this.setState({errors, [name]: value});
      }

      handlePasswordChange = event => {
    const { name, value } = event.target;
    let errors = this.state.errors;
    errors.password = 
          validPasswordRegex.test(value)
            ? ''
            : 'Password is not valid';
    if(errors.password ===  '')
      {
         this.setState({p : true});
     }
    this.setState({errors, [name]: value});
  }
    handleSubmit(event) {

        // event.preventDefault();
        //   if(this.state.name==""){
        //     alert('Please enter the Name')
      
        //   }
        //   else if(this.state.password==""){
        //     alert('Please enter the password')
        //   }
          
        //   else if(this.state.name=="Admin" && this.state.password=="Admin@123"){
              
        //     localStorage.setItem("login1",localStorage.getItem("login2"));
        //     localStorage.setItem("login2",this.CurDateTime());
        //     window.location.href="/adminhome";
            
        //   } 
        //   else{
        //       alert("Enter proper details!!")
        //   }

        event.preventDefault();
        console.log(this.state)
         var body = {
          Adminname : this.state.name,
          Password : this.state.password,
        }
        console.log(body);
        if(this.state.name === ""){
          alert('Please enter the name')
    
        }
        else if(this.state.password === ""){
          alert('Please enter the password')
        }
        
        else{
            const url = "http://localhost:9000/adminlogin";
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
                response.json()
                .then(res=> {
                  // console.log(res.id)
                  sessionStorage.setItem("AdminName",res.Adminname);
                  console.log("AdminName:"+res.Adminname)
                  // sessionStorage.setItem("EmailId",res.Email);
                  // console.log(res.Name)
                  // sessionStorage.setItem("UserName",res.Name);
                  localStorage.setItem("login1",localStorage.getItem("login2"));
                  localStorage.setItem("login2",this.CurDateTime());
                  window.location.href="/adminhome";
                })
              }
              else if(!response.ok){
                console.log("Wrong email or password")
                alert("Enter the details correctly");
              }
              })
              {/*}.catch((error)=> {console.log("can't access" + url + "response. " +error )},
                alert("Wrong email or password"))*/}
    
              }
        }
      
    render() {
        const {errors} = this.state;
        return (
        <div style={image}>
            <Navigation/>
            
            <br/>
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form>
                        <h3>Admin Login</h3>
                        <div className="form-group">
                            <label>Admin Name</label>
                            <input type="text" name="name" id="examplename" className="form-control" placeholder="Enter name" onChange = {this.handleNameChange}/>
                            <span style={span1} className='error'>{errors.name}</span>
                        </div>
                        <div className="form-group">
                             <label>Password</label>
                            <input type="password" name="password" id="examplePassword" className="form-control" placeholder="Enter password" onChange = {this.handlePasswordChange}/>
                            <span style={span1} className='error'>{errors.password}</span>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block" onClick={this.handleSubmit}>Login</button>
                    </form>
                </div>
            </div> 
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/>        
        </div>
        );
    }
}
export default withRouter(Adminlogin);