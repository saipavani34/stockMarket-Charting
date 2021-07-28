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
const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validMobileRegex = RegExp(/^[6-9]{1}[0-9]{9}$/);
export default class editcompany extends Component{
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
        //this.validateForm = this.validateForm.bind(this);
    
        //
        this.state = {
          // n:false,
          // e:false,
          // m:false,
          cname: "",
          turnover:"",
          ceo:"",
          directors: "",
          sector:"",
          description:"",
          ipodate:"",
          errors: {
            // name: '',
            // email: '',
            // mobile : '',
          }
          
        };
        
    this.state={
      companydetails :[]
    
    }
    
  }
  componentDidMount(){
    //console.log(this.state.Id);
    var body = {
      Id: sessionStorage.getItem("id"),
    
    }
    //console.log("Body"+body.Id);

        const url = "http://localhost:9000/companydet";
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
                  companydetails : res,
                  cname : res.Name,
                  turnover: res.TurnOver,
                  ceo : res.CEO,
                  directors : res.BOD,
                  sector : res.Sector,
                  description: res.Description,
                  ipodate : res.IPO
                  

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
    handleTurnoverChange = event => {
      this.setState({
        turnover : event.target.value
      });
     
    }
    handleCEOChange = event => {
        this.setState({
          ceo : event.target.value
        });
    }
    handleBODChange = event => {
        this.setState({
            directors : event.target.value
        });
    }
     handleSectorChange = event => {
        this.setState({
            sector : event.target.value
        });
    }
    handleDescripChange = event => {
      this.setState({
        description : event.target.value
      });
     
    }
    handleIPOChange = event => {
        this.setState({
          ipodate: event.target.value
        });
       
      }
    handleUpdate(event) {
      // window.location.href="/editprofile"
      //sessionStorage.setItem("TempName",sessionStorage.getItem("CName"))
      //sessionStorage.setItem("TempTurnOver",this.state.companydetails.TurnOver)
     // sessionStorage.setItem("TempCEO",this.state.companydetails.CEO)
      //sessionStorage.setItem("TempBOD",this.state.companydetails.BOD)
      //sessionStorage.setItem("TempSector",this.state.companydetails.Sector)
      //sessionStorage.setItem("TempDescription",this.state.companydetails.Description)
      //sessionStorage.setItem("TempIPo",this.state.companydetails.IPO)
      this.props.history.push("/editcompanydetails");
 
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
                                  <label>TurnOver</label>
                                  <input type="text" name="turnover"  className="form-control" onChange={this.handleTurnoverChange} value={sessionStorage.getItem("TurnOver")}
                                 />
                                   
                              </div>
                              <div className="form-group">
                                  <label>CEO</label>
                                  <input type="text" name="ceo"  className="form-control" onChange={this.handleCEOChange} value={sessionStorage.getItem("CEO")}
                                 />
                                     
                              </div>
                              <div className="form-group">
                                  <label>Board of Directors</label>
                                  <input type="text" name="directors"  className="form-control" onChange={this.handleBODChange} value={sessionStorage.getItem("BOD")}
                                 />
                                     
                              </div>
                              <div className="form-group">
                                  <label>Sector</label>
                                  <input type="text" name="sector"  className="form-control" onChange={this.handleSectorChange} value={sessionStorage.getItem("Sector")}
                                 />
                                    
                              </div>
                              <div className="form-group">
                                  <label>Brief Description</label>
                                  <input type="text" name="description"  className="form-control" onChange={this.handleDescripChange} value={sessionStorage.getItem("Description")}
                                 />
                                  
                              </div>
                              <div className="form-group">
                                  <label>IPO Date</label>
                                  <input type="text" name="ipodate"  className="form-control" onChange={this.handleIPOChange} value={sessionStorage.getItem("IPO")}
                                 />
                                    
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