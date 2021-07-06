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

function S_Main() {
  const wall = window.location.origin + "/resources/imgs/wallpaper.jpg";
  const but1 = window.location.origin + "/resources/imgs/home.png";
  const but2 = window.location.origin + "/resources/imgs/delivery.png";
  const but3 = window.location.origin + "/resources/imgs/reward.png";
  const but4 = window.location.origin + "/resources/imgs/account.png";
  const but5 = window.location.origin + "/resources/imgs/report.png";
  const but6 = window.location.origin + "/resources/imgs/logout.png";
  const but7 = window.location.origin + "/resources/imgs/reward.png";
  const blank = window.location.origin + "/resources/imgs/shop/white.jpg";
  const del1 = window.location.origin + "/resources/imgs/shop/grab.png";
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
  {
    /*Report Send*/
  }
  const [Topic_Reg, setTopic_Reg] = useState("");
  const [Mail_Reg, setMail_Reg] = useState("");
  const [Message_Reg, setMessage_Reg] = useState("");
  {
    /*Profile Info*/
  }
  const [S_nameReg, setS_nameReg] = useState("");
  const [S_emailReg, setS_emailReg] = useState("");
  const [S_cardReg, setS_cardReg] = useState("");
  const [S_comReg, setS_comReg] = useState("");
  const [S_phoneReg, setS_phoneReg] = useState("");
  const [S_passReg, setS_passReg] = useState("");
  {
    /*Reward Num-tab*/
  }
  const [Current_Page1, setCurrent_Page1] = useState(1);
  const [Page_AllPost1, setPage_AllPost1] = useState(6);
  const LastQuery1 = Current_Page1 * Page_AllPost1;
  const FirstQuery1 = LastQuery1 - Page_AllPost1;
  const [Reward_List, setReward_List] = useState([]);
  const RewardSlice = Reward_List.slice(FirstQuery1, LastQuery1);
  const RewardCount = Math.ceil(Reward_List.length / Page_AllPost1);
  const paginate1 = (pageNum) => setCurrent_Page1(pageNum);
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
    /*Trade1 Num-tab*/
  }
  const [Current_Page7, setCurrent_Page7] = useState(1);
  const [Page_AllPost7, setPage_AllPost7] = useState(4);
  const LastQuery7 = Current_Page7 * Page_AllPost7;
  const FirstQuery7 = LastQuery7 - Page_AllPost7;
  const [Tr1_List, setTr1_List] = useState([]);
  const Tr1Slice = Tr1_List.slice(FirstQuery7, LastQuery7);
  const Tr1Count = Math.ceil(Tr1_List.length / Page_AllPost7);
  const paginate7 = (pageNum) => setCurrent_Page7(pageNum);
  {
    /*Trade2 Num-tab*/
  }
  const [Current_Page8, setCurrent_Page8] = useState(1);
  const [Page_AllPost8, setPage_AllPost8] = useState(4);
  const LastQuery8 = Current_Page8 * Page_AllPost8;
  const FirstQuery8 = LastQuery8 - Page_AllPost8;
  const [Tr2_List, setTr2_List] = useState([]);
  const Tr2Slice = Tr2_List.slice(FirstQuery8, LastQuery8);
  const Tr2Count = Math.ceil(Tr2_List.length / Page_AllPost8);
  const paginate8 = (pageNum) => setCurrent_Page8(pageNum);
  {
    /*Trade3 Num-tab*/
  }
  const [Current_Page9, setCurrent_Page9] = useState(1);
  const [Page_AllPost9, setPage_AllPost9] = useState(4);
  const LastQuery9 = Current_Page9 * Page_AllPost9;
  const FirstQuery9 = LastQuery9 - Page_AllPost9;
  const [Tr3_List, setTr3_List] = useState([]);
  const Tr3Slice = Tr3_List.slice(FirstQuery9, LastQuery9);
  const Tr3Count = Math.ceil(Tr3_List.length / Page_AllPost9);
  const paginate9 = (pageNum) => setCurrent_Page9(pageNum);
  {
    /*Query Constant*/
  }
  const [Categ_List, setCateg_List] = useState([]);
  const [Company_List, setCompany_List] = useState([]);
  const [User_Account, setUser_Account] = useState([]);
  const [Pass_Code, setPass_Code] = useState([]);
  const [S_getReg, setS_getReg, setS_getRef] = useStateRef([]);
  const [S_delReg, setS_delReg, setS_delRef] = useStateRef([]);
  let { Sponsor_ID } = useParams();
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
    /* Request Get */
  }
  const Re1Block = async () => {
    Axios.get(`http://localhost:5000/Re1_S/${Sponsor_ID}`).then((response) => {
      setRe1_List(response.data);
    });
  };
  const Re2Block = async () => {
    Axios.get(`http://localhost:5000/Re2_S/${Sponsor_ID}`).then((response) => {
      setRe2_List(response.data);
    });
  };
  const Re3Block = async () => {
    Axios.get(`http://localhost:5000/Re3_S/${Sponsor_ID}`).then((response) => {
      setRe3_List(response.data);
    });
  };
  const Re4Block = async () => {
    Axios.get(`http://localhost:5000/Re4_S/${Sponsor_ID}`).then((response) => {
      setRe4_List(response.data);
    });
  };

  {
    /* Trade Get */
  }
  const Tr1Block = async () => {
    Axios.get(`http://localhost:5000/Tr1_S/${Sponsor_ID}`).then((response) => {
      setTr1_List(response.data);
    });
  };
  const Tr2Block = async () => {
    Axios.get(`http://localhost:5000/Tr2_S/${Sponsor_ID}`).then((response) => {
      setTr2_List(response.data);
    });
  };
  const Tr3Block = async () => {
    Axios.get(`http://localhost:5000/Tr3_S/${Sponsor_ID}`).then((response) => {
      setTr3_List(response.data);
    });
  };

  {
    /* Item Delete */
  }
  const S_del = async (e) => {
    JSAlert.confirm("Are you sure you want to delete this item?").then(
      function (result) {
        if (!result) {
          throw "exit";
        }
        JSAlert.alert("", "Item Deleted!", JSAlert.Icons.Success);
        Axios.post("http://localhost:5000/I_delete2", {
          Reward_ID: setS_delRef.current,
        });
        history.push(`/s_main/${Sponsor_ID}`);
        window.location.reload();
      }
    );
  };

  {
    /* Reward Get */
  }
  const RewardBlock = async () => {
    Axios.get(`http://localhost:5000/SponsorItem/${Sponsor_ID}`).then(
      (response) => {
        setReward_List(response.data);
      }
    );
  };

  {
    /* Category Get */
  }
  const CategBox = async () => {
    Axios.get("http://localhost:5000/Categ_G").then((response) => {
      setCateg_List(response.data);
    });
  };

  {
    /* Company Get */
  }
  const CompanyBox = async () => {
    Axios.get("http://localhost:5000/Company").then((response) => {
      setCompany_List(response.data);
    });
  };

  {
    /* Profile Get */
  }
  const ProfileInfo = async () => {
    Axios.get(`http://localhost:5000/S_Account/${Sponsor_ID}`).then(
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
      Topic: Topic_Reg,
      Email: Mail_Reg,
      Message: Message_Reg,
    }).then((response) => {
      console.log(response);
    });
  };

  {
    /* Delivery Post */
  }
  const S_getItem = async () => {
    JSAlert.confirm("Are you sure you already pick up this item?").then(
      function (result) {
        if (!result) {
          throw "exit";
        }
        JSAlert.alert("", "Get Item!", JSAlert.Icons.Success);
        Axios.post("http://localhost:5000/Deliver_Get", {
          Request_ID: setS_getRef.current,
        });
        history.push(`/s_main/${Sponsor_ID}`);
        window.location.reload();
      }
    );
  };

  {
    /* String Check */
  }
  function checkStringS() {
    var userS = document.getElementById("UsernameS");
    var comS = document.getElementById("CompanyS");
    var cardS = document.getElementById("CardS");
    var telS = document.getElementById("PhoneS");
    var gate = document.getElementById("ConEdit");
    if (
      userS.value == "" ||
      userS.value.length < 6 ||
      regEx1.test(userS.value) == false
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
      cardS.value == "" ||
      cardS.value.length < 5 ||
      regEx5.test(cardS.value) == false
    ) {
      JSAlert.alert(
        "(Ex): 1022060240",
        "Please enter your true ID number without <-> or space......",
        JSAlert.Icons.Warning
      );
      gate.value = "";
      throw "exit";
    }
    if (comS.value == "") {
      JSAlert.alert("", "Please select your company...", JSAlert.Icons.Warning);
      gate.value = "";
      throw "exit";
    }
    if (
      telS.value == "" ||
      telS.value.length != 10 ||
      regEx4.test(telS.value) == false
    ) {
      JSAlert.alert(
        "(Ex): 0891608019",
        "Please enter your true phone number without <-> or space...",
        JSAlert.Icons.Warning
      );
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
    var pass1S = document.getElementById("PasswordS");
    var pass2S = document.getElementById("C_passwordS");
    var gate = document.getElementById("ConEdit");
    if (
      pass1S.value == "" ||
      pass1S.value.length < 8 ||
      regEx3.test(pass1S.value) == false
    ) {
      JSAlert.alert(
        "(Ex): Pass1234",
        "Please enter password with at least 8 characters and without space...",
        JSAlert.Icons.Warning
      );
      pass2S.value = "";
      gate.value = "";
      throw "exit";
    }
    if (pass2S.value == "") {
      JSAlert.alert(
        "",
        "Please enter confirm password correctly...",
        JSAlert.Icons.Warning
      );
      pass2S.value = "";
      gate.value = "";
      throw "exit";
    }
    if (pass1S.value != pass2S.value) {
      JSAlert.alert(
        "",
        "Passwords did not match, please try again...",
        JSAlert.Icons.Warning
      );
      pass2S.value = "";
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
    /* Sponsor Post */
  }
  const S_update = async (e) => {
    invaliA = "1";
    checkStringS();
    invaliA = "0";
    Axios.post(`http://localhost:5000/S_update/${Sponsor_ID}`, {
      Username: S_nameReg,
      Staff_Card: S_cardReg,
      Company_ID: S_comReg,
      Phone: S_phoneReg,
    }).then((response) => {
      console.log(response);
    });
  };

  {
    /* Password Post */
  }
  const P_updateS = async (e) => {
    checkStringP();
    if (invaliP == "0") {
      Axios.post(`http://localhost:5000/P_updateS/${Sponsor_ID}`, {
        Password: S_passReg,
      }).then((response) => {
        console.log(response);
      });
    }
  };

  {
    /* Check Get */
  }
  const P_checkS = async () => {
    var pass1S = document.getElementById("PasswordS");
    var pass2S = document.getElementById("C_passwordS");
    var gate = document.getElementById("ConEdit");
    Axios.post(`http://localhost:5000/P_checkS/${Sponsor_ID}`, {
      Password: Pass_Code,
    }).then((response) => {
      if (response.data.message) {
        JSAlert.alert("", "Invalid old password...", JSAlert.Icons.Failed);
        pass1S.value = "";
        pass2S.value = "";
        gate.value = "";
        invaliP = "1";
        throw "exit";
      } else {
        invaliP = "0";
        P_updateS();
      }
    });
  };

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
      1 - Accept delivery request
    </button>
    <button
      class="tablinks"
      onclick="openTab(event, 'Deli2')"
    >
      2 - Get item from Donor
    </button>
    <button
      class="tablinks"
      onclick="openTab(event, 'Deli3')"
    >
      3 - Item is transporting
    </button>
    <button
      class="tablinks"
      onclick="openTab(event, 'Deli4')"
    >
      4 - Successful delivery
    </button>
  </div>
  <script>
    function openTab(evt, tabBlock) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(tabBlock).style.display = "block";
      evt.currentTarget.className += " active";
    }
    document.getElementById('tabF').click();
  </script>
  `;

  const AltTabs = `
  <div class="tab Trade">
    <button
      id="AtabF"
      class="tabrefs active"
      onclick="openTabTrade(event, 'Tra1')"
    >
      1 - Prepare for delivery
    </button>
    <button
      class="tabrefs"
      onclick="openTabTrade(event, 'Tra2')"
    >
      2 - Item is transporting
    </button>
    <button
      class="tabrefs"
      onclick="openTabTrade(event, 'Tra3')"
    >
      3 - Successful trade
    </button>
  </div>
  <script>
    function openTabTrade(Aevt, tabBlog) {
      var j, tabinfo, tabrefs;
      tabinfo = document.getElementsByClassName("tabinfo");
      for (j = 0; j < tabinfo.length; j++) {
        tabinfo[j].style.display = "none";
      }
      tabrefs = document.getElementsByClassName("tabrefs");
      for (j = 0; j < tabrefs.length; j++) {
        tabrefs[j].className = tabrefs[j].className.replace(" active", "");
      }
      document.getElementById(tabBlog).style.display = "block";
      Aevt.currentTarget.className += " active";
    }
    document.getElementById('AtabF').click();
  </script>
  `;

  {
    /* Load Function */
  }
  window.onload = function () {
    RewardBlock();
    CategBox();
    CompanyBox();
    ProfileInfo();
    Re1Block();
    Re2Block();
    Re3Block();
    Re4Block();
    Tr1Block();
    Tr2Block();
    Tr3Block();
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
          .spFloat {
            margin-right: 954px
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
                      <img src={but1} width={40} height={35} />
                    </div>
                    <h6>Home</h6>
                  </a>
                </li>
                <li>
                  <a>
                    <div className="image-icon">
                      <img src={but2} width={45} height={33} />
                    </div>
                    <h6>Delivery</h6>
                  </a>
                </li>
                <li>
                  <a>
                    <div className="image-icon">
                      <img src={but3} width={45} height={40} />
                    </div>
                    <h6>Trade</h6>
                  </a>
                </li>
                <li>
                  <a>
                    <div className="image-icon">
                      <img src={but4} width={40} height={38} />
                    </div>
                    <h6>Account</h6>
                  </a>
                </li>
                <li>
                  <a>
                    <div className="image-icon">
                      <img src={but5} width={38} height={33} />
                    </div>
                    <h6>Contact</h6>
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      history.push("/");
                      window.location.reload();
                    }}
                  >
                    <div className="image-icon">
                      <img src={but6} width={39} height={35} />
                    </div>
                    <h6>Logout</h6>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/*Home Page*/}
          <ul className="cd-hero-slider">
            <li className="selected">
              <div className="heading"></div>
              <div className="cd-full-width first-slide">
                <div className="container">
                  <div className="row">
                    <div className="col-md-13">
                      <div className="content first-content">
                        <div className="container">
                          <div className="row">
                            <div className="col-sm-3">
                              <div className="brands_products">
                                <h2>Categories</h2>
                                <div className="brands-name">
                                  <ul className="nav nav-pills nav-stacked">
                                    <select
                                      className="fitBox inputField"
                                      onClick={CategBox}
                                    >
                                      <option value="" selected="selected">
                                        All Categories
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
                                  </ul>
                                </div>
                              </div>
                              <br />
                              <br />
                              <br />
                              <div className="brands_products">
                                <h2>Search</h2>
                                <div className="brands-name">
                                  <form className="searchform">
                                    <input
                                      type="text"
                                      className="inputField"
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
                                <div className="brands_products">
                                  <h2 className="title text-center">
                                    Items ({Reward_List.length}
                                    )&nbsp;&nbsp;&nbsp;
                                    <button
                                      class="swappor"
                                      onClick={() => {
                                        history.push(
                                          `/s_main/${Sponsor_ID}/s_add`
                                        );
                                        window.location.reload();
                                      }}
                                    >
                                      Add item
                                    </button>
                                  </h2>
                                </div>
                                <div className="col-sm-12 picList">
                                  {RewardSlice.map((val, key) => {
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
                                                  `/s_main/${Sponsor_ID}/s_rewa/${val.Reward_ID}`
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
                                                  setS_delReg(val.Reward_ID);
                                                  S_del();
                                                }}
                                              >
                                                <i className="fa fa-trash-o" />
                                                Delete item
                                              </a>
                                            </li>
                                            <li>
                                              <a>
                                                <i className="fa fa-trash-o" />
                                                Delete item
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                              <div className="col-sm-11">
                                <br />
                                <Pagination
                                  Page_AllPost={Page_AllPost1}
                                  TotalPost={Reward_List.length}
                                  Current_Page={Current_Page1}
                                  paginate={paginate1}
                                  PostCount={RewardCount}
                                />
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
            </li>

            {/*Delivery Page*/}
            <li>
              <div className="heading"></div>
              <div className="cd-full-width third-slide">
                <div className="container">
                  <div className="row">
                    <div className="col-md-13">
                      <div className="content third-content">
                        <div className="row">
                          <section id="cart_items">
                            <div className="container">
                              <br />
                              <div
                                className="table-responsive cart_info"
                                style={{ overflow: "hidden" }}
                              >
                                <table className="table table-condensed">
                                  <thead>
                                    <tr className="cart_menu">
                                      <td
                                        className="image"
                                        style={{ textAlign: "left" }}
                                      >
                                        Donated Items ({Re1_List.length} /{" "}
                                        {Re2_List.length} / {Re3_List.length} /{" "}
                                        {Re4_List.length})
                                      </td>
                                      <td className="description" />
                                      <td />
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <InnerHTML html={Tabs} />
                                    <div id="Deli1" class="tabcontent">
                                      <tbody>
                                        {Re1Slice.map((val, key) => {
                                          return (
                                            <tr>
                                              <td
                                                className="cart_product"
                                                style={{ float: "left" }}
                                              >
                                                <a>
                                                  <img
                                                    src={val.Pic1}
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
                                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                  &nbsp;&nbsp;&nbsp;&nbsp;
                                                  {val.Obj}
                                                </h2>
                                                <textarea
                                                  className="wishbox"
                                                  autocomplete="off"
                                                  disabled
                                                >
                                                  {val.Detail}
                                                </textarea>
                                              </td>
                                              <td
                                                className="cart_delete"
                                                style={{ float: "right" }}
                                              >
                                                <br />
                                                <br />
                                                <br />
                                                <br />
                                                <a
                                                  class="btn add-to-cart"
                                                  onClick={() => {
                                                    history.push(
                                                      `/s_main/${Sponsor_ID}/s_qr/${val.Request_ID}`
                                                    );
                                                    window.location.reload();
                                                  }}
                                                >
                                                  <i class="fa fa-qrcode"></i>
                                                  Delivery
                                                </a>
                                              </td>
                                            </tr>
                                          );
                                        })}
                                      </tbody>
                                      <div className="col-sm-11">
                                        <br />
                                        <br />
                                      </div>
                                      <div className="col-sm-11">
                                        <Pagination
                                          Page_AllPost={Page_AllPost3}
                                          TotalPost={Re1_List.length}
                                          Current_Page={Current_Page3}
                                          paginate={paginate3}
                                          PostCount={Re1Count}
                                        />
                                      </div>
                                    </div>
                                    <div id="Deli2" class="tabcontent">
                                      <tbody>
                                        {Re2Slice.map((val, key) => {
                                          return (
                                            <tr>
                                              <td
                                                className="cart_product"
                                                style={{ float: "left" }}
                                              >
                                                <a>
                                                  <img
                                                    src={val.Pic1}
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
                                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                  &nbsp;&nbsp;&nbsp;&nbsp;
                                                  {val.Obj}
                                                </h2>
                                                <textarea
                                                  className="wishbox"
                                                  autocomplete="off"
                                                  disabled
                                                >
                                                  {val.Detail}
                                                </textarea>
                                              </td>
                                              <td
                                                className="cart_delete"
                                                style={{ float: "right" }}
                                              >
                                                <br />
                                                <br />
                                                <br />
                                                <br />
                                                <a
                                                  class="btn add-to-cart"
                                                  onClick={() => {
                                                    setS_getReg(val.Request_ID);
                                                    S_getItem();
                                                  }}
                                                >
                                                  <i class="fa fa-dropbox"></i>
                                                  Get Item
                                                </a>
                                              </td>
                                              <a
                                                class="btn add-to-cart spFloat"
                                                onClick={() => {
                                                  history.push(
                                                    `/s_main/${Sponsor_ID}/s_qrview/${val.Request_ID}`
                                                  );
                                                  window.location.reload();
                                                }}
                                              >
                                                <i class="fa fa-eye"></i>View
                                              </a>
                                            </tr>
                                          );
                                        })}
                                      </tbody>
                                      <div className="col-sm-11">
                                        <br />
                                        <br />
                                      </div>
                                      <div className="col-sm-11">
                                        <Pagination
                                          Page_AllPost={Page_AllPost4}
                                          TotalPost={Re2_List.length}
                                          Current_Page={Current_Page4}
                                          paginate={paginate4}
                                          PostCount={Re2Count}
                                        />
                                      </div>
                                    </div>
                                    <div id="Deli3" class="tabcontent">
                                      <tbody>
                                        {Re3Slice.map((val, key) => {
                                          return (
                                            <tr>
                                              <td
                                                className="cart_product"
                                                style={{ float: "left" }}
                                              >
                                                <a>
                                                  <img
                                                    src={val.Pic1}
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
                                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                  &nbsp;&nbsp;&nbsp;&nbsp;
                                                  {val.Obj}
                                                </h2>
                                                <textarea
                                                  className="wishbox"
                                                  autocomplete="off"
                                                  disabled
                                                >
                                                  {val.Detail}
                                                </textarea>
                                              </td>
                                              <td
                                                className="cart_delete"
                                                style={{ float: "right" }}
                                              >
                                                <br />
                                                <br />
                                                <br />
                                                <br />
                                                <h2
                                                  style={{
                                                    fontSize: "18px",
                                                    color: "#f39c12",
                                                  }}
                                                >
                                                  <i className="fa fa-motorcycle" />
                                                  Transport
                                                </h2>
                                              </td>
                                            </tr>
                                          );
                                        })}
                                      </tbody>
                                      <div className="col-sm-11">
                                        <br />
                                        <br />
                                      </div>
                                      <div className="col-sm-11">
                                        <Pagination
                                          Page_AllPost={Page_AllPost5}
                                          TotalPost={Re3_List.length}
                                          Current_Page={Current_Page5}
                                          paginate={paginate5}
                                          PostCount={Re3Count}
                                        />
                                      </div>
                                    </div>
                                    <div id="Deli4" class="tabcontent">
                                      <tbody>
                                        {Re4Slice.map((val, key) => {
                                          return (
                                            <tr>
                                              <td
                                                className="cart_product"
                                                style={{ float: "left" }}
                                              >
                                                <a>
                                                  <img
                                                    src={val.Pic1}
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
                                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                  &nbsp;&nbsp;&nbsp;&nbsp;
                                                  {val.Obj}
                                                </h2>
                                                <textarea
                                                  className="wishbox"
                                                  autocomplete="off"
                                                  disabled
                                                >
                                                  {val.Detail}
                                                </textarea>
                                              </td>
                                              <td
                                                className="cart_delete"
                                                style={{ float: "right" }}
                                              >
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
                                          );
                                        })}
                                      </tbody>
                                      <div className="col-sm-11">
                                        <br />
                                        <br />
                                      </div>
                                      <div className="col-sm-11">
                                        <Pagination
                                          Page_AllPost={Page_AllPost6}
                                          TotalPost={Re4_List.length}
                                          Current_Page={Current_Page6}
                                          paginate={paginate6}
                                          PostCount={Re4Count}
                                        />
                                      </div>
                                    </div>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </section>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/*Delivery Page*/}
            <li>
              <div className="heading"></div>
              <div className="cd-full-width third-slide">
                <div className="container">
                  <div className="row">
                    <div className="col-md-13">
                      <div className="content third-content">
                        <div className="row">
                          <section id="cart_items">
                            <div className="container">
                              <br />
                              <div
                                className="table-responsive cart_info"
                                style={{ overflow: "hidden" }}
                              >
                                <table className="table table-condensed">
                                  <thead>
                                    <tr className="cart_menu">
                                      <td
                                        className="image"
                                        style={{ textAlign: "left" }}
                                      >
                                        Traded Items ({Tr1_List.length} /{" "}
                                        {Tr2_List.length} / {Tr3_List.length})
                                      </td>
                                      <td className="description" />
                                      <td />
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <InnerHTML html={AltTabs} />
                                    <div id="Tra1" class="tabinfo">
                                      <tbody>
                                        {Tr1Slice.map((val, key) => {
                                          return (
                                            <tr>
                                              <td
                                                className="cart_product"
                                                style={{ float: "left" }}
                                              >
                                                <a>
                                                  <img
                                                    src={val.Pic1}
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
                                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                  &nbsp;&nbsp;&nbsp;&nbsp;
                                                  {val.Obj}
                                                </h2>
                                                <textarea
                                                  className="wishbox"
                                                  autocomplete="off"
                                                  disabled
                                                >
                                                  {val.Detail}
                                                </textarea>
                                              </td>
                                              <td
                                                className="cart_delete"
                                                style={{ float: "right" }}
                                              >
                                                <br />
                                                <br />
                                                <br />
                                                <br />
                                                <a
                                                  class="btn add-to-cart"
                                                  onClick={() => {
                                                    history.push(
                                                      `/s_main/${Sponsor_ID}/s_qr/${val.Request_ID}`
                                                    );
                                                    window.location.reload();
                                                  }}
                                                >
                                                  <i class="fa fa-qrcode"></i>
                                                  Delivery
                                                </a>
                                              </td>
                                            </tr>
                                          );
                                        })}
                                      </tbody>
                                      <div className="col-sm-11">
                                        <br />
                                        <br />
                                      </div>
                                      <div className="col-sm-11">
                                        <Pagination
                                          Page_AllPost={Page_AllPost7}
                                          TotalPost={Tr1_List.length}
                                          Current_Page={Current_Page7}
                                          paginate={paginate7}
                                          PostCount={Tr1Count}
                                        />
                                      </div>
                                    </div>
                                    <div id="Tra2" class="tabinfo">
                                      <tbody>
                                        {Tr2Slice.map((val, key) => {
                                          return (
                                            <tr>
                                              <td
                                                className="cart_product"
                                                style={{ float: "left" }}
                                              >
                                                <a>
                                                  <img
                                                    src={val.Pic1}
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
                                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                  &nbsp;&nbsp;&nbsp;&nbsp;
                                                  {val.Obj}
                                                </h2>
                                                <textarea
                                                  className="wishbox"
                                                  autocomplete="off"
                                                  disabled
                                                >
                                                  {val.Detail}
                                                </textarea>
                                              </td>
                                              <td
                                                className="cart_delete"
                                                style={{ float: "right" }}
                                              >
                                                <br />
                                                <br />
                                                <br />
                                                <br />
                                                <h2
                                                  style={{
                                                    fontSize: "18px",
                                                    color: "#f39c12",
                                                  }}
                                                >
                                                  <i className="fa fa-motorcycle" />
                                                  Transport
                                                </h2>
                                              </td>
                                            </tr>
                                          );
                                        })}
                                      </tbody>
                                      <div className="col-sm-11">
                                        <br />
                                        <br />
                                      </div>
                                      <div className="col-sm-11">
                                        <Pagination
                                          Page_AllPost={Page_AllPost8}
                                          TotalPost={Tr2_List.length}
                                          Current_Page={Current_Page8}
                                          paginate={paginate8}
                                          PostCount={Tr2Count}
                                        />
                                      </div>
                                    </div>
                                    <div id="Tra3" class="tabinfo">
                                      <tbody>
                                        {Tr3Slice.map((val, key) => {
                                          return (
                                            <tr>
                                              <td
                                                className="cart_product"
                                                style={{ float: "left" }}
                                              >
                                                <a>
                                                  <img
                                                    src={val.Pic1}
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
                                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                  &nbsp;&nbsp;&nbsp;&nbsp;
                                                  {val.Obj}
                                                </h2>
                                                <textarea
                                                  className="wishbox"
                                                  autocomplete="off"
                                                  disabled
                                                >
                                                  {val.Detail}
                                                </textarea>
                                              </td>
                                              <td
                                                className="cart_delete"
                                                style={{ float: "right" }}
                                              >
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
                                          );
                                        })}
                                      </tbody>
                                      <div className="col-sm-11">
                                        <br />
                                        <br />
                                      </div>
                                      <div className="col-sm-11">
                                        <Pagination
                                          Page_AllPost={Page_AllPost9}
                                          TotalPost={Tr3_List.length}
                                          Current_Page={Current_Page9}
                                          paginate={paginate9}
                                          PostCount={Tr3Count}
                                        />
                                      </div>
                                    </div>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </section>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/*Account Page*/}
            <li>
              <div className="heading"></div>
              <form onSubmit={handleSubmit1}>
                <div className="cd-full-width fivth-slide">
                  {User_Account.map((val, key) => {
                    return (
                      <div className="container">
                        <div className="row">
                          <div className="col-md-13">
                            <div className="content fivth-content">
                              <div className="row">
                                <div className="col-md-4">
                                  <fieldset>
                                    <img
                                      style={{ width: "360px", height: "1px" }}
                                      src={blank}
                                      alt=""
                                    />
                                    <h2
                                      style={{
                                        fontSize: "18px",
                                        color: "#F39C12",
                                        textAlign: "center",
                                      }}
                                    >
                                      FAQ
                                    </h2>
                                    <fieldset>
                                      <div>
                                        <p
                                          className="greatCenter"
                                          style={{
                                            textAlign: "center",
                                            color: "#3498DB",
                                          }}
                                        >
                                          <a
                                            href="https://drive.google.com/file/d/1npOqro1kAFbSEenK5LyOkKzgQseA-8wO/view?usp=sharing"
                                            target="_blank"
                                          >
                                            <span className="pull-center">
                                              -Tutorial-
                                            </span>
                                          </a>
                                        </p>
                                      </div>
                                    </fieldset>
                                  </fieldset>
                                </div>
                                <div className="col-md-4">
                                  <fieldset>
                                    <img
                                      style={{ width: "360px", height: "50px" }}
                                      src={blank}
                                      alt=""
                                    />
                                    <fieldset>
                                      <p style={{ textAlign: "left" }}>
                                        <span
                                          className="cart-total-price text-center"
                                          style={{
                                            fontSize: "18px",
                                            color: "#F39C12",
                                          }}
                                        >
                                          Working company:&nbsp;
                                        </span>
                                        <span
                                          className="cart-total-price text-center"
                                          style={{ fontSize: "16px" }}
                                        >
                                          <img
                                            style={{
                                              width: "35px",
                                              height: "35px",
                                            }}
                                            src={val.Icon}
                                            alt=""
                                          />
                                        </span>
                                      </p>
                                    </fieldset>
                                    <fieldset>
                                      <p style={{ textAlign: "left" }}>
                                        <span
                                          className="cart-total-price text-center"
                                          style={{
                                            fontSize: "18px",
                                            color: "#F39C12",
                                          }}
                                        >
                                          Total successful deliveries:&nbsp;
                                        </span>
                                        <span
                                          className="cart-total-price text-center"
                                          style={{ fontSize: "16px" }}
                                        >
                                          {Re4_List.length}
                                        </span>
                                      </p>
                                    </fieldset>
                                    <fieldset>
                                      <p style={{ textAlign: "left" }}>
                                        <span
                                          className="cart-total-price text-center"
                                          style={{
                                            fontSize: "18px",
                                            color: "#F39C12",
                                          }}
                                        >
                                          Total successful trades:&nbsp;
                                        </span>
                                        <span
                                          className="cart-total-price text-center"
                                          style={{ fontSize: "16px" }}
                                        >
                                          {Tr3_List.length}
                                        </span>
                                      </p>
                                    </fieldset>
                                  </fieldset>
                                </div>
                                <div className="col-md-4">
                                  <fieldset>
                                    <img
                                      style={{ width: "360px", height: "1px" }}
                                      src={blank}
                                      alt=""
                                    />
                                    <div className="midbut1">
                                      <button
                                        className="btn swappor"
                                        type="submit"
                                        onClick={S_update}
                                        style={{ float: "left" }}
                                      >
                                        <i className="fa fa-user" />
                                         Edit Profile
                                      </button>
                                    </div>
                                    <div className="midbut2">
                                      <button
                                        className="btn swappor"
                                        type="submit"
                                        onClick={P_checkS}
                                        style={{ float: "right" }}
                                      >
                                        <i className="fa fa-lock" />
                                         Change Pass
                                      </button>
                                    </div>
                                  </fieldset>
                                </div>
                                <div className="col-md-4">
                                  <fieldset>
                                    <br />
                                    <br />
                                  </fieldset>
                                  <fieldset>
                                    <label htmlFor="ConEdit">
                                      Type code word to confirm the process:
                                    </label>
                                    <input
                                      type="text"
                                      id="ConEdit"
                                      placeholder="EditProfile / ChangePass"
                                      required
                                      autocomplete="off"
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
                                    <hr className="soft" />
                                    <h2 className="title text-center">
                                      Edit Profile
                                    </h2>
                                  </fieldset>
                                </div>
                                <div className="col-md-4">
                                  <fieldset>
                                    <label htmlFor="UsernameS">Name:</label>
                                    <input
                                      type="text"
                                      id="UsernameS"
                                      defaultValue={val.Username}
                                      placeholder="Username"
                                      autocomplete="off"
                                      style={{
                                        width: "100%",
                                        color: "black",
                                        fontSize: "15px",
                                      }}
                                      onInvalid={S_update.exit}
                                      onChange={(x) =>
                                        setS_nameReg(x.target.value)
                                      }
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
                                    <img
                                      style={{ width: "360px", height: "85px" }}
                                      src={blank}
                                      alt=""
                                    />
                                  </fieldset>
                                </div>
                                <br />
                                <div className="col-md-4">
                                  <fieldset>
                                    <label htmlFor="CompanyS">Company:</label>
                                    <select
                                      className="formBox inputField"
                                      id="CompanyS"
                                      onInvalid={S_update.exit}
                                      onChange={(x) =>
                                        setS_comReg(x.target.value)
                                      }
                                    >
                                      <option
                                        key={val.Company_ID}
                                        value={val.Company_ID}
                                        disabled
                                        selected="selected"
                                      >
                                        {val.Name}
                                      </option>
                                      {Company_List.map((val, key) => (
                                        <option
                                          key={val.Company_ID}
                                          value={val.Company_ID}
                                        >
                                          {val.Name}
                                        </option>
                                      ))}
                                    </select>
                                  </fieldset>
                                </div>
                                <div className="col-md-4">
                                  <fieldset>
                                    <label htmlFor="CardS">Agency-ID:</label>
                                    <input
                                      type="text"
                                      id="CardS"
                                      defaultValue={val.Staff_Card}
                                      placeholder="Agency ID"
                                      autocomplete="off"
                                      style={{
                                        width: "100%",
                                        color: "black",
                                        fontSize: "15px",
                                      }}
                                      onInvalid={S_update.exit}
                                      onChange={(x) =>
                                        setS_cardReg(x.target.value)
                                      }
                                    />
                                  </fieldset>
                                </div>
                                <div className="col-md-4">
                                  <fieldset>
                                    <label htmlFor="PhoneS">Tel:</label>
                                    <input
                                      type="text"
                                      id="PhoneS"
                                      defaultValue={val.Phone}
                                      placeholder="Tel Number"
                                      autocomplete="off"
                                      style={{
                                        width: "100%",
                                        color: "black",
                                        fontSize: "15px",
                                      }}
                                      onInvalid={S_update.exit}
                                      onChange={(x) =>
                                        setS_phoneReg(x.target.value)
                                      }
                                    />
                                  </fieldset>
                                </div>
                                <div className="col-md-12">
                                  <fieldset>
                                    <hr className="soft" />
                                    <h2 className="title text-center">
                                      Change Password
                                    </h2>
                                  </fieldset>
                                </div>
                                <div className="col-md-4">
                                  <fieldset>
                                    <label htmlFor="PasswordL">
                                      Old Password:
                                    </label>
                                    <input
                                      type="password"
                                      id="PasswordL"
                                      placeholder="Old Password"
                                      autocomplete="off"
                                      style={{
                                        width: "100%",
                                        color: "black",
                                        fontSize: "15px",
                                      }}
                                      onInvalid={P_checkS.exit}
                                      onChange={(y) =>
                                        setPass_Code(y.target.value)
                                      }
                                    />
                                  </fieldset>
                                </div>
                                <div className="col-md-4">
                                  <fieldset>
                                    <img
                                      style={{ width: "750px", height: "85px" }}
                                      src={blank}
                                      alt=""
                                    />
                                  </fieldset>
                                </div>
                                <div className="col-md-4">
                                  <fieldset>
                                    <h2
                                      style={{
                                        fontSize: "18px",
                                        color: "#F39C12",
                                        textAlign: "center",
                                      }}
                                    >
                                      Forgot Password?
                                    </h2>
                                  </fieldset>
                                  <fieldset>
                                    <div>
                                      <p
                                        className="greatCenter"
                                        style={{
                                          textAlign: "center",
                                          color: "#3498DB",
                                        }}
                                      >
                                        <span className="pull-center">
                                          -Click Here-
                                        </span>
                                      </p>
                                    </div>
                                  </fieldset>
                                </div>
                                <br />
                                <div className="col-md-4">
                                  <fieldset>
                                    <label htmlFor="PasswordS">
                                      New Password:
                                    </label>
                                    <input
                                      type="password"
                                      id="PasswordS"
                                      placeholder="New Password"
                                      autocomplete="off"
                                      style={{
                                        width: "100%",
                                        color: "black",
                                        fontSize: "15px",
                                      }}
                                      onInvalid={P_checkS.exit}
                                      onChange={(y) =>
                                        setS_passReg(y.target.value)
                                      }
                                    />
                                  </fieldset>
                                </div>
                                <div className="col-md-4">
                                  <fieldset>
                                    <label htmlFor="C_passwordS">
                                      Confirm New Password:
                                    </label>
                                    <input
                                      type="password"
                                      id="C_passwordS"
                                      placeholder="Confirm New Password"
                                      autocomplete="off"
                                      style={{
                                        width: "100%",
                                        color: "black",
                                        fontSize: "15px",
                                      }}
                                      onInvalid={P_checkS.exit}
                                    />
                                  </fieldset>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </form>
            </li>

            {/*Report Page*/}
            <li>
              <div className="heading"></div>
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
                                website only. Please DO NOT send the nonsensical
                                message that is considered deceived or unrelated
                                to this website. Spamming action is also not
                                allowed. Any violence toward these rules will
                                not be tolerated and must receive the
                                punishment.
                                <br />
                                <br />
                              </p>
                              <em>
                                You can follow our work through these directions
                              </em>
                              <br />
                              <br />
                              <ul>
                                <i>
                                  <a
                                    href="https://www.facebook.com/shiratasa.kusharane/"
                                    target="_blank"
                                  >
                                    <i className="fa fa-facebook" />
                                  </a>
                                </i>
                                <i>
                                  <a
                                    href="https://www.youtube.com/channel/UC6wZl8R7vM1gs-bTJWhBf1g"
                                    target="_blank"
                                  >
                                    <i className="fa fa-youtube" />
                                  </a>
                                </i>
                                <i>
                                  <a
                                    href="https://github.com/Shiratasa"
                                    target="_blank"
                                  >
                                    <i className="fa fa-github" />
                                  </a>
                                </i>
                              </ul>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="row">
                              <form onSubmit={handleSubmit2}>
                                <div className="col-md-6">
                                  <fieldset>
                                    <input
                                      type="text"
                                      id="topicText"
                                      placeholder="Topic"
                                      required
                                      autocomplete="off"
                                      style={{
                                        width: "100%",
                                        color: "black",
                                        fontSize: "15px",
                                      }}
                                      onInvalid={ReportAM.exit}
                                      onChange={(z) =>
                                        setTopic_Reg(z.target.value)
                                      }
                                      required
                                    />
                                  </fieldset>
                                </div>
                                <div className="col-md-6">
                                  <fieldset>
                                    <input
                                      type="text"
                                      id="mailText"
                                      placeholder="Your Email"
                                      required
                                      autocomplete="off"
                                      style={{
                                        width: "100%",
                                        color: "black",
                                        fontSize: "15px",
                                      }}
                                      onInvalid={ReportAM.exit}
                                      onChange={(z) =>
                                        setMail_Reg(z.target.value)
                                      }
                                      required
                                    />
                                  </fieldset>
                                </div>
                                <div className="col-md-12">
                                  <fieldset>
                                    <textarea
                                      rows={6}
                                      id="messText"
                                      placeholder="Message"
                                      required
                                      style={{
                                        width: "100%",
                                        color: "black",
                                        fontSize: "15px",
                                      }}
                                      onInvalid={ReportAM.exit}
                                      onChange={(z) =>
                                        setMessage_Reg(z.target.value)
                                      }
                                      required
                                    />
                                  </fieldset>
                                </div>
                                <div className="col-md-12">
                                  <fieldset>
                                    <br />
                                    <button
                                      type="submit"
                                      className="btn swappor"
                                      style={{ float: "right" }}
                                      onClick={ReportAM}
                                    >
                                      <i className="fa fa-paperclip" />
                                       Send Report
                                    </button>
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

export default withRouter(S_Main);
