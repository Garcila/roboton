import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main id="app" />
        <footer>
          <small>
            &copy: Roboton
            <span role="img" aria-label="robot">
              &#x1f916;
            </span>
          </small>
        </footer>
      </div>
    );
  }
}

export default App;
