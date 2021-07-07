/* eslint-disable */
import React, { useEffect, useState, Component } from "react";
import useStateRef from "react-usestateref";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import InnerHTML from "dangerously-set-html-content";
import Axios from "axios";
import Pagination from "./Pagination.js";
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

function I_Report2() {
  const wall = window.location.origin + "/resources/imgs/wallpaper.jpg";
  const but1 = window.location.origin + "/resources/imgs/home.png";
  const but2 = window.location.origin + "/resources/imgs/request.png";
  const but3 = window.location.origin + "/resources/imgs/wish.png";
  const but4 = window.location.origin + "/resources/imgs/account.png";
  const but5 = window.location.origin + "/resources/imgs/report.png";
  const but6 = window.location.origin + "/resources/imgs/logout.png";
  const blank = window.location.origin + "/resources/imgs/shop/white.jpg";
  const eng = window.location.origin + "/resources/imgs/authen/eng.png";
  const tha = window.location.origin + "/resources/imgs/authen/tha.png";

  {
    /* Values */
  }
  {
    /*String Standard*/
  }
  var regEx1 = /(^(?!\s))+([A-Z]{1}[a-z]{1,256})+(\s[A-Z]{1}[a-z]{1,256})+($)/;
  var regEx2 =
    /(^(?!\s))+([a-z0-9.]{1,256})+([@]{1}[a-z0-9]{1,256})+([.]{1}[a-z.]{1,256})+($)/;
  var regEx3 = /^\S*$/;
  var regEx4 = /(^(?!\s))+([0]{1}[6,8,9]{1}[0-9]{1,256})+($)/;
  var regEx5 = /(^(?!\s))+([A-Za-z0-9]{1,256})+($)/;
  var regEx6 = /^[^\s]+(\s+[^\s]+)*$/;
  var regEx7 = /(^(?!\s))+([0-9]{1,256})+($)/;
  var regEx8 = /^[^\s]+(\s+[^\s]+)*$/;
  var invaliA = "1";
  var invaliP = "1";
  var AMsent = "1";
  var isWish = "0";
  {
    /*Report Send*/
  }
  const [Topic_Reg, setTopic_Reg] = useState("");
  const [Mail_Reg, setMail_Reg] = useState("");
  const [Message_Reg, setMessage_Reg] = useState("");
  const [R_Param1, setR_Param1] = useState("");
  const [User_Account, setUser_Account] = useState([]);
  var Reporter;
  var Link;
  let { Donor_ID } = useParams();
  let { Reward_ID } = useParams();
  let history = useHistory();

  {
    /* Delay */
  }

  {
    /* Warning Post */
  }
  const D_Warn = async () => {
    Axios.post(`http://localhost:5000/D_warning/${Reward_ID}`, {}).then(
      (response) => {
        console.log(response);
      }
    );
  };

  {
    /* Report Post */
  }
  const ReportAM = async () => {
    setTopic_Reg(
      "Reward_ID: " + R_Param1 + " problem. Reported by Donor_ID " + Reporter
    );
    setMail_Reg(Link);
    checkStringAM();
    JSAlert.alert(
      "",
      "Fake report can be result as your permanent BAN!",
      JSAlert.Icons.Warning
    );
    JSAlert.confirm("Do you REALLY want to report this item?").then(function (
      result
    ) {
      if (!result) {
        throw "exit";
      }
      D_Warn();
      Axios.post("http://localhost:5000/Report", {
        Donor_ID: Reporter,
        Topic: Topic_Reg,
        Email: Mail_Reg,
        Message: Message_Reg,
      });
      history.push(`/d_main/${Donor_ID}`);
      window.location.reload();
    });
  };

  {
    /* Profile Get */
  }
  const ProfileInfo = async () => {
    Axios.get(`http://localhost:5000/D_Account/${Donor_ID}`).then(
      (response) => {
        setUser_Account(response.data);
      }
    );
  };

  {
    /* String Check */
  }
  function checkStringAM() {
    var Topic = document.getElementById("topicText");
    var Mail = document.getElementById("mailText");
    var Mess = document.getElementById("messText");
    if (
      Topic.value == "" ||
      Topic.value.length < 5 ||
      regEx8.test(Topic.value) == false
    ) {
      JSAlert.alert(
        "(Ex): Bug Report",
        "Please enter topic name properly...",
        JSAlert.Icons.Warning
      );
      throw "exit";
    }
    if (Mail.value == "" || regEx2.test(Mail.value) == false) {
      JSAlert.alert(
        "(Ex): alan@gmail.com",
        "Please enter your valid email...",
        JSAlert.Icons.Warning
      );
      throw "exit";
    }
    if (
      Mess.value == "" ||
      Mess.value.length < 20 ||
      regEx8.test(Mess.value) == false
    ) {
      JSAlert.alert(
        "(Ex): I cannot request any item at all.",
        "Please enter message in full detail without space at beginning & ending...",
        JSAlert.Icons.Warning
      );
      throw "exit";
    }
  }

  const GoogleTranslate = `
  <style type='text/css'>
    iframe.goog-te-banner-frame{ display: none !important;}
  </style>
  <style type='text/css'>
    body {position: static !important; top:0px !important;}
  </style>
  <style type='text/css'>
    .goog-logo-link {display:none !important;} 
    .goog-te-gadget{color: transparent !important;}
  </style>
  <div id="google_translate_element" style="float:right; padding-right:20px; position: absolute;"></div>
  <script type="text/javascript">
    function googleTranslateElementInit() {
      new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,th',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
      }, 'google_translate_element');
    }
  </script>
  <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>`;

  {
    /* Load Function */
  }
  window.onload = function () {
    setR_Param1(Reward_ID);
    ProfileInfo();
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
          <meta
            name="viewport"
            content="initial-scale=1, maximum-scale=1, user-scalable=no"
          />
          <link rel="icon" href="resources/imgs/book-icon.png" sizes="16x16" />
          <link rel="stylesheet" href="resources/css/bootstrap.min.css" />
          <link rel="stylesheet" href="resources/css/bootstrap-theme.min.css" />
          <link rel="stylesheet" href="resources/css/fontAwesome.css" />
          <link rel="stylesheet" href="resources/css/templatemo-style.css" />
          <link rel="stylesheet" href="resources/css/Page_Main.css" />
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
          .searchform input 
          {
  					width: 169px;
  					height: 33px;
					}
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

        {/*Menu Tab*/}
        <div className="overlay" />
        <section className="top-part">
          <img src={wall} />
        </section>
        <section className="cd-hero">
          <br />
          <InnerHTML html={GoogleTranslate} />
          <div className="cd-slider-nav">
            <nav>
              <span className="cd-marker item-1" />
              <ul>
                <li className="selected">
                  <a>
                    <div className="image-icon">
                      <img src={but5} width={38} height={33} />
                    </div>
                    <h6>Contact</h6>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <ul className="cd-hero-slider">
            <li className="selected">
              <div className="heading"></div>
              {User_Account.map((val, key) => {
                Reporter = val.Donor_ID;
                Link = val.Email;
                return <div>.</div>;
              })}
              <div className="cd-full-width fivth-slide">
                <div className="container">
                  <div className="row">
                    <div className="col-md-13">
                      <div className="content fivth-content">
                        <div className="row">
                          <br />
                          <div className="col-md-4">
                            <div className="left-info">
                              <p align="justify">
                                 This section can be used to report about the
                                critical situations that happen within this
                                website only. Please DO NOT send the nonsensical
                                message that is considered deceived or unrelated
                                to this website. Spamming action is also not
                                allowed. Any violence toward these rules will
                                not be tolerated and must receive the
                                punishment.
                                <br />
                                <br />
                              </p>
                              <em>
                                You can follow our work through these directions
                              </em>
                              <br />
                              <br />
                              <ul>
                                <i>
                                  <a
                                    href="https://www.facebook.com/shiratasa.kusharane/"
                                    target="_blank"
                                  >
                                    <i className="fa fa-facebook" />
                                  </a>
                                </i>
                                <i>
                                  <a
                                    href="https://www.youtube.com/channel/UC6wZl8R7vM1gs-bTJWhBf1g"
                                    target="_blank"
                                  >
                                    <i className="fa fa-youtube" />
                                  </a>
                                </i>
                                <i>
                                  <a
                                    href="https://github.com/Shiratasa"
                                    target="_blank"
                                  >
                                    <i className="fa fa-github" />
                                  </a>
                                </i>
                              </ul>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="row framePic">
                              <table
                                className="table-condensed"
                                style={{
                                  top: "-50px",
                                  right: "21px",
                                  position: "absolute",
                                }}
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
                              <form>
                                <div className="col-md-6">
                                  <fieldset>
                                    <input
                                      type="text"
                                      id="topicText"
                                      placeholder="Topic"
                                      required
                                      autocomplete="off"
                                      style={{
                                        width: "100%",
                                        color: "black",
                                        fontSize: "15px",
                                      }}
                                      value={
                                        "Reward_ID: " +
                                        R_Param1 +
                                        " problem. Reported by Donor_ID " +
                                        Reporter
                                      }
                                      disabled
                                    />
                                  </fieldset>
                                </div>
                                <div className="col-md-6">
                                  <fieldset>
                                    <input
                                      type="text"
                                      id="mailText"
                                      placeholder="Your Email"
                                      required
                                      autocomplete="off"
                                      style={{
                                        width: "100%",
                                        color: "black",
                                        fontSize: "15px",
                                      }}
                                      value={Link}
                                      disabled
                                    />
                                  </fieldset>
                                </div>
                                <div className="col-md-12">
                                  <fieldset>
                                    <textarea
                                      rows={6}
                                      id="messText"
                                      placeholder="Message"
                                      required
                                      style={{
                                        width: "100%",
                                        color: "black",
                                        fontSize: "15px",
                                      }}
                                      onInvalid={ReportAM.exit}
                                      onChange={(z) =>
                                        setMessage_Reg(z.target.value)
                                      }
                                      required
                                    />
                                  </fieldset>
                                </div>
                                <div className="col-md-12">
                                  <fieldset>
                                    <br />
                                    <button
                                      type="button"
                                      className="btn swappor"
                                      style={{ float: "right" }}
                                      onClick={ReportAM}
                                    >
                                      <i className="fa fa-paperclip" />
                                       Send Report
                                    </button>
                                  </fieldset>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        <br />
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

export default withRouter(I_Report2);
