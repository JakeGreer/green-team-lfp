import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from "./pages/Login";

const App = () => 
  <Router>
    <div>

    <Route exact path="/sign-up" component= {Login} />

    </div>

  </Router>
export default App;