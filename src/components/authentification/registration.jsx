import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import '../../css/login.css';
import { Redirect } from "react-router-dom";

const startState = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    usernameError: "",
    passwordError: "",
    redirect: "/profile"
}
class Register extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            firstName: "",
            lastName: "",
            email: "",
            username: "",
            password: "",
            firstNameError: "",
            lastNameError: "",
            emailError: "",
            usernameError: "",
            passwordError: "",
            redirect: null
         };
    }
    handleInformation = (newUser) => {
        this.setState({
            [newUser.target.id]: newUser.target.value
        })
    }
    handleRegistration = (newUser) => {
        newUser.preventDefault();
        const isValid = this.validateRegistrationForm();
        if(isValid){
            console.log(this.state);
            this.setState(startState);        
        }
    }
    validateRegistrationForm = () => {
        let firstNameError = "";
        let lastNameError =  "";
        let emailError = "";
        let usernameError = "";
        let passwordError = "";

        if(this.state.firstName.length == 0) {
            firstNameError = "Required";
        }
        if(this.state.lastName.length == 0) {
            lastNameError = "Required";
        }
        if(!this.state.email.includes('@')) {
            emailError = "Invalid - Email should contain @";
        }
        if(this.state.username.length == 0) {
            usernameError = "Required";
        }
        if(this.state.password.length < 6) {
            passwordError = "Invalid - Password must contain 6 letters or more";
        }
        
        if(firstNameError || lastNameError || usernameError || emailError || passwordError){
            this.setState({firstNameError});
            this.setState({lastNameError});
            this.setState({emailError});
            this.setState({usernameError});
            this.setState({passwordError});
            return false;
        }
        
        return true;
    }
    render() { 
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return ( 
            <div className="loginPage">

                {/* REGISTRATION HEADER */}
                <div className="header bg-dark">
                    <h1 className="" style={{textAlign: "center", color: "white", paddingTop: "20px", paddingBottom: "20px"}}><span className="glyphicon glyphicon-leaf" style={{color: "#1eb980",}}></span> NUTREE</h1>
                </div>
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">

                        {/* REGISTRATION BODY */}
                        <div className="loginBody">
                            <h3>To continue, please enter your information to Nutree</h3>
                            <form className="form" onSubmit={this.handleRegistration}>
                                <label htmlFor="firstName" className="col-sm-2"><h3>Firstname</h3></label>
                                <input id="firstName" onChange={this.handleInformation} type="text" className="input" placeholder="First Name"></input>
                                <div style={{fontSize: "10px", color: "red"}}>
                                    {this.state.firstNameError}
                                </div>
                                <label htmlFor="lastName" className="col-sm-2"><h3>Lastname</h3></label>
                                <input id="lastName" onChange={this.handleInformation} type="text" className="input" placeholder="Last Name"></input>
                                <div style={{fontSize: "10px", color: "red"}}>
                                    {this.state.lastNameError}
                                </div>
                                <label htmlFor="email" className="col-sm-2"><h3>Email</h3></label>
                                <input id="email" onChange={this.handleInformation} type="email" className="input" placeholder="Email"></input>
                                <div style={{fontSize: "10px", color: "red"}}>
                                    {this.state.emailError}
                                </div>
                                <label htmlFor="username" className="col-sm-2"><h3>Username</h3></label>
                                <input id="username" onChange={this.handleInformation} type="text" className="input" placeholder="Username"></input>
                                <div style={{fontSize: "10px", color: "red"}}>
                                    {this.state.usernameError}
                                </div>
                                <label htmlFor="password" className="col-sm-2"><h3>Password</h3></label>
                                <input id="password" onChange={this.handleInformation} type="password" className="input" placeholder="Password"></input>
                                <div style={{fontSize: "10px", color: "red"}}>
                                    {this.state.passwordError}
                                </div>
                                <div className="buttonLogin">
                                    <button type="submit" className="myButtonLogin">Register</button>
                                </div>
                            </form>
                            <h4><a href="login" className="loginFooter" style={{ color: "#1eb980"}}>Already have an Account?</a> Sign In!</h4>
                        </div>
                        <hr/>
                        <p>We hope to welcome you to Nutree Health! Please follow the links to view Nutrees <a href="register" className="loginFooter" style={{ color: "#1eb980"}}>Terms & Conditions</a> and <a href="register" className="loginFooter" style={{ color: "#1eb980"}}>Privacy Policy</a>.</p> 
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
         );
    }
}
 
export default Register;