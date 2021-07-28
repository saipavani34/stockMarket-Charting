import './App.css';
import React from 'react';
import Home from './components/Home/home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './components/Home/signup';
import Login from './components/Home/login';
import About from './components/Home/about';
import Footer from './components/Home/footer';
import AdminLogin from './components/Home/adminlogin';
import Forgotpass from './components/Home/forgotpassword';
import ImportData from './components/Admin/importdata';
import AdminHome from './components/Admin/Adminhome';
import AdminLogout from './components/Admin/adminlogout';
import ManageCompany from './components/Admin/managecompany';
import EditCompany from './components/Admin/editcompanydetails';
import Userlogout from './components/User/logout';
import Userhome from './components/User/UserHome';
import UserProfile from './components/User/Profile';
import UserEditprofile from './components/User/EditProfile';
import AdminIPOupdate from './components/Admin/updateIPO';
import listCompany from './components/Admin/listcompany';
import liststockexchange from './components/Admin/listStockexchanges';
import addstockexchange from './components/Admin/manageexchange';
import editCompany from './components/Admin/editcompany';
import listipo from './components/Admin/listIPO';
import editipo from './components/Admin/Editipo';
import editipodet from './components/Admin/editipodetails';
import viewipo from './components/User/Viewipo';
import viewcompany from './components/User/Viewcompany';



function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/home' exact component={Home} />
          <Route  path='/login' component={Login} />
          <Route path='/signup' component={SignUp} />
          <Route path='/about' component={About} />
          <Route path='/footer' component={Footer} />
          <Route path='/forgotpassword' component={Forgotpass} />
          <Route path='/adminlogin' component={AdminLogin} />
          <Route path='/importdata' component={ImportData}/>
          <Route path='/Adminhome' component={AdminHome}/>
          <Route path='/managecompany' component={ManageCompany}/>
          <Route path='/editcompanydetails' component={EditCompany}/>
          <Route path='/adminlogout' component={AdminLogout}/>
          <Route path='/logout' component={Userlogout}/>
          <Route path='/UserHome' component={Userhome}/>
          <Route path='/Profile' component={UserProfile}/>
          <Route path='/EditProfile' component={UserEditprofile}/>
          <Route path='/updateIPO' component={AdminIPOupdate}/>
          <Route path='/listcompany' component={listCompany}/>
          <Route path='/listIPO' component={listipo}/>
          <Route path='/manageexchange' component={addstockexchange}/>
          <Route path='/listStockexchanges' component={liststockexchange}/>
          <Route path='/editcompany' component={editCompany}/>
          <Route path='/editipodetails' component={editipodet}/>
          <Route path='/Editipo' component={editipo}/>
          <Route path='/Viewipo' component={viewipo}/>
          <Route path='/Viewcompany' component={viewcompany}/>

        </Switch>
      </Router>
    </>
  );
}

export default App;


