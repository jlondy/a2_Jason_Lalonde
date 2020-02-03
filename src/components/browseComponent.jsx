import React, { Component } from 'react';
import '../css/browseComponent.css';

class Browse extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="content" style={{height: "780px", paddingTop: "80px"}}>
                <div className="row" style={{height: "100%"}}>
                    <div className="col-md-12" style={{height: "100%", width: "100%"}}>
                        <div className="row" style={{paddingTop: "15px", paddingBottom: "15px", height: "100%"}}>
                            <div className="col-md-12 badge badge-dark text-wrap overflow-auto" style={{height: "100%"}}>

                                {/* BROWSING HEADER */}
                                <div className="containerHeader">
                                    <h4 className="title" style={{paddingRight: "15px"}}>
                                        BROWSE
                                    </h4>
                                    <input className="searchBar" type="text" placeholder="Search"></input>
                                    <h5 className="title">
                                        <span className="glyphicon glyphicon-option-horizontal"></span>
                                    </h5> 
                                </div> 
                                <div className="containerBrowse">
                                    
                                    {/* BROWSING CATEGORIES */}
                                    <div className="browseButtons">
                                        <div className="buttonRegister">
                                            <button type="submit" className="myButton">Favourites</button>
                                            <button type="submit" className="myButton">Food</button>
                                            <button type="submit" className="myButton" style={{color: "black"}}>friends</button>
                                            <button type="submit" className="myButton">Recipes</button>
                                        </div>
                                    </div>
                                    <h2 style={{textAlign: "center", paddingTop: "10px", fontSize: "60px"}}>FRIENDS</h2>
                                    <hr/>

                                    {/* FRIENDS LIST */}
                                    <div className="friends">
                                        <ul>
                                            <li>Anna</li>
                                            <li>Amelia</li>
                                            <li>Alexander</li>
                                            <li>Avery</li>
                                            <li>Aiden</li>
                                            <li>Abigail</li>
                                            <li>Anthony</li>
                                            <li>Aria</li>
                                            <li>Ariana</li>
                                            <li>Addison</li>
                                            <li>Adam</li>
                                            <li>Alice</li>
                                        </ul>
                                    </div>
                                    <div className="friends">
                                        <ul>
                                            <li>Bobby</li>
                                            <li>Blake</li>
                                            <li>Bethanya</li>
                                            <li>Bella</li>
                                            <li>Beatrice</li>
                                            <li>Beth</li>
                                            <li>Blair</li>
                                            <li>Betsy</li>
                                            <li>Brody</li>
                                            <li>Brandon</li>
                                            <li>Betty</li>
                                            <li>Bonnie</li>
                                        </ul>
                                    </div>
                                    <div className="friends">
                                        <ul>
                                            <li>Charlotte</li>
                                            <li>Camila</li>
                                            <li>Chloe</li>
                                            <li>Carl</li>
                                            <li>Caroline</li>
                                            <li>Clark</li>
                                            <li>Cora</li>
                                            <li>Clare</li>
                                            <li>Cecilia</li>
                                            <li>Callie</li>
                                            <li>Cassy</li>
                                            <li>Camile</li>
                                        </ul>
                                    </div>
                                    <div className="friends">
                                        <ul>
                                            <li>David</li>
                                            <li>Daniel</li>
                                            <li>Dylan</li>
                                            <li>Dominic</li>
                                            <li>Diego</li>
                                            <li>Damien</li>
                                            <li>Drake</li>
                                            <li>Dakota</li>
                                            <li>Dani</li>
                                            <li>Dexter</li>
                                            <li>Drew</li>
                                            <li>Duke</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>                 
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Browse;