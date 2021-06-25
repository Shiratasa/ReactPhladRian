/* eslint-disable */
import React from "react";
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

function S_QR() {
  const wall = window.location.origin + "/resources/imgs/wallpaper.jpg";
  const but1 = window.location.origin + "/resources/imgs/detail.png";
  const blank = window.location.origin + "/resources/imgs/shop/white.jpg";
  const large = window.location.origin + "/resources/imgs/shop/product6.jpg";
  const small1 = window.location.origin + "/resources/imgs/shop/1.jpg";
  const small2 = window.location.origin + "/resources/imgs/shop/2.jpg";
  const small3 = window.location.origin + "/resources/imgs/shop/3.jpg";
  const eng = window.location.origin + "/resources/imgs/authen/eng.png";
  const tha = window.location.origin + "/resources/imgs/authen/tha.png";

  let history = useHistory();

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
      .midimg
      {
          display: block;
          margin-left: auto;
          margin-right: auto;
      }
      .searchform input 
      {
          width: 169px;
          height: 33px
      }
      ::-webkit-input-placeholder 
      { /* Chrome/Opera/Safari */
          color: lightgrey;
      }
      ::-moz-placeholder 
      { /* Firefox 19+ */
          color: lightgrey;
      }
      :-ms-input-placeholder 
      { /* IE 10+ */
          color: lightgrey;
      }
      :-moz-placeholder 
      { /* Firefox 18- */
          color: lightgrey;
      }
      .swapper:hover 
      {
          color: #F39C12;
          border: 1px solid #F39C12;
      }
      .aswap:hover
      {
          color: white;
          background: #F39C12;
          border: 1px solid #F39C12;
      }
      .swappor  
      {
          color: white;
          background: #F39C12;
          border: 1px solid #F39C12;
      }
      .swappor:hover 
      {
          color: black;
          background: #EBEDEF;
          border: 1px solid black;
      }
      .pull-center:hover 
      {
          color: black;
          font-weight: bold;
      }
      .demo
      {
        display: inline-block;
      }
      .demo a
      {
        color: red; 
        padding: 5px 12px; 
        text-decoration: none; 
        transition: background-color 2s; 
        border: 1px solid orange; 
        font-size: 15px;
      } 
      .demo a.active
      {
        background-color: orange; 
        color: white;
      }
            .demo a:hover
      {
        background-color: orange; 
        color: white;
      }
        .reddit 
      {
          border: 2px solid red;
      }
    .reddot:hover 
      {
          border: 2px solid red;
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
                <li>
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
                          <form id="contact" action method="post">
                            <br />
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
                                          history.push("/s_main");
                                          window.location.reload();
                                        }}
                                      >
                                        <i className="fa fa-times" />
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <div className="container">
                                <div id="gallery" className="col-sm-3">
                                  <a href={large}>
                                    <img src={large} width={250} height={340} />
                                  </a>
                                  <br />
                                  <br />
                                </div>
                                <div className="col-sm-9">
                                  <h2 className="title text-center">
                                    O-NET Examination Book
                                  </h2>
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
                                        <td className="techSpecTD2">Book</td>
                                      </tr>
                                      <tr className="techSpecRow">
                                        <td className="techSpecTD1">
                                          <b>School:</b>
                                        </td>
                                        <td className="techSpecTD2">
                                          Assumption
                                        </td>
                                      </tr>
                                      <tr className="techSpecRow">
                                        <td className="techSpecTD1">
                                          <b>Release:</b>
                                        </td>
                                        <td className="techSpecTD2">
                                          13-11-2020
                                        </td>
                                      </tr>
                                      <tr className="techSpecRow">
                                        <td className="techSpecTD1">
                                          <b>Condition:</b>
                                        </td>
                                        <td className="techSpecTD2">80%</td>
                                      </tr>
                                      <tr className="techSpecRow">
                                        <td className="techSpecTD1">
                                          <b>Fragile:</b>
                                        </td>
                                        <td className="techSpecTD2">No</td>
                                      </tr>
                                      <tr className="techSpecRow">
                                        <td className="techSpecTD1">
                                          <b>Payment:</b>
                                        </td>
                                        <td className="techSpecTD2">
                                          Shipping Cost
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <fieldset>
                                <br />
                                <br />
                                <hr className="soft" />
                              </fieldset>
                            </div>
                            <div className="col-md-4">
                              <fieldset>
                                <label htmlFor="Aname">Donor name:</label>
                                <input
                                  type="text"
                                  id="Aname"
                                  placeholder="Mr.Putthiwat Chalermvongsavej"
                                  required="required"
                                  style={{
                                    width: "100%",
                                    color: "black",
                                    fontSize: "15px",
                                  }}
                                />
                              </fieldset>
                            </div>
                            <div className="col-md-4">
                              <fieldset>
                                <label htmlFor="Amail">Donor email:</label>
                                <input
                                  type="text"
                                  id="Amail"
                                  placeholder="puth.deboi@ymail.com"
                                  required="required"
                                  style={{
                                    width: "100%",
                                    color: "black",
                                    fontSize: "15px",
                                  }}
                                />
                              </fieldset>
                            </div>
                            <div className="col-md-4">
                              <fieldset>
                                <label htmlFor="Aphone">Donor tel:</label>
                                <input
                                  type="text"
                                  id="Aphone"
                                  placeholder="083-190-5406"
                                  required="required"
                                  style={{
                                    width: "100%",
                                    color: "black",
                                    fontSize: "15px",
                                  }}
                                />
                              </fieldset>
                            </div>
                            <br />
                            <div className="col-md-12">
                              <fieldset>
                                <label htmlFor="Alocate">Donor location:</label>
                                <textarea
                                  rows={6}
                                  id="Alocate"
                                  placeholder="666, Ladprao 01 Alley,
Ladprao Road, Wang Thonglang District,
Bangkok, 10240"
                                  required="required"
                                  style={{
                                    width: "100%",
                                    color: "black",
                                    fontSize: "15px",
                                  }}
                                  defaultValue={""}
                                />
                              </fieldset>
                            </div>
                            <div className="col-md-12">
                              <fieldset>
                                <br />
                                <hr className="soft" />
                              </fieldset>
                            </div>
                            <div className="col-md-4">
                              <fieldset>
                                <label htmlFor="Aname">Receiver name:</label>
                                <input
                                  type="text"
                                  id="Aname"
                                  placeholder="Mr.Krittapas Sukkhasame"
                                  required="required"
                                  style={{
                                    width: "100%",
                                    color: "black",
                                    fontSize: "15px",
                                  }}
                                />
                              </fieldset>
                            </div>
                            <div className="col-md-4">
                              <fieldset>
                                <label htmlFor="Amail">Receiver email:</label>
                                <input
                                  type="text"
                                  id="Amail"
                                  placeholder="supersun@hotmail.com"
                                  required="required"
                                  style={{
                                    width: "100%",
                                    color: "black",
                                    fontSize: "15px",
                                  }}
                                />
                              </fieldset>
                            </div>
                            <div className="col-md-4">
                              <fieldset>
                                <label htmlFor="Aphone">Receiver tel:</label>
                                <input
                                  type="text"
                                  id="Aphone"
                                  placeholder="084-203-1178"
                                  required="required"
                                  style={{
                                    width: "100%",
                                    color: "black",
                                    fontSize: "15px",
                                  }}
                                />
                              </fieldset>
                            </div>
                            <br />
                            <div className="col-md-12">
                              <fieldset>
                                <label htmlFor="Alocate">
                                  Receiver location:
                                </label>
                                <textarea
                                  rows={6}
                                  id="Alocate"
                                  placeholder="240/97, Ekkamai 10 Alley, Chaeng Watthana Road, Khlong Tan District, Bangkok, 10110"
                                  required="required"
                                  style={{
                                    width: "100%",
                                    color: "black",
                                    fontSize: "15px",
                                  }}
                                  defaultValue={""}
                                />
                              </fieldset>
                            </div>
                            <div className="col-md-12">
                              <fieldset>
                                <br />
                                <hr className="soft" />
                              </fieldset>
                            </div>
                            <div className="col-md-12">
                              <fieldset>
                                <a
                                  className="btn swappor"
                                  style={{ float: "right" }}
                                >
                                  <i className="fa fa-truck" />
                                   Start Delivery
                                </a>
                              </fieldset>
                              <div className="col-md-12">
                                <fieldset>
                                  <br />
                                </fieldset>
                              </div>
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

export default withRouter(S_QR);