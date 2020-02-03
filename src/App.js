import React from 'react';
import SideNavbar from './components/sideNavbarComponent';
import Profile from './components/profileComponent';
import Browse from './components/browseComponent';
import Login from './components/authentification/login';
import Register from './components/authentification/registration';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


export default function App() {
  
  return (
    <Router>
        <Switch>
          <Route path="/profile" style={{height: "100%"}}>
              <SideNavbar/>
              <Profile/>       
          </Route>
          <Route path="/browse" style={{height: "100%"}}>
            <SideNavbar/>
            <Browse/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/">
            <Login/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
        </Switch>
    </Router>
  );
}

