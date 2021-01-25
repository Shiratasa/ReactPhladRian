import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Helmet} from "react-helmet";
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import Authen from "./pages/1)Authen.js";

function App() {
  return (
  	<div className="App">
 		<div>
  	 		<Helmet>
 				<script async="true" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"/>
				<script async="true" src="java/smoothscroll.js"/>
			</Helmet>
            <Router>
                <div>
                    <Route exact path="/" class="smoothScroll" component={Authen} />
                </div>
            </Router>
        </div>
    </div>
  );
}

export default App;
