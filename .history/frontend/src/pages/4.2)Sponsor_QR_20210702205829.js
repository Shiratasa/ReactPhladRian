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
  const [Item_Detail, setItem_Detail] = useState([]);
  let { Sponsor_ID } = useParams();
  let { Request_ID } = useParams();
  let history = useHistory();

  {
    /* Detail Get */
  }
  const ItemBlock = async () => {
    Axios.get(`http://localhost:5000/QR_detail/${Request_ID}`).then(
      (response) => {
        setItem_Detail(response.data);
      }
    );
  };

  {
    /* Load Function */
  }
  window.onload = function () {
    ItemBlock();
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
            {Item_Detail.map((val, key) => {
              return (
                <li className="selected">
                  <div className="heading"></div>
                  <div className="cd-full-width fivth-slide">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-13">
                          <div className="content fivth-content">
                            <div className="container">
                              <div id="gallery" className="col-sm-3">
                                <div id="slideshow">
                                  <div class="mySlides">
                                    <div class="numbertext">1 / 4</div>
                                    <img
                                      id="preImg1"
                                      src={val.Pic1}
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
                                      src={val.Pic2}
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
                                      src={val.Pic3}
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
                                      src={val.Pic4}
                                      style={{
                                        width: "255px",
                                        height: "340px",
                                      }}
                                    />
                                  </div>
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
                                            history.push(
                                              `/s_main/${Sponsor_ID}`
                                            );
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
                                  style={{ fontSize: "14pt" }}
                                >
                                  {val.Obj}
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
                                      <td className="techSpecTD2">
                                        <div
                                          style={{
                                            width: "300px",
                                            textAlign: "center",
                                          }}
                                        ></div>
                                        <div style={{ height: "29px" }}>
                                          {val.Category}
                                        </div>
                                      </td>
                                    </tr>
                                    <tr className="techSpecRow">
                                      <td className="techSpecTD1">
                                        <b>School:</b>
                                      </td>
                                      <td className="techSpecTD2">
                                        <div style={{ height: "29px" }}>
                                          {val.Name}
                                        </div>
                                      </td>
                                    </tr>
                                    <tr className="techSpecRow">
                                      <td className="techSpecTD1">
                                        <b>Condition:</b>
                                      </td>
                                      <td className="techSpecTD2">
                                        <div style={{ height: "29px" }}>
                                          {val.I_Con}
                                        </div>
                                      </td>
                                    </tr>
                                    <tr className="techSpecRow">
                                      <td className="techSpecTD1">
                                        <b>Fragile:</b>
                                      </td>
                                      <td className="techSpecTD2">
                                        <div style={{ height: "29px" }}>
                                          {val.Username}
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <hr className="soft" />
                                <div className="container">
                                  <div className="col-md-12">
                                    <fieldset>
                                      <hr className="soft" />
                                      <h2 className="title text-center">
                                        Edit Profile
                                      </h2>
                                    </fieldset>
                                  </div>
                                  <div className="col-md-4">
                                    <fieldset>
                                      <label htmlFor="UsernameD">Name:</label>
                                      <input
                                        type="text"
                                        id="UsernameD"
                                        defaultValue={val.Username}
                                        placeholder="Username"
                                        autocomplete="off"
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
                                      <label
                                        htmlFor="Amail"
                                        style={{ color: "red" }}
                                      >
                                        Fixed Email:
                                      </label>
                                      <input
                                        type="text"
                                        id="Amail"
                                        value={val.Email}
                                        autocomplete="off"
                                        style={{
                                          width: "100%",
                                          color: "black",
                                          fontSize: "15px",
                                        }}
                                        disabled
                                      />
                                    </fieldset>
                                  </div>
                                  <div className="col-md-4">
                                    <fieldset>
                                      <label htmlFor="PhoneD">Tel:</label>
                                      <input
                                        type="text"
                                        id="PhoneD"
                                        defaultValue={val.Phone}
                                        placeholder="Tel Number"
                                        autocomplete="off"
                                        style={{
                                          width: "100%",
                                          color: "black",
                                          fontSize: "15px",
                                        }}
                                      />
                                    </fieldset>
                                  </div>
                                  <br />
                                  <div className="col-md-4">
                                    <fieldset>
                                      <label htmlFor="postD">ZIP:</label>
                                      <input
                                        type="text"
                                        id="postD"
                                        defaultValue={val.ZIP}
                                        placeholder="ZIP Code"
                                        autocomplete="off"
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
                                      <label htmlFor="AddressD">
                                        Location:
                                      </label>
                                      <textarea
                                        rows={6}
                                        id="AddressD"
                                        defaultValue={val.Address}
                                        placeholder="House Location"
                                        style={{
                                          width: "100%",
                                          color: "black",
                                          fontSize: "15px",
                                        }}
                                      />
                                    </fieldset>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
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
