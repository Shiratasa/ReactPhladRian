import React from 'react';
import {Helmet} from "react-helmet";

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
          <img src="resources/imgs/wallpaper.jpg" />
        </section>
        <section className="cd-hero">
          <div className="cd-slider-nav">
            <nav>
              <span className="cd-marker item-1" />
              <ul>
                <li><a href="#0"><div className="image-icon"><img src="resources/imgs/home.png" width={40} height={35} /></div><h6>Home</h6></a></li>
                <li className="selected"><a href="#0"><div className="image-icon"><img src="resources/imgs/delivery.png" width={45} height={33} /></div><h6>Delivery</h6></a></li>
                <li><a href="#0"><div className="image-icon"><img src="resources/imgs/reward.png" width={45} height={40} /></div><h6>Trade</h6></a></li>
                <li><a href="#0"><div className="image-icon"><img src="resources/imgs/account.png" width={40} height={38} /></div><h6>Account</h6></a></li>
                <li><a href="#0"><div className="image-icon"><img src="resources/imgs/report.png" width={38} height={33} /></div><h6>Contact</h6></a></li>
                <li><a href="#0"><div className="image-icon"><img src="resources/imgs/logout.png" width={39} height={35} /></div><h6>Logout</h6></a></li>
              </ul>
            </nav> 
          </div> 
          <ul className="cd-hero-slider">
            {/*-/Home page-*/}
            <li>
              <div className="heading">
                <h1>Delivery Request</h1>
                <span>Support the transportation sevice for users within this website</span> 
              </div>
            </li>
            {/*-/Home page-*/}
            <li className="selected">
              <div className="heading">
                <h1>Delivery Request</h1>
                <span>Support the transportation sevice for users within this website</span> 
              </div>
              <div className="cd-full-width fivth-slide">
                <div className="container">
                  <div className="row">
                    <div className="col-md-13">
                      <div className="content fivth-content">
                        <div className="row">                       
                          <form id="contact" action method="post"><br />
                            <div className="col-md-12">
                              <table className="table-condensed" style={{float: 'right'}}>
                                <tbody><tr><td className="cart_delete">
                                      <a className="cart_quantity_delete" href><i className="fa fa-times" /></a>
                                    </td>
                                  </tr></tbody></table>
                              <fieldset>
                                <img src="resources/imgs/QR.png" width={200} height={200} className="midimg" />                         
                              </fieldset>
                            </div>
                            <div className="col-md-12">
                              <fieldset>
                                <br /><br />
                                <hr className="soft" />
                              </fieldset>
                            </div>
                            <div className="col-md-4">
                              <fieldset>
                                <label htmlFor="Aname">Donor name:</label>
                                <input name="Aname" type="text" id="Aname" placeholder="Mr.Putthiwat Chalermvongsavej" required="required" style={{width: '100%', color: 'black', fontSize: '15px'}} />
                              </fieldset>
                            </div>
                            <div className="col-md-4">
                              <fieldset>
                                <label htmlFor="Amail">Donor email:</label>
                                <input name="Amail" type="text" id="Amail" placeholder="puth.deboi@ymail.com" required="required" style={{width: '100%', color: 'black', fontSize: '15px'}} />
                              </fieldset>
                            </div>
                            <div className="col-md-4">
                              <fieldset>
                                <label htmlFor="Aphone">Donor tel:</label>
                                <input name="Aphone" type="text" id="Aphone" placeholder="083-190-5406" required="required" style={{width: '100%', color: 'black', fontSize: '15px'}} />
                              </fieldset>
                            </div><br />
                            <div className="col-md-12">
                              <fieldset>
                                <label htmlFor="Alocate">Donor location:</label>
                                <textarea name="Alocate" rows={6} id="Alocate" placeholder="666, Ladprao 01 Alley,
Ladprao Road, Wang Thonglang District,
Bangkok, 10240" required="required" style={{width: '100%', color: 'black', fontSize: '15px'}} defaultValue={""} />
                              </fieldset>
                            </div>
                            <div className="col-md-12">
                              <fieldset>
                                <br />
                                <hr className="soft" />
                              </fieldset>
                            </div>
                            <div className="col-md-4">
                              <fieldset>
                                <label htmlFor="Aname">Receiver name:</label>
                                <input name="Aname" type="text" id="Aname" placeholder="Mr.Krittapas Sukkhasame" required="required" style={{width: '100%', color: 'black', fontSize: '15px'}} />
                              </fieldset>
                            </div>
                            <div className="col-md-4">
                              <fieldset>
                                <label htmlFor="Amail">Receiver email:</label>
                                <input name="Amail" type="text" id="Amail" placeholder="supersun@hotmail.com" required="required" style={{width: '100%', color: 'black', fontSize: '15px'}} />
                              </fieldset>
                            </div>
                            <div className="col-md-4">
                              <fieldset>
                                <label htmlFor="Aphone">Receiver tel:</label>
                                <input name="Aphone" type="text" id="Aphone" placeholder="084-203-1178" required="required" style={{width: '100%', color: 'black', fontSize: '15px'}} />
                              </fieldset>
                            </div><br />
                            <div className="col-md-12">
                              <fieldset>
                                <label htmlFor="Alocate">Receiver location:</label>
                                <textarea name="Alocate" rows={6} id="Alocate" placeholder="240/97, Ekkamai 10 Alley,
Chaeng Watthana Road, Khlong Tan District,
Bangkok, 10110" required="required" style={{width: '100%', color: 'black', fontSize: '15px'}} defaultValue={""} />
                              </fieldset>
                            </div>
                            <div className="col-md-12">
                              <fieldset>
                                <br />
                                <hr className="soft" />
                              </fieldset>
                            </div>
                            <div className="col-md-12">
                              <fieldset>
                                <a href="#" className="btn swappor" style={{float: 'right'}}><i className="fa fa-truck" /> Start Delivery</a>
                              </fieldset>
                              <div className="col-md-12">
                                <fieldset>
                                  <br />
                                </fieldset>
                              </div>
                            </div></form>
                        </div>
                      </div>
                    </div>                  
                  </div>
                </div>
              </div></li>
            <li>
              <div className="heading">
                <h1>Delivery Request</h1>
                <span>Support the transportation sevice for users within this website</span> 
              </div>  
            </li>
            <li>
              <div className="heading">
                <h1>Delivery Request</h1>
                <span>Support the transportation sevice for users within this website</span> 
              </div> 
            </li>
            <li>
              <div className="heading">
                <h1>Delivery Request</h1>
                <span>Support the transportation sevice for users within this website</span> 
              </div> 
            </li>
            <li>
              <div className="heading">
                <h1>Delivery Request</h1>
                <span>Support the transportation sevice for users within this website</span> 
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
