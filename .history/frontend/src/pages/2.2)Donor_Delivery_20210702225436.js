/* eslint-disable */
import React, { Component, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import Axios from "axios";
import $ from "jquery";
import JSAlert from "js-alert";
window.$ = $;
import {
  BrowserRouter as Router,
  Route,
  Switch,
  link,
  useHistory,
  withRouter,
  useParams,
} from "react-router-dom";

history.pushState(null, document.title, location.href);
history.back();
history.forward();
window.onpopstate = function () {
  history.go(1);
};

function D_Deli() {
  const wall = window.location.origin + "/resources/imgs/wallpaper.jpg";
  const but1 = window.location.origin + "/resources/imgs/detail.png";
  const blank = window.location.origin + "/resources/imgs/shop/white.jpg";
  const del1 = window.location.origin + "/resources/imgs/shop/grab.png";
  const del2 = window.location.origin + "/resources/imgs/shop/gojek.png";
  const del3 = window.location.origin + "/resources/imgs/shop/line.png";
  const del4 = window.location.origin + "/resources/imgs/shop/kerry.png";
  const del5 = window.location.origin + "/resources/imgs/shop/thai.png";
  const del6 = window.location.origin + "/resources/imgs/shop/lala.png";
  const eng = window.location.origin + "/resources/imgs/authen/eng.png";
  const tha = window.location.origin + "/resources/imgs/authen/tha.png";

  let { Donor_ID } = useParams();
  let { Request_ID } = useParams();
  let history = useHistory();
  const [D_deliReg, setD_deliReg] = useState("");

  const D_deli = async () => {
    JSAlert.confirm("Are you sure you want to select this service?").then(
      function (result) {
        if (!result) {
          throw "exit";
        }
        Chance_up();
        JSAlert.alert("", "Item Requested!", JSAlert.Icons.Success);
        Axios.post(`http://localhost:5000/Deli_D/${Request_ID}`, {
          Company_ID: D_deliReg,
        });
        history.push(`/d_main/${Donor_ID}`);
        location.reload();
      }
    );
  };

  return (
    <div className="App">
      <div>
        <Helmet>
          <script
            async="true"
            src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"
          />
          <script async="true" src="resources/js/vendor/jquery-1.11.2.min.js" />
          <script async="true" src="resources/js/vendor/bootstrap.min.js" />
          <script async="true" src="resources/js/plugins.js" />
          <script async="true" src="resources/js/main.js" />
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <title>Phlad Rian</title>
          <meta name="description" content />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="resources/imgs/book-icon.png" sizes="16x16" />
          <link rel="stylesheet" href="resources/css/bootstrap.min.css" />
          <link rel="stylesheet" href="resources/css/bootstrap-theme.min.css" />
          <link rel="stylesheet" href="resources/css/fontAwesome.css" />
          <link rel="stylesheet" href="resources/css/templatemo-style.css" />
          <link rel="stylesheet" href="resources/css/Page_Detail.css" />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900"
            rel="stylesheet"
          />
          <link href="resources/css/bootstrap.min (2).css" rel="stylesheet" />
          <link href="resources/css/font-awesome.min.css" rel="stylesheet" />
          <link href="resources/css/prettyPhoto.css" rel="stylesheet" />
          <link href="resources/css/price-range.css" rel="stylesheet" />
          <link href="resources/css/animate.css" rel="stylesheet" />
          <link href="resources/css/main.css" rel="stylesheet" />
          <link href="resources/css/responsive.css" rel="stylesheet" />
          <link
            href="resources/css/bootstrap-responsive.min.css"
            rel="stylesheet"
          />
        </Helmet>

        <style>{`
          .swappor {
            color: white;
            background: #f39c12;
            border: 1px solid #f39c12;
          }
          .swappor:hover {
            color: #90EE90;
            background: #ebedef;
            border: 1px solid #90EE90;
          }
        `}</style>

        <div className="overlay" />
        <section className="top-part">
          <img src={wall} />
        </section>
        <section className="cd-hero">
          <br />
          <img
            src={eng}
            width={25}
            height={25}
            className="reddit"
            style={{ position: "absolute", top: 25, right: 30 }}
          />
          <img
            src={tha}
            width={25}
            height={25}
            className="reddot"
            style={{ position: "absolute", top: 25, right: 70 }}
          />
          <div className="cd-slider-nav">
            <nav>
              <span className="cd-marker item-1" />
              <ul>
                <li className="selected">
                  <a>
                    <div className="image-icon">
                      <img src={but1} width={42} height={42} />
                    </div>
                    <h6>Detail</h6>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <ul className="cd-hero-slider">
            <li className="selected">
              <div className="heading"></div>
              <div className="cd-full-width fivth-slide">
                <div className="container">
                  <div className="row">
                    <div className="col-md-13">
                      <div className="content fivth-content">
                        <div className="row">
                          <form id="contact">
                            <div className="col-md-12">
                              <table
                                className="table-condensed"
                                style={{ float: "right" }}
                              >
                                <tbody>
                                  <tr>
                                    <td className="cart_delete">
                                      <a
                                        className="cart_quantity_delete"
                                        onClick={() => {
                                          history.push(`/d_main/${Donor_ID}`);
                                          window.location.reload();
                                        }}
                                      >
                                        <i className="fa fa-times" />
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <h2
                                style={{
                                  fontSize: "18px",
                                  color: "#F39C12",
                                  textAlign: "left",
                                }}
                              >
                                Most suitable service
                              </h2>
                              <br />
                              <div className="brands-name">
                                <fieldset
                                  onChange={(x) => setD_deliReg(x.target.value)}
                                >
                                  <div className="col-md-4">
                                    <img
                                      htmlFor="grab"
                                      style={{
                                        width: "50px",
                                        height: "50px",
                                      }}
                                      className="midimg"
                                      src={del1}
                                      alt=""
                                    />
                                    <input
                                      type="radio"
                                      id="grab"
                                      name="DeliChoice"
                                      key="1"
                                      value="1"
                                      style={{ marginLeft: "48%" }}
                                      defaultChecked
                                    />
                                  </div>
                                  <div className="col-md-4">
                                    <img
                                      htmlFor="get"
                                      style={{
                                        width: "50px",
                                        height: "50px",
                                      }}
                                      className="midimg"
                                      src={del2}
                                      alt=""
                                    />
                                    <input
                                      type="radio"
                                      id="get"
                                      name="DeliChoice"
                                      key="2"
                                      value="2"
                                      style={{ marginLeft: "48%" }}
                                    />
                                  </div>
                                  <div className="col-md-4">
                                    <img
                                      htmlFor="line"
                                      style={{
                                        width: "50px",
                                        height: "50px",
                                      }}
                                      className="midimg"
                                      src={del3}
                                      alt=""
                                    />
                                    <input
                                      type="radio"
                                      id="line"
                                      name="DeliChoice"
                                      key="3"
                                      value="3"
                                      style={{ marginLeft: "48%" }}
                                    />
                                  </div>
                                </fieldset>
                              </div>
                              <br />
                              <h2
                                style={{
                                  fontSize: "18px",
                                  color: "#F39C12",
                                  textAlign: "left",
                                }}
                              >
                                Alternative service
                              </h2>
                              <br />
                              <div className="brands-name">
                                <fieldset
                                  onChange={(x) => setD_deliReg(x.target.value)}
                                >
                                  <div className="col-md-4">
                                    <img
                                      htmlFor="kerry"
                                      style={{
                                        width: "50px",
                                        height: "50px",
                                      }}
                                      className="midimg"
                                      src={del4}
                                      alt=""
                                    />
                                    <input
                                      type="radio"
                                      id="kerry"
                                      name="DeliChoice"
                                      key="4"
                                      value="4"
                                      style={{ marginLeft: "48%" }}
                                    />
                                  </div>
                                  <div className="col-md-4">
                                    <img
                                      htmlFor="thaip"
                                      style={{
                                        width: "50px",
                                        height: "50px",
                                      }}
                                      className="midimg"
                                      src={del5}
                                      alt=""
                                    />
                                    <input
                                      type="radio"
                                      id="thaip"
                                      name="DeliChoice"
                                      key="5"
                                      value="5"
                                      style={{ marginLeft: "48%" }}
                                    />
                                  </div>
                                  <div className="col-md-4">
                                    <img
                                      htmlFor="lala"
                                      style={{
                                        width: "50px",
                                        height: "50px",
                                      }}
                                      className="midimg"
                                      src={del6}
                                      alt=""
                                    />
                                    <input
                                      type="radio"
                                      id="lala"
                                      name="DeliChoice"
                                      key="6"
                                      value="6"
                                      style={{ marginLeft: "48%" }}
                                    />
                                  </div>
                                </fieldset>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <fieldset>
                                <br />
                                <br />
                              </fieldset>
                            </div>
                            <div className="col-md-12">
                              <fieldset>
                                <a
                                  className="btn swappor"
                                  style={{ float: "right" }}
                                  onClick={D_Deli}
                                >
                                  <i className="fa fa-qrcode" />
                                   Send to agency
                                </a>
                              </fieldset>
                            </div>
                            <div className="col-md-12">
                              <fieldset>
                                <br />
                              </fieldset>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </section>
        <footer>
          <p>
            Copyright © 2020 | Phlad Rian, The School Equipment Donation Website
          </p>
        </footer>
      </div>
    </div>
  );
}

export default withRouter(D_Deli);
