/* eslint-disable no-undef */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { Route, Link } from 'react-router-dom'
import AccountSummary from '../components/AccountSummary'
import LeftContainer from './LeftContainer'
import RightContainer from './RightContainer'
import { resetErrorMessage } from '../actions'
import './App.css';

class App extends Component {
  static propTypes = {
    // Injected by React Redux
    errorMessage: PropTypes.string,
    resetErrorMessage: PropTypes.func.isRequired,
    inputValue: PropTypes.string.isRequired,
    // Injected by React Router
    children: PropTypes.node
  }

  handleDismissClick = e => {
    this.props.resetErrorMessage()
    e.preventDefault()
  }

  handleChange = nextValue => {
    browserHistory.push(`/${nextValue}`)
  }

  renderErrorMessage() {
    const { errorMessage } = this.props
    if (!errorMessage) {
      return null
    }

    return (
      <p style={{ backgroundColor: '#e99', padding: 10 }}>f
        <b>{errorMessage}</b>
        {' '}
        <button onClick={this.handleDismissClick}>
          Dismiss
        </button>
      </p>
    )
  }

  render() {
    console.log('zzzprops', this.props)
    const { children, inputValue } = this.props
    return (
    <div>
      <header className="header">
        <a href="/">Account Summary</a>
        <a href="/about-us">Transfers</a>
      </header>


      <div className="appContainer">
        <LeftContainer />
        <div className="mainContent">
          <AccountSummary value={inputValue}
                   onChange={this.handleChange} />
          <hr />
          {this.renderErrorMessage()}
          {children}
        </div>
        <RightContainer />
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  errorMessage: state.errorMessage,
  inputValue: ownProps.location.pathname.substring(1)
})

export default connect(mapStateToProps, {
  resetErrorMessage
})(App)
