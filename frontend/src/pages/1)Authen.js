/* eslint-disable */
import React, {Component, useEffect, useState} from "react";
import ReactDOM from "react-dom";
import {Helmet} from "react-helmet";
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
    /* Values */
  }
  var regEx1 = /(^(?!\s))+([A-Z]{1}[a-z]{1,256})+(\s[A-Z]{1}[a-z]{1,256})+($)/;
  var regEx2 = /(^(?!\s))+([a-z0-9.]{1,256})+([@]{1}[a-z0-9]{1,256})+([.]{1}[a-z.]{1,256})+($)/;
  var regEx3 = /^\S*$/;
  var regEx4 = /(^(?!\s))+([0]{1}[6,8,9]{1}[0-9]{1,256})+($)/;
  var regEx5 = /(^(?!\s))+([A-za-z0-9.,\s]{1,256})+([A-za-z0-9.]{1,256})+($)/;
  var userR = document.getElementById("UsernameR");
  var mailR = document.getElementById("EmailR");
  var telR = document.getElementById("PhoneR");
  var localR = document.getElementById("AddressR");
  var cardR = document.getElementById("CardR");
  var schoolR = document.getElementById("SchoolR");
  var gradeR = document.getElementById("GradeR");
  var pass1R = document.getElementById("PasswordR");
  var pass2R = document.getElementById("C_passwordR");
  var userD = document.getElementById("UsernameD");
  var mailD = document.getElementById("EmailD");
  var telD = document.getElementById("PhoneD");
  var localD = document.getElementById("AddressD");
  var pass1D = document.getElementById("PasswordD");
  var pass2D = document.getElementById("C_passwordD");
  var fileElement = document.getElementById("ImageR");
  var fileExtension = "";
  var invali = "1";
  const [A_emailLog, setA_emailLog] = useState("");
  const [A_passLog, setA_passLog] = useState("");
  const [R_nameReg, setR_nameReg] = useState("");
  const [R_emailReg, setR_emailReg] = useState("");
  const [R_phoneReg, setR_phoneReg] = useState("");
  const [R_localReg, setR_localReg] = useState("");
  const [R_schoolReg, setR_schoolReg] = useState("");
  const [R_gradeReg, setR_gradeReg] = useState("");
  const [R_cardReg, setR_cardReg] = useState("");
  const [R_imageReg, setR_imageReg] = useState("");
  const [R_passReg, setR_passReg] = useState("");
  const [D_nameReg, setD_nameReg] = useState("");
  const [D_emailReg, setD_emailReg] = useState("");
  const [D_phoneReg, setD_phoneReg] = useState("");
  const [D_localReg, setD_localReg] = useState("");
  const [D_passReg, setD_passReg] = useState("");
  const [School_List, setSchool_List] = useState([]);
  let history = useHistory();
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
    if (invali == "R") {
    	JSAlert.alert("", "Login Success!", JSAlert.Icons.Success);
      await timeout(1000).then($(this).unbind("submit").submit());
      history.push("/r_main");
      location.reload();
    }
    if (invali == "D") {
    	JSAlert.alert("", "Login Success!", JSAlert.Icons.Success);
      await timeout(1000).then($(this).unbind("submit").submit());
      history.push("/d_main");
      location.reload();
    }
    if (invali == "S") {
    	JSAlert.alert("", "Login Success!", JSAlert.Icons.Success);
      await timeout(1000).then($(this).unbind("submit").submit());
      history.push("/s_main");
      location.reload();
    }
  };
  const handleSubmit3 = async (e) => {
    JSAlert.alert("", "Password has been sent to your email...", JSAlert.Icons.Information);
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
        "Ex: Alan Walker",
        "Please enter username using real name...",
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
    if (telR.value == "" || 
    	telR.value.length != 10 ||
    	regEx4.test(telR.value) == false) {
      JSAlert.alert(
        "Ex: 0891608019",
        "Please enter phone number without <->...",
        JSAlert.Icons.Warning
      );
      pass2R.value = "";
      throw "exit";
    }
    if (localR.value == "" || 
    	localR.value.length < 25) {
      JSAlert.alert(
        "",
        "Please enter location information in full detail...",
        JSAlert.Icons.Warning
      );
      pass2R.value = "";
      throw "exit";
    }
    if (cardR.value == "" || 
    	cardR.value.length < 5 || 
    	regEx5.test(cardR.value) == false) {
      JSAlert.alert(
        "",
        "Please enter true ID number...",
        JSAlert.Icons.Warning
      );
      pass2R.value = "";
      throw "exit";
    }
    if (schoolR.value == "") {
      JSAlert.alert(
        "",
        "Please select a school...",
        JSAlert.Icons.Warning
      );
      pass2R.value = "";
      throw "exit";
    }
    if (gradeR.value == "") {
      JSAlert.alert(
        "",
        "Please select an education level...",
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
        "Ex: Alan Walker",
        "Please enter username using real name...",
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
    if (telD.value == "" || 
    	telD.value.length != 10 ||
    	regEx4.test(telD.value) == false) {
      JSAlert.alert(
        "Ex: 0891608019",
        "Please enter phone number without <->...",
        JSAlert.Icons.Warning
      );
      pass2D.value = "";
      throw "exit";
    }
    if (localD.value == "" || 
    	localD.value.length < 25) {
      JSAlert.alert(
        "",
        "Please enter location information in full detail...",
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
    /* School Get */
  }
	const SchoolBox = async () => {
    Axios.get("http://localhost:5000/School").then((response) => {
      setSchool_List(response.data);
    });
  };

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
      fileExtension.toLowerCase() != "jpeg" &&
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
    E_getR();
    if (invali == "0") {
      E_postR();
      Axios.post("http://localhost:5000/R_regis", {
        Username: R_nameReg,
        Email: R_emailReg,
        Phone: R_phoneReg,
        Address: R_localReg,
        Student_Card: R_cardReg,
        School_ID: R_schoolReg,
        Grade: R_gradeReg,
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
      Email: A_emailLog,
      Password: A_passLog,
    }).then((response) => {
      if (response.data.message) {
      	invali = "1";
        JSAlert.alert(
          "",
          "Wrong email or password...",
          JSAlert.Icons.Failed
        );
        throw "exit";
      } else {
        invali = "R";
      }
    });
  };

  {
    /* Donor Post */
  }
  const D_regis = async () => {
    checkStringD();
    E_getD();
    if (invali == "0") {
      E_postD();
      Axios.post("http://localhost:5000/D_regis", {
        Username: D_nameReg,
        Email: D_emailReg,
        Phone: D_phoneReg,
        Address: D_localReg,
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
      Email: A_emailLog,
      Password: A_passLog,
    }).then((response) => {
      if (response.data.message) {
        R_login();
      } else {
        invali = "D";
      }
    });
  };

  {
    /* Sponsor Get */
  }
  const S_login = async () => {
    Axios.post("http://localhost:5000/S_login", {
      Email: A_emailLog,
      Password: A_passLog,
    }).then((response) => {
      if (response.data.message) {
        D_login();
      } else {
        invali = "S";
      }
    });
  };

  {
    /* Admin Get */
  }
  const A_login = async () => {
    Axios.post("http://localhost:5000/A_login", {
      Email: A_emailLog,
      Password: A_passLog,
    }).then((response) => {
      if (response.data.message) {
        S_login();
      } else {
        invali = "A";
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
            backgroundPosition: "center",
  			backgroundRepeat: "no-repeat"
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
                style={{position: "absolute", top: 25, right: 30}}
              />
              <img
                src={tha}
                width={25}
                height={25}
                className="reddot"
                style={{position: "absolute", top: 25, right: 70}}
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
                  <h1 className="wow fadeInUp" style={{color: "#F39C12"}}>
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
                <h2 className="modal-title">Account Access</h2>
              </div>
              <form onSubmit={handleSubmit2}>
                <br />
                <br />
                <br />
                <input
                  type="text"
                  className="form-control"
                  id="EmailL"
                  placeholder="Email"
                  required
                  onChange={(z) => setA_emailLog(z.target.value)}
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
                <a onClick={handleSubmit3}>
      						Forgot password?
    						</a>
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
                  onInvalid={R_regis.exit}
                  required
                  onChange={(x) => setR_nameReg(x.target.value)}
                />
                <input
                  type="text"
                  className="form-control"
                  id="EmailR"
                  placeholder="Email Address"
                  onInvalid={R_regis.exit}
                  required
                  onChange={(x) => setR_emailReg(x.target.value)}
                />
                <input
                  type="text"
                  className="form-control"
                  id="PhoneR"
                  placeholder="Tel Number"
                  onInvalid={R_regis.exit}
                  required
                  onChange={(x) => setR_phoneReg(x.target.value)}
                />
                <textarea
                  type="text"
                  className="form-control"
                  rows="4"
                  id="AddressR"
                  placeholder="House Location"
                  onInvalid={R_regis.exit}
                  required
                  onChange={(x) => setR_localReg(x.target.value)}
                />
                <input
                  type="text"
                  className="form-control"
                  id="CardR"
                  placeholder="Student ID"
                  onInvalid={R_regis.exit}
                  required
                  onChange={(x) => setR_cardReg(x.target.value)}
                />
<select
                	id="SchoolR"
                  onClick={SchoolBox}
                  onInvalid={R_regis.exit}
                  required
                  onChange={(x) => setR_schoolReg(x.target.value)}
                	>
                	<option value="" disabled selected="selected">-- Select School --</option>
      {School_List.map((val, key) => (
        <option
          key={val.School_ID}
          value={val.School_ID}
        >
          {val.Name}
        </option>
      ))}
								</select>
                
                <label
                  for="Student Card"
                  style={{color: "red", fontSize: "15px"}}
                >
                  &nbsp; Student Card (.png, .jpg) &nbsp;
                </label>
                <select
                	id="GradeR"
                	onInvalid={R_regis.exit}
                  required
                  onChange={(x) => setR_gradeReg(x.target.value)}
                	>
                	<option value="" disabled selected="selected">-- Select Grade --</option>
  								<option value="P1">Prathom 1</option>
  								<option value="P2">Prathom 2</option>
  								<option value="P3">Prathom 3</option>
  								<option value="P4">Prathom 4</option>
  								<option value="P5">Prathom 5</option>
  								<option value="P6">Prathom 6</option>
  								<option value="M1">Matthayom 1</option>
  								<option value="M2">Matthayom 2</option>
  								<option value="M3">Matthayom 3</option>
  								<option value="M4">Matthayom 4</option>
  								<option value="M5">Matthayom 5</option>
  								<option value="M6">Matthayom 6</option>
								</select>
                <input
                  type="file"
                  className="form-control"
                  id="ImageR"
                  accept=".png, .jpg, .jpeg"
                  onInvalid={R_regis.exit}
                  required
                  onChange={(x) => setR_imageReg(x.target.value)}
                />
                <input
                  type="password"
                  className="form-control"
                  id="PasswordR"
                  placeholder="Password"
                  onInvalid={R_regis.exit}
                  required
                  onChange={(x) => setR_passReg(x.target.value)}
                />
                <input
                  type="password"
                  className="form-control"
                  id="C_passwordR"
                  placeholder="Confirm Password"
                  onInvalid={R_regis.exit}
                  required
                />
                <br />
                <input
                  type="submit"
                  className="form-control"
                  id="RSignUp"
                  onClick={R_regis}
                />
              </form>
              <p>Thank you for your visiting!</p>
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
                  onInvalid={D_regis.exit}
                  required
                  onChange={(y) => setD_nameReg(y.target.value)}
                />
                <input
                  type="text"
                  className="form-control"
                  id="EmailD"
                  placeholder="Email Address"
                  onInvalid={D_regis.exit}
                  required
                  onChange={(y) => setD_emailReg(y.target.value)}
                />
                <input
                  type="text"
                  className="form-control"
                  id="PhoneD"
                  placeholder="Tel Number"
                  onInvalid={D_regis.exit}
                  required
                  onChange={(y) => setD_phoneReg(y.target.value)}
                />
                <textarea
                  type="text"
                  className="form-control"
                  rows="4"
                  id="AddressD"
                  placeholder="House Location"
                  onInvalid={D_regis.exit}
                  required
                  onChange={(y) => setD_localReg(y.target.value)}
                />
                <input
                  type="password"
                  className="form-control"
                  id="PasswordD"
                  placeholder="Password"
                  onInvalid={D_regis.exit}
                  required
                  onChange={(y) => setD_passReg(y.target.value)}
                />
                <input
                  type="password"
                  className="form-control"
                  id="C_passwordD"
                  placeholder="Confirm Password"
                  onInvalid={D_regis.exit}
                  required
                />
                <br />
                <input
                  type="submit"
                  className="form-control"
                  id="DSignUp"
                  onClick={D_regis}
                />
              </form>
              <p>Thank you for your visiting!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(App);
ReactDOM.render(<App />, document.getElementById("root"));
