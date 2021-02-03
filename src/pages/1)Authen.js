import React from 'react';
import {Helmet} from "react-helmet";
import book from "./resources/web_logo_bg.png";
import ScriptTag from 'react-script-tag';
import props from 'prop-types';
import eng from "./resources/imgs/authen/eng.png";
import tha from "./resources/imgs/authen/tha.png";
import {
    BrowserRouter as Router,
    Route, useHistory, withRouter
} from 'react-router-dom'

class App extends React.Component {
	handleClick1 = () => {this.props.history.push("/r_main");}
  handleClick2 = () => {this.props.history.push("/d_main");}
  handleClick3 = () => {this.props.history.push("/s_main");}
  render (){
    return (
      <div className="App">
 <div>
 <Helmet>
 <script async="true" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"/>
<script async="true" src="javascript/smoothscroll.js"/>
     <script async="true" src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"/>
    <script async="true" src="./resources/js/jquery (0).js"/>
    <script async="true" src="./resources/js/bootstrap.min (0).js"/>
    <script async="true" src="./resources/js/vegas.min.js"/>
    <script async="true" src="./resources/js/wow.min.js"/>
    <script async="true" src="./resources/js/smoothscroll.js"/>
    <script async="true" src="./resources/js/custom.js"/>
     <title>Phlad Rian</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="resources/imgs/book-icon.png" sizes="16x16" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Website created using create-react-app" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        {/*-
        manifest.json provides metadata used when your web-app is installed on a
        user's mobile device or desktop. 
        See https://developers.google.com/web/fundamentals/web-app-manifest/
        -*/}
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        {/*-
        Notice the use of %PUBLIC_URL% in the tags above.
        It will be replaced with the URL of the `public` folder during the build.
        Only files inside the `public` folder can be referenced from the HTML.
        Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
        work correctly both with client-side routing and a non-root public URL.
        Learn how to configure a non-root public URL by running `npm run build`.
        -*/}
        <link rel="stylesheet" href="resources/css/bootstrap.min (0).css" />
        <link rel="stylesheet" href="resources/css/animate.min.css" />
        <link rel="stylesheet" href="resources/css/et-line-font.css" />
        <link rel="stylesheet" href="resources/css/font-awesome.min (0).css" />
        <link rel="stylesheet" href="resources/css/vegas.min.css" />
        <link rel="stylesheet" href="resources/css/style.css" />
        <link href="https://fonts.googleapis.com/css?family=Rajdhani:400,500,700" rel="stylesheet" type="text/css" />
</Helmet>
<style>{`
  .home
  {
    background-image: url('resources/imgs/authen/slide-1.jpg');
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
        <section id="home" style={{backgroundImage: `url("resources/imgs/authen/slide-1.jpg")`, backgroundSize: "cover"}}>
          <div className="container">
            <div className="row">
                              <br /><img src={eng} width={25} height={25} className="reddit" style={{position: "absolute", top: 25, right: 30}}/>
  					<img src={tha} width={25} height={25} className="reddot" style={{position: "absolute", top: 25, right: 70}} />
              <div className="col-md-offset-2 col-md-8 col-sm-12">
                <div className="home-thumb">
                  <br /><br /><br />
                  <img src={book} width={125} height={125} />
                  <br /><br /><br />
                  <h1 className="wow fadeInUp" data-wow-delay="0.4s" style={{color: '#F39C12'}}>Welcome to<br />Phlad Rian Community</h1>
                  <a href="#about" data-toggle="modal" data-target="#modal1" className="btn btn-lg btn-default smoothScroll wow fadeInUp hidden-xs" data-wow-delay="0.6s">Sign In</a>
                  <a href="#" data-toggle="modal" data-target="#modal2" className="btn btn-lg btn-success smoothScroll wow fadeInUp" data-wow-delay="0.8s">Receiver Sign Up</a>
                  <a href="#" data-toggle="modal" data-target="#modal3" className="btn btn-lg btn-success smoothScroll wow fadeInUp" data-wow-delay="0.8s">Donor Sign Up</a>
                  <br /><br /><br /><br />
                  <h3 className="wow fadeInUp" data-wow-delay="1.0s"><strong>Let's share our learning tools together!</strong></h3>
                </div>
              </div>
            </div>
          </div>    
        </section>
        {/*- DIV SIGN IN POP -*/}
        <div className="modal fade" id="modal1" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content modal-popup">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <br /><h2 className="modal-title">Account Access</h2>
              </div>
              
              <form action="#" method="post">
                <br /><br /><br />
                <input name="username" type="text" className="form-control" id="username" placeholder="Username" />
                <br /><br /><br />
                <input name="password" type="text" className="form-control" id="password" placeholder="Password" />
                <br /><br /><br /><br /><br /><br />
                <input name="submit" type="submit" className="form-control" id="submit" defaultValue="Log-in" onClick={this.handleClick3} /> {/*type="button" onclick={"props.history.push({R_Main})"}*/}
              </form>
              <p>Welcome back to our community!</p><br />
            </div>
          </div>
        </div>
        {/*- DIV SIGN IN POP -*/}
        {/*- ######################################################################### -*/}
        {/*- DIV SIGN UP POP -*/}
        <div className="modal fade" id="modal2" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content modal-popup">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <br /><h2 className="modal-title">Receiver Registration</h2>
              </div>
              <form action="#" method="post">
                <input name="username" type="text" className="form-control" id="username" placeholder="Username" />
                <input name="email" type="text" className="form-control" id="email" placeholder="Email Address" />
                <input name="password" type="text" className="form-control" id="password" placeholder="Password" />
                <input name="c_password" type="text" className="form-control" id="c_password" placeholder="Confirm Password" />
                <label for="Student ID" style={{color: 'red', fontSize: '15px'}}>Student ID</label>
                <input name="Student ID" type="file" className="form-control" id="card" placeholder="Student ID" />
                <input name="submit" type="submit" className="form-control" id="submit" defaultValue="Create Account" onClick={this.handleClick1} />
              </form>
              <p>Thank you for your visiting!</p><br />
            </div>
          </div>
        </div>
        <div className="modal fade" id="modal3" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content modal-popup">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <br /><h2 className="modal-title">Donor Registration</h2>
              </div>
              <form action="#" method="post">
                <input name="username" type="text" className="form-control" id="username" placeholder="Username" />
                <input name="email" type="text" className="form-control" id="email" placeholder="Email Address" />
                <input name="password" type="text" className="form-control" id="password" placeholder="Password" />
                <input name="c_password" type="text" className="form-control" id="c_password" placeholder="Confirm Password" />
                <br /><br /><br /><br />
                <input name="submit" type="submit" className="form-control" id="submit" defaultValue="Create Account" onClick={this.handleClick2}/>
              </form>
              <p>Thank you for your visiting!</p><br />
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default withRouter (App);
