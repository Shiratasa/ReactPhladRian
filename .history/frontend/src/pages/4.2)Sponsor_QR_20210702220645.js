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
  const [Item2_Detail, setItem2_Detail] = useState([]);
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
    /* Detail Get */
  }
  const ItemBlock2 = async () => {
    Axios.get(`http://localhost:5000/QR_detail2/${Request_ID}`).then(
      (response) => {
        setItem2_Detail(response.data);
      }
    );
  };

  {
    /* Load Function */
  }
  window.onload = function () {
    ItemBlock();
    ItemBlock2();
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
                            <div className="row">
                              <form id="contact">
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
                                  <div className="container">
                                    <div id="gallery" className="col-sm-3">
                                      <img
                                        src={val.Pic1}
                                        width={255}
                                        height={340}
                                      />
                                      <br />
                                      <br />
                                    </div>
                                    <div className="col-sm-9">
                                      <h2
                                        className="title text-center"
                                        style={{ fontSize: "16pt" }}
                                      >
                                        {val.Obj}
                                      </h2>
                                      <hr className="soft" />
                                      <h4 style={{ textAlign: "left" }}>
                                        General Information
                                        <br />
                                        <br />
                                        <br />
                                      </h4>
                                      <table className="table table-bordered">
                                        <tbody>
                                          <tr className="techSpecRow">
                                            <td className="techSpecTD1 centah">
                                              <b>Category:</b>
                                            </td>
                                            <td className="techSpecTD2 centah">
                                              {val.Category}
                                            </td>
                                          </tr>
                                          <tr className="techSpecRow">
                                            <td className="techSpecTD1 centah">
                                              <b>School:</b>
                                            </td>
                                            <td className="techSpecTD2 centah">
                                              {val.Name}
                                            </td>
                                          </tr>
                                          <tr className="techSpecRow">
                                            <td className="techSpecTD1 centah">
                                              <b>Condition:</b>
                                            </td>
                                            <td className="techSpecTD2 centah">
                                              {val.I_Con}
                                            </td>
                                          </tr>
                                          <tr className="techSpecRow">
                                            <td className="techSpecTD1 centah">
                                              <b>Fragile:</b>
                                            </td>
                                            <td className="techSpecTD2 centah">
                                              {val.YesNo}
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <fieldset>
                                    <hr className="soft" />
                                    <h2 className="title text-center">
                                      Donor Profile
                                    </h2>
                                  </fieldset>
                                </div>
                                <div className="col-md-4">
                                  <fieldset>
                                    <label htmlFor="Aname">Donor name:</label>
                                    <input
                                      type="text"
                                      id="Aname"
                                      value={val.Username}
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
                                    <label htmlFor="Amail">Donor email:</label>
                                    <input
                                      type="text"
                                      id="Amail"
                                      value={val.Email}
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
                                    <label htmlFor="Aphone">Donor tel:</label>
                                    <input
                                      type="text"
                                      id="Aphone"
                                      value={val.Phone}
                                      style={{
                                        width: "100%",
                                        color: "black",
                                        fontSize: "15px",
                                      }}
                                      disabled
                                    />
                                  </fieldset>
                                </div>
                                <br />
                                <div className="col-md-12">
                                  <fieldset>
                                    <label htmlFor="Alocate">
                                      Donor location:
                                    </label>
                                    <textarea
                                      rows={6}
                                      id="Alocate"
                                      value={val.Address}
                                      style={{
                                        width: "100%",
                                        color: "black",
                                        fontSize: "15px",
                                      }}
                                      autocomplete="off"
                                      disabled
                                    />
                                  </fieldset>
                                </div>
                                <div className="col-md-12">
                                  <fieldset>
                                    <hr className="soft" />
                                    <h2 className="title text-center">
                                      Receiver Profile
                                    </h2>
                                  </fieldset>
                                </div>
                                {Item2_Detail.map((val, key) => {
                                  return (
                                    <div>
                                      <div className="col-md-4">
                                        <fieldset>
                                          <label htmlFor="Aname">
                                            Receiver name:
                                          </label>
                                          <input
                                            type="text"
                                            id="Aname"
                                            value={val.Username}
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
                                          <label htmlFor="Amail">
                                            Receiver email:
                                          </label>
                                          <input
                                            type="text"
                                            id="Amail"
                                            value={val.Email}
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
                                          <label htmlFor="Aphone">
                                            Receiver tel:
                                          </label>
                                          <input
                                            type="text"
                                            id="Aphone"
                                            value={val.Phone}
                                            style={{
                                              width: "100%",
                                              color: "black",
                                              fontSize: "15px",
                                            }}
                                            disabled
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
                                            value={val.Address}
                                            style={{
                                              width: "100%",
                                              color: "black",
                                              fontSize: "15px",
                                            }}
                                            autocomplete="off"
                                            disabled
                                          />
                                        </fieldset>
                                      </div>
                                      <div className="col-md-12">
                                        <fieldset>
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
                                    </div>
                                  );
                                })}
                              </form>
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
