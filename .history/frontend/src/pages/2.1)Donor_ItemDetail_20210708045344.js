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

function D_Add() {
  const wall = window.location.origin + "/resources/imgs/wallpaper.jpg";
  const but1 = window.location.origin + "/resources/imgs/detail.png";
  const blank = window.location.origin + "/resources/imgs/shop/white.jpg";
  const eng = window.location.origin + "/resources/imgs/authen/eng.png";
  const tha = window.location.origin + "/resources/imgs/authen/tha.png";
  const adder = window.location.origin + "/resources/imgs/shop/add.png";

  {
    /* Values */
  }
  var regEx1 = /^[^\s]+(\s+[^\s]+)*$/;
  var regEx2 = /(^(?!\s))+([0-9]{1,256})+($)/;
  var p1 = adder;
  var p2 = adder;
  var p3 = adder;
  var p4 = adder;
  const [file_Array1, setFile_Array1] = useState("");
  const [file_Array2, setFile_Array2] = useState("");
  const [file_Array3, setFile_Array3] = useState("");
  const [file_Array4, setFile_Array4] = useState("");
  const [School_List, setSchool_List] = useState([]);
  const [Categ_List, setCateg_List] = useState([]);
  const [Frag_List, setFrag_List] = useState([]);
  const [Qual_List, setQual_List] = useState([]);
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
  const images = [p1, p2, p3, p4];
  const [Item_Detail, setItem_Detail] = useState([]);
  let { Donor_ID } = useParams();
  let { Item_ID } = useParams();
  const [I_ParamX, setI_ParamX] = useState("");
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
    Axios.get("http://localhost:5000/Categ_I").then((response) => {
      setCateg_List(response.data);
    });
  };

  {
    /* Fragile Get */
  }
  const FragBox = async () => {
    Axios.get("http://localhost:5000/Frag").then((response) => {
      setFrag_List(response.data);
    });
  };

  {
    /* Quality Get */
  }
  const QualBox = async () => {
    Axios.get("http://localhost:5000/Qual").then((response) => {
      setQual_List(response.data);
    });
  };

  {
    /* Convert File */
  }
  const fileToBinary1 = async (file) => {
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        resolve(event.target.result);
        setFile_Array1(event.target.result);
      };
      reader.readAsDataURL(file);
    });
  };
  const fileToBinary2 = async (file) => {
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        resolve(event.target.result);
        setFile_Array2(event.target.result);
      };
      reader.readAsDataURL(file);
    });
  };
  const fileToBinary3 = async (file) => {
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        resolve(event.target.result);
        setFile_Array3(event.target.result);
      };
      reader.readAsDataURL(file);
    });
  };
  const fileToBinary4 = async (file) => {
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        resolve(event.target.result);
        setFile_Array4(event.target.result);
      };
      reader.readAsDataURL(file);
    });
  };

  const fileConvert1 = async (file) => {
    if (!file) {
      setI_Pic1("");
      return;
    }
    preImg1.src = URL.createObjectURL(file);
    fileToBinary1(file).then((I_Pic1) => {
      setI_Pic1(I_Pic1);
    });
  };
  const fileConvert2 = async (file) => {
    if (!file) {
      setI_Pic2("");
      return;
    }
    preImg2.src = URL.createObjectURL(file);
    fileToBinary2(file).then((I_Pic2) => {
      setI_Pic2(I_Pic2);
    });
  };
  const fileConvert3 = async (file) => {
    if (!file) {
      setI_Pic3("");
      return;
    }
    preImg3.src = URL.createObjectURL(file);
    fileToBinary3(file).then((I_Pic3) => {
      setI_Pic3(I_Pic3);
    });
  };
  const fileConvert4 = async (file) => {
    if (!file) {
      setI_Pic4("");
      return;
    }
    preImg4.src = URL.createObjectURL(file);
    fileToBinary4(file).then((I_Pic4) => {
      setI_Pic4(I_Pic4);
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
        "Please enter item information in full detail without space at beginning & ending...",
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
      fileExtension1.toLowerCase() != "jpg" &&
      fileExtension1.toLowerCase() != ""
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
      fileExtension2.toLowerCase() != "jpg" &&
      fileExtension2.toLowerCase() != ""
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
      fileExtension3.toLowerCase() != "jpg" &&
      fileExtension3.toLowerCase() != ""
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
      fileExtension4.toLowerCase() != "jpg" &&
      fileExtension4.toLowerCase() != ""
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
  const I_update = async () => {
    checkString();
    checkFile1();
    checkFile2();
    checkFile3();
    checkFile4();
    JSAlert.confirm("Are you sure you want to edit this item?").then(function (
      result
    ) {
      if (!result) {
        throw "exit";
      }
      JSAlert.alert("", "Item Edited!", JSAlert.Icons.Success);
      Axios.post(`http://localhost:5000/I_update/${Item_ID}`, {
        Obj: I_Obj,
        Pic1: file_Array1,
        Pic2: file_Array2,
        Pic3: file_Array3,
        Pic4: file_Array4,
        Type_ID: I_Type,
        School_ID: I_School,
        Quantity: I_Num,
        Quality: I_All,
        Detail: I_Desp,
        Fragile: I_Frag,
      });
      history.push(`/d_main/${Donor_ID}`);
      window.location.reload();
    });
  };

  {
    /* Item Delete */
  }
  const I_delete = async (e) => {
    JSAlert.confirm("Are you sure you want to delete this item?").then(
      function (result) {
        if (!result) {
          throw "exit";
        }
        JSAlert.alert("", "Item Deleted!", JSAlert.Icons.Success);
        Axios.post("http://localhost:5000/I_delete", {
          Item_ID: I_ParamX,
        });
        history.push(`/d_main/${Donor_ID}`);
        window.location.reload();
      }
    );
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
    CategBox();
    SchoolBox();
    FragBox();
    QualBox();
    setI_ParamX(Item_ID);
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
          <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no" />
          <link rel="icon" href="resources/imgs/book-icon.png" sizes="16x16" />
          <link rel="stylesheet" href="resources/css/bootstrap.min.css" />
          <link rel="stylesheet" href="resources/css/bootstrap-theme.min.css" />
          <link rel="stylesheet" href="resources/css/fontAwesome.css" />
          <link rel="stylesheet" href="resources/css/templatemo-style.css" />
          <link rel="stylesheet" href="resources/css/Page_Detail.css" />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900"
            rel="stylesheet"
          />
          <link href="resources/css/bootstrap.min (2).css" rel="stylesheet" />
          <link href="resources/css/font-awesome.min.css" rel="stylesheet" />
          <link href="resources/css/prettyPhoto.css" rel="stylesheet" />
          <link href="resources/css/price-range.css" rel="stylesheet" />
          <link href="resources/css/animate.css" rel="stylesheet" />
          DetailDetail
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
            color: red;
            border: 1px solid red;
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
                  <form>
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
                                  <label
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
                                    onInvalid={I_update.exit}
                                    onChange={(event) =>
                                      fileConvert1(
                                        event.target.files[0] || null
                                      )
                                    }
                                  />
                                  <br />
                                  <input
                                    type="file"
                                    id="img2"
                                    accept=".png, .jpg, .jpeg"
                                    onInvalid={I_update.exit}
                                    onChange={(event) =>
                                      fileConvert2(
                                        event.target.files[0] || null
                                      )
                                    }
                                  />
                                  <br />
                                  <input
                                    type="file"
                                    id="img3"
                                    accept=".png, .jpg, .jpeg"
                                    onInvalid={I_update.exit}
                                    onChange={(event) =>
                                      fileConvert3(
                                        event.target.files[0] || null
                                      )
                                    }
                                  />
                                  <br />
                                  <input
                                    type="file"
                                    id="img4"
                                    accept=".png, .jpg, .jpeg"
                                    onInvalid={I_update.exit}
                                    onChange={(event) =>
                                      fileConvert4(
                                        event.target.files[0] || null
                                      )
                                    }
                                  />
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
                                                `/d_main/${Donor_ID}`
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
                                  <h2 className="title text-center">
                                    <input
                                      type="text"
                                      className="inputField"
                                      id="ItemN"
                                      placeholder="Item Name"
                                      defaultValue={val.Obj}
                                      autocomplete="off"
                                      onInvalid={I_update.exit}
                                      onChange={(x) => setI_Obj(x.target.value)}
                                    />
                                  </h2>
                                  <hr className="soft" />
                                  <h4 style={{ textAlign: "left" }}>
                                    Description
                                  </h4>
                                  <textarea
                                    type="address"
                                    className="inputField"
                                    id="ItemD"
                                    placeholder="Item Description"
                                    defaultValue={val.Detail}
                                    autocomplete="off"
                                    onInvalid={I_update.exit}
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
                                            className="fitBox inputField"
                                            onInvalid={I_update.exit}
                                            onChange={(x) =>
                                              setI_Type(x.target.value)
                                            }
                                          >
                                            <option
                                              key={val.Type_ID}
                                              value={val.Type_ID}
                                              disabled
                                              selected="selected"
                                            >
                                              {val.Category}
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
                                            className="fitBox inputField"
                                            onInvalid={I_update.exit}
                                            onChange={(x) =>
                                              setI_School(x.target.value)
                                            }
                                          >
                                            <option
                                              key={val.School_ID}
                                              value={val.School_ID}
                                              disabled
                                              selected="selected"
                                            >
                                              {val.Name}
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
                                            className="fitBox inputField"
                                            onInvalid={I_update.exit}
                                            onChange={(x) =>
                                              setI_All(x.target.value)
                                            }
                                          >
                                            <option
                                              key={val.Quality}
                                              value={val.Quality}
                                              disabled
                                              selected="selected"
                                            >
                                              {val.I_Con}
                                            </option>
                                            {Qual_List.map((val, key) => (
                                              <option
                                                key={val.Quality}
                                                value={val.Quality}
                                              >
                                                {val.I_Con}
                                              </option>
                                            ))}
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
                                            className="fitBox inputField"
                                            onInvalid={I_update.exit}
                                            onChange={(x) =>
                                              setI_Frag(x.target.value)
                                            }
                                          >
                                            <option
                                              key={val.Fragile}
                                              value={val.Fragile}
                                              disabled
                                              selected="selected"
                                            >
                                              {val.YesNo}
                                            </option>
                                            {Frag_List.map((val, key) => (
                                              <option
                                                key={val.Fragile}
                                                value={val.Fragile}
                                              >
                                                {val.YesNo}
                                              </option>
                                            ))}
                                          </select>
                                        </td>
                                      </tr>
                                      <tr className="techSpecRow">
                                        <td className="techSpecTD1">
                                          <b>Quantity:</b>
                                        </td>
                                        <td className="techSpecTD1">
                                          <div style={{ height: "29px" }}>
                                            <input
                                              type="text"
                                              className="inputField"
                                              id="ItemQ"
                                              defaultValue={val.Quantity}
                                              placeholder="Item Quantity"
                                              autocomplete="off"
                                              required
                                              onInvalid={I_update.exit}
                                              onChange={(x) =>
                                                setI_Num(x.target.value)
                                              }
                                            />
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <hr className="soft" />
                                  <button
                                    type="button"
                                    className="btn swappor"
                                    onClick={I_update}
                                  >
                                    <i className="fa fa fa-edit" />
                                     Save detail
                                  </button>
                                  <img
                                    style={{ width: "180px", height: "50px" }}
                                    src={blank}
                                    alt=""
                                  />
                                  <button
                                    id="del_but"
                                    type="button"
                                    className="btn swapper"
                                    onClick={I_delete}
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

export default withRouter(D_Add);
