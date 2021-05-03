/* eslint-disable */
import React, { Component, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import book from "./resources/web_logo_bg.png";
import ScriptTag from "react-script-tag";
import props from "prop-types";
import eng from "./resources/imgs/authen/eng.png";
import tha from "./resources/imgs/authen/tha.png";
import Axios from "axios";
import $ from "jquery";
import JSAlert from "js-alert";
window.$ = $;
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  withRouter,
} from "react-router-dom";

function App() {
  {
    /* Page Link */
  }
  const handleClickS = async (e) => {
    (e) => (window.location.href = "/d_main");
  };

  {
    /* Values */
  }
  var regEx1 = /(^(?!\s))+([A-Z]{1}[a-z]{1,256})+([A-Z]{1}[a-z]{1,256})+($)/;
  var regEx2 = /(^(?!\s))+([a-z0-9.]{1,256})+([@]{1}[a-z0-9]{1,256})+([.]{1}[a-z.]{2,3})+($)/;
  var regEx3 = /^\S*$/;
  var userR = document.getElementById("UsernameR");
  var mailR = document.getElementById("EmailR");
  var pass1R = document.getElementById("PasswordR");
  var pass2R = document.getElementById("C_passwordR");
  var userD = document.getElementById("UsernameD");
  var mailD = document.getElementById("EmailD");
  var pass1D = document.getElementById("PasswordD");
  var pass2D = document.getElementById("C_passwordD");
  var fileElement = document.getElementById("ImageR");
  var fileExtension = "";
  var invali = "1";
  const [A_nameLog, setA_nameLog] = useState("");
  const [A_passLog, setA_passLog] = useState("");
  const [R_nameReg, setR_nameReg] = useState("");
  const [R_emailReg, setR_emailReg] = useState("");
  const [R_imageReg, setR_imageReg] = useState("");
  const [R_passReg, setR_passReg] = useState("");
  const [D_nameReg, setD_nameReg] = useState("");
  const [D_emailReg, setD_emailReg] = useState("");
  const [D_passReg, setD_passReg] = useState("");
  {
    /* Delay */
  }
  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }
  const handleSubmit1 = async (e) => {
    e.preventDefault();
    if (invali == "0") {
      JSAlert.alert("", "Submit Success!", JSAlert.Icons.Success);
      await timeout(1000).then($(this).unbind("submit").submit());
      location.reload();
    }
  };
  const handleSubmit2 = async (e) => {
    e.preventDefault();
  };
  {
    /* String Check */
  }
  function checkStringR() {
    if (
      userR.value == "" ||
      userR.value.length < 6 ||
      regEx1.test(userR.value) == false
    ) {
      JSAlert.alert(
        "Ex: AlanWalker",
        "Please enter username using your real name and without space...",
        JSAlert.Icons.Warning
      );
      pass2R.value = "";
      throw "exit";
    }
    if (mailR.value == "" || regEx2.test(mailR.value) == false) {
      JSAlert.alert(
        "Ex: alan@gmail.com",
        "Please enter valid email...",
        JSAlert.Icons.Warning
      );
      pass2R.value = "";
      throw "exit";
    }
    if (
      pass1R.value == "" ||
      pass1R.value.length < 8 ||
      regEx3.test(pass1R.value) == false
    ) {
      JSAlert.alert(
        "",
        "Please enter password with at least 8 characters and without space...",
        JSAlert.Icons.Warning
      );
      pass2R.value = "";
      throw "exit";
    }
    if (pass2R.value == "") {
      JSAlert.alert(
        "",
        "Please enter confirm password correctly...",
        JSAlert.Icons.Warning
      );
      pass2R.value = "";
      throw "exit";
    }
    if (pass1R.value != pass2R.value) {
      JSAlert.alert(
        "",
        "Passwords did not match, please try again...",
        JSAlert.Icons.Warning
      );
      pass2R.value = "";
      throw "exit";
    }
  }
  function checkStringD() {
    if (
      userD.value == "" ||
      userD.value.length < 6 ||
      regEx1.test(userD.value) == false
    ) {
      JSAlert.alert(
        "Ex: AlanWalker",
        "Please enter username using your real name and without space...",
        JSAlert.Icons.Warning
      );
      pass2D.value = "";
      throw "exit";
    }
    if (mailD.value == "" || regEx2.test(mailD.value) == false) {
      JSAlert.alert(
        "Ex: alan@gmail.com",
        "Please enter valid email...",
        JSAlert.Icons.Warning
      );
      pass2D.value = "";
      throw "exit";
    }
    if (
      pass1D.value == "" ||
      pass1D.value.length < 8 ||
      regEx3.test(pass1D.value) == false
    ) {
      JSAlert.alert(
        "",
        "Please enter password with at least 8 characters and without space...",
        JSAlert.Icons.Warning
      );
      pass2D.value = "";
      throw "exit";
    }
    if (pass2D.value == "") {
      JSAlert.alert(
        "",
        "Please enter confirm password correctly...",
        JSAlert.Icons.Warning
      );
      pass2D.value = "";
      throw "exit";
    }
    if (pass1D.value != pass2D.value) {
      JSAlert.alert(
        "",
        "Passwords did not match, please try again...",
        JSAlert.Icons.Warning
      );
      pass2D.value = "";
      throw "exit";
    }
  }

  {
    /* EmailR Post */
  }
  const E_postR = async () => {
    Axios.post("http://localhost:5000/E_post", {
      Email: R_emailReg,
    }).then((response) => {
      console.log(response);
    });
  };

  {
    /* EmailR Get */
  }
  const E_getR = async () => {
    Axios.post("http://localhost:5000/E_get", {
      Email: R_emailReg,
    }).then((response) => {
      if (response.data.message) {
        invali = "0";
      } else {
        invali = "1";
        JSAlert.alert(
          "",
          "This email is already exist...",
          JSAlert.Icons.Failed
        );
        pass2R.value = "";
        throw "exit";
      }
    });
  };

  {
    /* NameR Post */
  }
  const N_postR = async () => {
    Axios.post("http://localhost:5000/N_post", {
      Username: R_nameReg,
    }).then((response) => {
      console.log(response);
    });
  };

  {
    /* NameR Get */
  }
  const N_getR = async () => {
    Axios.post("http://localhost:5000/N_get", {
      Username: R_nameReg,
    }).then((response) => {
      if (response.data.message) {
        E_getR();
      } else {
        invali = "1";
        JSAlert.alert(
          "",
          "This username is already exist...",
          JSAlert.Icons.Failed
        );
        pass2R.value = "";
        throw "exit";
      }
    });
  };

  {
    /* EmailD Post */
  }
  const E_postD = async () => {
    Axios.post("http://localhost:5000/E_post", {
      Email: D_emailReg,
    }).then((response) => {
      console.log(response);
    });
  };

  {
    /* EmailD Get */
  }
  const E_getD = async () => {
    Axios.post("http://localhost:5000/E_get", {
      Email: D_emailReg,
    }).then((response) => {
      if (response.data.message) {
        invali = "0";
      } else {
        invali = "1";
        JSAlert.alert(
          "",
          "This email is already exist...",
          JSAlert.Icons.Failed
        );
        pass2D.value = "";
        throw "exit";
      }
    });
  };

  {
    /* NameD Post */
  }
  const N_postD = async () => {
    Axios.post("http://localhost:5000/N_post", {
      Username: D_nameReg,
    }).then((response) => {
      console.log(response);
    });
  };

  {
    /* NameD Get */
  }
  const N_getD = async () => {
    Axios.post("http://localhost:5000/N_get", {
      Username: D_nameReg,
    }).then((response) => {
      if (response.data.message) {
        E_getD();
      } else {
        invali = "1";
        JSAlert.alert(
          "",
          "This username is already exist...",
          JSAlert.Icons.Failed
        );
        pass2D.value = "";
        throw "exit";
      }
    });
  };

  {
    /* File Check */
  }
  function checkFile() {
    if (fileElement.value.lastIndexOf(".") > 0) {
      fileExtension = fileElement.value.substring(
        fileElement.value.lastIndexOf(".") + 1,
        fileElement.value.length
      );
    }
    if (
      fileExtension.toLowerCase() != "png" &&
      fileExtension.toLowerCase() != "jpg"
    ) {
      JSAlert.alert(
        "",
        "Please select <.png, .jpg> image file for upload...",
        JSAlert.Icons.Warning
      );
      pass2R.value = "";
      throw "exit";
    }
  }

  {
    /* Receiver Post */
  }
  const R_regis = async () => {
    checkStringR();
    checkFile();
    N_getR();
    if (invali == "0") {
      N_postR();
      E_postR();
      Axios.post("http://localhost:5000/R_regis", {
        Username: R_nameReg,
        Email: R_emailReg,
        Image: R_imageReg,
        Password: R_passReg,
      }).then((response) => {
        console.log(response);
      });
    }
  };

  {
    /* Receiver Get */
  }
  const R_login = async () => {
    Axios.post("http://localhost:5000/R_login", {
      Username: A_nameLog,
      Password: A_passLog,
    }).then((response) => {
      if (response.data.message) {
        JSAlert.alert(
          "",
          "Wrong username or password...",
          JSAlert.Icons.Failed
        );
        throw "exit";
      } else {
        JSAlert.alert(
          "",
          response.data[0].Username + " - Receiver",
          JSAlert.Icons.Information
        );
        throw "exit";
      }
    });
  };

  {
    /* Donor Post */
  }
  const D_regis = async () => {
    checkStringD();
    N_getD();
    if (invali == "0") {
      N_postD();
      E_postD();
      Axios.post("http://localhost:5000/D_regis", {
        Username: D_nameReg,
        Email: D_emailReg,
        Password: D_passReg,
      }).then((response) => {
        console.log(response);
      });
    }
  };

  {
    /* Donor Get */
  }
  const D_login = async () => {
    Axios.post("http://localhost:5000/D_login", {
      Username: A_nameLog,
      Password: A_passLog,
    }).then((response) => {
      if (response.data.message) {
        R_login();
      } else {
        JSAlert.alert(
          "",
          response.data[0].Username + " - Donor",
          JSAlert.Icons.Information
        );
        throw "exit";
      }
    });
  };

  {
    /* Sponsor Get */
  }
  const S_login = async () => {
    Axios.post("http://localhost:5000/S_login", {
      Username: A_nameLog,
      Password: A_passLog,
    }).then((response) => {
      if (response.data.message) {
        D_login();
      } else {
        JSAlert.alert(
          "",
          response.data[0].Username + " - Sponsor",
          JSAlert.Icons.Information
        );
        throw "exit";
      }
    });
  };

  {
    /* Admin Get */
  }
  const A_login = async () => {
    Axios.post("http://localhost:5000/A_login", {
      Username: A_nameLog,
      Password: A_passLog,
    }).then((response) => {
      if (response.data.message) {
        S_login();
      } else {
        JSAlert.alert(
          "",
          response.data[0].Username + " - Admin",
          JSAlert.Icons.Information
        );
        throw "exit";
      }
    });
  };

  return (
    <div className="App">
      <div>
        <Helmet>
          <script
            async="true"
            src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"
          />
          <script async="true" src="./resources/js/jquery (0).js" />
          <script async="true" src="./resources/js/bootstrap.min (0).js" />
          <script async="true" src="./resources/js/vegas.min.js" />
          <script async="true" src="./resources/js/wow.min.js" />
          <script async="true" src="./resources/js/custom.js" />
          <script async="true" src="./resources/js/smoothscroll.js" />
          <script async="true" src="javascript/smoothscroll.js" />
          <script
            async="true"
            src="https://npmcdn.com/js-alert/dist/jsalert.min.js"
          />
          <title>Phlad Rian</title>
          <meta charSet="utf-8" />
          <link rel="icon" href="resources/imgs/book-icon.png" sizes="16x16" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
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
                  <h1 className="wow fadeInUp" style={{ color: "#F39C12" }}>
                    Welcome to
                    <br />
                    Phlad Rian Community
                  </h1>
                  <a
                    href=""
                    data-toggle="modal"
                    data-target="#modal1"
                    className="btn btn-lg btn-default wow fadeInUp hidden-xs"
                  >
                    Sign In
                  </a>
                  <a
                    data-toggle="modal"
                    data-target="#modal2"
                    className="btn btn-lg btn-success wow fadeInUp"
                  >
                    Receiver Sign Up
                  </a>
                  <a
                    data-toggle="modal"
                    data-target="#modal3"
                    className="btn btn-lg btn-success wow fadeInUp"
                  >
                    Donor Sign Up
                  </a>
                  <br />
                  <br />
                  <br />
                  <br />
                  <h3 className="wow fadeInUp">
                    <p>
                      <strong>
                        "Let's share our learning tools together!"
                      </strong>
                    </p>
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
              <form onSubmit={handleSubmit2}>
                <br />
                <br />
                <br />
                <input
                  type="text"
                  className="form-control"
                  id="UsernameL"
                  placeholder="Username"
                  required
                  onChange={(z) => setA_nameLog(z.target.value)}
                />
                <br />
                <br />
                <br />
                <input
                  type="password"
                  className="form-control"
                  id="PasswordL"
                  placeholder="Password"
                  required
                  onChange={(z) => setA_passLog(z.target.value)}
                />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <input
                  type="submit"
                  className="form-control"
                  id="LogIn"
                  onClick={A_login}
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
              <form onSubmit={handleSubmit1}>
                <input
                  type="text"
                  className="form-control"
                  id="UsernameR"
                  placeholder="Username"
                  pattern="[a-zA-Z]{6,}"
                  onInvalid={R_regis.exit}
                  required
                  onChange={(x) => setR_nameReg(x.target.value)}
                />
                <input
                  type="text"
                  className="form-control"
                  id="EmailR"
                  placeholder="Email Address"
                  pattern="[a-z0-9._%+-]+@[a-z0-9]+\.[a-z.]{2,5}$"
                  onInvalid={R_regis.exit}
                  required
                  onChange={(x) => setR_emailReg(x.target.value)}
                />
                <input
                  type="password"
                  className="form-control"
                  id="PasswordR"
                  placeholder="Password"
                  minLength="8"
                  onInvalid={R_regis.exit}
                  required
                  onChange={(x) => setR_passReg(x.target.value)}
                />
                <input
                  type="password"
                  className="form-control"
                  id="C_passwordR"
                  placeholder="Confirm Password"
                  minLength="8"
                  onInvalid={R_regis.exit}
                  required
                />
                <label
                  for="Student ID"
                  style={{ color: "red", fontSize: "15px" }}
                >
                  Student ID (.png, .jpg)
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="ImageR"
                  accept="image/*"
                  onInvalid={R_regis.exit}
                  required
                  onChange={(x) => setR_imageReg(x.target.value)}
                />
                <input
                  type="submit"
                  className="form-control"
                  id="RSignUp"
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
              <form onSubmit={handleSubmit1}>
                <input
                  type="text"
                  className="form-control"
                  id="UsernameD"
                  placeholder="Username"
                  pattern="[a-zA-Z]{6,}"
                  onInvalid={D_regis.exit}
                  required
                  onChange={(y) => setD_nameReg(y.target.value)}
                />
                <input
                  type="text"
                  className="form-control"
                  id="EmailD"
                  placeholder="Email Address"
                  pattern="[a-z0-9._%+-]+@[a-z0-9]+\.[a-z.]{2,5}$"
                  onInvalid={D_regis.exit}
                  required
                  onChange={(y) => setD_emailReg(y.target.value)}
                />
                <input
                  type="password"
                  className="form-control"
                  id="PasswordD"
                  placeholder="Password"
                  minLength="8"
                  onInvalid={D_regis.exit}
                  required
                  onChange={(y) => setD_passReg(y.target.value)}
                />
                <input
                  type="password"
                  className="form-control"
                  id="C_passwordD"
                  placeholder="Confirm Password"
                  minLength="8"
                  onInvalid={D_regis.exit}
                  required
                />
                <br />
                <br />
                <br />
                <br />
                <input
                  type="submit"
                  className="form-control"
                  id="DSignUp"
                  onClick={D_regis}
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
ReactDOM.render(<App />, document.getElementById("root"));
