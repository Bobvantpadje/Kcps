import React, { Component } from 'react';
import '../styles/App.css';
import { Link } from 'react-router'

class App extends Component {

  render() {
    return (
      <div className="App" name="tester">
        <div className="header-container">
          <div className="companyName">KCPSoftware</div>
          <ul className="nav-container">
            <li className="nav-item"><Link to="/about">About</Link></li>
            <li className="nav-item"><Link to="/">Home</Link></li>
          </ul>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
