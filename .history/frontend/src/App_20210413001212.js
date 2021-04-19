/* eslint-disable */
import React, {Component, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Helmet} from "react-helmet";
import {
    BrowserRouter as Router,
    Route, Switch
} from 'react-router-dom'
import Authen from "./pages/1)Authen.js";
import D_Main from "./pages/2)Donor_Main.js";
import D_Item from "./pages/2.1)Donor_ItemDetail.js";
import D_Deli from "./pages/2.2)Donor_Delivery.js";
import D_Rewa from "./pages/2.3)Donor_RewardDetail.js";
import R_Main from "./pages/3)Receiver_Main.js";
import R_Item from "./pages/3.1)Receiver_ItemDetail.js";
import S_Main from "./pages/4)Sponsor_Main.js";
import S_Rewa from "./pages/4.1)Sponsor_RewardDetail.js";
import S_QR from "./pages/4.2)Sponsor_QR.js";

function App() {
    const [usernameReg, setUsernameReg] = useState("");
  return (
  	<div className="App">
 		<div>
  	 		<Helmet>
 				<script async="true" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"/>
				<script async="true" src="java/smoothscroll.js"/>
			</Helmet>
            <Router>
              <Switch>
                    <Route exact path="/">
                        <Authen />
                    </Route>
                    <Route exact path="/authen">
                        <Authen />
                    </Route>
                    <Route path="/d_main">
                        <D_Main />
                    </Route>
                    <Route path="/d_item">
                        <D_Item />
                    </Route>
                    <Route path="/d_deli">
                        <D_Deli />
                    </Route>
                    <Route path="/d_rewa">
                        <D_Rewa />
                    </Route>
                    <Route path="/r_main">
                        <R_Main />
                    </Route>
                    <Route path="/r_item">
                        <R_Item />
                    </Route>
                    <Route path="/s_main">
                        <S_Main />
                    </Route>
                    <Route path="/s_rewa">
                        <S_Rewa />
                    </Route>
                    <Route path="/s_qr">
                        <S_QR />
                    </Route>
              </Switch>
            </Router>
        </div>
    </div>
  );
}

export default App;
