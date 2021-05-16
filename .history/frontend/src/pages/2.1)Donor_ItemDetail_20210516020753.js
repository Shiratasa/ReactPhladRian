/* eslint-disable */
import React, { useEffect, useState, Component } from "react";
import { Helmet } from "react-helmet";
import wall from "./resources/imgs/wallpaper.jpg";
import but1 from "./resources/imgs/home.png";
import but2 from "./resources/imgs/request.png";
import but3 from "./resources/imgs/reward.png";
import but4 from "./resources/imgs/account.png";
import but5 from "./resources/imgs/report.png";
import but6 from "./resources/imgs/logout.png";
import blank from "./resources/imgs/shop/white.jpg";
import eng from "./resources/imgs/authen/eng.png";
import tha from "./resources/imgs/authen/tha.png";
import adder from "./resources/imgs/shop/add.png";
import Gallereact from "gallereact";
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
  const [School_List, setSchool_List] = useState([]);
  const [Categ_List, setCateg_List] = useState([]);
  const [I_Obj, setI_Obj] = useState("");
  const [I_Pic1, setI_Pic1] = useState("");
  const [I_Pic2, setI_Pic2] = useState("");
  const [I_Pic3, setI_Pic3] = useState("");
  const [I_Pic4, setI_Pic4] = useState("");
  const [I_Type, setI_Type] = useState("");
  const [I_School, setI_School] = useState("");
  const [I_All, setI_All] = useState("");
  const [I_Num, setI_Num] = useState("");
  const [I_Desp, setI_Desp] = useState("");
  const [I_Frag, setI_Frag] = useState("");
  const images = [adder, I_Pic1, I_Pic2, I_Pic3, I_Pic4];

  {
    /* School Get */
  }
  const SchoolBox = async () => {
    Axios.get("http://localhost:5000/School").then((response) => {
      setSchool_List(response.data);
    });
  };

  {
    /* Category Get */
  }
  const CategBox = async () => {
    Axios.get("http://localhost:5000/Categ").then((response) => {
      setCateg_List(response.data);
    });
  };

  {
    /* Item Post */
  }
  const I_donate = async () => {
    if (invali == "0") {
      E_postR();
      Axios.post("http://localhost:5000/I_donate", {
        Obj: I_Obj,
        Pic1: I_Pic1,
        Pic2: I_Pic2,
        Pic3: I_Pic3,
        Pic4: I_Pic4,
        Type_ID: I_Type,
        School_ID: I_School,
        Quantity: I_All,
        Quality: I_Num,
        Detail: I_Desp,
        Fragile: I_Frag,
      }).then((response) => {
        console.log(response);
      });
    }
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
    #ItemN
    {
     font-size:16pt;
     width:500px;
     text-align:center;
    }
     #ItemD
    {
     font-size:12pt;
     height:200px;
     width:700px;
     background-color:white;
     border:solid 1px black;
    }
    .fitBox
    {
     font-size:10pt;
     width:300px;
     background-color:white;
     border:solid 1px black;
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
              <div className="heading"></div>
              <form>
                <div className="cd-full-width first-slide">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-13">
                        <div className="content first-content">
                          <div className="container">
                            <div id="gallery" className="col-sm-3">
                              <Gallereact
                                images={images}
                                slideStyle={{ width: "255px", height: "340px" }}
                              />
                              <br />
                              <br />
                              <input
                                type="file"
                                id="img1"
                                accept=".png, .jpg, .jpeg"
                                required
                                onChange={(x) => setI_Pic1(x.target.value)}
                              />
                              <br />
                              <input
                                type="file"
                                id="img2"
                                accept=".png, .jpg, .jpeg"
                                required
                                onChange={(x) => setI_Pic2(x.target.value)}
                              />
                              <br />
                              <input
                                type="file"
                                id="img3"
                                accept=".png, .jpg, .jpeg"
                                required
                                onChange={(x) => setI_Pic3(x.target.value)}
                              />
                              <br />
                              <input
                                type="file"
                                id="img4"
                                accept=".png, .jpg, .jpeg"
                                required
                                onChange={(x) => setI_Pic4(x.target.value)}
                              />
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
                                        href="/d_main"
                                      >
                                        <i className="fa fa-times" />
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <h2 className="title text-center">
                                <input
                                  type="text"
                                  id="ItemN"
                                  placeholder="Item Name"
                                  required
                                  onChange={(x) => setI_Obj(x.target.value)}
                                />
                              </h2>
                              <hr className="soft" />
                              <h4 style={{ textAlign: "left" }}>Description</h4>
                              <textarea
                                type="address"
                                id="ItemD"
                                placeholder="Item Description"
                                required
                                onChange={(x) => setI_Desp(x.target.value)}
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
                                    <td className="techSpecTD1">
                                      <select
                                        id="ItemC"
                                        className="fitBox"
                                        onClick={CategBox}
                                        required
                                        onChange={(x) =>
                                          setI_Type(x.target.value)
                                        }
                                      >
                                        <option
                                          value=""
                                          disabled
                                          selected="selected"
                                        >
                                          -- Select Category --
                                        </option>
                                        {Categ_List.map((val, key) => (
                                          <option
                                            key={val.Type_ID}
                                            value={val.Type_ID}
                                          >
                                            {val.Category}
                                          </option>
                                        ))}
                                      </select>
                                    </td>
                                  </tr>
                                  <tr className="techSpecRow">
                                    <td className="techSpecTD1">
                                      <b>School:</b>
                                    </td>
                                    <td className="techSpecTD1">
                                      <select
                                        id="ItemS"
                                        className="fitBox"
                                        onClick={SchoolBox}
                                        required
                                        onChange={(x) =>
                                          setI_School(x.target.value)
                                        }
                                      >
                                        <option
                                          value=""
                                          disabled
                                          selected="selected"
                                        >
                                          -- Select School --
                                        </option>
                                        {School_List.map((val, key) => (
                                          <option
                                            key={val.School_ID}
                                            value={val.School_ID}
                                          >
                                            {val.Name}
                                          </option>
                                        ))}
                                      </select>
                                    </td>
                                  </tr>
                                  <tr className="techSpecRow">
                                    <td className="techSpecTD1">
                                      <b>Condition:</b>
                                    </td>
                                    <td className="techSpecTD1">
                                      <select
                                        id="ItemA"
                                        className="fitBox"
                                        required
                                        onChange={(x) =>
                                          setI_All(x.target.value)
                                        }
                                      >
                                        <option
                                          value=""
                                          disabled
                                          selected="selected"
                                        >
                                          -- Select Conditon --
                                        </option>
                                        <option value="4">New</option>
                                        <option value="3">Excellent</option>
                                        <option value="2">Good</option>
                                        <option value="1">Fair</option>
                                      </select>
                                    </td>
                                  </tr>
                                  <tr className="techSpecRow">
                                    <td className="techSpecTD1">
                                      <b>Fragile:</b>
                                    </td>
                                    <td className="techSpecTD1">
                                      <select
                                        id="ItemF"
                                        className="fitBox"
                                        required
                                        onChange={(x) =>
                                          setI_Frag(x.target.value)
                                        }
                                      >
                                        <option
                                          value=""
                                          disabled
                                          selected="selected"
                                        >
                                          -- Select Fragility --
                                        </option>
                                        <option value="0">No</option>
                                        <option value="1">Yes</option>
                                      </select>
                                    </td>
                                  </tr>
                                  <tr className="techSpecRow">
                                    <td className="techSpecTD1">
                                      <b>Quantity:</b>
                                    </td>
                                    <td className="techSpecTD1">
                                      <input
                                        type="text"
                                        id="ItemQ"
                                        placeholder="Item Quantity"
                                        required
                                        onChange={(x) =>
                                          setI_Num(x.target.value)
                                        }
                                      />
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <hr className="soft" />
                              <button
                                type="submit"
                                className="btn btn-default swappor"
                              >
                                <i className="fa fa fa-edit" />
                                 Edit detail
                              </button>
                              <img
                                style={{ width: "180px", height: "50px" }}
                                src={blank}
                                alt=""
                              />
                              <button
                                type="submit"
                                className="btn btn-default swapper"
                              >
                                <i className="fa fa-trash-o" />
                                 Delete item
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </li>
            {/*-/Home page-*/}
            <li>
              <div className="heading"></div>
            </li>
            <li>
              <div className="heading"></div>
            </li>
            <li>
              <div className="heading"></div>
            </li>
            <li>
              <div className="heading"></div>
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
            Copyright © 2020 | Phlad Rian, The School Equipment Donation Website
          </p>
        </footer>
      </div>
    </div>
  );
}

export default withRouter(App);