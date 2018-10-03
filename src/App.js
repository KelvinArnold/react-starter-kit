import React, { Component } from 'react';
import logo from './assets/images/logo.svg';
import './assets/scss/app.scss';
// Import router
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Import Components
import {PostContainer} from './components/Posts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
        {/* Router Page */}
        <div>
          <BrowserRouter>
            <Switch>
              <Route path="/post" component={PostContainer}></Route>
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
