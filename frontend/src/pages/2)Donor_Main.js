/* eslint-disable */
import React from "react";
import { Helmet } from "react-helmet";
import wall from "./resources/imgs/wallpaper.jpg";
import but1 from "./resources/imgs/home.png";
import but2 from "./resources/imgs/request.png";
import but3 from "./resources/imgs/reward.png";
import but4 from "./resources/imgs/account.png";
import but5 from "./resources/imgs/report.png";
import but6 from "./resources/imgs/logout.png";
import blank from "./resources/imgs/shop/white.jpg";
import ship from "./resources/imgs/home/shipping.jpg";
import pro1 from "./resources/imgs/shop/product12.jpg";
import pro2 from "./resources/imgs/shop/product11.jpg";
import pro3 from "./resources/imgs/shop/product10.jpg";
import pro4 from "./resources/imgs/shop/product9.jpg";
import pro5 from "./resources/imgs/shop/product8.jpg";
import pro6 from "./resources/imgs/shop/product7.jpg";
import pro7 from "./resources/imgs/shop/product6.jpg";
import adder from "./resources/imgs/shop/add.png";
import re1 from "./resources/imgs/shop/reward1.jpg";
import re2 from "./resources/imgs/shop/reward2.jpg";
import re3 from "./resources/imgs/shop/reward3.jpg";
import re4 from "./resources/imgs/shop/reward4.jpg";
import re5 from "./resources/imgs/shop/reward5.jpg";
import re6 from "./resources/imgs/shop/reward6.jpg";
import eng from "./resources/imgs/authen/eng.png";
import tha from "./resources/imgs/authen/tha.png";
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  withRouter,
} from "react-router-dom";

class App extends React.Component {
  render() {
    const handleSubmit1 = async (e) => {
    this.props.history.push("/d_item");
    location.reload();
  };
    return (
      <div className="App">
        <div>
          <Helmet>
            <script
              async="true"
              src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"
            />
            <script
              async="true"
              src="resources/js/vendor/jquery-1.11.2.min.js"
            />
            <script async="true" src="resources/js/vendor/bootstrap.min.js" />
            <script async="true" src="resources/js/plugins.js" />
            <script async="true" src="resources/js/main.js" />
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
            <title>Phlad Rian</title>
            <meta name="description" content />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link
              rel="icon"
              href="resources/imgs/book-icon.png"
              sizes="16x16"
            />
            <link rel="stylesheet" href="resources/css/bootstrap.min.css" />
            <link
              rel="stylesheet"
              href="resources/css/bootstrap-theme.min.css"
            />
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
      #SchoolR
      {
        width:225px;   
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
                  <li className="selected">
                    <a href="#0">
                      <div className="image-icon">
                        <img src={but1} width={40} height={35} />
                      </div>
                      <h6>Home</h6>
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <div className="image-icon">
                        <img src={but2} width={43} height={35} />
                      </div>
                      <h6>Request</h6>
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <div className="image-icon">
                        <img src={but3} width={45} height={40} />
                      </div>
                      <h6>Trade</h6>
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <div className="image-icon">
                        <img src={but4} width={40} height={38} />
                      </div>
                      <h6>Account</h6>
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <div className="image-icon">
                        <img src={but5} width={38} height={33} />
                      </div>
                      <h6>Contact</h6>
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <div className="image-icon">
                        <img src={but6} width={39} height={35} />
                      </div>
                      <h6>Logout</h6>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <ul className="cd-hero-slider">
              {/*-/Home page-*/}
              <li className="selected">
                <div className="heading">
                </div>
                <div className="cd-full-width first-slide">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-13">
                        <div className="content first-content">
                          <div className="container">
                            <div className="row">
                              <div className="col-sm-3">
                                <div className="brands_products">
                                  {/*-brands_products-*/}
                                  <h2>Categories</h2>
                                  <div className="brands-name">
                                    <ul className="nav nav-pills nav-stacked">
                                      <select
                  id="SchoolR"
                  >
                  <option value="" disabled selected="selected">-- Select category --</option>
                  <option value="P1">Prathom 1</option>
                  <option value="P2">Prathom 2</option>
                  <option value="P3">Prathom 3</option>
                </select>
                                    </ul>
                                  </div>
                                </div>
                                <br />
                                <br />
                                <br />
                                {/*-/brands_products-*/}
                                <div className="brands_products">
                                  {/*-brands_products-*/}
                                  <h2>Schools</h2>
                                  <div className="brands-name">
                                    <ul className="nav nav-pills nav-stacked">
                                      <select
                  id="SchoolR"
                  >
                  <option value="" disabled selected="selected">-- Select school --</option>
                  <option value="P1">Prathom 1</option>
                  <option value="P2">Prathom 2</option>
                  <option value="P3">Prathom 3</option>
                </select>
                                    </ul>
                                  </div>
                                </div>
                                <br />
                                <br />
                                <br />
                                {/*-/brands_products-*/}
                                <div className="brands_products">
                                  <h2>Search</h2>
                                  <div className="brands-name">
                                    <form action="" className="searchform">
                                      <input
                                        type="text"
                                        placeholder="Item Name"
                                        style={{
                                          color: "black",
                                          fontSize: "15px",
                                        }}
                                        required="required"
                                      />
                                      <button
                                        type="submit"
                                        className="btn btn-default"
                                        style={{ height: "33px" }}
                                      >
                                        <i className="fa fa-arrow-circle-o-right" />
                                      </button>
                                    </form>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-9 padding-right">
                                <div className="features_items">
                                  {/*-features_items-*/}
                                  <div className="brands_products">
                                    <h2 className="title text-center">
                                      Recent Items&nbsp;&nbsp;&nbsp;
                                      <button class="swappor" onClick={handleSubmit1}>Add item</button>
                                    </h2>
                                  </div>
                                  <div className="col-sm-4">
                                    <div className="product-image-wrapper">
                                      <div className="single-products">
                                        <div className="productinfo text-center">
                                          <img
                                            src={pro1}
                                            alt=""
                                            width={230}
                                            height={320}
                                          />
                                          <h2 style={{ fontSize: "15px" }}>
                                            Thai Literature Book 1
                                          </h2>
                                          <br />
                                          <a
                                            href="/d_item"
                                            className="btn btn-default add-to-cart"
                                          >
                                            <i className="fa fa-eye" />
                                            View
                                          </a>
                                        </div>
                                      </div>
                                      <div className="choose">
                                        <ul className="nav nav-pills nav-justified">
                                          <li>
                                            <a href>
                                              <i className="fa fa-trash-o" />
                                              Delete item
                                            </a>
                                          </li>
                                          <li>
                                            <a href>
                                              <i className="fa fa-trash-o" />
                                              Delete item
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-sm-4">
                                    <div className="product-image-wrapper">
                                      <div className="single-products">
                                        <div className="productinfo text-center">
                                          <img
                                            src={pro2}
                                            alt=""
                                            width={230}
                                            height={320}
                                          />
                                          <h2 style={{ fontSize: "15px" }}>
                                            Mathematic Book 2
                                          </h2>
                                          <br />
                                          <a
                                            href="/d_item"
                                            className="btn btn-default add-to-cart"
                                          >
                                            <i className="fa fa-eye" />
                                            View
                                          </a>
                                        </div>
                                      </div>
                                      <div className="choose">
                                        <ul className="nav nav-pills nav-justified">
                                          <li>
                                            <a href>
                                              <i className="fa fa-trash-o" />
                                              Delete item
                                            </a>
                                          </li>
                                          <li>
                                            <a href>
                                              <i className="fa fa-trash-o" />
                                              Delete item
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-sm-4">
                                    <div className="product-image-wrapper">
                                      <div className="single-products">
                                        <div className="productinfo text-center">
                                          <img
                                            src={pro7}
                                            alt=""
                                            width={230}
                                            height={320}
                                          />
                                          <h2 style={{ fontSize: "15px" }}>
                                            O-NET Examination Book
                                          </h2>
                                          <br />
                                          <a
                                            href="/d_item"
                                            className="btn btn-default add-to-cart"
                                          >
                                            <i className="fa fa-eye" />
                                            View
                                          </a>
                                        </div>
                                      </div>
                                      <div className="choose">
                                        <ul className="nav nav-pills nav-justified">
                                          <li>
                                            <a href>
                                              <i className="fa fa-trash-o" />
                                              Delete item
                                            </a>
                                          </li>
                                          <li>
                                            <a href>
                                              <i className="fa fa-trash-o" />
                                              Delete item
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-sm-11">
                                    <br />
                                    <ul className="pagination">
                                      <div className="col-sm-1">
                                        <li>
                                          <a href>«</a>
                                        </li>
                                      </div>
                                      <div className="col-sm-1">
                                        <li className="active">
                                          <a href>1</a>
                                        </li>
                                      </div>
                                      <div className="col-sm-1">
                                        <li>
                                          <a href>2</a>
                                        </li>
                                      </div>
                                      <div className="col-sm-1">
                                        <li>
                                          <a href>3</a>
                                        </li>
                                      </div>
                                      <div className="col-sm-1">
                                        <li>
                                          <a href>4</a>
                                        </li>
                                      </div>
                                      <div className="col-sm-1">
                                        <li>
                                          <a href>5</a>
                                        </li>
                                      </div>
                                      <div className="col-sm-1">
                                        <li>
                                          <a href>6</a>
                                        </li>
                                      </div>
                                      <div className="col-sm-1">
                                        <li>
                                          <a href>7</a>
                                        </li>
                                      </div>
                                      <div className="col-sm-1">
                                        <li>
                                          <a href>8</a>
                                        </li>
                                      </div>
                                      <div className="col-sm-1">
                                        <li>
                                          <a href>9</a>
                                        </li>
                                      </div>
                                      <div className="col-sm-1">
                                        <li>
                                          <a href>10 </a>
                                        </li>
                                      </div>
                                      <div className="col-sm-1">
                                        <li>
                                          <a href>»</a>
                                        </li>
                                      </div>
                                    </ul>
                                  </div>
                                </div>
                                {/*-features_items-*/}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/*-/Home page-*/}
              <li>
                <div className="heading">
                </div>
                <div className="cd-full-width third-slide">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-13">
                        <div className="content third-content">
                          <div className="row">
                            <section id="cart_items">
                              <div className="container">
                                <br />
                                <div className="table-responsive cart_info">
                                  <table className="table table-condensed">
                                    <thead>
                                      <tr className="cart_menu">
                                        <td
                                          className="image"
                                          style={{ textAlign: "left" }}
                                        >
                                          Request Items (3/100)
                                        </td>
                                        <td className="description" />
                                        <td />
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td
                                          className="cart_product"
                                          style={{ float: "left" }}
                                        >
                                          <a href>
                                            <img
                                              src={pro1}
                                              alt=""
                                              width={127}
                                              height={158}
                                            />
                                          </a>
                                        </td>
                                        <td
                                          className="cart_description"
                                          style={{ float: "left" }}
                                        >
                                          <br />
                                          <h2
                                            className="cart_total_price"
                                            style={{
                                              textAlign: "left",
                                              fontSize: "18px",
                                            }}
                                          >
                                                  Thai Literature Book 1
                                          </h2>
                                          <p style={{ textAlign: "justify" }}>
                                                     Thai book with a summary of
                                            the content example of doing the
                                            problem Both a basic form and a
                                            shortcut way with
                                            <br />
                                                     exercises and solutions by
                                            explaining in simple language,
                                            according to the latest curriculum
                                            by explaining to be
                                            <br />
                                                     easy to understand, not
                                            boring, to create a good attitude...
                                          </p>
                                        </td>
                                        <td
                                          className="cart_delete"
                                          style={{ float: "right" }}
                                        >
                                          <br />
                                          <br />
                                          <br />
                                          <br />
                                          <br />
                                          <br />
                                          <br />
                                          <a
                                            href="/d_deli"
                                            className="btn btn-default add-to-cart"
                                          >
                                            <i className="fa fa-truck" />
                                            Deliver
                                          </a>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          className="cart_product"
                                          style={{ float: "left" }}
                                        >
                                          <a href>
                                            <img
                                              src={pro2}
                                              alt=""
                                              width={127}
                                              height={158}
                                            />
                                          </a>
                                        </td>
                                        <td
                                          className="cart_description"
                                          style={{ float: "left" }}
                                        >
                                          <br />
                                          <h2
                                            className="cart_total_price"
                                            style={{
                                              textAlign: "left",
                                              fontSize: "18px",
                                            }}
                                          >
                                                  Mathematic Book 2
                                          </h2>
                                          <p style={{ textAlign: "justify" }}>
                                                     Math book with a summary of
                                            the content example of doing the
                                            problem Both a basic form and a
                                            shortcut way with
                                            <br />
                                                     exercises and solutions by
                                            explaining in simple language,
                                            according to the latest curriculum
                                            by explaining to be
                                            <br />
                                                     easy to understand, not
                                            boring, to create a good attitude...
                                          </p>
                                        </td>
                                        <td
                                          className="cart_delete"
                                          style={{ float: "right" }}
                                        >
                                          <br />
                                          <br />
                                          <br />
                                          <br />
                                          <br />
                                          <br />
                                          <br />
                                          <h2 style={{ fontSize: "18px" }}>
                                            <i className="fa fa-motorcycle" />
                                            Transport...
                                          </h2>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          className="cart_product"
                                          style={{ float: "left" }}
                                        >
                                          <a href>
                                            <img
                                              src={pro3}
                                              alt=""
                                              width={127}
                                              height={158}
                                            />
                                          </a>
                                        </td>
                                        <td
                                          className="cart_description"
                                          style={{ float: "left" }}
                                        >
                                          <br />
                                          <h2
                                            className="cart_total_price"
                                            style={{
                                              textAlign: "left",
                                              fontSize: "18px",
                                            }}
                                          >
                                                  English Activity Book 3
                                          </h2>
                                          <p style={{ textAlign: "justify" }}>
                                                     English book with a summary
                                            of the content example of doing the
                                            problem Both a basic form and a
                                            shortcut way with
                                            <br />
                                                     exercises and solutions by
                                            explaining in simple language,
                                            according to the latest curriculum
                                            by explaining to be
                                            <br />
                                                     easy to understand, not
                                            boring, to create a good attitude...
                                          </p>
                                        </td>
                                        <td
                                          className="cart_delete"
                                          style={{ float: "right" }}
                                        >
                                          <br />
                                          <br />
                                          <br />
                                          <br />
                                          <br />
                                          <br />
                                          <br />
                                          <h2
                                            style={{
                                              fontSize: "18px",
                                              color: "#90EE90",
                                            }}
                                          >
                                            <i className="fa fa-check" />
                                            Success
                                          </h2>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                                <div className="col-sm-11">
                                  <br />
                                  <ul className="pagination">
                                    <div className="col-sm-1">
                                      <li>
                                        <a href>«</a>
                                      </li>
                                    </div>
                                    <div className="col-sm-1">
                                      <li className="active">
                                        <a href>1</a>
                                      </li>
                                    </div>
                                    <div className="col-sm-1">
                                      <li>
                                        <a href>2</a>
                                      </li>
                                    </div>
                                    <div className="col-sm-1">
                                      <li>
                                        <a href>3</a>
                                      </li>
                                    </div>
                                    <div className="col-sm-1">
                                      <li>
                                        <a href>4</a>
                                      </li>
                                    </div>
                                    <div className="col-sm-1">
                                      <li>
                                        <a href>5</a>
                                      </li>
                                    </div>
                                    <div className="col-sm-1">
                                      <li>
                                        <a href>6</a>
                                      </li>
                                    </div>
                                    <div className="col-sm-1">
                                      <li>
                                        <a href>7</a>
                                      </li>
                                    </div>
                                    <div className="col-sm-1">
                                      <li>
                                        <a href>8</a>
                                      </li>
                                    </div>
                                    <div className="col-sm-1">
                                      <li>
                                        <a href>9</a>
                                      </li>
                                    </div>
                                    <div className="col-sm-1">
                                      <li>
                                        <a href>10 </a>
                                      </li>
                                    </div>
                                    <div className="col-sm-1">
                                      <li>
                                        <a href>»</a>
                                      </li>
                                    </div>
                                  </ul>
                                </div>
                                <br />
                                <br />
                                <br />
                                <br />
                              </div>
                            </section>{" "}
                            {/*-/#cart_items-*/}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="heading">
                </div>
                <div className="cd-full-width third-slide">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-13">
                        <div className="content third-content">
                          <div className="row">
                            <section id="cart_items">
                              <div className="container">
                                <br />
                                <div className="table-responsive cart_info">
                                  <table className="table table-condensed">
                                    <thead>
                                      <tr className="cart_menu">
                                        <td
                                          className="image"
                                          style={{ textAlign: "left" }}
                                        >
                                          Reward Items
                                        </td>
                                        <td className="description" />
                                        <td />
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td
                                          className="cart_product"
                                          style={{ float: "left" }}
                                        >
                                          <a href>
                                            <img
                                              src={re1}
                                              alt=""
                                              width={127}
                                              height={158}
                                            />
                                          </a>
                                        </td>
                                        <td
                                          className="cart_description"
                                          style={{ float: "left" }}
                                        >
                                          <br />
                                          <h2
                                            className="cart_total_price"
                                            style={{
                                              textAlign: "left",
                                              fontSize: "18px",
                                            }}
                                          >
                                                  Nike Air Shoes
                                          </h2>
                                          <p style={{ textAlign: "justify" }}>
                                                     Good-quality and valuable
                                            shoes. It is very useful and
                                            versatile. A worth reward to be
                                            traded with your point.
                                            <br />
                                                     We normally sell this item
                                            at high price since it is considered
                                            as limited edition item which is
                                            rarely made.
                                            <br />
                                                     Get this thing under your
                                            possession and enjoy....
                                          </p>
                                          <a
                                            className="btn btn-default add-to-cart"
                                            style={{ float: "left" }}
                                          >
                                            <i className="fa fa-eye" />
                                            View
                                          </a>
                                        </td>
                                        <td
                                          className="cart_delete"
                                          style={{ float: "right" }}
                                        >
                                          <br />
                                          <br />
                                          <br />
                                          <br />
                                          <br />
                                          <br />
                                          <br />
                                          <a
                                            href="/d_rewa"
                                            className="btn btn-default add-to-cart"
                                          >
                                            <i className="fa fa-clock-o" />
                                            Trade
                                          </a>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          className="cart_product"
                                          style={{ float: "left" }}
                                        >
                                          <a href>
                                            <img
                                              src={re2}
                                              alt=""
                                              width={127}
                                              height={158}
                                            />
                                          </a>
                                        </td>
                                        <td
                                          className="cart_description"
                                          style={{ float: "left" }}
                                        >
                                          <br />
                                          <h2
                                            className="cart_total_price"
                                            style={{
                                              textAlign: "left",
                                              fontSize: "18px",
                                            }}
                                          >
                                                  Skull Ring
                                          </h2>
                                          <p style={{ textAlign: "justify" }}>
                                                     Good-quality and valuable
                                            ring. It is very useful and
                                            versatile. A worth reward to be
                                            traded with your point.
                                            <br />
                                                     We normally sell this item
                                            at high price since it is considered
                                            as limited edition item which is
                                            rarely made.
                                            <br />
                                                     Get this thing under your
                                            possession and enjoy....
                                          </p>
                                          <a
                                            className="btn btn-default add-to-cart"
                                            style={{ float: "left" }}
                                          >
                                            <i className="fa fa-eye" />
                                            View
                                          </a>
                                        </td>
                                        <td
                                          className="cart_delete"
                                          style={{ float: "right" }}
                                        >
                                          <br />
                                          <br />
                                          <br />
                                          <br />
                                          <br />
                                          <br />
                                          <br />
                                          <a
                                            href="/d_rewa"
                                            className="btn btn-default add-to-cart"
                                          >
                                            <i className="fa fa-clock-o" />
                                            Trade
                                          </a>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          className="cart_product"
                                          style={{ float: "left" }}
                                        >
                                          <a href>
                                            <img
                                              src={re4}
                                              alt=""
                                              width={127}
                                              height={158}
                                            />
                                          </a>
                                        </td>
                                        <td
                                          className="cart_description"
                                          style={{ float: "left" }}
                                        >
                                          <br />
                                          <h2
                                            className="cart_total_price"
                                            style={{
                                              textAlign: "left",
                                              fontSize: "18px",
                                            }}
                                          >
                                                  Leather Gloves
                                          </h2>
                                          <p style={{ textAlign: "justify" }}>
                                                     Good-quality and valuable
                                            gloves. It is very useful and
                                            versatile. A worth reward to be
                                            traded with your point.
                                            <br />
                                                     We normally sell this item
                                            at high price since it is considered
                                            as limited edition item which is
                                            rarely made.
                                            <br />
                                                     Get this thing under your
                                            possession and enjoy....
                                          </p>
                                          <a
                                            className="btn btn-default add-to-cart"
                                            style={{ float: "left" }}
                                          >
                                            <i className="fa fa-eye" />
                                            View
                                          </a>
                                        </td>
                                        <td
                                          className="cart_delete"
                                          style={{ float: "right" }}
                                        >
                                          <br />
                                          <br />
                                          <br />
                                          <br />
                                          <br />
                                          <br />
                                          <br />
                                          <h2
                                            style={{
                                              fontSize: "18px",
                                              color: "#90EE90",
                                            }}
                                          >
                                            <i className="fa fa-check" />
                                            Received
                                          </h2>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                                <div className="col-sm-11">
                                  <br />
                                  <ul className="pagination">
                                    <div className="col-sm-1">
                                      <li>
                                        <a href>«</a>
                                      </li>
                                    </div>
                                    <div className="col-sm-1">
                                      <li className="active">
                                        <a href>1</a>
                                      </li>
                                    </div>
                                    <div className="col-sm-1">
                                      <li>
                                        <a href>2</a>
                                      </li>
                                    </div>
                                    <div className="col-sm-1">
                                      <li>
                                        <a href>3</a>
                                      </li>
                                    </div>
                                    <div className="col-sm-1">
                                      <li>
                                        <a href>4</a>
                                      </li>
                                    </div>
                                    <div className="col-sm-1">
                                      <li>
                                        <a href>5</a>
                                      </li>
                                    </div>
                                    <div className="col-sm-1">
                                      <li>
                                        <a href>6</a>
                                      </li>
                                    </div>
                                    <div className="col-sm-1">
                                      <li>
                                        <a href>7</a>
                                      </li>
                                    </div>
                                    <div className="col-sm-1">
                                      <li>
                                        <a href>8</a>
                                      </li>
                                    </div>
                                    <div className="col-sm-1">
                                      <li>
                                        <a href>9</a>
                                      </li>
                                    </div>
                                    <div className="col-sm-1">
                                      <li>
                                        <a href>10 </a>
                                      </li>
                                    </div>
                                    <div className="col-sm-1">
                                      <li>
                                        <a href>»</a>
                                      </li>
                                    </div>
                                  </ul>
                                </div>
                                <br />
                                <br />
                                <br />
                                <br />
                              </div>
                            </section>{" "}
                            {/*-/#cart_items-*/}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="heading">
                </div>
                <div className="cd-full-width fivth-slide">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-13">
                        <div className="content fivth-content">
                          <div className="row">
                            <form id="contact" action method="post">
                              <div className="col-md-4">
                                <fieldset>
                                  <div
                                    className="col-sm-4"
                                    style={{ float: "left" }}
                                  >
                                    {/*-brands_products-*/}
                                    <div className>
                                      <ul className="nav nav-pills nav-stacked">
                                        <a href>
                                          <span className="pull-center" />
                                        </a>
                                      </ul>
                                    </div>
                                  </div>
                                  <div
                                    className="col-sm-5"
                                    style={{ float: "left" }}
                                  >
                                    {/*-brands_products-*/}
                                    <h2
                                      style={{
                                        fontSize: "18px",
                                        color: "#F39C12",
                                        textAlign: "center",
                                      }}
                                    >
                                      FAQ
                                    </h2>
                                    <div className="brands-name">
                                      <ul className="nav nav-pills nav-stacked">
                                        <a href>
                                          <span className="pull-center">
                                             -Read Policy-
                                          </span>
                                        </a>
                                      </ul>
                                    </div>
                                  </div>
                                </fieldset>
                              </div>
                              <div className="col-md-4">
                                <fieldset></fieldset>
                              </div>
                              <div className="col-md-4">
                                <fieldset>
                                  <img
                                    style={{ width: "350px", height: "1px" }}
                                    src={blank}
                                    alt=""
                                  />
                                  <a
                                    className="btn swappor"
                                    style={{ float: "left" }}
                                  >
                                    <i className="fa fa-user" />
                                     Edit Profile
                                  </a>
                                  <p style={{ float: "left" }}>      </p>
                                  <a
                                    className="btn swappor"
                                    style={{ float: "left" }}
                                  >
                                    <i className="fa fa-lock" />
                                     Change Pass
                                  </a>
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
                                  <label htmlFor="Aname">Name:</label>
                                  <input
                                    name="Aname"
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
                                  <label htmlFor="Amail">Email:</label>
                                  <input
                                    name="Amail"
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
                                  <label htmlFor="Aphone">Tel:</label>
                                  <input
                                    name="Aphone"
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
                                  <label htmlFor="Alocate">Location:</label>
                                  <textarea
                                    name="Alocate"
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
                                <fieldset></fieldset>
                              </div>
                              <div className="col-md-8">
                                <fieldset>
                                  <span
                                    className="cart-total-price text-center"
                                    style={{
                                      fontSize: "18px",
                                      color: "#F39C12",
                                    }}
                                  >
                                       Total special point:
                                  </span>
                                  <span
                                    className="cart-total-price text-center"
                                    style={{ fontSize: "16px" }}
                                  >
                                    520
                                  </span>
                                </fieldset>
                              </div>
                              <div className="col-md-12">
                                <fieldset>
                                  <br />
                                </fieldset>
                              </div>
                              <div className="col-md-4">
                                <fieldset></fieldset>
                              </div>
                              <div className="col-md-8">
                                <fieldset>
                                  <span
                                    className="cart-total-price text-center"
                                    style={{
                                      fontSize: "18px",
                                      color: "#F39C12",
                                    }}
                                  >
                                       Total successful request:
                                  </span>
                                  <span
                                    className="cart-total-price text-center"
                                    style={{ fontSize: "16px" }}
                                  >
                                    3
                                  </span>
                                </fieldset>
                              </div>
                              <div className="col-md-12">
                                <fieldset>
                                  <br />
                                </fieldset>
                              </div>
                              <div className="col-md-4">
                                <fieldset></fieldset>
                              </div>
                              <div className="col-md-8">
                                <fieldset>
                                  <span
                                    className="cart-total-price text-center"
                                    style={{
                                      fontSize: "18px",
                                      color: "#F39C12",
                                    }}
                                  >
                                       Total donated equipment:
                                  </span>
                                  <span
                                    className="cart-total-price text-center"
                                    style={{ fontSize: "16px" }}
                                  >
                                    12
                                  </span>
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
              <li>
                <div className="heading">
                </div>
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
                                  website only. Please DO NOT send the
                                  nonsensical message that is considered
                                  deceived or unrelated to this website.
                                  Spamming action is also not allowed. Any
                                  violence toward these rules will not be
                                  tolerated and must receive the punishment.
                                  <br />
                                  <br />
                                </p>
                                <em>
                                  You can follow our work through these
                                  directions
                                </em>
                                <br />
                                <br />
                                <ul>
                                  <i>
                                    <a>
                                      <i className="fa fa-facebook" />
                                    </a>
                                  </i>
                                  <i>
                                    <a>
                                      <i className="fa fa-youtube" />
                                    </a>
                                  </i>
                                  <i>
                                    <a>
                                      <i className="fa fa-github" />
                                    </a>
                                  </i>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-8">
                              <div className="row">
                                <form id="contact" action method="post">
                                  <div className="col-md-6">
                                    <fieldset>
                                      <input
                                        name="name"
                                        type="text"
                                        id="name"
                                        placeholder="Topic"
                                        required="required"
                                        style={{
                                          width: "100%",
                                          color: "black",
                                          fontSize: "15px",
                                        }}
                                      />
                                    </fieldset>
                                  </div>
                                  <div className="col-md-6">
                                    <fieldset>
                                      <input
                                        name="email"
                                        type="email"
                                        id="email"
                                        placeholder="Your Email"
                                        required="required"
                                        style={{
                                          width: "100%",
                                          color: "black",
                                          fontSize: "15px",
                                        }}
                                      />
                                    </fieldset>
                                  </div>
                                  <div className="col-md-12">
                                    <fieldset>
                                      <textarea
                                        name="message"
                                        rows={6}
                                        id="message"
                                        placeholder="Message"
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
                                      <a
                                        className="btn swappor"
                                        style={{ float: "right" }}
                                      >
                                        Send Report
                                      </a>
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
              <li>
                                <div className="heading">
                  <h1>Logout</h1>
                  <a href="/authen" className="button">
                    EXIT
                  </a>
                </div>
              </li>
            </ul>
          </section>
          <footer>
            <p>
              Copyright © 2020 | Phlad Rian, The School Equipment Donation
              Website
            </p>
          </footer>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
