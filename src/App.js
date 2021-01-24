import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import Authen from './pages/3.1) Receiver_ItemDetail';

function App() {
  return (
            <Router>
                <div>
                    <Route exact path="/" component={Authen}/>
                </div>

            </Router>
  );
}

export default App;
