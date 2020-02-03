import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import '../../css/login.css';
import { Redirect } from "react-router-dom";


const startState = {
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
    redirect: "/profile"
}

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            email: "",
            password: "",
            emailError: "",
            passwordError: "",
            redirect: null
         };
    }
    handleAuthentification = (user) => {
        this.setState({
            [user.target.id]: user.target.value
        })
    }
    handleSignIn = (user) => {
        user.preventDefault();
        const isValid = this.validateLoginForm();
        if(isValid){
            console.log(this.state);
            this.setState(startState);
           
        }
    }
    validateLoginForm = () => {
        let emailError = "";
        let passwordError =  "";

        if(!this.state.email.includes('@')) {
            emailError = "Invalid - Email should contain @";
        }
        if(this.state.password.length < 6) {
            passwordError = "Invalid - Password always contain 6 letters or more";
        }
        if(emailError || passwordError){
            this.setState({emailError});
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

                {/* LOGIN HEADER */}
                <div className="header bg-dark">
                    <h1 className="" style={{textAlign: "center", color: "white", paddingTop: "20px", paddingBottom: "20px"}}><span className="glyphicon glyphicon-leaf" style={{color: "#1eb980",}}></span> NUTREE</h1>
                </div>
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">

                        {/* LOGIN BODY */}
                        <div className="loginBody">
                            <h3>To continue, please log in to Nutree</h3>
                            <form className="form" onSubmit={this.handleSignIn}>
                                <label htmlFor="email" className="col-sm-2"><h3>Email</h3></label>
                                <input id="email" onChange={this.handleAuthentification} type="text" className="input" placeholder="Email" value={this.state.email}></input>
                                <div style={{fontSize: "10px", color: "red"}}>
                                    {this.state.emailError}
                                </div>
                                <label htmlFor="password" className="col-sm-2"><h3>Password</h3></label>
                                <input id="password" onChange={this.handleAuthentification} type="password" className="input" placeholder="Password" value={this.state.username}></input>
                                <div style={{fontSize: "10px", color: "red"}}>
                                    {this.state.passwordError}
                                </div>
                                <div className="buttonLogin">
                                    <button type="submit" className="myButtonLogin">LOG IN</button>
                                </div>
                            </form>
                            <h4><a href="login" className="loginFooter" style={{ color: "#1eb980"}}>Forgot your password?</a> Nutree Can help!</h4>
                        </div>
                        <hr/>
                        <div className="registerBody">
                            <h3>Dont have an account?</h3>
                            <div className="buttonRegister">
                                <Link className="link2" to="/register"><button type="submit" className="myButtonRegister">SIGN UP WITH NUTREE</button></Link>
                            </div>
                        </div>
                        <hr/> 
                        <p>We hope to welcome you to Nutree Health! Please follow the links to view Nutrees<a href="login" className="loginFooter" style={{ color: "#1eb980"}}> Terms & Conditions</a> and <a href="login" className="loginFooter" style={{ color: "#1eb980"}}>Privacy Policy</a>.</p> 
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
         );
    }
}
 
export default Login;
