/* eslint-disable */
import React, { useEffect, useState, Component } from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import InnerHTML from "dangerously-set-html-content";
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

function R_Item() {
  const wall = window.location.origin + "/resources/imgs/wallpaper.jpg";
  const but1 = window.location.origin + "/resources/imgs/home.png";
  const but2 = window.location.origin + "/resources/imgs/request.png";
  const but3 = window.location.origin + "/resources/imgs/wish.png";
  const but4 = window.location.origin + "/resources/imgs/account.png";
  const but5 = window.location.origin + "/resources/imgs/report.png";
  const but6 = window.location.origin + "/resources/imgs/logout.png";
  const blank = window.location.origin + "/resources/imgs/shop/white.jpg";
  const large = window.location.origin + "/resources/imgs/shop/product6.jpg";
  const small1 = window.location.origin + "/resources/imgs/shop/1.jpg";
  const small2 = window.location.origin + "/resources/imgs/shop/2.jpg";
  const small3 = window.location.origin + "/resources/imgs/shop/3.jpg";
  const eng = window.location.origin + "/resources/imgs/authen/eng.png";
  const tha = window.location.origin + "/resources/imgs/authen/tha.png";
  
  let { Item_ID } = useParams();
  let history = useHistory();

  {
    /* Values */
  }
  const [Item_Detail, setItem_Detail] = useState([]);

  {
    /* Item Get */
  }
  const ItemBlock = async () => {
    Axios.get(`http://localhost:5000/Item/${Item_ID}`).then(
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

  {
    /* Album Function */
  }
  const Album = `
    <div>
    <a class="prev" onClick="plusSlides(-1)">&#10094;</a>
    <a class="next" onClick="plusSlides(1)">&#10095;</a>
    </div>
    <br>
    <div style="text-align:center">
      <span class="dot" onclick="currentSlide(1)"></span>&nbsp;&nbsp;&nbsp;
      <span class="dot" onclick="currentSlide(2)"></span>&nbsp;&nbsp;&nbsp;
      <span class="dot" onclick="currentSlide(3)"></span>&nbsp;&nbsp;&nbsp;
      <span class="dot" onclick="currentSlide(4)"></span>
    </div>
    <script>
      var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
var modal_1 = document.getElementById("myModal1");
var image_1 = document.getElementById("preImg1");
var modalImage_1 = document.getElementById("img01");
image_1.onclick = function(){
  modal_1.style.display = "block";
  modalImage_1.src = this.src;
}
var modal_2 = document.getElementById("myModal2");
var image_2 = document.getElementById("preImg2");
var modalImage_2 = document.getElementById("img02");
image_2.onclick = function(){
  modal_2.style.display = "block";
  modalImage_2.src = this.src;
}
var modal_3 = document.getElementById("myModal3");
var image_3 = document.getElementById("preImg3");
var modalImage_3 = document.getElementById("img03");
image_3.onclick = function(){
  modal_3.style.display = "block";
  modalImage_3.src = this.src;
}
var modal_4 = document.getElementById("myModal4");
var image_4 = document.getElementById("preImg4");
var modalImage_4 = document.getElementById("img04");
image_4.onclick = function(){
  modal_4.style.display = "block";
  modalImage_4.src = this.src;
}
var span_1 = document.getElementsByClassName("close one")[0];
span_1.onclick = function() { 
  modal_1.style.display = "none";
}
var span_2 = document.getElementsByClassName("close two")[0];
span_2.onclick = function() { 
  modal_2.style.display = "none";
}
var span_3 = document.getElementsByClassName("close three")[0];
span_3.onclick = function() { 
  modal_3.style.display = "none";
}
var span_4 = document.getElementsByClassName("close four")[0];
span_4.onclick = function() { 
  modal_4.style.display = "none";
}
    </script>
 
  `;

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
        color: grey; 
        padding: 5px 12px; 
        text-decoration: none; 
        transition: background-color 2s; 
        border: 1px solid grey; 
        font-size: 15px;
      } 
      .demo a.active
      {
        color: red;
        border: 1px solid red; 
      }
            .demo a:hover
      {
        color: red;
        border: 1px solid red; 
      }
        .reddit 
      {
          border: 2px solid red;
      }
    .reddot:hover 
      {
          border: 2px solid red;
      }
          .mySlides
    {
     border:solid 1px black;
    }
       #slideshow { 
      position: relative; 
      width: 250px; 
      height: 340px; 
    }
    #slideshow > div { 
      position: absolute; 
    }
    .prev, .next {
      cursor: pointer;
      position: absolute;
      top: 165px;
      width: auto;
      margin-top: -22px;
      padding: 16px;
      color: white;
      font-weight: bold;
      font-size: 18px;
      transition: 0.6s ease;
      user-select: none;
      background-color: rgb(180,180,180);
    }
    .prev {
      left: 16px;
      border-radius: 0 3px 3px 0;
    }
    .next {
      right: 14px;
      border-radius: 3px 0 0 3px;
    } 
    .prev:hover, .next:hover {
      color: white;
      background-color: rgb(255,165,0);
    }
    .dot {
      cursor: pointer;
      height: 15px;
      width: 15px;
      margin: 0 2px;
      background-color: #bbb;
      border-radius: 50%;
      display: inline-block;
      transition: background-color 0.6s ease;
    }
    .active, .dot:hover {
      background-color: rgb(255,165,0);
    }
    .numbertext {
      color: red;
      font-size: 14px;
      font-style: bold;
      padding: 8px 12px;
      position: absolute;
      top: 0;
    }
    .modal {
      display: none; 
      position: fixed; 
      z-index: 100; 
      padding-top: 100px; 
      padding-bottom: 100px; 
      left: 0;
      top: 0;
      width: 100%; 
      height: 100%; 
      overflow: auto; 
      background-color: rgb(0,0,0); 
      background-color: rgba(0,0,0,0.9); 
    }
    .modal-content {
      margin: auto;
      display: block;
      width: 80%;
      max-width: 700px;
    }
    .modal-content, #caption {
      animation-name: zoom;
      animation-duration: 0.6s;
    }
    @keyframes zoom {
      from {transform:scale(0)}
      to {transform:scale(1)}
    }
    .close {
      position: absolute;
      top: 15px;
      right: 35px;
      color: #f1f1f1;
      font-size: 40px;
      font-weight: bold;
      transition: 0.3s;
    }
    .close:hover,
    .close:focus {
      color: #bbb;
      text-decoration: none;
      cursor: pointer;
    }
    @media only screen and (max-width: 700px){
      .modal-content {
        width: 100%;
      }
    }
         #ItemD
    {
     font-size:11pt;
     height:200px;
     width:700px;
     background-color:white;
    }
    ::-webkit-input-placeholder {
    color: black;
    text-align: justify;
}
:-moz-placeholder {
    /* Firefox 18- */
    color: black;
    text-align: justify;
}
::-moz-placeholder {
    /* Firefox 19+ */
    color: black;
    text-align: justify;
}
:-ms-input-placeholder {
    color: black;
    text-align: justify;
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
                      <img src={but3} width={40} height={35} />
                    </div>
                    <h6>Wishlist</h6>
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
            {Item_Detail.map((val, key) => {
              return (
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
                                  src={val.Pic1}
                                  style={{ width: "255px", height: "340px" }}
                                />
                              </div>
                              <div class="mySlides">
                                <div class="numbertext">2 / 4</div>
                                <img
                                  id="preImg2"
                                  src={val.Pic2}
                                  style={{ width: "255px", height: "340px" }}
                                />
                              </div>
                              <div class="mySlides">
                                <div class="numbertext">3 / 4</div>
                                <img
                                  id="preImg3"
                                  src={val.Pic3}
                                  style={{ width: "255px", height: "340px" }}
                                />
                              </div>
                              <div class="mySlides">
                                <div class="numbertext">4 / 4</div>
                                <img
                                  id="preImg4"
                                  src={val.Pic4}
                                  style={{ width: "255px", height: "340px" }}
                                />
                              </div>
                            </div>
                            <InnerHTML html={Album} />
                            <br />
                            <br />
                            <br />
                            <br />
                            <div className="demo">
                              <a href>
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
                                      onClick={() => {history.push("/r_main"); window.location.reload();}}
                                    >
                                      <i className="fa fa-times" />
                                    </a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <h2 className="title text-center" style={{ fontSize: "14pt" }}>
                              {val.Obj}
                            </h2>
                            <hr className="soft" />
                            <h4 style={{ textAlign: "left" }}>Description</h4>
                              <textarea
                                type="address"
                                id="ItemD"
                                placeholder={val.Detail}
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
                                  <td className="techSpecTD2">{val.Category}</td>
                                </tr>
                                <tr className="techSpecRow">
                                  <td className="techSpecTD1">
                                    <b>School:</b>
                                  </td>
                                  <td className="techSpecTD2">{val.Name}</td>
                                </tr>
                                <tr className="techSpecRow">
                                  <td className="techSpecTD1">
                                    <b>Condition:</b>
                                  </td>
                                  <td className="techSpecTD2">{val.I_Con}</td>
                                </tr>
                                <tr className="techSpecRow">
                                  <td className="techSpecTD1">
                                    <b>Fragile:</b>
                                  </td>
                                  <td className="techSpecTD2">{val.YesNo}</td>
                                </tr>
                                <tr className="techSpecRow">
                                  <td className="techSpecTD1">
                                    <b>Quantity:</b>
                                  </td>
                                  <td className="techSpecTD2">{val.Quantity}</td>
                                </tr>
                              </tbody>
                            </table>
                            <hr className="soft" />
                            <span
                              className="cart-total-price text-center"
                              style={{ fontSize: "18px", color: "#F39C12" }}
                            >
                              Weekly request chance:
                            </span>
                            <span
                              className="cart-total-price text-center"
                              style={{ fontSize: "16px" }}
                            >
                              (1/5)
                            </span>
                            <hr className="soft" />
                            <button
                              type="submit"
                              className="btn btn-default swappor"
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
                              type="submit"
                              className="btn btn-default swapper"
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
              );
            })}
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
                <a className="button" onClick={() => {history.push("/"); window.location.reload();}}>
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

export default withRouter(R_Item);
