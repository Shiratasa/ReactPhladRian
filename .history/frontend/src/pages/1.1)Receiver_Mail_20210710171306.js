/* eslint-disable */
import React, { Component, useEffect, useState } from "react";
import useStateRef from "react-usestateref";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import InnerHTML from "dangerously-set-html-content";
import ScriptTag from "react-script-tag";
import props from "prop-types";
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

function R_Auth() {
  const eng = window.location.origin + "/resources/imgs/authen/eng.png";
  const tha = window.location.origin + "/resources/imgs/authen/tha.png";
  const book = window.location.origin + "/resources/web_logo_bg.png";
  let { Email } = useParams();
  let history = useHistory();

  {
    /* EmailR Post */
  }
  const R_complete = async () => {
    Axios.post(`http://localhost:5000/R_Create/${Email}`, {}).then(
      (response) => {
        console.log(response);
      }
    );
  };

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
    R_complete();
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
          <script
            async="true"
            src="https://npmcdn.com/js-alert/dist/jsalert.min.js"
          />
          <title>Phlad Rian</title>
          <meta charSet="utf-8" />
          <link rel="icon" href="resources/imgs/book-icon.png" sizes="16x16" />
          <meta
            name="viewport"
            content="initial-scale=1, maximum-scale=1, user-scalable=no"
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

        {/*- DIV MENU PAGE -*/}
        <section
          id="home"
          style={{
            backgroundImage: `url("resources/imgs/authen/slide-1.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container">
            <div className="row">
              <br />
              <InnerHTML html={GoogleTranslate} />
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
                    Authentication
                    <br />
                    Success!
                  </h1>
                  <a
                    className="btn btn-lg btn-default wow fadeInUp hidden-xs"
                    onClick={() => {
                      history.push("/");
                      window.location.reload();
                    }}
                  >
                    Go back to Sign In page...
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
      </div>
    </div>
  );
}

export default withRouter(R_Auth);
