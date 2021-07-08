/* eslint-disable */
import React, { useEffect, useState, Component } from "react";
import useStateRef from "react-usestateref";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import InnerHTML from "dangerously-set-html-content";
import Axios from "axios";
import Pagination from "./Pagination.js";
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

function R_Main() {
  const wall = window.location.origin + "/resources/imgs/wallpaper.jpg";
  const but1 = window.location.origin + "/resources/imgs/detail.png";
  const blank = window.location.origin + "/resources/imgs/shop/white.jpg";
  const eng = window.location.origin + "/resources/imgs/authen/eng.png";
  const tha = window.location.origin + "/resources/imgs/authen/tha.png";

  {
    /* Values */
  }
  {
    /*String Standard*/
  }
  var regEx1 = /(^(?!\s))+([A-Z]{1}[a-z]{1,256})+(\s[A-Z]{1}[a-z]{1,256})+($)/;
  var regEx2 =
    /(^(?!\s))+([a-z0-9.]{1,256})+([@]{1}[a-z0-9]{1,256})+([.]{1}[a-z.]{1,256})+($)/;
  var regEx3 = /^\S*$/;
  var regEx4 = /(^(?!\s))+([0]{1}[6,8,9]{1}[0-9]{1,256})+($)/;
  var regEx5 = /(^(?!\s))+([A-Za-z0-9]{1,256})+($)/;
  var regEx6 = /^[^\s]+(\s+[^\s]+)*$/;
  var regEx7 = /(^(?!\s))+([0-9]{1,256})+($)/;
  var regEx8 = /^[^\s]+(\s+[^\s]+)*$/;
  var invaliA = "1";
  var invaliP = "1";
  var AMsent = "1";
  var isWish = "0";
  {
    /*Report Send*/
  }
  const [Topic_Reg, setTopic_Reg] = useState("");
  const [Mail_Reg, setMail_Reg] = useState("");
  const [Message_Reg, setMessage_Reg] = useState("");
  {
    /*Profile Info*/
  }
  const [R_Param1, setR_Param1] = useState("");
  const [R_nameReg, setR_nameReg] = useState("");
  const [R_emailReg, setR_emailReg] = useState("");
  const [R_phoneReg, setR_phoneReg] = useState("");
  const [R_localReg, setR_localReg] = useState("");
  const [R_zipReg, setR_zipReg] = useState("");
  const [R_schoolReg, setR_schoolReg] = useState("");
  const [R_gradeReg, setR_gradeReg] = useState("");
  const [R_cardReg, setR_cardReg] = useState("");
  const [R_imageReg, setR_imageReg] = useState("");
  const [R_passReg, setR_passReg] = useState("");
  {
    /*Item Num-tab*/
  }
  const [Current_Page1, setCurrent_Page1] = useState(1);
  const [Page_AllPost1, setPage_AllPost1] = useState(6);
  const LastQuery1 = Current_Page1 * Page_AllPost1;
  const FirstQuery1 = LastQuery1 - Page_AllPost1;
  const [Item_List, setItem_List] = useState([]);
  const ItemSlice = Item_List.slice(FirstQuery1, LastQuery1);
  const ItemCount = Math.ceil(Item_List.length / Page_AllPost1);
  const paginate1 = (pageNum) => setCurrent_Page1(pageNum);
  {
    /*Wish Num-tab*/
  }
  const [Current_Page2, setCurrent_Page2] = useState(1);
  const [Page_AllPost2, setPage_AllPost2] = useState(4);
  const LastQuery2 = Current_Page2 * Page_AllPost2;
  const FirstQuery2 = LastQuery2 - Page_AllPost2;
  const [Wish_List, setWish_List] = useState([]);
  const WishSlice = Wish_List.slice(FirstQuery2, LastQuery2);
  const WishCount = Math.ceil(Wish_List.length / Page_AllPost2);
  const paginate2 = (pageNum) => setCurrent_Page2(pageNum);
  {
    /*Request1 Num-tab*/
  }
  const [Current_Page3, setCurrent_Page3] = useState(1);
  const [Page_AllPost3, setPage_AllPost3] = useState(4);
  const LastQuery3 = Current_Page3 * Page_AllPost3;
  const FirstQuery3 = LastQuery3 - Page_AllPost3;
  const [Re1_List, setRe1_List] = useState([]);
  const Re1Slice = Re1_List.slice(FirstQuery3, LastQuery3);
  const Re1Count = Math.ceil(Re1_List.length / Page_AllPost3);
  const paginate3 = (pageNum) => setCurrent_Page3(pageNum);
  {
    /*Request2 Num-tab*/
  }
  const [Current_Page4, setCurrent_Page4] = useState(1);
  const [Page_AllPost4, setPage_AllPost4] = useState(4);
  const LastQuery4 = Current_Page4 * Page_AllPost4;
  const FirstQuery4 = LastQuery4 - Page_AllPost4;
  const [Re2_List, setRe2_List] = useState([]);
  const Re2Slice = Re2_List.slice(FirstQuery4, LastQuery4);
  const Re2Count = Math.ceil(Re2_List.length / Page_AllPost4);
  const paginate4 = (pageNum) => setCurrent_Page4(pageNum);
  {
    /*Request3 Num-tab*/
  }
  const [Current_Page5, setCurrent_Page5] = useState(1);
  const [Page_AllPost5, setPage_AllPost5] = useState(4);
  const LastQuery5 = Current_Page5 * Page_AllPost5;
  const FirstQuery5 = LastQuery5 - Page_AllPost5;
  const [Re3_List, setRe3_List] = useState([]);
  const Re3Slice = Re3_List.slice(FirstQuery5, LastQuery5);
  const Re3Count = Math.ceil(Re3_List.length / Page_AllPost5);
  const paginate5 = (pageNum) => setCurrent_Page5(pageNum);
  {
    /*Request4 Num-tab*/
  }
  const [Current_Page6, setCurrent_Page6] = useState(1);
  const [Page_AllPost6, setPage_AllPost6] = useState(4);
  const LastQuery6 = Current_Page6 * Page_AllPost6;
  const FirstQuery6 = LastQuery6 - Page_AllPost6;
  const [Re4_List, setRe4_List] = useState([]);
  const Re4Slice = Re4_List.slice(FirstQuery6, LastQuery6);
  const Re4Count = Math.ceil(Re4_List.length / Page_AllPost6);
  const paginate6 = (pageNum) => setCurrent_Page6(pageNum);
  {
    /*Query Constant*/
  }
  const [School_List, setSchool_List] = useState([]);
  const [Grade_List, setGrade_List] = useState([]);
  const [Categ_List, setCateg_List] = useState([]);
  const [User_Account, setUser_Account] = useState([]);
  const [Pass_Code, setPass_Code] = useState([]);
  const [file_Array1, setFile_Array1] = useState("");
  const [I_Pic1, setI_Pic1] = useState("");
  const [I_pointReg, setI_pointReg, setI_pointRef] = useStateRef([]);
  const [D_priceReg, setD_priceReg, setD_priceRef] = useStateRef([]);
  const [R_getReg, setR_getReg, setR_getRef] = useStateRef([]);
  const [R_wishReg, setR_wishReg, setR_wishRef] = useStateRef([]);
  const [R_favorReg, setR_favorReg, setR_favorRef] = useStateRef([]);
  const [SearchString, setSearchString] = useState("");
  const [CategString, setCategString] = useState("");
  const [SchoolString, setSchoolString] = useState("");
  var textQuery = document.getElementById("textSearch");
  var categQuery = document.getElementById("categSearch");
  var schoolQuery = document.getElementById("schoolSearch");
  let { Student_ID } = useParams();
  let { Obj } = useParams();
  let { Type_ID } = useParams();
  let { School_ID } = useParams();
  var MailMap;
  var PassMap;
  let history = useHistory();

  {
    /* Delay */
  }
  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }
  const handleSubmit1 = async (e) => {
    e.preventDefault();
    var gate = document.getElementById("ConEdit");
    if (invaliA == "0" && invaliP == "1" && gate.value == "EditProfile") {
      JSAlert.alert("", "Submit Success!", JSAlert.Icons.Success);
      await timeout(1000).then($(this).unbind("submit").submit());
      window.location.reload();
    }
    if (invaliA == "1" && invaliP == "0" && gate.value == "ChangePass") {
      JSAlert.alert("", "Submit Success!", JSAlert.Icons.Success);
      await timeout(1000).then($(this).unbind("submit").submit());
      window.location.reload();
    }
  };
  const handleSubmit2 = async (e) => {
    e.preventDefault();
    if (AMsent == "0") {
      JSAlert.alert("", "Submit Success!", JSAlert.Icons.Success);
      await timeout(1000).then($(this).unbind("submit").submit());
      window.location.reload();
    }
  };

  {
    /* Password Recovery */
  }
  const autoMailer = async () => {
    Axios.post("http://localhost:5000/forgot_pass", {
      Email: MailMap,
      Password: PassMap,
    });
    JSAlert.alert("The password has been sent to your email.");
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

  {
    /* Request Get */
  }
  const Re1Block = async () => {
    Axios.get(`http://localhost:5000/Re1_R/${Student_ID}`).then((response) => {
      setRe1_List(response.data);
    });
  };
  const Re2Block = async () => {
    Axios.get(`http://localhost:5000/Re2_R/${Student_ID}`).then((response) => {
      setRe2_List(response.data);
    });
  };
  const Re3Block = async () => {
    Axios.get(`http://localhost:5000/Re3_R/${Student_ID}`).then((response) => {
      setRe3_List(response.data);
    });
  };
  const Re4Block = async () => {
    Axios.get(`http://localhost:5000/Re4_R/${Student_ID}`).then((response) => {
      setRe4_List(response.data);
    });
  };

  {
    /* Wish Post */
  }
  const R_wish = async () => {
    if (isWish == "0") {
      JSAlert.alert("", "Wish Saved!", JSAlert.Icons.Success);
      Axios.post("http://localhost:5000/Wish_R", {
        Student_ID: R_Param1,
        Item_ID: setR_wishRef.current,
      });
      history.push(`/r_main/${Student_ID}`);
      window.location.reload();
    }
  };
  const R_wishDel = async () => {
    JSAlert.confirm("Are you sure you want to remove this wish?").then(
      function (result) {
        if (!result) {
          throw "exit";
        }
        JSAlert.alert("", "Wish Removed!", JSAlert.Icons.Success);
        Axios.post("http://localhost:5000/WishDel_R", {
          Wish_ID: setR_favorRef.current,
        });
        history.push(`/r_main/${Student_ID}`);
        window.location.reload();
      }
    );
  };

  {
    /* Wish Check */
  }
  const W_butC = async () => {
    Axios.post(`http://localhost:5000/W_check/${Student_ID}`, {
      Item_ID: setR_wishRef.current,
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
    /* Change Item-page */
  }
  const ItemPage = async ({ selected }) => {
    setCurrent_Page(selected);
  };

  {
    /* Item Get */
  }
  const ItemBlock = async () => {
    Axios.get(`http://localhost:5000//Notify/${Student_ID}`).then((response) => {
      setItem_List(response.data);
    });
  };

  {
    /* Wish Get */
  }
  const WishBlock = async () => {
    Axios.get(`http://localhost:5000/Wish/${Student_ID}`).then((response) => {
      setWish_List(response.data);
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
    /* Grade Get */
  }
  const GradeBox = async () => {
    Axios.get("http://localhost:5000/Grade").then((response) => {
      setGrade_List(response.data);
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
    /* Report Post */
  }
  const ReportAM = async (e) => {
    AMsent = "1";
    checkStringAM();
    AMsent = "0";
    JSAlert.alert("", "Submit Success!", JSAlert.Icons.Success);
    Axios.post("http://localhost:5000/Report", {
      Student_ID: R_Param1,
      Topic: Topic_Reg,
      Email: Mail_Reg,
      Message: Message_Reg,
    }).then((response) => {
      console.log(response);
    });
  };

  {
    /* File Check */
  }
  function checkFile() {
    var fileElement = document.getElementById("img1");
    var gate = document.getElementById("ConEdit");
    var fileExtension = "";
    if (fileElement.value.lastIndexOf(".") > 0) {
      fileExtension = fileElement.value.substring(
        fileElement.value.lastIndexOf(".") + 1,
        fileElement.value.length
      );
    }
    if (
      fileExtension.toLowerCase() != "png" &&
      fileExtension.toLowerCase() != "jpeg" &&
      fileExtension.toLowerCase() != "jpg" &&
      fileExtension.toLowerCase() != ""
    ) {
      JSAlert.alert(
        "",
        "Please select <.png, .jpg> image file for upload...",
        JSAlert.Icons.Warning
      );
      gate.value = "";
      throw "exit";
    }
  }

  {
    /* String Check */
  }
  function checkStringR() {
    var userR = document.getElementById("UsernameR");
    var telR = document.getElementById("PhoneR");
    var localR = document.getElementById("AddressR");
    var cardR = document.getElementById("CardR");
    var schoolR = document.getElementById("SchoolR");
    var gate = document.getElementById("ConEdit");
    if (
      userR.value == "" ||
      userR.value.length < 6 ||
      regEx1.test(userR.value) == false
    ) {
      JSAlert.alert(
        "(Ex): Alan Walker",
        "Please enter english username using your real name...",
        JSAlert.Icons.Warning
      );
      gate.value = "";
      throw "exit";
    }
    if (
      telR.value == "" ||
      telR.value.length != 10 ||
      regEx4.test(telR.value) == false
    ) {
      JSAlert.alert(
        "(Ex): 0891608019",
        "Please enter your true phone number without <-> or space...",
        JSAlert.Icons.Warning
      );
      gate.value = "";
      throw "exit";
    }
    if (
      postR.value == "" ||
      postR.value.length != 5 ||
      regEx7.test(postR.value) == false
    ) {
      JSAlert.alert(
        "(Ex): 10600",
        "Please enter your valid ZIP code...",
        JSAlert.Icons.Warning
      );
      gate.value = "";
      throw "exit";
    }
    if (
      localR.value == "" ||
      localR.value.length < 25 ||
      regEx6.test(localR.value) == false
    ) {
      JSAlert.alert(
        "(Ex): 37/2, San Chaomae Thapthim Alley, Tha Kham, Bang Khun Thian, Bangkok 10150",
        "Please enter your real location information in full detail without space at beginning & ending...",
        JSAlert.Icons.Warning
      );
      gate.value = "";
      throw "exit";
    }
    if (
      cardR.value == "" ||
      cardR.value.length < 5 ||
      regEx5.test(cardR.value) == false
    ) {
      JSAlert.alert(
        "(Ex): 1022060240",
        "Please enter your true ID number without <-> or space......",
        JSAlert.Icons.Warning
      );
      gate.value = "";
      throw "exit";
    }
    if (schoolR.value == "") {
      JSAlert.alert("", "Please select your school...", JSAlert.Icons.Warning);
      gate.value = "";
      throw "exit";
    }
    if (gate.value != "EditProfile") {
      JSAlert.alert(
        "",
        "Please type EditProfile to confirm the process...",
        JSAlert.Icons.Warning
      );
      gate.value = "";
      invaliA = "1";
      throw "exit";
    }
  }
  function checkStringP() {
    var pass1R = document.getElementById("PasswordR");
    var pass2R = document.getElementById("C_passwordR");
    var gate = document.getElementById("ConEdit");
    if (
      pass1R.value == "" ||
      pass1R.value.length < 8 ||
      regEx3.test(pass1R.value) == false
    ) {
      JSAlert.alert(
        "(Ex): Pass1234",
        "Please enter password with at least 8 characters and without space...",
        JSAlert.Icons.Warning
      );
      pass2R.value = "";
      gate.value = "";
      throw "exit";
    }
    if (pass2R.value == "") {
      JSAlert.alert(
        "",
        "Please enter confirm password correctly...",
        JSAlert.Icons.Warning
      );
      pass2R.value = "";
      gate.value = "";
      throw "exit";
    }
    if (pass1R.value != pass2R.value) {
      JSAlert.alert(
        "",
        "Passwords did not match, please try again...",
        JSAlert.Icons.Warning
      );
      pass2R.value = "";
      gate.value = "";
      throw "exit";
    }
    if (gate.value != "ChangePass") {
      JSAlert.alert(
        "",
        "Please type ChangePass to confirm the process...",
        JSAlert.Icons.Warning
      );
      gate.value = "";
      throw "exit";
    }
  }
  function checkStringAM() {
    var Topic = document.getElementById("topicText");
    var Mail = document.getElementById("mailText");
    var Mess = document.getElementById("messText");
    if (
      Topic.value == "" ||
      Topic.value.length < 5 ||
      regEx8.test(Topic.value) == false
    ) {
      JSAlert.alert(
        "(Ex): Bug Report",
        "Please enter topic name properly...",
        JSAlert.Icons.Warning
      );
      throw "exit";
    }
    if (Mail.value == "" || regEx2.test(Mail.value) == false) {
      JSAlert.alert(
        "(Ex): alan@gmail.com",
        "Please enter your valid email...",
        JSAlert.Icons.Warning
      );
      throw "exit";
    }
    if (
      Mess.value == "" ||
      Mess.value.length < 20 ||
      regEx8.test(Mess.value) == false
    ) {
      JSAlert.alert(
        "(Ex): I cannot request any item at all.",
        "Please enter message in full detail without space at beginning & ending...",
        JSAlert.Icons.Warning
      );
      throw "exit";
    }
  }

  {
    /* Request Confirm */
  }
  const D_give = async () => {
    Axios.post("http://localhost:5000/D_Point", {
      Donor_ID: setD_priceRef.current,
      Point: setI_pointRef.current,
    }).then((response) => {
      console.log(response);
    });
  };
  const R_lastGet = async () => {
    JSAlert.confirm("Are you sure you want to confirm this request?").then(
      function (result) {
        if (!result) {
          throw "exit";
        }
        D_give();
        JSAlert.alert("", "Get Item!", JSAlert.Icons.Success);
        Axios.post("http://localhost:5000/Request_Succ", {
          Request_ID: setR_getRef.current,
        });
        history.push(`/r_main/${Student_ID}`);
        window.location.reload();
      }
    );
  };

  {
    /* Receiver Post */
  }
  const R_update = async (e) => {
    invaliA = "1";
    checkStringR();
    checkFile();
    invaliA = "0";
    Axios.post(`http://localhost:5000/R_update/${Student_ID}`, {
      Username: R_nameReg,
      Phone: R_phoneReg,
      Address: R_localReg,
      ZIP: R_zipReg,
      Student_Card: R_cardReg,
      School_ID: R_schoolReg,
      Card_Image: file_Array1,
    }).then((response) => {
      console.log(response);
    });
  };

  {
    /* Password Post */
  }
  const P_updateR = async (e) => {
    checkStringP();
    if (invaliP == "0") {
      Axios.post(`http://localhost:5000/P_updateR/${Student_ID}`, {
        Password: R_passReg,
      }).then((response) => {
        console.log(response);
      });
    }
  };

  {
    /* Check Get */
  }
  const P_checkR = async () => {
    var pass1R = document.getElementById("PasswordR");
    var pass2R = document.getElementById("C_passwordR");
    var gate = document.getElementById("ConEdit");
    Axios.post(`http://localhost:5000/P_checkR/${Student_ID}`, {
      Password: Pass_Code,
    }).then((response) => {
      if (response.data.message) {
        JSAlert.alert("", "Invalid old password...", JSAlert.Icons.Failed);
        pass1R.value = "";
        pass2R.value = "";
        gate.value = "";
        invaliP = "1";
        throw "exit";
      } else {
        invaliP = "0";
        P_updateR();
      }
    });
  };

  {
    /* Album Function */
  }
  const Album = `
  <script>
    var modal_1 = document.getElementById("myModal1");
    var image_1 = document.getElementById("preImg1");
    var modalImage_1 = document.getElementById("img01");
    image_1.onclick = function(){
      modal_1.style.display = "block";
      modalImage_1.src = this.src;
    }
    var span_1 = document.getElementsByClassName("close one")[0];
    span_1.onclick = function() { 
      modal_1.style.display = "none";
    }
  </script>
  `;

  {
    /* Tab Function */
  }
  const Tabs = `
  <div class="tab">
    <button
      id="tabF"
      class="tablinks active"
      onclick="openTab(event, 'Deli1')"
    >
      1 - Wait for Donor response
    </button>
    <button
      class="tablinks"
      onclick="openTab(event, 'Deli2')"
    >
      2 - Item is transporting
    </button>
    <button
      class="tablinks"
      onclick="openTab(event, 'Deli3')"
    >
      3 - Confirm for item arrival
    </button>
    <button
      class="tablinks"
      onclick="openTab(event, 'Deli4')"
    >
      4 - Successful request
    </button>
  </div>
  <script>
    function openTab(evt, cityName) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(cityName).style.display = "block";
      evt.currentTarget.className += " active";
    }
    document.getElementById('tabF').click();
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
    setR_Param1(Student_ID);
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
          <link rel="stylesheet" href="resources/css/Page_Main.css" />
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
        .floatBut2{
          position: absolute;
          align: center;
          top: 5px;
        }
          .searchform input 
          {
  					width: 169px;
  					height: 33px;
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

        {/*Menu Tab*/}
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

          {/*Home Page*/}
          <ul className="cd-hero-slider">
            <li className="selected">
              <form>
                <div className="heading"></div>
                <div className="cd-full-width first-slide">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-13">
                        <div className="content first-content">
                          <div className="container">
                            <div className="row">
                              <div className="col-sm-12">
                                <div className="features_items">
                                  <div className="brands_products">
                                    <h2 className="title text-center">
                                      Recent Items
                                    </h2>
                                  </div>
                                  <div className="col-sm-12 picList">
                                    {Item_List.filter((val) => {
                                      if (
                                        SearchString == "" &&
                                        CategString == "" &&
                                        SchoolString == ""
                                      ) {
                                        return val;
                                      }
                                      if (
                                        val.Obj.toLowerCase().includes(
                                          SearchString.toLowerCase()
                                        ) &&
                                        CategString == "" &&
                                        SchoolString == ""
                                      ) {
                                        return val;
                                      }
                                      if (
                                        val.Obj.toLowerCase().includes(
                                          SearchString.toLowerCase()
                                        ) &&
                                        val.Type_ID == CategString &&
                                        SchoolString == ""
                                      ) {
                                        return val;
                                      }
                                      if (
                                        val.Obj.toLowerCase().includes(
                                          SearchString.toLowerCase()
                                        ) &&
                                        CategString == "" &&
                                        val.School_ID == SchoolString
                                      ) {
                                        return val;
                                      }
                                      if (
                                        val.Obj.toLowerCase().includes(
                                          SearchString.toLowerCase()
                                        ) &&
                                        val.Type_ID == CategString &&
                                        val.School_ID == SchoolString
                                      ) {
                                        return val;
                                      }
                                      if (
                                        SearchString == "" &&
                                        val.Type_ID == CategString &&
                                        val.School_ID == SchoolString
                                      ) {
                                        return val;
                                      }
                                      if (
                                        SearchString == "" &&
                                        val.Type_ID == CategString &&
                                        SchoolString == ""
                                      ) {
                                        return val;
                                      }
                                      if (
                                        SearchString == "" &&
                                        CategString == "" &&
                                        val.School_ID == SchoolString
                                      ) {
                                        return val;
                                      }
                                    }).map((val, key) => {
                                      return (
                                        <div className="product-image-wrapper">
                                          <div className="single-products">
                                            <div className="productinfo text-center">
                                              <img
                                                src={val.Pic1}
                                                alt=""
                                                style={{
                                                  height: "320px",
                                                  width: "230px",
                                                }}
                                              />
                                              <h2 style={{ fontSize: "15px" }}>
                                                {val.Obj}
                                              </h2>
                                              <br />
                                              <a
                                                className="btn btn-default add-to-cart"
                                                onClick={() => {
                                                  history.push(
                                                    `/r_main/${Student_ID}/r_item/${val.Item_ID}`
                                                  );
                                                  window.location.reload();
                                                }}
                                              >
                                                <i className="fa fa-eye" />
                                                View
                                              </a>
                                            </div>
                                          </div>
                                          <div className="choose">
                                            <ul className="nav nav-pills nav-justified">
                                              <li>
                                                <a
                                                  onClick={() => {
                                                    setR_wishReg(val.Item_ID);
                                                    W_butC();
                                                  }}
                                                >
                                                  <i className="fa fa-plus-square" />
                                                  Add to wishlist
                                                </a>
                                              </li>
                                              <li>
                                                <a>
                                                  <i className="fa fa-plus-square" />
                                                  Add to wishlist
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                                <br />
                                <br />
                                <br />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
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

export default withRouter(R_Main);
