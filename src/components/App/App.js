import React, { Component } from 'react';
import logo from './../../assets/images/logo.svg';
// Import styles
import './../../assets/scss/app.scss';
// Import router
import { BrowserRouter } from 'react-router-dom';
import Routes from "Routes";
// Import Components
import { Header } from 'Components/Header';
import { Footer } from 'Components/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter
        basename="/">
        <div className="container-fluid">
          <Header logo={logo}/>
          {/* Body Content */}
          <div className="row pt-3 pb-3">
            {/* Get all App Routers */}
            <Routes/>
          </div>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
