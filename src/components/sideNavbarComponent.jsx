import React, { Component } from 'react';
import '../css/sideNavbarComponent.css';
import {BrowserRouter as  Link} from "react-router-dom";

class SideNavbar extends Component {
    
    constructor(){
        super();

        this.state = {
            sideNav: false
        }
    }
    //change navigation state
    changeNav(){
        this.setState({sideNav: !this.state.sideNav})
    }

    render() { 
        //check if navigation is open or closed
        let newStyle = this.state.sideNav ? "openNav" : "closeNav";
        return ( 
            <div className="bg-dark" style={{width: "100%"}}>
                
                {/* SLIDING NAVIGATION / SETTING STATE */}
                <div className={newStyle}>
                    <h2 style={{paddingTop: "80px"}}><a href="profile" className="myListHeader">MY ACCOUNT</a></h2>
                    <ul>
                        <li><a href="profile" className="myList">USER NUTRITION</a></li>
                        <li><a href="profile" className="myList">CALORIE INTAKE</a></li>
                        <li><a href="profile" className="myList">MARCO TRACKING</a></li>
                        <li><a href="profile" className="myList">EXPENSE TRACKING</a></li>
                    </ul>
                    <h2>GROUP CHATS</h2>
                    <ul>
                        <li>CS GROUP</li>
                        <li>ROOMMATES</li>
                        <li>VOLLEYBALL TEAM</li>
                        <li>FRIENDS GROUP</li>
                    </ul>
                    <h2><a href="browse" className="myListHeader">BROWSE</a></h2>
                    <ul>
                        <li><a href="browse" className="myList">FAVOURITES</a></li>
                        <li><a href="browse" className="myList">FOOD</a></li>
                        <li><a href="browse" className="myList">FRIENDS</a></li>
                        <li><a href="browse" className="myList">RECIPES</a></li>
                    </ul>
                </div>

                {/* TOP NAVIGATION */}
                <div className="header bg-dark fixed-top" style={{borderBottom: "solid #1eb980"}}>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="leftNav">
                                {/* OPEN OR CLOSE NAVIGATION BUTTON */}
                                <span onClick={this.changeNav.bind(this)} className="glyphicon glyphicon-menu-hamburger"></span>
                                <Link to="/profile"><h1 className="" style={{fontSize: "25px", float: "right",paddingBottom: "15px", color: "#1eb980",paddingLeft: "5px"}}>NUTREE</h1></Link>
                            </div>
                            <div className="rightNav">
                                <span className="glyphicon glyphicon-user"></span>
                                <span className="glyphicon glyphicon-bell"></span>
                                <a href="browse"><span className="glyphicon glyphicon-search"></span></a>
                                <a href="login"><span className="glyphicon glyphicon-log-out"></span></a>
                            </div>
                        </div>                          
                    </div>
                </div> 
            </div>
        );
    }
}
 
export default SideNavbar;