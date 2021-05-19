/* eslint-disable */
import React, { useEffect, useState, Component } from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import Gallereact from "gallereact";
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

function D_Add() {
  const wall = window.location.origin + "/resources/imgs/wallpaper.jpg";
  const but1 = window.location.origin + "/resources/imgs/home.png";
  const but2 = window.location.origin + "/resources/imgs/request.png";
  const but3 = window.location.origin + "/resources/imgs/reward.png";
  const but4 = window.location.origin + "/resources/imgs/account.png";
  const but5 = window.location.origin + "/resources/imgs/report.png";
  const but6 = window.location.origin + "/resources/imgs/logout.png";
  const blank = window.location.origin + "/resources/imgs/shop/white.jpg";
  const eng = window.location.origin + "/resources/imgs/authen/eng.png";
  const tha = window.location.origin + "/resources/imgs/authen/tha.png";
  const adder = window.location.origin + "/resources/imgs/shop/add.png";

  {
    /* Values */
  }
  var regEx1 = /^[^\s]+(\s+[^\s]+)*$/;
  var regEx2 = /(^(?!\s))+([0-9]{1,256})+($)/;
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
  const images = [I_Pic1, I_Pic2, I_Pic3, I_Pic4];
  let history = useHistory();

  {
    /* Delay */
  }
  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    JSAlert.alert("", "Submit Success!", JSAlert.Icons.Success);
    await timeout(1000).then($(this).unbind("submit").submit());
    history.push("/d_main");
    location.reload();
  };

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
    /* String Check */
  }
  function checkString() {
    var nameI = document.getElementById("ItemN");
    var despI = document.getElementById("ItemD");
    var categI = document.getElementById("ItemC");
    var schoolI = document.getElementById("ItemS");
    var qualI = document.getElementById("ItemA");
    var fragI = document.getElementById("ItemF");
    var quanI = document.getElementById("ItemQ");
    if (
      nameI.value == "" ||
      nameI.value.length < 5 ||
      regEx1.test(nameI.value) == false
    ) {
      JSAlert.alert(
        "(Ex): English Book 3",
        "Please enter item name properly...",
        JSAlert.Icons.Warning
      );
      quanI.value = "";
      throw "exit";
    }
    if (
      despI.value == "" ||
      despI.value.length < 20 ||
      regEx1.test(despI.value) == false
    ) {
      JSAlert.alert(
        "(Ex): An English book for the high school year 3 education.",
        "Please enter item information in full detail...",
        JSAlert.Icons.Warning
      );
      quanI.value = "";
      throw "exit";
    }
    if (categI.value == "") {
      JSAlert.alert(
        "",
        "Please select category of item...",
        JSAlert.Icons.Warning
      );
      quanI.value = "";
      throw "exit";
    }
    if (schoolI.value == "") {
      JSAlert.alert(
        "",
        "Please select school of item...",
        JSAlert.Icons.Warning
      );
      quanI.value = "";
      throw "exit";
    }
    if (qualI.value == "") {
      JSAlert.alert(
        "",
        "Please select quality level of item...",
        JSAlert.Icons.Warning
      );
      quanI.value = "";
      throw "exit";
    }
    if (fragI.value == "") {
      JSAlert.alert(
        "",
        "Please select fragility of item...",
        JSAlert.Icons.Warning
      );
      quanI.value = "";
      throw "exit";
    }
    if (quanI.value == "" || regEx2.test(quanI.value) == false) {
      JSAlert.alert(
        "(Ex): 5",
        "Please enter item quantity number...",
        JSAlert.Icons.Warning
      );
      quanI.value = "";
      throw "exit";
    }
  }

  {
    /* File Check 1 */
  }
  function checkFile1() {
    var picI1 = document.getElementById("img1");
    var quanI = document.getElementById("ItemQ");
    var fileExtension1 = "";
    if (picI1.value.lastIndexOf(".") > 0) {
      fileExtension1 = picI1.value.substring(
        picI1.value.lastIndexOf(".") + 1,
        picI1.value.length
      );
    }
    if (
      fileExtension1.toLowerCase() != "png" &&
      fileExtension1.toLowerCase() != "jpeg" &&
      fileExtension1.toLowerCase() != "jpg"
    ) {
      JSAlert.alert(
        "",
        "Please select <.png, .jpg> image file 1 for upload...",
        JSAlert.Icons.Warning
      );
      quanI.value = "";
      throw "exit";
    }
  }

  {
    /* File Check 2 */
  }
  function checkFile2() {
    var picI2 = document.getElementById("img2");
    var quanI = document.getElementById("ItemQ");
    var fileExtension2 = "";
    if (picI2.value.lastIndexOf(".") > 0) {
      fileExtension2 = picI2.value.substring(
        picI2.value.lastIndexOf(".") + 1,
        picI2.value.length
      );
    }
    if (
      fileExtension2.toLowerCase() != "png" &&
      fileExtension2.toLowerCase() != "jpeg" &&
      fileExtension2.toLowerCase() != "jpg"
    ) {
      JSAlert.alert(
        "",
        "Please select <.png, .jpg> image file 2 for upload...",
        JSAlert.Icons.Warning
      );
      quanI.value = "";
      throw "exit";
    }
  }

  {
    /* File Check 3 */
  }
  function checkFile3() {
    var picI3 = document.getElementById("img3");
    var quanI = document.getElementById("ItemQ");
    var fileExtension3 = "";
    if (picI3.value.lastIndexOf(".") > 0) {
      fileExtension3 = picI3.value.substring(
        picI3.value.lastIndexOf(".") + 1,
        picI3.value.length
      );
    }
    if (
      fileExtension3.toLowerCase() != "png" &&
      fileExtension3.toLowerCase() != "jpeg" &&
      fileExtension3.toLowerCase() != "jpg"
    ) {
      JSAlert.alert(
        "",
        "Please select <.png, .jpg> image file 3 for upload...",
        JSAlert.Icons.Warning
      );
      quanI.value = "";
      throw "exit";
    }
  }

  {
    /* File Check 4 */
  }
  function checkFile4() {
    var picI4 = document.getElementById("img4");
    var quanI = document.getElementById("ItemQ");
    var fileExtension4 = "";
    if (picI4.value.lastIndexOf(".") > 0) {
      fileExtension4 = picI4.value.substring(
        picI4.value.lastIndexOf(".") + 1,
        picI4.value.length
      );
    }
    if (
      fileExtension4.toLowerCase() != "png" &&
      fileExtension4.toLowerCase() != "jpeg" &&
      fileExtension4.toLowerCase() != "jpg"
    ) {
      JSAlert.alert(
        "",
        "Please select <.png, .jpg> image file 4 for upload...",
        JSAlert.Icons.Warning
      );
      quanI.value = "";
      throw "exit";
    }
  }

  {
    /* Item Post */
  }
  const I_donate = async () => {
    checkString();
    checkFile1();
    checkFile2();
    checkFile3();
    checkFile4();
    Axios.post("http://localhost:5000/I_donate", {
      Obj: I_Obj,
      Pic1: I_Pic1,
      Pic2: I_Pic2,
      Pic3: I_Pic3,
      Pic4: I_Pic4,
      Type_ID: I_Type,
      School_ID: I_School,
      Quantity: I_Num,
      Quality: I_All,
      Detail: I_Desp,
      Fragile: I_Frag,
    }).then((response) => {
      console.log(response);
    });
  };

  {
    /* Load Function */
  }
  window.onload = function () {
    CategBox();
    SchoolBox();
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
              <form onSubmit={handleSubmit}>
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
                              <label
                                for="Student Card"
                                style={{ color: "red", fontSize: "15px" }}
                              >
                                &nbsp; Item Photo (.png, .jpg) &nbsp;
                              </label>
                              <br />
                              <br />
                              <input
                                type="file"
                                id="img1"
                                accept=".png, .jpg, .jpeg"
                                required
                                onInvalid={I_donate.exit}
                                onChange={(x) => setI_Pic1(x.target.value)}
                              />
                              <br />
                              <input
                                type="file"
                                id="img2"
                                accept=".png, .jpg, .jpeg"
                                required
                                onInvalid={I_donate.exit}
                                onChange={(x) => setI_Pic2(x.target.value)}
                              />
                              <br />
                              <input
                                type="file"
                                id="img3"
                                accept=".png, .jpg, .jpeg"
                                required
                                onInvalid={I_donate.exit}
                                onChange={(x) => setI_Pic3(x.target.value)}
                              />
                              <br />
                              <input
                                type="file"
                                id="img4"
                                accept=".png, .jpg, .jpeg"
                                required
                                onInvalid={I_donate.exit}
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
                                  autocomplete="off"
                                  required
                                  onInvalid={I_donate.exit}
                                  onChange={(x) => setI_Obj(x.target.value)}
                                />
                              </h2>
                              <hr className="soft" />
                              <h4 style={{ textAlign: "left" }}>Description</h4>
                              <textarea
                                type="address"
                                id="ItemD"
                                placeholder="Item Description"
                                autocomplete="off"
                                required
                                onInvalid={I_donate.exit}
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
                                        required
                                        onInvalid={I_donate.exit}
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
                                        required
                                        onInvalid={I_donate.exit}
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
                                        onInvalid={I_donate.exit}
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
                                        onInvalid={I_donate.exit}
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
                                        autocomplete="off"
                                        required
                                        onInvalid={I_donate.exit}
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
                                onClick={I_donate}
                              >
                                <i className="fa fa fa-edit" />
                                 Save detail
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
                <a href="/" className="button">
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

export default withRouter(D_Add);
