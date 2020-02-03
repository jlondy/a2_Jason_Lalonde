import React, { Component } from 'react';
import '../css/profileComponent.css';
import ImageOfMe from '../images/MyImage.PNG';

class ProfileComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="content" style={{height: "100%", paddingTop: "80px"}}>
                <div className="row" style={{height: "50%"}}>
                    <div className="col-md-6" style={{height: "100%", width: "100%"}}>
                        <div className="row" style={{paddingTop: "15px", paddingBottom: "15px", height: "100%"}}>

                            {/* USER NUTRITION CONTAINER */}
                            <div className="col-md-12 badge badge-dark text-wrap overflow-auto" style={{height: "100%"}}>
                                <div className="containerHeader">
                                    <h4 className="title">
                                        USER NUTRITION
                                    </h4>
                                    <h5 className="title">
                                        <span className="glyphicon glyphicon-option-horizontal"></span>
                                    </h5> 
                                </div> 
                                <div className="containerContent">
                                    <h5 style={{textAlign: "left", paddingBottom: "10px"}}>GENERAL TARGETS</h5>
                                    <div className="infoHeader">
                                        <h6 style={{float: "left"}}>Energy - 1934.0 / 1934.0 kcal</h6>
                                        <h6 style={{float: "right"}}>100%</h6>
                                    </div>
                                    <div className="progress" style={{width: "100%"}}>
                                        <div className="progress-bar bg-info" role="progressbar" aria-valuenow="100"
                                        aria-valuemin="0" aria-valuemax="100" style={{width:"100%"}}> 
                                        </div>
                                    </div>
                                    <div className="infoHeader">
                                        <h6 style={{float: "left"}}>Alcohol - 0.1 g / 1.0 g</h6>
                                        <h6 style={{float: "right"}}>10%</h6>
                                    </div>
                                    <div className="progress" style={{width: "100%"}}>
                                        <div className="progress-bar bg-info" role="progressbar" aria-valuenow="10"
                                        aria-valuemin="0" aria-valuemax="100" style={{width:"10%"}}> 
                                        </div>
                                    </div>
                                    <div className="infoHeader">
                                        <h6 style={{float: "left"}}>Caffeine - 34.0 mg / 40.0 mg</h6>
                                        <h6 style={{float: "right"}}>85%</h6>
                                    </div>
                                    <div className="progress" style={{width: "100%"}}>
                                        <div className="progress-bar bg-info" role="progressbar" aria-valuenow="85"
                                        aria-valuemin="0" aria-valuemax="100" style={{width:"85%"}}> 
                                        </div>
                                    </div>
                                    <div className="infoHeader">
                                        <h6 style={{float: "left"}}>Water - 740.0 / 3700.0 g</h6>
                                        <h6 style={{float: "right"}}>20%</h6>
                                    </div>
                                    <div className="progress" style={{width: "100%"}}>
                                        <div className="progress-bar" role="progressbar" aria-valuenow="20"
                                        aria-valuemin="0" aria-valuemax="100" style={{width:"20%"}}> 
                                        </div>
                                    </div>
                                    <div className="infoHeader">
                                        <h6 style={{float: "left"}}>Vitamin A - 0.0 / 3000.0 IU</h6>
                                        <h6 style={{float: "right"}}>0%</h6>
                                    </div>
                                    <div className="progress" style={{width: "100%"}}>
                                        <div className="progress-bar" role="progressbar" aria-valuenow="0"
                                        aria-valuemin="0" aria-valuemax="100" style={{width:"0%"}}> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6" style={{height: "100%",width: "100%"}}>
                        <div className="row" style={{paddingTop: "15px", paddingBottom: "15px", height: "100%"}}>

                            {/* MARCO TRACKING CONTAINER */}
                            <div className="col-md-12 badge badge-dark text-wrap overflow-auto" style={{height: "100%"}}>
                                <div className="containerHeader">
                                    <h4 className="title">
                                        MARCO TRACKING
                                    </h4>
                                    <h5 className="title">
                                        <span className="glyphicon glyphicon-option-horizontal"></span>
                                    </h5>
                                </div>
                                <div className="containerContent">
                                    <h5 style={{textAlign: "left", paddingBottom: "10px"}}>MACRONUTRIENT TARGETS</h5>
                                    <div className="infoHeader">
                                        <h6 style={{float: "left"}}>Energy - 1934.0 / 1934.0 kcal</h6>
                                        <h6 style={{float: "right"}}>100%</h6>
                                    </div>
                                    <div className="progress" style={{width: "100%"}}>
                                        <div className="progress-bar bg-info" role="progressbar" aria-valuenow="100"
                                        aria-valuemin="0" aria-valuemax="100" style={{width:"100%"}}> 
                                        </div>
                                    </div>
                                    <div className="infoHeader">
                                        <h6 style={{float: "left"}}>Protein - 12.8 g / 120.8 g</h6>
                                        <h6 style={{float: "right"}}>10%</h6>
                                    </div>
                                    <div className="progress" style={{width: "100%"}}>
                                        <div className="progress-bar bg-info" role="progressbar" aria-valuenow="10"
                                        aria-valuemin="0" aria-valuemax="100" style={{width:"10%"}}> 
                                        </div>
                                    </div>
                                    <div className="infoHeader">
                                        <h6 style={{float: "left"}}>Net Carbs - 96.6 g / 193.2 g</h6>
                                        <h6 style={{float: "right"}}>50%</h6>
                                    </div>
                                    <div className="progress" style={{width: "100%"}}>
                                        <div className="progress-bar bg-info" role="progressbar" aria-valuenow="50"
                                        aria-valuemin="0" aria-valuemax="100" style={{width:"50%"}}> 
                                        </div>
                                    </div>
                                    <div className="infoHeader">
                                        <h6 style={{float: "left"}}>Fat - 22.53 g / 75.1 g</h6>
                                        <h6 style={{float: "right"}}>30%</h6>
                                    </div>
                                    <div className="progress" style={{width: "100%"}}>
                                        <div className="progress-bar bg-info" role="progressbar" aria-valuenow="30"
                                        aria-valuemin="0" aria-valuemax="100" style={{width:"30%"}}> 
                                        </div>
                                    </div>
                                    <div className="infoHeader">
                                        <h6 style={{float: "left"}}>Calories - 1000 / 3000 Cals</h6>
                                        <h6 style={{float: "right"}}>33.33%</h6>
                                    </div>
                                    <div className="progress" style={{width: "100%"}}>
                                        <div className="progress-bar" role="progressbar" aria-valuenow="33.33"
                                        aria-valuemin="0" aria-valuemax="100" style={{width:"33.33%"}}> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{height: "50%"}}>
                    <div className="col-md-6 " style={{height: "100%"}}>
                        <div className="row" style={{paddingTop: "15px", paddingBottom: "15px",height: "100%"}}>

                            {/* CALORIE INTAKE CONTAINER */}
                            <div className="col-md-12 badge badge-dark text-wrap overflow-auto" style={{height: "100%"}}>
                                <div className="containerHeader">
                                    <h4 className="title">
                                        CALORIE INTAKE
                                    </h4> 
                                    <h5 className="title">
                                        <span className="glyphicon glyphicon-option-horizontal"></span>
                                    </h5>
                                </div>
                                <h2 style={{fontSize: "100px", paddingTop: "15px", color: "#337ab7"}}>1000</h2>
                                <h3>Total Calories Consumed Today</h3>
                                
                            </div>
                        </div>
                    </div> 
                    <div className="col-md-6" style={{height: "100%"}}>
                        <div className="row" style={{paddingTop: "15px", paddingBottom: "15px", height: "100%"}}>

                            {/* EXPENSE TRACKING CONTAINER */}
                            <div className="col-md-12 badge badge-dark text-wrap overflow-auto" style={{height: "100%"}}>
                                <div className="containerHeader">
                                    <h4 className="title">
                                        EXPENSE TRACKING
                                    </h4>
                                    <h5 className="title">
                                        <span className="glyphicon glyphicon-option-horizontal"></span>
                                    </h5>
                                </div>
                                <div className="containerContent">
                                    {/* This image was taken by Jason Lalonde (myself) */}
                                    <img src={ImageOfMe} alt="" style={{width: "10%"}}/>
                                    <h4 style={{color: "white", paddingTop: "25px", width: "60%"}}>
                                        You owe Jason $20 in your CS Group
                                    </h4>
                                    {/* This image was taken by Jason Lalonde (myself) */}
                                    <img src={ImageOfMe} alt="" style={{width: "10%"}}/>
                                    <h4 style={{color: "white", paddingTop: "25px",  width: "70%"}}>
                                        You owe Jason $35 in your Roommates Group
                                    </h4>
                                    <div className="payButton" style={{width: "100%", paddingTop: "40px", paddingRight: "25px", float: "right"}}>
                                        <button type="button" className="btn" style={{color: "black", fontSize: "15px", float: "right", backgroundColor: "#337ab7"}}>PAY GROUP MEMBERS</button>
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
 
export default ProfileComponent;