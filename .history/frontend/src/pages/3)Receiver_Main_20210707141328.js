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
  const but1 = window.location.origin + "/resources/imgs/home.png";
  const but2 = window.location.origin + "/resources/imgs/request.png";
  const but3 = window.location.origin + "/resources/imgs/wish.png";
  const but4 = window.location.origin + "/resources/imgs/account.png";
  const but5 = window.location.origin + "/resources/imgs/report.png";
  const but6 = window.location.origin + "/resources/imgs/logout.png";
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
    Axios.get("http://localhost:5000/Item").then((response) => {
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

  {
    /* Load Function */
  }
  window.onload = function () {
    ItemBlock();
    WishBlock();
    SchoolBox();
    GradeBox();
    CategBox();
    ProfileInfo();
    Re1Block();
    Re2Block();
    Re3Block();
    Re4Block();
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
                      <img src={but2} width={43} height={35} />
                    </div>
                    <h6>Request</h6>
                  </a>
                </li>
                <li>
                  <a>
                    <div className="image-icon">
                      <img src={but3} width={40} height={35} />
                    </div>
                    <h6>Wishlist</h6>
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
              <form>
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
                                        id="categSearch"
                                        onChange={(s) => {
                                          setCategString(s.target.value);
                                        }}
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
                                  <h2>Schools</h2>
                                  <div className="brands-name">
                                    <ul className="nav nav-pills nav-stacked">
                                      <select
                                        className="fitBox inputField"
                                        id="schoolSearch"
                                        onChange={(s) => {
                                          setSchoolString(s.target.value);
                                        }}
                                      >
                                        <option value="" selected="selected">
                                          All Schools
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
                                        id="textSearch"
                                        placeholder="Item Name"
                                        style={{
                                          color: "black",
                                          fontSize: "15px",
                                        }}
                                        onChange={(s) => {
                                          setSearchString(s.target.value);
                                        }}
                                        autocomplete="off"
                                      />
                                      <button
                                        type="button"
                                        className="btn btn-default"
                                        style={{ height: "33px" }}
                                      >
                                        <i className="fa fa-arrow-circle-o-right" />
                                      </button>
                                    </form>
                                  </div>
                                </div>
                                <br />
                                <br />
                                <br />
                                <br />
                                <div className="brands_products">
                                  <h2>Wishlist Notification</h2>
                                  <div className="brands-name">
                                    <div className="demo">
                                      <a>
                                        <i className="fa fa-bell" /> Setting
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-9 padding-right">
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
                                      } else if (
                                        val.Obj.toLowerCase().includes(
                                          SearchString.toLowerCase()
                                        ) &&
                                        CategString == "" &&
                                        SchoolString == ""
                                      ) {
                                        return val;
                                      } else if (
                                        val.Obj.toLowerCase().includes(
                                          SearchString.toLowerCase()
                                        ) &&
                                        val.Type_ID == CategString &&
                                        SchoolString == ""
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
                                <div className="col-sm-11">
                                  <br />
                                  <Pagination
                                    Page_AllPost={Page_AllPost1}
                                    TotalPost={Item_List.length}
                                    Current_Page={Current_Page1}
                                    paginate={paginate1}
                                    PostCount={ItemCount}
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
              </form>
            </li>

            {/*Request Page*/}
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
                                        Request Items ({Re1_List.length} /{" "}
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
                                                <h2
                                                  style={{
                                                    fontSize: "18px",
                                                    color: "red",
                                                  }}
                                                >
                                                  <i className="fa fa-clock-o" />
                                                  Pending
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
                                                <a
                                                  class="btn add-to-cart"
                                                  onClick={() => {
                                                    setR_getReg(val.Request_ID);
                                                    setI_pointReg(val.Point);
                                                    setD_priceReg(val.Donor_ID);
                                                    R_lastGet();
                                                  }}
                                                >
                                                  <i class="fa fa-check"></i>
                                                  Confirm
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

            {/*Wish Page*/}
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
                              <div className="table-responsive cart_info">
                                <table className="table table-condensed">
                                  <thead>
                                    <tr className="cart_menu">
                                      <td
                                        className="image"
                                        style={{ textAlign: "left" }}
                                      >
                                        Wishlist Items ({Wish_List.length})
                                      </td>
                                      <td className="description" />
                                      <td />
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {WishSlice.map((val, key) => {
                                      return (
                                        <tr>
                                          <td
                                            className="cart_product"
                                            style={{ float: "left" }}
                                          >
                                            <a>
                                              <div class="framePic">
                                                <img
                                                  src={val.Pic1}
                                                  alt=""
                                                  width={127}
                                                  height={158}
                                                />
                                                <a
                                                  class="btn add-to-cart floatBut"
                                                  onClick={() => {
                                                    history.push(
                                                      `/r_main/${Student_ID}/r_item/${val.Item_ID}`
                                                    );
                                                    window.location.reload();
                                                  }}
                                                >
                                                  <i class="fa fa-eye"></i>View
                                                </a>
                                              </div>
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
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            &nbsp;
                                            <a
                                              className="cart_quantity_delete"
                                              onClick={() => {
                                                setR_favorReg(val.Wish_ID);
                                                R_wishDel();
                                              }}
                                            >
                                              <i className="fa fa-times" />
                                            </a>
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                          </td>
                                        </tr>
                                      );
                                    })}
                                  </tbody>
                                </table>
                              </div>
                              <div className="col-sm-11">
                                <Pagination
                                  Page_AllPost={Page_AllPost2}
                                  TotalPost={Wish_List.length}
                                  Current_Page={Current_Page2}
                                  paginate={paginate2}
                                  PostCount={WishCount}
                                />
                              </div>
                              <br />
                              <br />
                              <br />
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
                                <br />
                                <div className="col-md-4">
                                  <fieldset>
                                    <img
                                      style={{ width: "350px", height: "1px" }}
                                      src={blank}
                                      alt=""
                                    />
                                    <fieldset>
                                      <h2
                                        style={{
                                          fontSize: "18px",
                                          color: "#F39C12",
                                          textAlign: "center",
                                        }}
                                      >
                                        FAQ
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
                                    <img
                                      style={{ width: "350px", height: "35px" }}
                                      src={blank}
                                      alt=""
                                    />
                                    <fieldset>
                                      <p style={{ textAlign: "center" }}>
                                        <span
                                          className="cart-total-price text-center"
                                          style={{
                                            fontSize: "18px",
                                            color: "#F39C12",
                                          }}
                                        >
                                          Weekly request chances:&nbsp;
                                        </span>
                                        <span
                                          className="cart-total-price text-center"
                                          style={{ fontSize: "16px" }}
                                        >
                                          ({val.Chance}/5)
                                        </span>
                                      </p>
                                    </fieldset>
                                    <fieldset>
                                      <p style={{ textAlign: "center" }}>
                                        <span
                                          className="cart-total-price text-center"
                                          style={{
                                            fontSize: "18px",
                                            color: "#F39C12",
                                          }}
                                        >
                                          Total successful requests:&nbsp;
                                        </span>
                                        <span
                                          className="cart-total-price text-center"
                                          style={{ fontSize: "16px" }}
                                        >
                                          {Re4_List.length}
                                        </span>
                                      </p>
                                    </fieldset>
                                  </fieldset>
                                </div>
                                <div className="col-md-4">
                                  <fieldset>
                                    <img
                                      id="preImg1"
                                      src={val.Card_Image}
                                      width={250}
                                      height={250}
                                      className="midimg"
                                    />
                                  </fieldset>
                                </div>
                                <InnerHTML html={Album} />
                                <div className="col-md-4">
                                  <fieldset>
                                    <img
                                      style={{ width: "360px", height: "65px" }}
                                      src={blank}
                                      alt=""
                                    />
                                    <div className="midbut1">
                                      <button
                                        className="btn swappor"
                                        type="submit"
                                        onClick={R_update}
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
                                        onClick={P_checkR}
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
                                    <br />
                                    <hr className="soft" />
                                    <h2 className="title text-center">
                                      Edit Profile
                                    </h2>
                                  </fieldset>
                                </div>
                                <div className="col-md-4">
                                  <fieldset>
                                    <label htmlFor="UsernameR">Name:</label>
                                    <input
                                      type="text"
                                      id="UsernameR"
                                      defaultValue={val.Username}
                                      placeholder="Username"
                                      autocomplete="off"
                                      style={{
                                        width: "100%",
                                        color: "black",
                                        fontSize: "15px",
                                      }}
                                      onInvalid={R_update.exit}
                                      onChange={(x) =>
                                        setR_nameReg(x.target.value)
                                      }
                                    />
                                  </fieldset>
                                </div>
                                <div className="col-md-4">
                                  <fieldset>
                                    <label htmlFor="img1">Image:</label>
                                    <input
                                      type="file"
                                      id="img1"
                                      style={{
                                        background: "white",
                                        margin: "auto",
                                        border: "1px solid black",
                                        width: "360px",
                                        height: "40px",
                                      }}
                                      accept=".png, .jpg, .jpeg"
                                      onChange={(event) =>
                                        fileConvert1(
                                          event.target.files[0] || null
                                        )
                                      }
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
                                    <label
                                      htmlFor="Agrade"
                                      style={{ color: "red" }}
                                    >
                                      Fixed Grade:
                                    </label>
                                    <input
                                      type="text"
                                      id="Agrade"
                                      value={val.Level}
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
                                    <label htmlFor="SchoolR">School:</label>
                                    <select
                                      className="formBox inputField"
                                      id="SchoolR"
                                      onInvalid={R_update.exit}
                                      onChange={(x) =>
                                        setR_schoolReg(x.target.value)
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
                                  </fieldset>
                                </div>
                                <div className="col-md-4">
                                  <fieldset>
                                    <label htmlFor="CardR">Student-ID:</label>
                                    <input
                                      type="text"
                                      id="CardR"
                                      defaultValue={val.Student_Card}
                                      placeholder="Student ID"
                                      autocomplete="off"
                                      style={{
                                        width: "100%",
                                        color: "black",
                                        fontSize: "15px",
                                      }}
                                      onInvalid={R_update.exit}
                                      onChange={(x) =>
                                        setR_cardReg(x.target.value)
                                      }
                                    />
                                  </fieldset>
                                </div>
                                <br />
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
                                    <label htmlFor="PhoneR">Tel:</label>
                                    <input
                                      type="text"
                                      id="PhoneR"
                                      defaultValue={val.Phone}
                                      placeholder="Tel Number"
                                      autocomplete="off"
                                      style={{
                                        width: "100%",
                                        color: "black",
                                        fontSize: "15px",
                                      }}
                                      onInvalid={R_update.exit}
                                      onChange={(x) =>
                                        setR_phoneReg(x.target.value)
                                      }
                                    />
                                  </fieldset>
                                </div>
                                <div className="col-md-4">
                                  <fieldset>
                                    <label htmlFor="postR">ZIP:</label>
                                    <input
                                      type="text"
                                      id="postR"
                                      defaultValue={val.ZIP}
                                      placeholder="ZIP Code"
                                      autocomplete="off"
                                      style={{
                                        width: "100%",
                                        color: "black",
                                        fontSize: "15px",
                                      }}
                                      onInvalid={R_update.exit}
                                      onChange={(x) =>
                                        setR_zipReg(x.target.value)
                                      }
                                    />
                                  </fieldset>
                                </div>
                                <br />
                                <div className="col-md-12">
                                  <fieldset>
                                    <label htmlFor="AddressR">Location:</label>
                                    <textarea
                                      rows={6}
                                      id="AddressR"
                                      defaultValue={val.Address}
                                      placeholder="House Location"
                                      style={{
                                        width: "100%",
                                        color: "black",
                                        fontSize: "15px",
                                      }}
                                      onInvalid={R_update.exit}
                                      onChange={(x) =>
                                        setR_localReg(x.target.value)
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
                                      onInvalid={P_checkR.exit}
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
                                    <label htmlFor="PasswordR">
                                      New Password:
                                    </label>
                                    <input
                                      type="password"
                                      id="PasswordR"
                                      placeholder="New Password"
                                      autocomplete="off"
                                      style={{
                                        width: "100%",
                                        color: "black",
                                        fontSize: "15px",
                                      }}
                                      onInvalid={P_checkR.exit}
                                      onChange={(y) =>
                                        setR_passReg(y.target.value)
                                      }
                                    />
                                  </fieldset>
                                </div>
                                <div className="col-md-4">
                                  <fieldset>
                                    <label htmlFor="C_passwordR">
                                      Confirm New Password:
                                    </label>
                                    <input
                                      type="password"
                                      id="C_passwordR"
                                      placeholder="Confirm New Password"
                                      autocomplete="off"
                                      style={{
                                        width: "100%",
                                        color: "black",
                                        fontSize: "15px",
                                      }}
                                      onInvalid={P_checkR.exit}
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

export default withRouter(R_Main);
