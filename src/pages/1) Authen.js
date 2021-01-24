import React from 'react';
import {Helmet} from "react-helmet";
import book from "./resources/web_logo_bg.png";
import ScriptTag from 'react-script-tag';

class App extends React.Component {
  render (){
    return (
      <div className="App">
 <div>
 <Helmet>
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
        <section id="home">
          <div className="container">
            <div className="row">
              <div className="col-md-offset-2 col-md-8 col-sm-12">
                <div className="home-thumb">
                  <br /><br /><br /><br />
                  <img src={book} width={125} height={125} />
                  <br /><br /><br />
                  <h1 className="wow fadeInUp" data-wow-delay="0.4s" style={{color: '#F39C12'}}>Welcome to<br />Phlad Rian Community</h1>
                  <a href="#about" data-toggle="modal" data-target="#modal1" className="btn btn-lg btn-default smoothScroll wow fadeInUp hidden-xs" data-wow-delay="0.6s">Sign In</a>
                  <a href="#" data-toggle="modal" data-target="#modal2" className="btn btn-lg btn-success smoothScroll wow fadeInUp" data-wow-delay="0.8s">Sign Up</a>
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
                <input name="submit" type="submit" className="form-control" id="submit" defaultValue="Log-in" />
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
                <br /><h2 className="modal-title">Registration</h2>
              </div>
              <form action="#" method="post">
                <input name="username" type="text" className="form-control" id="username" placeholder="Username" />
                <input name="email" type="text" className="form-control" id="email" placeholder="Email Address" />
                <input name="password" type="text" className="form-control" id="password" placeholder="Password" />
                <input name="c_password" type="text" className="form-control" id="c_password" placeholder="Confirm Password" />
                <label for="Student ID" style={{color: 'red', fontSize: '15px'}}>Student ID</label>
                <input name="Student ID" type="file" className="form-control" id="card" placeholder="Student ID" />
                <br />
                <input name="submit" type="submit" className="form-control" id="submit" defaultValue="Create Account" />
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

export default App;