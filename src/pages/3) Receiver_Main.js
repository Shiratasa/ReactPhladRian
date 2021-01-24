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
</Helmet>
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
        <style dangerouslySetInnerHTML={{__html: "\n\t\t\t.midimg\n\t\t\t{display: block; margin-left: auto; margin-right: auto;}\n\t\t\t.searchform input \n\t\t\t{width: 169px; height: 33px}\n\t\t\t::-webkit-input-placeholder \n\t\t\t{ {/* Chrome/Opera/Safari */}color: lightgrey;}\n\t\t\t::-moz-placeholder \n\t\t\t{ {/* Firefox 19+ */}color: lightgrey;}\n\t\t\t:-ms-input-placeholder \n\t\t\t{ {/* IE 10+ */}color: lightgrey;}\n\t\t\t:-moz-placeholder \n\t\t\t{ {/* Firefox 18- */}color: lightgrey;}\n\t\t\t.swapper:hover \n\t\t\t{color: #F39C12; border: 1px solid #F39C12;}\n\t\t\t.aswap:hover\n\t\t\t{color: white; background: #F39C12; border: 1px solid #F39C12;}\n\t\t\t.swappor  \n\t\t\t{color: white; background: #F39C12; border: 1px solid #F39C12;}\n\t\t\t.swappor:hover \n\t\t\t{color: black; background: #EBEDEF; border: 1px solid black;}\n\t\t\t.pull-center:hover \n\t\t\t{color: black; font-weight: bold;}\n      .demo \n      {display: inline-block;}\n      .demo a \n      {color: red; padding: 5px 12px; text-decoration: none; transition: background-color 2s; border: 1px solid orange; font-size: 15px;} \n      .demo a.active \n      {background-color: orange; color: white;}\n\t\t" }} />
        <div className="overlay" />
        <section className="top-part">
          <img src="resources/imgs/wallpaper.jpg" />
        </section>
        <section className="cd-hero">
          <div className="cd-slider-nav">
            <nav>
              <span className="cd-marker item-1" />
              <ul>
                <li className="selected"><a href="#0"><div className="image-icon"><img src="resources/imgs/home.png" width={40} height={35} /></div><h6>Home</h6></a></li>
                <li><a href="#0"><div className="image-icon"><img src="resources/imgs/request.png" width={43} height={35} /></div><h6>Request</h6></a></li>
                <li><a href="#0"><div className="image-icon"><img src="resources/imgs/wish.png" width={40} height={35} /></div><h6>Wishlist</h6></a></li>
                <li><a href="#0"><div className="image-icon"><img src="resources/imgs/account.png" width={40} height={38} /></div><h6>Account</h6></a></li>
                <li><a href="#0"><div className="image-icon"><img src="resources/imgs/report.png" width={38} height={33} /></div><h6>Contact</h6></a></li>
                <li><a href="#0"><div className="image-icon"><img src="resources/imgs/logout.png" width={39} height={35} /></div><h6>Logout</h6></a></li>
              </ul>
            </nav> 
          </div> 
          <ul className="cd-hero-slider">
            {/*-/Home page-*/}
            <li className="selected">
              <div className="heading">
                <h1>Donation Center</h1>
                <span>Let's share the valuable learning tools together</span>
              </div>
              <div className="cd-full-width first-slide">
                <div className="container">
                  <div className="row">
                    <div className="col-md-13">
                      <div className="content first-content">
                        <div className="container">
                          <div className="row">
                            <div className="col-sm-3">
                              <div className="brands_products">{/*-brands_products-*/}
                                <h2>Categories</h2>
                                <div className="brands-name">
                                  <ul className="nav nav-pills nav-stacked">
                                    <a href> <span className="pull-center" style={{fontWeight: 'bold', color: 'black'}}>Stationery (125)</span></a><br /><br />
                                    <a href> <span className="pull-center">Book (133)</span></a><br /><br />
                                    <a href> <span className="pull-center">Uniform (104)</span></a><br /><br />
                                    <a href> <span className="pull-center">Bag (116)</span></a><br /><br />
                                    <a href> <span className="pull-center">Device (98)</span></a>
                                  </ul>
                                </div>
                              </div><br /><br /><br />{/*-/brands_products-*/}
                              <div className="brands_products">{/*-brands_products-*/}
                                <h2>Schools</h2>
                                <div className="brands-name">
                                  <ul className="nav nav-pills nav-stacked">
                                    <a href> <span className="pull-center" style={{fontWeight: 'bold', color: 'black'}}>Suankularb (73)</span></a><br /><br />
                                    <a href> <span className="pull-center">Debsirin (85)</span></a><br /><br />
                                    <a href> <span className="pull-center">Assumption (70)</span></a><br /><br />
                                    <a href> <span className="pull-center">Bangkok Christian (81)</span></a><br /><br />
                                    <a href> <span className="pull-center">Triam Udom (67)</span></a>
                                  </ul>
                                </div>
                              </div><br /><br /><br />{/*-/brands_products-*/}
                              <div className="brands_products">
                                <h2>Search</h2>
                                <div className="brands-name">
                                  <form action="#" className="searchform">
                                    <input type="text" placeholder="Item Name" style={{color: 'black', fontSize: '15px'}} required="required" />
                                    <button type="submit" className="btn btn-default" style={{height: '33px'}}><i className="fa fa-arrow-circle-o-right" /></button>
                                  </form>
                                </div>
                              </div><br /><br /><br /><br />
                              <div className="brands_products">
                                <h2>Save to notification</h2>
                                <div className="brands-name">
                                  <div className="demo">
                                    <a href><i className="fa fa-bell" /> Not save</a>
                                  </div>
                                </div>
                              </div><br /><br /><br /><br />
                              <div className="brands_products">{/*-shipping-*/}
                                <img src="resources/imgs/home/shipping.jpg" alt="" width={265} height={315} />
                              </div>{/*-/shipping-*/}	
                            </div>
                            <div className="col-sm-9 padding-right">
                              <div className="features_items">{/*-features_items-*/}
                                <div className="brands_products">
                                  <h2 className="title text-center">Recent Items</h2>
                                </div>
                                <div className="col-sm-4">
                                  <div className="product-image-wrapper">
                                    <div className="single-products">
                                      <div className="productinfo text-center">
                                        <img src="resources/imgs/shop/product12.jpg" alt="" width={230} height={320} />
                                        <h2 style={{fontSize: '15px'}}>Thai Literature Book 1</h2><br />
                                        <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-eye" />View</a>
                                      </div>
                                    </div>
                                    <div className="choose">
                                      <ul className="nav nav-pills nav-justified">
                                        <li><a href><i className="fa fa-plus-square" />Add to wishlist</a></li>
                                        <li><a href><i className="fa fa-plus-square" />Add to wishlist</a></li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-4">
                                  <div className="product-image-wrapper">
                                    <div className="single-products">
                                      <div className="productinfo text-center">
                                        <img src="resources/imgs/shop/product11.jpg" alt="" width={230} height={320} />
                                        <h2 style={{fontSize: '15px'}}>Mathematic Book 2</h2><br />
                                        <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-eye" />View</a>
                                      </div>
                                    </div>
                                    <div className="choose">
                                      <ul className="nav nav-pills nav-justified">
                                        <li><a href><i className="fa fa-plus-square" />Add to wishlist</a></li>
                                        <li><a href><i className="fa fa-plus-square" />Add to wishlist</a></li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-4">
                                  <div className="product-image-wrapper">
                                    <div className="single-products">
                                      <div className="productinfo text-center">
                                        <img src="resources/imgs/shop/product10.jpg" alt="" width={230} height={320} />
                                        <h2 style={{fontSize: '15px'}}>English Activity Book 3</h2><br />
                                        <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-eye" />View</a>
                                      </div>
                                    </div>
                                    <div className="choose">
                                      <ul className="nav nav-pills nav-justified">
                                        <li><a href><i className="fa fa-plus-square" />Add to wishlist</a></li>
                                        <li><a href><i className="fa fa-plus-square" />Add to wishlist</a></li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-4">
                                  <div className="product-image-wrapper">
                                    <div className="single-products">
                                      <div className="productinfo text-center">
                                        <img src="resources/imgs/shop/product9.jpg" alt="" width={230} height={320} />
                                        <h2 style={{fontSize: '15px'}}>General History Book 4</h2><br />
                                        <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-eye" />View</a>
                                      </div>
                                    </div>
                                    <div className="choose">
                                      <ul className="nav nav-pills nav-justified">
                                        <li><a href><i className="fa fa-plus-square" />Add to wishlist</a></li>
                                        <li><a href><i className="fa fa-plus-square" />Add to wishlist</a></li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-4">
                                  <div className="product-image-wrapper">
                                    <div className="single-products">
                                      <div className="productinfo text-center">
                                        <img src="resources/imgs/shop/product8.jpg" alt="" width={230} height={320} />
                                        <h2 style={{fontSize: '15px'}}>PE Book 5</h2><br />
                                        <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-eye" />View</a>
                                      </div>
                                    </div>
                                    <div className="choose">
                                      <ul className="nav nav-pills nav-justified">
                                        <li><a href><i className="fa fa-plus-square" />Add to wishlist</a></li>
                                        <li><a href><i className="fa fa-plus-square" />Add to wishlist</a></li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-4">
                                  <div className="product-image-wrapper">
                                    <div className="single-products">
                                      <div className="productinfo text-center">
                                        <img src="resources/imgs/shop/product7.jpg" alt="" width={230} height={320} />
                                        <h2 style={{fontSize: '15px'}}>Science Lab Book 6</h2><br />
                                        <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-eye" />View</a>
                                      </div>
                                    </div>
                                    <div className="choose">
                                      <ul className="nav nav-pills nav-justified">
                                        <li><a href><i className="fa fa-plus-square" />Add to wishlist</a></li>
                                        <li><a href><i className="fa fa-plus-square" />Add to wishlist</a></li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-4">
                                  <div className="product-image-wrapper">
                                    <div className="single-products">
                                      <div className="productinfo text-center">
                                        <img src="resources/imgs/shop/product6.jpg" alt="" width={230} height={320} />
                                        <h2 style={{fontSize: '15px'}}>O-NET Examination Book</h2><br />
                                        <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-eye" />View</a>
                                      </div>
                                    </div>
                                    <div className="choose">
                                      <ul className="nav nav-pills nav-justified">
                                        <li><a href><i className="fa fa-plus-square" />Add to wishlist</a></li>
                                        <li><a href><i className="fa fa-plus-square" />Add to wishlist</a></li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-sm-11">
                                  <br />
                                  <ul className="pagination">
                                    <div className="col-sm-1">
                                      <li><a href>«</a></li>
                                    </div>
                                    <div className="col-sm-1">
                                      <li className="active"><a href>1</a></li>
                                    </div>
                                    <div className="col-sm-1">
                                      <li><a href>2</a></li>
                                    </div>
                                    <div className="col-sm-1">
                                      <li><a href>3</a></li>
                                    </div>
                                    <div className="col-sm-1">
                                      <li><a href>4</a></li>
                                    </div>
                                    <div className="col-sm-1">
                                      <li><a href>5</a></li>
                                    </div>
                                    <div className="col-sm-1">
                                      <li><a href>6</a></li>
                                    </div>
                                    <div className="col-sm-1">
                                      <li><a href>7</a></li>
                                    </div>
                                    <div className="col-sm-1">
                                      <li><a href>8</a></li>
                                    </div>
                                    <div className="col-sm-1">
                                      <li><a href>9</a></li>
                                    </div>
                                    <div className="col-sm-1">
                                      <li><a href>10 </a></li>
                                    </div>
                                    <div className="col-sm-1">
                                      <li><a href>»</a></li>
                                    </div>
                                  </ul>
                                </div>
                              </div>{/*-features_items-*/}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>                  
                </div>
              </div>
            </li>
            {/*-/Home page-*/}
            <li>
              <div className="heading">
                <h1>Pending Request</h1>
                <span>Wait patiently for the items arrival</span> 
              </div>
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
                                      <td className="image" style={{textAlign: 'left'}}>Request Items (11/100)</td>
                                      <td className="description" />
                                      <td />
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className="cart_product" style={{float: 'left'}}>
                                        <a href><img src="resources/imgs/shop/product12.jpg" alt="" width={127} height={158} /></a>
                                      </td>
                                      <td className="cart_description" style={{float: 'left'}}>
                                        <br /><h2 className="cart_total_price" style={{textAlign: 'left', fontSize: '18px'}}>      Thai Literature Book 1</h2>
                                        <p style={{textAlign: 'justify'}}>         Thai book with a summary of the content example of doing the problem Both a basic form and a shortcut way with<br />         exercises and solutions by explaining in simple language, according to the latest curriculum by explaining to be<br />         easy to understand, not boring, to create a good attitude...</p>
                                      </td>
                                      <td className="cart_delete" style={{float: 'right'}}><br /><br /><br /><br /><br /><br /><br />
                                        <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-clock-o" />Confirm</a>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="cart_product" style={{float: 'left'}}>
                                        <a href><img src="resources/imgs/shop/product11.jpg" alt="" width={127} height={158} /></a>
                                      </td>
                                      <td className="cart_description" style={{float: 'left'}}>
                                        <br /><h2 className="cart_total_price" style={{textAlign: 'left', fontSize: '18px'}}>      Mathematic Book 2</h2>
                                        <p style={{textAlign: 'justify'}}>         Math book with a summary of the content example of doing the problem Both a basic form and a shortcut way with<br />         exercises and solutions by explaining in simple language, according to the latest curriculum by explaining to be<br />         easy to understand, not boring, to create a good attitude...</p>
                                      </td>
                                      <td className="cart_delete" style={{float: 'right'}}><br /><br /><br /><br /><br /><br /><br />
                                        <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-clock-o" />Confirm</a>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="cart_product" style={{float: 'left'}}>
                                        <a href><img src="resources/imgs/shop/product10.jpg" alt="" width={127} height={158} /></a>
                                      </td>
                                      <td className="cart_description" style={{float: 'left'}}>
                                        <br /><h2 className="cart_total_price" style={{textAlign: 'left', fontSize: '18px'}}>      English Activity Book 3</h2>
                                        <p style={{textAlign: 'justify'}}>         English book with a summary of the content example of doing the problem Both a basic form and a shortcut way with<br />         exercises and solutions by explaining in simple language, according to the latest curriculum by explaining to be<br />         easy to understand, not boring, to create a good attitude...</p>
                                      </td>
                                      <td className="cart_delete" style={{float: 'right'}}><br /><br /><br /><br /><br /><br /><br />
                                        <h2 style={{fontSize: '18px'}}><i className="fa fa-clock-o" />Pending...</h2>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="cart_product" style={{float: 'left'}}>
                                        <a href><img src="resources/imgs/shop/product9.jpg" alt="" width={127} height={158} /></a>
                                      </td>
                                      <td className="cart_description" style={{float: 'left'}}>
                                        <br /><h2 className="cart_total_price" style={{textAlign: 'left', fontSize: '18px'}}>      General History Book 4</h2>
                                        <p style={{textAlign: 'justify'}}>         History book with a summary of the content example of doing the problem Both a basic form and a shortcut way with<br />         exercises and solutions by explaining in simple language, according to the latest curriculum by explaining to be<br />         easy to understand, not boring, to create a good attitude...</p>
                                      </td>
                                      <td className="cart_delete" style={{float: 'right'}}><br /><br /><br /><br /><br /><br /><br />
                                        <h2 style={{fontSize: '18px'}}><i className="fa fa-clock-o" />Pending...</h2>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="cart_product" style={{float: 'left'}}>
                                        <a href><img src="resources/imgs/shop/product8.jpg" alt="" width={127} height={158} /></a>
                                      </td>
                                      <td className="cart_description" style={{float: 'left'}}>
                                        <br /><h2 className="cart_total_price" style={{textAlign: 'left', fontSize: '18px'}}>      PE Book 5</h2>
                                        <p style={{textAlign: 'justify'}}>         PE book with a summary of the content example of doing the problem Both a basic form and a shortcut way with<br />         exercises and solutions by explaining in simple language, according to the latest curriculum by explaining to be<br />         easy to understand, not boring, to create a good attitude...</p>
                                      </td>
                                      <td className="cart_delete" style={{float: 'right', color: '#F39C12'}}><br /><br /><br /><br /><br /><br /><br />
                                        <h2 style={{fontSize: '18px'}}><i className="fa fa-check" />Received</h2>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="cart_product" style={{float: 'left'}}>
                                        <a href><img src="resources/imgs/shop/product7.jpg" alt="" width={127} height={158} /></a>
                                      </td>
                                      <td className="cart_description" style={{float: 'left'}}>
                                        <br /><h2 className="cart_total_price" style={{textAlign: 'left', fontSize: '18px'}}>      Science Lab Book 6</h2>
                                        <p style={{textAlign: 'justify'}}>         Science book with a summary of the content example of doing the problem Both a basic form and a shortcut way with<br />         exercises and solutions by explaining in simple language, according to the latest curriculum by explaining to be<br />         easy to understand, not boring, to create a good attitude...</p>
                                      </td>
                                      <td className="cart_delete" style={{float: 'right', color: '#F39C12'}}><br /><br /><br /><br /><br /><br /><br />
                                        <h2 style={{fontSize: '18px'}}><i className="fa fa-check" />Received</h2>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="col-sm-11">
                                <br />
                                <ul className="pagination">
                                  <div className="col-sm-1">
                                    <li><a href>«</a></li>
                                  </div>
                                  <div className="col-sm-1">
                                    <li className="active"><a href>1</a></li>
                                  </div>
                                  <div className="col-sm-1">
                                    <li><a href>2</a></li>
                                  </div>
                                  <div className="col-sm-1">
                                    <li><a href>3</a></li>
                                  </div>
                                  <div className="col-sm-1">
                                    <li><a href>4</a></li>
                                  </div>
                                  <div className="col-sm-1">
                                    <li><a href>5</a></li>
                                  </div>
                                  <div className="col-sm-1">
                                    <li><a href>6</a></li>
                                  </div>
                                  <div className="col-sm-1">
                                    <li><a href>7</a></li>
                                  </div>
                                  <div className="col-sm-1">
                                    <li><a href>8</a></li>
                                  </div>
                                  <div className="col-sm-1">
                                    <li><a href>9</a></li>
                                  </div>
                                  <div className="col-sm-1">
                                    <li><a href>10 </a></li>
                                  </div>
                                  <div className="col-sm-1">
                                    <li><a href>»</a></li>
                                  </div>
                                </ul>
                              </div><br /><br /><br /><br />
                            </div>
                          </section> {/*-/#cart_items-*/}
                        </div>
                      </div>
                    </div>
                  </div>                  
                </div>
              </div> 
            </li>
            <li>
              <div className="heading">
                <h1>Personal Wishlist</h1>
                <span>Save your favorite items until the right opportunity</span> 
              </div>
              <div className="cd-full-width third-slide">
                <div className="container">
                  <div className="row">
                    <div className="col-md-13">
                      <div className="content third-content">
                        <div className="row">
                          <section id="cart_items">
                            <div className="container">
                              <br />
                              <div className="demo">
                                <a href className="active"><i className="fa fa-star" /> Favorite</a>
                                <a href><i className="fa fa-bell" />‎‎ Notification</a>
                              </div><br /><br />
                              <div className="table-responsive cart_info">
                                <table className="table table-condensed">
                                  <thead>
                                    <tr className="cart_menu">
                                      <td className="image" style={{textAlign: 'left'}}>Favorite Items (11/100)</td>
                                      <td className="description" />
                                      <td />
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className="cart_product" style={{float: 'left'}}>
                                        <a href><img src="resources/imgs/shop/product12.jpg" alt="" width={127} height={158} /></a>
                                      </td>
                                      <td className="cart_description" style={{float: 'left'}}>
                                        <br /><h2 className="cart_total_price" style={{textAlign: 'left', fontSize: '18px'}}>      Thai Literature Book 1</h2>
                                        <p style={{textAlign: 'justify'}}>         Thai book with a summary of the content example of doing the problem Both a basic form and a shortcut way with<br />         exercises and solutions by explaining in simple language, according to the latest curriculum by explaining to be<br />         easy to understand, not boring, to create a good attitude...</p>
                                        <a href="#" className="btn btn-default add-to-cart" style={{float: 'left'}}><i className="fa fa-eye" />View</a>
                                      </td>
                                      <td className="cart_delete" style={{float: 'right'}}>
                                        <a className="cart_quantity_delete" href><i className="fa fa-times" /></a>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="cart_product" style={{float: 'left'}}>
                                        <a href><img src="resources/imgs/shop/product11.jpg" alt="" width={127} height={158} /></a>
                                      </td>
                                      <td className="cart_description" style={{float: 'left'}}>
                                        <br /><h2 className="cart_total_price" style={{textAlign: 'left', fontSize: '18px'}}>      Mathematic Book 2</h2>
                                        <p style={{textAlign: 'justify'}}>         Math book with a summary of the content example of doing the problem Both a basic form and a shortcut way with<br />         exercises and solutions by explaining in simple language, according to the latest curriculum by explaining to be<br />         easy to understand, not boring, to create a good attitude...</p>
                                        <a href="#" className="btn btn-default add-to-cart" style={{float: 'left'}}><i className="fa fa-eye" />View</a>
                                      </td>
                                      <td className="cart_delete" style={{float: 'right'}}>
                                        <a className="cart_quantity_delete" href><i className="fa fa-times" /></a>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="cart_product" style={{float: 'left'}}>
                                        <a href><img src="resources/imgs/shop/product10.jpg" alt="" width={127} height={158} /></a>
                                      </td>
                                      <td className="cart_description" style={{float: 'left'}}>
                                        <br /><h2 className="cart_total_price" style={{textAlign: 'left', fontSize: '18px'}}>      English Activity Book 3</h2>
                                        <p style={{textAlign: 'justify'}}>         English book with a summary of the content example of doing the problem Both a basic form and a shortcut way with<br />         exercises and solutions by explaining in simple language, according to the latest curriculum by explaining to be<br />         easy to understand, not boring, to create a good attitude...</p>
                                        <a href="#" className="btn btn-default add-to-cart" style={{float: 'left'}}><i className="fa fa-eye" />View</a>
                                      </td>
                                      <td className="cart_delete" style={{float: 'right'}}>
                                        <a className="cart_quantity_delete" href><i className="fa fa-times" /></a>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="cart_product" style={{float: 'left'}}>
                                        <a href><img src="resources/imgs/shop/product9.jpg" alt="" width={127} height={158} /></a>
                                      </td>
                                      <td className="cart_description" style={{float: 'left'}}>
                                        <br /><h2 className="cart_total_price" style={{textAlign: 'left', fontSize: '18px'}}>      General History Book 4</h2>
                                        <p style={{textAlign: 'justify'}}>         History book with a summary of the content example of doing the problem Both a basic form and a shortcut way with<br />         exercises and solutions by explaining in simple language, according to the latest curriculum by explaining to be<br />         easy to understand, not boring, to create a good attitude...</p>
                                        <a href="#" className="btn btn-default add-to-cart" style={{float: 'left'}}><i className="fa fa-eye" />View</a>
                                      </td>
                                      <td className="cart_delete" style={{float: 'right'}}>
                                        <a className="cart_quantity_delete" href><i className="fa fa-times" /></a>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="cart_product" style={{float: 'left'}}>
                                        <a href><img src="resources/imgs/shop/product8.jpg" alt="" width={127} height={158} /></a>
                                      </td>
                                      <td className="cart_description" style={{float: 'left'}}>
                                        <br /><h2 className="cart_total_price" style={{textAlign: 'left', fontSize: '18px'}}>      PE Book 5</h2>
                                        <p style={{textAlign: 'justify'}}>         PE book with a summary of the content example of doing the problem Both a basic form and a shortcut way with<br />         exercises and solutions by explaining in simple language, according to the latest curriculum by explaining to be<br />         easy to understand, not boring, to create a good attitude...</p>
                                        <a href="#" className="btn btn-default add-to-cart" style={{float: 'left'}}><i className="fa fa-eye" />View</a>
                                      </td>
                                      <td className="cart_delete" style={{float: 'right'}}>
                                        <a className="cart_quantity_delete" href><i className="fa fa-times" /></a>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="cart_product" style={{float: 'left'}}>
                                        <a href><img src="resources/imgs/shop/product7.jpg" alt="" width={127} height={158} /></a>
                                      </td>
                                      <td className="cart_description" style={{float: 'left'}}>
                                        <br /><h2 className="cart_total_price" style={{textAlign: 'left', fontSize: '18px'}}>      Science Lab Book 6</h2>
                                        <p style={{textAlign: 'justify'}}>         Science book with a summary of the content example of doing the problem Both a basic form and a shortcut way with<br />         exercises and solutions by explaining in simple language, according to the latest curriculum by explaining to be<br />         easy to understand, not boring, to create a good attitude...</p>
                                        <a href="#" className="btn btn-default add-to-cart" style={{float: 'left'}}><i className="fa fa-eye" />View</a>
                                      </td>
                                      <td className="cart_delete" style={{float: 'right'}}>
                                        <a className="cart_quantity_delete" href><i className="fa fa-times" /></a>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="col-sm-11">
                                <br />
                                <ul className="pagination">
                                  <div className="col-sm-1">
                                    <li><a href>«</a></li>
                                  </div>
                                  <div className="col-sm-1">
                                    <li className="active"><a href>1</a></li>
                                  </div>
                                  <div className="col-sm-1">
                                    <li><a href>2</a></li>
                                  </div>
                                  <div className="col-sm-1">
                                    <li><a href>3</a></li>
                                  </div>
                                  <div className="col-sm-1">
                                    <li><a href>4</a></li>
                                  </div>
                                  <div className="col-sm-1">
                                    <li><a href>5</a></li>
                                  </div>
                                  <div className="col-sm-1">
                                    <li><a href>6</a></li>
                                  </div>
                                  <div className="col-sm-1">
                                    <li><a href>7</a></li>
                                  </div>
                                  <div className="col-sm-1">
                                    <li><a href>8</a></li>
                                  </div>
                                  <div className="col-sm-1">
                                    <li><a href>9</a></li>
                                  </div>
                                  <div className="col-sm-1">
                                    <li><a href>10 </a></li>
                                  </div>
                                  <div className="col-sm-1">
                                    <li><a href>»</a></li>
                                  </div>
                                </ul>
                              </div><br /><br /><br /><br />
                            </div>
                          </section> {/*-/#cart_items-*/}
                        </div>
                      </div>
                    </div>
                  </div>                  
                </div>
              </div>
            </li>
            <li>
              <div className="heading">
                <h1>Account Management</h1>
                <span>View and edit your own profile information</span> 
              </div>
              <div className="cd-full-width fivth-slide">
                <div className="container">
                  <div className="row">
                    <div className="col-md-13">
                      <div className="content fivth-content">
                        <div className="row">                       
                          <form id="contact" action method="post"><br />
                            <div className="col-md-4">
                              <fieldset>
                                <img style={{width: '350px', height: '40px'}} src="resources/imgs/shop/white.jpg" alt="" /> 
                                <div className="col-sm-4" style={{float: 'left'}}>{/*-brands_products-*/}
                                  <div className>
                                    <ul className="nav nav-pills nav-stacked">
                                      <a href><span className="pull-center" /></a>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-sm-5" style={{float: 'left'}}>{/*-brands_products-*/}
                                  <h2 style={{fontSize: '18px', color: '#F39C12', textAlign: 'center'}}>FAQ</h2>
                                  <div className="brands-name">
                                    <ul className="nav nav-pills nav-stacked">
                                      <a href><span className="pull-center"> -Read Policy-</span></a>
                                    </ul>
                                  </div>
                                </div>
                              </fieldset>
                            </div>
                            <div className="col-md-4">
                              <fieldset>
                                <img src="resources/imgs/ID.png" width={300} height={200} className="midimg" />                         
                              </fieldset>
                            </div>
                            <div className="col-md-4">
                              <fieldset>
                                <img style={{width: '350px', height: '95px'}} src="resources/imgs/shop/white.jpg" alt="" /> 
                                <a href="#" className="btn swappor" style={{float: 'left'}}><i className="fa fa-user" /> Edit Profile</a>
                                <p style={{float: 'left'}}>      </p>
                                <a href="#" className="btn swappor" style={{float: 'left'}}><i className="fa fa-lock" /> Change Pass</a>
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
                                <label htmlFor="Aname">Name:</label>
                                <input name="Aname" type="text" id="Aname" placeholder="Mr.Putthiwat Chalermvongsavej" required="required" style={{width: '100%', color: 'black', fontSize: '15px'}} />
                              </fieldset>
                            </div>
                            <div className="col-md-8">
                              <fieldset>
                                <img style={{width: '500px', height: '85px'}} src="resources/imgs/shop/white.jpg" alt="" /> 
                              </fieldset>
                            </div><br />
                            <div className="col-md-4">
                              <fieldset>
                                <label htmlFor="Agrade">Grade:</label>
                                <input name="Agrade" type="text" id="Agrade" placeholder="High School Year 5" required="required" style={{width: '100%', color: 'black', fontSize: '15px'}} />
                              </fieldset>
                            </div>
                            <div className="col-md-4">
                              <fieldset>
                                <label htmlFor="Aschool">School:</label>
                                <input name="Aschool" type="text" id="Aschool" placeholder="Debsirin School" required="required" style={{width: '100%', color: 'black', fontSize: '15px'}} />
                              </fieldset>
                            </div>
                            <div className="col-md-4">
                              <fieldset>
                                <label htmlFor="Aid">Student-ID:</label>
                                <input name="Aid" type="text" id="Aid" placeholder={0010080243735} required="required" style={{width: '100%', color: 'black', fontSize: '15px'}} />
                              </fieldset>
                            </div><br />
                            <div className="col-md-4">
                              <fieldset>
                                <label htmlFor="Amail">Email:</label>
                                <input name="Amail" type="text" id="Amail" placeholder="puth.deboi@ymail.com" required="required" style={{width: '100%', color: 'black', fontSize: '15px'}} />
                              </fieldset>
                            </div>
                            <div className="col-md-4">
                              <fieldset>
                                <label htmlFor="Aphone">Tel:</label>
                                <input name="Aphone" type="text" id="Aphone" placeholder="083-190-5406" required="required" style={{width: '100%', color: 'black', fontSize: '15px'}} />
                              </fieldset>
                            </div><br />
                            <div className="col-md-12">
                              <fieldset>
                                <label htmlFor="Alocate">Location:</label>
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
                              </fieldset>
                            </div>
                            <div className="col-md-8">
                              <fieldset>
                                <span className="cart-total-price text-center" style={{fontSize: '18px', color: '#F39C12'}}>   Weekly request chance:</span>
                                <span className="cart-total-price text-center" style={{fontSize: '16px'}}>(1/5)</span>
                              </fieldset>
                            </div>
                            <div className="col-md-12">
                              <fieldset>
                                <br />
                              </fieldset>
                            </div>
                            <div className="col-md-4">
                              <fieldset>
                              </fieldset>
                            </div>
                            <div className="col-md-8">
                              <fieldset>
                                <span className="cart-total-price text-center" style={{fontSize: '18px', color: '#F39C12'}}>   Total successful request:</span>
                                <span className="cart-total-price text-center" style={{fontSize: '16px'}}>7</span>
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
                <h1>Contact Administrator</h1>
                <span>We are ready to solve every kinds of problem for you</span> 
              </div>
              <div className="cd-full-width fivth-slide">
                <div className="container">
                  <div className="row">
                    <div className="col-md-13">
                      <div className="content fivth-content">
                        <div className="row"><br />
                          <div className="col-md-4">
                            <div className="left-info">
                              <p align="justify"> This section can be used to report about the critical situations that happen within this website only. Please DO NOT send the nonsensical message that is considered deceived or unrelated to this website. Spamming action is also not allowed. Any violence toward these rules will not be tolerated and must receive the punishment.<br /><br /></p>
                              <em>You can follow our work through these directions</em><br /><br />
                              <ul>
                                <i><a href="#"><i className="fa fa-facebook" /></a></i>
                                <i><a href="#"><i className="fa fa-youtube" /></a></i>
                                <i><a href="#"><i className="fa fa-github" /></a></i>
                              </ul>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="row">
                              <form id="contact" action method="post">
                                <div className="col-md-6">
                                  <fieldset>
                                    <input name="name" type="text" id="name" placeholder="Topic" required="required" style={{width: '100%', color: 'black', fontSize: '15px'}} />
                                  </fieldset>
                                </div>
                                <div className="col-md-6">
                                  <fieldset>
                                    <input name="email" type="email" id="email" placeholder="Your Email" required="required" style={{width: '100%', color: 'black', fontSize: '15px'}} />
                                  </fieldset>
                                </div>
                                <div className="col-md-12">
                                  <fieldset>
                                    <textarea name="message" rows={6} id="message" placeholder="Message" required="required" style={{width: '100%', color: 'black', fontSize: '15px'}} defaultValue={""} />
                                  </fieldset>
                                </div>
                                <div className="col-md-12">
                                  <fieldset>
                                    <br /><a href="#" className="btn swappor" style={{float: 'right'}}><i className="fa fa-paperclip" /> Send Report</a>
                                  </fieldset>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div><br />
                      </div>
                    </div>
                  </div>                  
                </div>
              </div>
            </li>
            <li>
              <div className="heading">
                <h1>Logout</h1>
                <span>...</span> 
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
