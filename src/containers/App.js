import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { Route, Link } from 'react-router-dom'
import AccountSummary from '../components/AccountSummary'
import LeftContainer from './LeftContainer'
import RightContainer from './RightContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <Link to="/">Account Summary</Link>
          <Link to="/transfers">Transfers</Link>
        </header>

        <div className="appContainer">
          <LeftContainer />
            <div className="mainContent">
              <AccountSummary />
            </div>
          <RightContainer />
        </div>
      </div>
    )
  }
}
export default App
