/* eslint-disable */
import React, {Component, useEffect, useState} from "react";
import logo from "./logo.svg";
import "./App.css";
import {Helmet} from "react-helmet";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  link,
  useHistory,
  withRouter,
  useParams,
} from "react-router-dom";
import Authen from "./pages/1)Authen.js";
import D_Main from "./pages/2)Donor_Main.js";
import D_Add from "./pages/2.0)Donor_ItemAdd.js";
import D_Item from "./pages/2.1)Donor_ItemDetail.js";
import D_Deli from "./pages/2.2)Donor_Delivery.js";
import D_DeliFar from "./pages/2.2)Donor_DeliveryFar.js";
import D_Rewa from "./pages/2.3)Donor_RewardDetail.js";
import R_Main from "./pages/3)Receiver_Main.js";
import R_Item from "./pages/3.1)Receiver_ItemDetail.js";
import R_Noti from "./pages/3.2)Receiver_Notify.js";
import S_Main from "./pages/4)Sponsor_Main.js";
import S_Add from "./pages/4.0)Sponsor_RewardAdd.js";
import S_Rewa from "./pages/4.1)Sponsor_RewardDetail.js";
import S_QR from "./pages/4.2)Sponsor_QR.js";
import S_QRview from "./pages/4.2)Sponsor_QRview.js";
import S_AQR from "./pages/4.2)Sponsor_AQR.js";
import S_AQRview from "./pages/4.2)Sponsor_AQRview.js";
import I_Report from "./pages/5)Item_Report.js";
import I_Report2 from "./pages/5)Reward_Report.js";

function App() {
  return (
    <div className="App">
      <div>
        <Helmet>
          <script
            async="true"
            src="http://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"
          />
        </Helmet>

        <Router>
          <Switch>
            <Route path="/" exact component={Authen} />
            <Route path="/d_main/:Donor_ID" exact component={D_Main} />
            <Route path="/d_main/:Donor_ID/d_add" exact component={D_Add} />
            <Route path="/d_main/:Donor_ID/d_item/:Item_ID" exact component={D_Item} />
            <Route path="/d_main/:Donor_ID/d_deli/:Request_ID" exact component={D_Deli} />
            <Route path="/d_main/:Donor_ID/d_delifar/:Request_ID" exact component={D_DeliFar} />
            <Route path="/d_main/:Donor_ID/d_rewa/:Reward_ID" exact component={D_Rewa} />
            <Route path="/r_main/:Student_ID" exact component={R_Main} />
            <Route path="/r_main/:Student_ID/r_item/:Item_ID" exact component={R_Item} />
            <Route path="/r_main/:Student_ID/r_noti/:School_ID" exact component={R_Noti} />
            <Route path="/s_main/:Sponsor_ID" exact component={S_Main} />
            <Route path="/s_main/:Sponsor_ID/s_add" exact component={S_Add} />
            <Route path="/s_main/:Sponsor_ID/s_rewa/:Reward_ID" exact component={S_Rewa} />
            <Route path="/s_main/:Sponsor_ID/s_qr/:Request_ID" exact component={S_QR} />
            <Route path="/s_main/:Sponsor_ID/s_qrview/:Request_ID" exact component={S_QRview} />
            <Route path="/s_main/:Sponsor_ID/s_aqr/:Request_ID" exact component={S_AQR} />
            <Route path="/s_main/:Sponsor_ID/s_aqrview/:Request_ID" exact component={S_AQRview} />
            <Route path="/r_main/:Student_ID/r_item/:Item_ID/i_report" exact component={I_Report} />
            <Route path="/d_main/:Donor_ID/d_rewa/:Reward_ID/i_report2" exact component={I_Report2} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;