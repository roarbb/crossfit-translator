import React, { Component } from 'react';
import logo from '../public/img/reebok_crossfit.png';
import Translator from './translator/Translator';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header clearfix">
          <nav>
            <ul className="nav nav-pills float-xs-right">
              <li className="nav-item">
                <a className="nav-link btn btn-primary" target="_blank" href="http://rj.sajgal.com/">Crossfit RJ Max</a>
              </li>
            </ul>
          </nav>
          <h3 className="text-muted">
            <img src={logo} className="App-logo" alt="logo" height="20" /> Crossfit Translator
          </h3>
        </div>

        <div className="row marketing">
          <Translator />
        </div>

        <footer className="footer">
          <p>&copy; Matej Sajgal 2017 &middot; matej@sajgal.com</p>
        </footer>

      </div>
    );
  }
}

export default App;
