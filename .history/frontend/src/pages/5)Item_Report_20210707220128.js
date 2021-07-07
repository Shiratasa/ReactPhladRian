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

function I_Report() {
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
  let { Student_ID } = useParams();
  let { Item_ID } = useParams();
  let history = useHistory();

  {
    /* Delay */
  }
  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }
  const handleSubmit1 = async (e) => {
    e.preventDefault();
    var gate = document.getElementById("ConEdit");
    if (invaliA == "0" && invaliP == "1" && gate.value == "EditProfile") {
      JSAlert.alert("", "Submit Success!", JSAlert.Icons.Success);
      await timeout(1000).then($(this).unbind("submit").submit());
      window.location.reload();
    }
    if (invaliA == "1" && invaliP == "0" && gate.value == "ChangePass") {
      JSAlert.alert("", "Submit Success!", JSAlert.Icons.Success);
      await timeout(1000).then($(this).unbind("submit").submit());
      window.location.reload();
    }
  };
  const handleSubmit2 = async (e) => {
    e.preventDefault();
    if (AMsent == "0") {
      JSAlert.alert("", "Submit Success!", JSAlert.Icons.Success);
      await timeout(1000).then($(this).unbind("submit").submit());
      window.location.reload();
    }
  };

  {
    /* Report Post */
  }
  const ReportAM = async (e) => {
    AMsent = "1";
    checkStringAM();
    AMsent = "0";
    JSAlert.alert("", "Submit Success!", JSAlert.Icons.Success);
    Axios.post("http://localhost:5000/Report", {
      Topic: Topic_Reg,
      Email: Mail_Reg,
      Message: Message_Reg,
    }).then((response) => {
      console.log(response);
    });
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
    setR_Param1(Student_ID);
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
          <link rel="stylesheet" href="resources/css/Page_View.css" />
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
          .swapper:hover {
            color: #f39c12;
            border: 1px solid #f39c12;
          }
          .aswap:hover {
            color: white;
            background: #f39c12;
            border: 1px solid #f39c12;
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

        <div id="myModal1" class="modal">
          <span class="close one">&times;</span>
          <img class="modal-content" id="img01" />
        </div>
        <div id="myModal2" class="modal">
          <span class="close two">&times;</span>
          <img class="modal-content" id="img02" />
        </div>
        <div id="myModal3" class="modal">
          <span class="close three">&times;</span>
          <img class="modal-content" id="img03" />
        </div>
        <div id="myModal4" class="modal">
          <span class="close four">&times;</span>
          <img class="modal-content" id="img04" />
        </div>
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
              <div className="cd-full-width first-slide">
                <div className="container">
                  <div className="row">
                    <div className="col-md-13">
                      <div className="content first-content">
                        <div className="container">
                          <div id="gallery" className="col-sm-3">
                            <div id="slideshow">
                              <div class="mySlides">
                                <div class="numbertext">1 / 4</div>
                                <img
                                  id="preImg1"
                                  src={wall}
                                  style={{
                                    width: "255px",
                                    height: "340px",
                                  }}
                                />
                              </div>
                              <div class="mySlides">
                                <div class="numbertext">2 / 4</div>
                                <img
                                  id="preImg2"
                                  src={wall}
                                  style={{
                                    width: "255px",
                                    height: "340px",
                                  }}
                                />
                              </div>
                              <div class="mySlides">
                                <div class="numbertext">3 / 4</div>
                                <img
                                  id="preImg3"
                                  src={wall}
                                  style={{
                                    width: "255px",
                                    height: "340px",
                                  }}
                                />
                              </div>
                              <div class="mySlides">
                                <div class="numbertext">4 / 4</div>
                                <img
                                  id="preImg4"
                                  src={wall}
                                  style={{
                                    width: "255px",
                                    height: "340px",
                                  }}
                                />
                              </div>
                            </div>
                            <InnerHTML html={Album} />
                            <br />
                            <br />
                            <br />
                            <br />
                            <div className="demo">
                              <a
                                onClick={() => {
                                  history.push(
                                    `/r_main/${Student_ID}/r_item/${Item_ID}/i_report`
                                  );
                                  window.location.reload();
                                }}
                              >
                                <i className="fa fa-exclamation-triangle" />{" "}
                                Report
                              </a>
                            </div>
                          </div>
                          <div className="col-sm-9">
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
                                        history.push(`/r_main/${Student_ID}`);
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
                              className="title text-center"
                              style={{ fontSize: "15pt" }}
                            >
                              xxxxx
                            </h2>
                            <hr className="soft" />
                            <h4 style={{ textAlign: "left" }}>Description</h4>
                            <textarea
                              type="address"
                              id="ItemD"
                              autocomplete="off"
                              disabled
                            />
                            <hr className="soft" />
                            <h4 style={{ textAlign: "left" }}>
                              General Information
                            </h4>
                            <table className="table table-bordered">
                              <tbody>
                                <tr className="techSpecRow">
                                  <td className="techSpecTD1">
                                    <b>Category:</b>
                                  </td>
                                  <td className="techSpecTD2">
                                    <div
                                      style={{
                                        width: "300px",
                                        textAlign: "center",
                                      }}
                                    ></div>
                                    <div style={{ height: "29px" }}>
                                      yyyyyyyy
                                    </div>
                                  </td>
                                </tr>
                                <tr className="techSpecRow">
                                  <td className="techSpecTD1">
                                    <b>School:</b>
                                  </td>
                                  <td className="techSpecTD2">
                                    <div style={{ height: "29px" }}>
                                      zzzzzz
                                    </div>
                                  </td>
                                </tr>
                                <tr className="techSpecRow">
                                  <td className="techSpecTD1">
                                    <b>Condition:</b>
                                  </td>
                                  <td className="techSpecTD2">
                                    <div style={{ height: "29px" }}>
                                      nnnnnn
                                    </div>
                                  </td>
                                </tr>
                                <tr className="techSpecRow">
                                  <td className="techSpecTD1">
                                    <b>Fragile:</b>
                                  </td>
                                  <td className="techSpecTD2">
                                    <div style={{ height: "29px" }}>
                                      mmmmmmm
                                    </div>
                                  </td>
                                </tr>
                                <tr className="techSpecRow">
                                  <td className="techSpecTD1">
                                    <b>Quantity:</b>
                                  </td>
                                  <td className="techSpecTD2">
                                    <div style={{ height: "29px" }}>
                                     bbbbbb
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <hr className="soft" />
                            <span
                              className="cart-total-price text-center"
                              style={{ fontSize: "18px", color: "#F39C12" }}
                            >
                              Weekly request chance:&nbsp;
                            </span>
                            <hr className="soft" />
                            <button
                              type="button"
                              className="btn swappor"
                              onClick={R_deli}
                            >
                              <i className="fa fa-download" />
                               Send request
                            </button>
                            <img
                              style={{ width: "180px", height: "50px" }}
                              src={blank}
                              alt=""
                            />
                            <button
                              type="button"
                              className="btn swapper"
                              onClick={() => {
                                W_butC();
                              }}
                            >
                              <i className="fa fa-plus" />
                               Add to wishlist
                            </button>
                          </div>
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

export default withRouter(I_Report);
