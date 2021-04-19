/* eslint-disable */
import React, { Component, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import book from "./resources/web_logo_bg.png";
import ScriptTag from "react-script-tag";
import props from "prop-types";
import eng from "./resources/imgs/authen/eng.png";
import tha from "./resources/imgs/authen/tha.png";
import Axios from "axios";
import $ from "jquery";
window.$ = $;
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  withRouter,
} from "react-router-dom";

function App() {
  $('a.redirect').click(function (event) {
    event.preventDefault();
    var href = $(this).attr('href')
    window.location='http://localhost:3000' + href;
  });
	{/* Receiver */}
  const [R_nameReg, setR_nameReg] = useState("");
  const [R_emailReg, setR_emailReg] = useState("");
  const [R_imageReg, setR_imageReg] = useState("");
  const [R_passReg, setR_passReg] = useState("");
  const R_regis = () => {
  	Axios.post('http://localhost:5000/R_regis', {
        Username: R_nameReg,
        Email: R_emailReg,
        Image: R_imageReg,
        Password: R_passReg,
      }
    ).then((response) => {
      console.log(response);
    });
  };
  {/* Donor */}
  const [D_nameReg, setD_nameReg] = useState("");
  const [D_emailReg, setD_emailReg] = useState("");
  const [D_passReg, setD_passReg] = useState("");

    return (
      <div className="App">
        <div>
          <Helmet>
            <script
              async="true"
              src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"
            />
            <script
              async="true"
              src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"
            />
            <script async="true" src="./resources/js/jquery (0).js" />
            <script async="true" src="./resources/js/bootstrap.min (0).js" />
            <script async="true" src="./resources/js/vegas.min.js" />
            <script async="true" src="./resources/js/wow.min.js" />
            <script async="true" src="./resources/js/custom.js" />
            <script async="true" src="./resources/js/smoothscroll.js" />
            <script async="true" src="javascript/smoothscroll.js" />
            <title>Phlad Rian</title>
            <meta charSet="utf-8" />
            <link
              rel="icon"
              href="resources/imgs/book-icon.png"
              sizes="16x16"
            />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta name="theme-color" content="#000000" />
            <meta
              name="description"
              content="Website created using create-react-app"
            />
            <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
            <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
            <link rel="stylesheet" href="resources/css/bootstrap.min (0).css" />
            <link rel="stylesheet" href="resources/css/animate.min.css" />
            <link rel="stylesheet" href="resources/css/et-line-font.css" />
            <link
              rel="stylesheet"
              href="resources/css/font-awesome.min (0).css"
            />
            <link rel="stylesheet" href="resources/css/vegas.min.css" />
            <link rel="stylesheet" href="resources/css/style.css" />
            <link
              href="https://fonts.googleapis.com/css?family=Rajdhani:400,500,700"
              rel="stylesheet"
              type="text/css"
            />
          </Helmet>

          <style>{`
  				.reddit 
      		{
          	border: 2px solid red;
      		}
    			.reddot:hover 
      		{
          	border: 2px solid red;
      		}
  				`}</style>

          <section
            id="home"
            style={{
              backgroundImage: `url("resources/imgs/authen/slide-1.jpg")`,
              backgroundSize: "cover",
            }}
          >
            <div className="container">
              <div className="row">
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
                <div className="col-md-offset-2 col-md-8 col-sm-12">
                  <div className="home-thumb">
                    <br />
                    <br />
                    <br />
                    <img src={book} width={125} height={125} />
                    <br />
                    <br />
                    <br />
                    <h1
                      className="wow fadeInUp"
                      data-wow-delay="0.4s"
                      style={{ color: "#F39C12" }}
                    >
                      Welcome to
                      <br />
                      Phlad Rian Community
                    </h1>
                    <a
                      href="#about"
                      data-toggle="modal"
                      data-target="#modal1"
                      className="btn btn-lg btn-default smoothScroll wow fadeInUp hidden-xs"
                      data-wow-delay="0.6s"
                    >
                      Sign In
                    </a>
                    <a
                      data-toggle="modal"
                      data-target="#modal2"
                      className="btn btn-lg btn-success smoothScroll wow fadeInUp"
                      data-wow-delay="0.8s"
                    >
                      Receiver Sign Up
                    </a>
                    <a
                      data-toggle="modal"
                      data-target="#modal3"
                      className="btn btn-lg btn-success smoothScroll wow fadeInUp"
                      data-wow-delay="0.8s"
                    >
                      Donor Sign Up
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <h3 className="wow fadeInUp" data-wow-delay="1.0s">
                      <p><strong>"Let's share our learning tools together!"</strong></p>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/*- DIV SIGN IN POP -*/}
          <div
            className="modal fade"
            id="modal1"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="myModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content modal-popup">
                <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                  <br />
                  <h2 className="modal-title">Account Access</h2>
                </div>
                <form>
                  <br />
                  <br />
                  <br />
                  <input
                    name="username"
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Username"
                  />
                  <br />
                  <br />
                  <br />
                  <input
                    name="password"
                    type="text"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                  />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <input
                    name="submit"
                    type="submit"
                    class="redirect"
                    className="form-control"
                    id="submit"
                    defaultValue="Log-in"
                    a href='#'
                    onclick={"/s_main"}
                  />
                </form>
                <p>Welcome back to our community!</p>
                <br />
              </div>
            </div>
          </div>

          {/*- DIV SIGN UP POP -*/}
          <div
            className="modal fade"
            id="modal2"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="myModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content modal-popup">
                <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                  <br />

                  {/* Receiver */}
                  <h2 className="modal-title">Receiver Registration</h2>
                </div>
                <form>
                  <input
                    name="username"
                    type="text"
                    className="form-control"
                    id="Username"
                    placeholder="Username"
                    onChange={(x)=>setR_nameReg(x.target.value)}
                  />
                  <input
                    name="email"
                    type="text"
                    className="form-control"
                    id="Email"
                    placeholder="Email Address"
                    onChange={(x)=>setR_emailReg(x.target.value)}
                  />
                  <input
                    name="password"
                    type="password"
                    className="form-control"
                    id="Password"
                    placeholder="Password"
                    onChange={(x)=>setR_passReg(x.target.value)}
                  />
                  <input
                    name="c_password"
                    type="password"
                    className="form-control"
                    id="C_password"
                    placeholder="Confirm Password"
                  />
                  <label
                    for="Student ID"
                    style={{ color: "red", fontSize: "15px" }}
                  >
                    Student ID
                  </label>
                  <input
                    name="Student ID"
                    type="file"
                    className="form-control"
                    id="Image"
                    placeholder="Student ID"
                    onChange={(x)=>setR_imageReg(x.target.value)}
                  />
                  <input
                    name="submit"
                    type="submit"
                    className="form-control"
                    id="submit"
                    defaultValue="Create Account"
                    onClick={R_regis}
                  />
                </form>
                <p>Thank you for your visiting!</p>
                <br />
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="modal3"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="myModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content modal-popup">
                <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                  <br />
                  
                  {/* Donor */}
                  <h2 className="modal-title">Donor Registration</h2>
                </div>
                <form>
                  <input
                    name="username"
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Username"
                  />
                  <input
                    name="email"
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="Email Address"
                  />
                  <input
                    name="password"
                    type="text"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                  />
                  <input
                    name="c_password"
                    type="text"
                    className="form-control"
                    id="c_password"
                    placeholder="Confirm Password"
                  />
                  <br />
                  <br />
                  <br />
                  <br />
                  <input
                    name="submit"
                    type="submit"
                    class="redirect"
                    className="form-control"
                    id="submit"
                    defaultValue="Create Account"
                    a href='#'
                    onclick={"/d_main"}
                  />
                </form>
                <p>Thank you for your visiting!</p>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default withRouter(App);
