import React ,{ Component } from 'react';
import './home.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

   import {
    Navbar,
    Nav,
    
    NavDropdown,
    
  } from 'react-bootstrap'


class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render(){
  return (
    <div>
      
<Navbar bg="light" expand="md">
<Link to='/' style={{ marginRight: 10 }} className='navbar-logo' >
            <img src='../images/logo4.jpg' />
          </Link>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;
          </span>
      <Navbar.Brand ><h1><center><b>STOCKMARKET CHARTING</b></center></h1></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav  className="mr-auto">
          </Nav>
          <Nav>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <Nav.Link href="home"><b>HOME</b></Nav.Link>
          <span>&nbsp;&nbsp;</span>
          <NavDropdown title="USER" id="basic-nav-dropdown">
            <NavDropdown.Item href="login"><b>Login</b></NavDropdown.Item>
            <NavDropdown.Item href="signup"><b>Sign Up</b></NavDropdown.Item>
          </NavDropdown>
          <span>&nbsp;&nbsp;</span>
          <Nav.Link href="adminlogin"><b>ADMIN</b></Nav.Link>
          <span>&nbsp;&nbsp;</span>
          <Nav.Link href="about"><b>ABOUT</b></Nav.Link>
        </Nav>
        
      </Navbar.Collapse>
    </Navbar>      
</div>
         
        
  );
}}

export default Navigation;