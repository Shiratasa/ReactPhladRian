import React from 'react';
import {Helmet} from "react-helmet";
import wall from "./resources/imgs/wallpaper.jpg";
import but1 from "./resources/imgs/home.png";
import but2 from "./resources/imgs/request.png";
import but3 from "./resources/imgs/reward.png";
import but4 from "./resources/imgs/account.png";
import but5 from "./resources/imgs/report.png";
import but6 from "./resources/imgs/logout.png";
import blank from "./resources/imgs/shop/white.jpg"
import del1 from "./resources/imgs/shop/grab.png";
import del2 from "./resources/imgs/shop/gojek.png";
import del3 from "./resources/imgs/shop/line.png";
import del4 from "./resources/imgs/shop/kerry.png";
import del5 from "./resources/imgs/shop/thai.png";
import del6 from "./resources/imgs/shop/lala.png";
import eng from "./resources/imgs/authen/eng.png";
import tha from "./resources/imgs/authen/tha.png";
import {
    BrowserRouter as Router,
    Route, useHistory, withRouter
} from 'react-router-dom'

class App extends React.Component {
  render (){
    return (
      <div className="App">
 <div>
       <Helmet>
    <script async="true" src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"/>
    <script async="true" src="resources/js/vendor/jquery-1.11.2.min.js"/>
    <script async="true" src="resources/js/vendor/bootstrap.min.js"/>
    <script async="true" src="resources/js/plugins.js"/>
    <script async="true" src="resources/js/main.js"/>
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
        <link href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900" rel="stylesheet" />
        <link href="resources/css/bootstrap.min (2).css" rel="stylesheet" />
        <link href="resources/css/font-awesome.min.css" rel="stylesheet" />
        <link href="resources/css/prettyPhoto.css" rel="stylesheet" />
        <link href="resources/css/price-range.css" rel="stylesheet" />
        <link href="resources/css/animate.css" rel="stylesheet" />
        <link href="resources/css/main.css" rel="stylesheet" />
        <link href="resources/css/responsive.css" rel="stylesheet" />
        <link href="resources/css/bootstrap-responsive.min.css" rel="stylesheet" />
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
    `}</style>
        <div className="overlay" />
        <section className="top-part">
          <img src={wall} />
        </section>
        <section className="cd-hero">
        <br /><img src={eng} width={25} height={25} className="reddit" style={{position: "absolute", top: 25, right: 30}}/>
  					<img src={tha} width={25} height={25} className="reddot" style={{position: "absolute", top: 25, right: 70}} />
          <div className="cd-slider-nav">
            <nav>
              <span className="cd-marker item-1" />
              <ul>
                <li><a href="#0"><div className="image-icon"><img src={but1} width={40} height={35} /></div><h6>Home</h6></a></li>
                <li className="selected"><a href="#0"><div className="image-icon"><img src={but2} width={43} height={35} /></div><h6>Request</h6></a></li>
                <li><a href="#0"><div className="image-icon"><img src={but3} width={45} height={40} /></div><h6>Trade</h6></a></li>
                <li><a href="#0"><div className="image-icon"><img src={but4} width={40} height={38} /></div><h6>Account</h6></a></li>
                <li><a href="#0"><div className="image-icon"><img src={but5} width={38} height={33} /></div><h6>Contact</h6></a></li>
                <li><a href="#0"><div className="image-icon"><img src={but6} width={39} height={35} /></div><h6>Logout</h6></a></li>
              </ul>
            </nav> 
          </div> 
          <ul className="cd-hero-slider">
            {/*-/Home page-*/}
            <li>
              <div className="heading">
                <h1>Pending Request</h1>
                <span>Deliver items to those who request them</span> 
              </div>
            </li>
            {/*-/Home page-*/}
            <li className="selected">
              <div className="heading">
                <h1>Pending Request</h1>
                <span>Deliver items to those who request them</span> 
              </div>
              <div className="cd-full-width fivth-slide">
                <div className="container">
                  <div className="row">
                    <div className="col-md-13">
                      <div className="content fivth-content">
                        <div className="row">                       
                          <form id="contact" action method="post">
                            <div className="col-md-12">
                              <table className="table-condensed" style={{float: 'right'}}>
                                <tbody><tr><td className="cart_delete">
                                      <a className="cart_quantity_delete" href><i className="fa fa-times" /></a>
                                    </td>
                                  </tr></tbody></table>
                              <h2 style={{fontSize: '18px', color: '#F39C12', textAlign: 'left'}}>Most suitable service</h2><br />
                              <div className="brands-name">
                                <fieldset>
                                  <div className="col-md-4">
                                    <img htmlFor="grab" style={{width: '50px', height: '50px'}} className="midimg" src={del1} alt="" />
                                    <input type="radio" id="grab" name="delivery" defaultValue="grab" style={{marginLeft: '48%'}} />
                                  </div>
                                  <div className="col-md-4">
                                    <img htmlFor="get" style={{width: '50px', height: '50px'}} className="midimg" src={del2} alt="" /> 
                                    <input type="radio" id="get" name="delivery" defaultValue="get" style={{marginLeft: '48%'}} />                 
                                  </div>
                                  <div className="col-md-4">
                                    <img htmlFor="line" style={{width: '50px', height: '50px'}} className="midimg" src={del3} alt="" /> 
                                    <input type="radio" id="line" name="delivery" defaultValue="line" style={{marginLeft: '48%'}} />
                                  </div>
                                </fieldset>
                              </div><br />
                              <h2 style={{fontSize: '18px', color: '#F39C12', textAlign: 'left'}}>Alternative service</h2><br />
                              <div className="brands-name">
                                <fieldset>
                                  <div className="col-md-4">
                                    <img htmlFor="grab" style={{width: '50px', height: '50px'}} className="midimg" src={del4} alt="" />
                                    <input type="radio" id="grab" name="delivery" defaultValue="grab" style={{marginLeft: '48%'}} />
                                  </div>
                                  <div className="col-md-4">
                                    <img htmlFor="get" style={{width: '50px', height: '50px'}} className="midimg" src={del5} alt="" /> 
                                    <input type="radio" id="get" name="delivery" defaultValue="get" style={{marginLeft: '48%'}} />                 
                                  </div>
                                  <div className="col-md-4">
                                    <img htmlFor="line" style={{width: '50px', height: '50px'}} className="midimg" src={del6} alt="" /> 
                                    <input type="radio" id="line" name="delivery" defaultValue="line" style={{marginLeft: '48%'}} />
                                  </div>
                                </fieldset>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <fieldset>
                                <br /><br />
                              </fieldset>
                            </div>  
                            <div className="col-md-12">
                              <fieldset>
                                <a href="#" className="btn swappor" style={{float: 'right'}}><i className="fa fa-qrcode" /> Send QR to agency</a>
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
                <h1>Pending Request</h1>
                <span>Deliver items to those who request them</span> 
              </div>
            </li>
            <li>
              <div className="heading">
                <h1>Pending Request</h1>
                <span>Deliver items to those who request them</span> 
              </div>
            </li>
            <li>
              <div className="heading">
                <h1>Pending Request</h1>
                <span>Deliver items to those who request them</span> 
              </div>
            </li>
            <li>
              <div className="heading">
                <h1>Pending Request</h1>
                <span>Deliver items to those who request them</span> 
              </div>
            </li>
          </ul> 
        </section> 
        <footer>
          <p>Copyright © 2020 | Phlad Rian, The School Equipment Donation Website            
          </p></footer>
      </div>

      </div>
    );
  }
}

export default withRouter (App);
