import React, { useState } from 'react';
import { BrowserRouter as Router,NavLink, Routes, Route } from 'react-router-dom';
import './navbar.css';
import Webcam from "react-webcam";

// import logo from '../../assets/folder.png'
// import upload from '../../assets/upload.png'
// import user from '../../assets/user.png'
const Navbar = () => {
    const [showWebcam, setShowWebcam] = useState(false);

    const videoConstraints = {
        width: { min: 480 },
        height: { min: 720 },
        aspectRatio: 0.6666666667
    };

  return (
  <>                     
                <div className='navbar'>
                    <div className="navbar-left">
                        {/* <img src={logo} alt="" srcSet="" /> */}
                        <h3><span>Guardians</span></h3>
                        <h2>HIDE</h2>
                    </div>
                    <div className="navbar-center">
                    <div style={{ margin: "10px" }}>
                        <NavLink
                            to="/"
                            style={({ isActive }) => ({
                                color: isActive
                                    ? "grey"
                                    : "white",
                            })}
                        >
                            Home
                        </NavLink>
                    </div>
                    <div style={{ margin: "10px" }}>
                        <NavLink
                            to="/chat"
                            style={({ isActive }) => ({
                                color: isActive
                                    ? "grey"
                                    : "white",
                            })}
                        >
                            Chat
                        </NavLink>
                    </div>
                   
                    <a href="https://crowd-funding-website-zeta.vercel.app/createcampaign">Donate</a>

                    <div style={{ margin: "10px" }}>
                        <NavLink
                            to="/map"
                            style={({ isActive }) => ({
                                color: isActive
                                    ? "grey"
                                    : "white",
                            })}
                        >
                           Map
                        </NavLink>
                    </div>

                    <div style={{ margin: "10px" }}>
                        <NavLink
                            to="/training"
                            style={({ isActive }) => ({
                                color: isActive
                                    ? "grey"
                                    : "white",
                            })}
                        >
                            Training
                        </NavLink>
                    </div>

                    <div style={{ margin: "10px" }}>
                        <NavLink
                            to="/Services"
                            style={({ isActive }) => ({
                                color: isActive
                                    ? "grey"
                                    : "white",
                            })}
                        >
                           Services
                        </NavLink>
                    </div>

                    </div>
                    <div className="navbar-right">
                     {/* Button to toggle webcam */}
                     <button className="dropfile" onClick={() => setShowWebcam(true)}>
                        Add Feed
                    </button>
                </div>
            </div>

            {/* Conditional rendering of webcam component */}
            {showWebcam && (
                <div className="webcam-container">
                    <Webcam
                        videoConstraints={videoConstraints}
                        width={480}
                        height={720}
                    />
                </div>
            )}
                
           
  </>
  );
};

export default Navbar;
