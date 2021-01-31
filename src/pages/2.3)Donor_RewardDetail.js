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
import large from "./resources/imgs/shop/reward1.jpg"
import small1 from "./resources/imgs/shop/4.jpg"
import small2 from "./resources/imgs/shop/5.jpg"
import small3 from "./resources/imgs/shop/6.jpg"

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
    `}</style>
        <div className="overlay" />
        <section className="top-part">
          <img src={wall} />
        </section>
        <section className="cd-hero">
          <div className="cd-slider-nav">
            <nav>
              <span className="cd-marker item-1" />
              <ul>
                <li><a href="#0"><div className="image-icon"><img src={but1} width={40} height={35} /></div><h6>Home</h6></a></li>
                <li><a href="#0"><div className="image-icon"><img src={but2} width={43} height={35} /></div><h6>Request</h6></a></li>
                <li className="selected"><a href="#0"><div className="image-icon"><img src={but3} width={45} height={40} /></div><h6>Trade</h6></a></li>
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
                <h1>Reward Exchanging</h1>
                <span>Trade your charity point for various exclusive items</span> 
              </div>
            </li>
            {/*-/Home page-*/}
            <li>
              <div className="heading">
                <h1>Reward Exchanging</h1>
                <span>Trade your charity point for various exclusive items</span> 
              </div>
            </li>
            <li className="selected">
              <div className="heading">
                <h1>Reward Exchanging</h1>
                <span>Trade your charity point for various exclusive items</span> 
              </div>
              <div className="cd-full-width first-slide">
                <div className="container">
                  <div className="row">
                    <div className="col-md-13">
                      <div className="content first-content">
                        <div className="container">
                          <div id="gallery" className="col-sm-3">
                            <a href={large}>
                              <img src={large} width={250} height={340} />
                            </a><br /><br />
                            <div id="differentview" className="moreOptopm carousel slide">
                              <div className="carousel-inner">
                                <button type id className="btn aswap" style={{width: '2px', height: '70px', textAlign: 'center'}}>«</button>
                                <a href={small1}> <img style={{width: '60px', height: '70px'}} src={small1} alt="" /></a>
                                <a href={small2}> <img style={{width: '60px', height: '70px'}} src={small2} alt="" /></a>
                                <a href={small3}> <img style={{width: '60px', height: '70px'}} src={small3} alt="" /></a>
                                <button type id className="btn aswap" style={{width: '2px', height: '70px', textAlign: 'center'}}>»</button>
                              </div>
                            </div>
                          </div>  
                          <div className="col-sm-9">
                            <table className="table-condensed" style={{float: 'right'}}>
                              <tbody><tr><td className="cart_delete">
                                    <a className="cart_quantity_delete" href><i className="fa fa-times" /></a>
                                  </td>
                                </tr></tbody></table>
                            <h2 className="title text-center">Nike Air Shoes</h2>
                            <hr className="soft" />
                            <h4 style={{textAlign: 'left'}}>Description</h4>
                            <p align="justify">
                              Good-quality and valuable shoes. It is very useful and versatile. A worth reward to be traded with your point.We normally sell this item at high price since it is considered as limited edition item which is rarely made.Get this thing under your possession and enjoy its potential.<br /><br /><br /><br />
                            </p>
                            <hr className="soft" />
                            <h4 style={{textAlign: 'left'}}>General Information</h4>
                            <table className="table table-bordered">
                              <tbody>
                                <tr className="techSpecRow"><td className="techSpecTD1"><b>Category:</b></td><td className="techSpecTD2">Shoes</td></tr>
                                <tr className="techSpecRow"><td className="techSpecTD1"><b>Release:</b></td><td className="techSpecTD2">13-11-2020</td></tr>
                                <tr className="techSpecRow"><td className="techSpecTD1"><b>Fragile:</b></td><td className="techSpecTD2">No</td></tr>
                              </tbody>
                            </table>
                            <hr className="soft" />
                            <span className="cart-total-price text-center" style={{fontSize: '18px', color: '#F39C12'}}>Total special point:</span>
                            <span className="cart-total-price text-center" style={{fontSize: '16px'}}>520</span>
                            <hr className="soft" />
                            <button type="submit" className="btn btn-default swappor"><i className="fa fa fa-dollar" /> 500 point</button>
                          </div>
                        </div>
                      </div>
                    </div>					
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="heading">
                <h1>Reward Exchanging</h1>
                <span>Trade your charity point for various exclusive items</span> 
              </div> 
            </li>
            <li>
              <div className="heading">
                <h1>Reward Exchanging</h1>
                <span>Trade your charity point for various exclusive items</span> 
              </div>  
            </li>
            <li>
              <div className="heading">
                <h1>Reward Exchanging</h1>
                <span>Trade your charity point for various exclusive items</span> 
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

export default App;