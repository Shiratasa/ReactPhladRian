/* eslint-disable */
import React, { useEffect, useState, Component } from "react";
import useStateRef from "react-usestateref";
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
  const but1 = window.location.origin + "/resources/imgs/detail.png";
  const blank = window.location.origin + "/resources/imgs/shop/white.jpg";
  const large = window.location.origin + "/resources/imgs/shop/product6.jpg";
  const small1 = window.location.origin + "/resources/imgs/shop/1.jpg";
  const small2 = window.location.origin + "/resources/imgs/shop/2.jpg";
  const small3 = window.location.origin + "/resources/imgs/shop/3.jpg";
  const eng = window.location.origin + "/resources/imgs/authen/eng.png";
  const tha = window.location.origin + "/resources/imgs/authen/tha.png";

  {
    /* Values */
  }
  const [Item_Detail, setItem_Detail] = useState([]);
  const [User_Account, setUser_Account] = useState([]);
  const [R_Param1, setR_Param1] = useState("");
  const [R_Param2, setR_Param2] = useState("");
  var cNum;
  var isWish = "0";
  let { Student_ID } = useParams();
  let { Item_ID } = useParams();
  let history = useHistory();

  {
    /* Item Get */
  }
  const ItemBlock = async () => {
    Axios.get(`http://localhost:5000/Item/${Item_ID}`).then((response) => {
      setItem_Detail(response.data);
    });
  };

  {
    /* Profile Get */
  }
  const ProfileInfo = async () => {
    Axios.get(`http://localhost:5000/R_Account/${Student_ID}`).then(
      (response) => {
        setUser_Account(response.data);
      }
    );
  };

  {
    /* Chance Post */
  }
  const Chance_up = async (e) => {
    Axios.post(`http://localhost:5000/Chance_R/${Student_ID}`, {
      Chance: cNum,
    }).then((response) => {
      console.log(response);
    });
  };

  {
    /* Quantity Post */
  }
  const Quan_up = async (e) => {
    Axios.post(`http://localhost:5000/ItemQuan/${Item_ID}`, {}).then(
      (response) => {
        console.log(response);
      }
    );
  };

  {
    /* Delivery Post */
  }
  const R_deli = async () => {
    if (cNum == "0") {
      JSAlert.alert(
        "",
        "You are running out of request chance...",
        JSAlert.Icons.Failed
      );
      throw "exit";
    }
    JSAlert.confirm("Are you sure you want to request this item?").then(
      function (result) {
        if (!result) {
          throw "exit";
        }
        Chance_up();
        Quan_up();
        JSAlert.alert("", "Item Requested!", JSAlert.Icons.Success);
        Axios.post("http://localhost:5000/Deli_R", {
          Student_ID: R_Param1,
          Item_ID: R_Param2,
        });
        history.push(`/r_main/${Student_ID}`);
        window.location.reload();
      }
    );
  };

  {
    /* Wish Post */
  }
  const R_wish = async () => {
    if (isWish == "0") {
      JSAlert.alert("", "Wish Saved!", JSAlert.Icons.Success);
      Axios.post("http://localhost:5000/Wish_R", {
        Student_ID: R_Param1,
        Item_ID: R_Param2,
      });
      history.push(`/r_main/${Student_ID}`);
      window.location.reload();
    }
  };
  const W_butC = async () => {
    Axios.post(`http://localhost:5000/W_check/${Student_ID}`, {
      Item_ID: R_Param2,
    }).then((response) => {
      if (response.data.message) {
        isWish = "0";
        R_wish();
      } else {
        isWish = "1";
        JSAlert.alert(
          "",
          "You already add this item to wishlist...",
          JSAlert.Icons.Warning
        );
        throw "exit";
      }
    });
  };

  {
    /* Report Check */
  }
  const X_butC = async () => {
    Axios.post(`http://localhost:5000/X_checkR/${Student_ID}`, {
      Item_ID: R_Param2,
    }).then((response) => {
      if (response.data.message) {
        history.push(`/r_main/${Student_ID}/r_item/${Item_ID}/i_report`);
        window.location.reload();
      } else {
        JSAlert.alert(
          "",
          "You already report this item...",
          JSAlert.Icons.Warning
        );
        throw "exit";
      }
    });
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
    ItemBlock();
    ProfileInfo();
    setR_Param1(Student_ID);
    setR_Param2(Item_ID);
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
        .curse {
          font-size: 18px;
        }
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
                                <InnerHTML html={Album} />
                                <br />
                                <br />
                                <br />
                                <br />
                                <div className="demo">
                                  <a onClick={X_butC}>
                                    <i className="fa fa-exclamation-triangle" />{" "}
                                    Report
                                  </a>
                                </div>
                                <br />
                                <br />
                                <br />
                                <br />
                                <div>
                                  <a className="curse" style={{color:"red"}}>
                                    Warning: {val.Warning}
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
                                            history.push(
                                              `/r_main/${Student_ID}`
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
                                  style={{ fontSize: "15pt" }}
                                >
                                  {val.Obj}
                                </h2>
                                <hr className="soft" />
                                <h4 style={{ textAlign: "left" }}>
                                  Description
                                </h4>
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
                                          {val.YesNo}
                                        </div>
                                      </td>
                                    </tr>
                                    <tr className="techSpecRow">
                                      <td className="techSpecTD1">
                                        <b>Quantity:</b>
                                      </td>
                                      <td className="techSpecTD2">
                                        <div style={{ height: "29px" }}>
                                          {val.Quantity}
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
                                {User_Account.map((val, key) => {
                                  cNum = val.Chance;
                                  return (
                                    <span
                                      className="cart-total-price text-center"
                                      id="totalChance"
                                      style={{ fontSize: "16px" }}
                                    >
                                      ({val.Chance}/5)
                                    </span>
                                  );
                                })}
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

export default withRouter(R_Item);
