/* eslint-disable no-undef */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { loadAccounts }  from '../actions'
import { connect } from 'react-redux'

const GITHUB_REPO = 'https://github.com/reactjs/redux'

class AccountSummary extends Component {
  static propTypes = {
    id: PropTypes.string,
    accts: PropTypes.object,
    selectedAccount: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    loadAccounts: PropTypes.func.isRequired
  }

  componentDidMount() {
    console.log('zzzcdmalc')
    const { dispatch, id } = this.props;
    console.log('zzzaboutToLoadAccts')
    this.props.loadAccounts()
  }

  componentWillReceiveProps(nextProps) {
    console.log('zzznextProps', nextProps)
    this.props = nextProps
    console.log(this.props)
    // if (nextProps.selectedAccount !== this.props.selectedAccount) {
    //   this.setInputValue(nextProps.selectedAccount)
    // }
  }

  getInputValue = () => {
    return this.refs.input.selectedAccount
  }

  setInputValue = (val) => {
    // Generally mutating DOM is a bad idea in React components,
    // but doing this for a single uncontrolled field is less fuss
    // than making it controlled and maintaining a state for it.
    this.refs.input.selectedAccount = val
  }

  handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      this.handleGoClick()
    }
  }

  handleGoClick = () => {
    this.props.onChange(this.getInputValue())
  }

  render() {
    return (
      <div>
        <p>Account Name:</p>
        <p>Available Balance:</p>
        <p>Current Balance:</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const {
    pagination: { stargazersByRepo },
    entities: { accts }
  } = state

  const selectedAccount= state.selectedAccount

  return {
    selectedAccount,
    accts: accts
  }
}

export default connect(mapStateToProps, {
  loadAccounts
})(AccountSummary)
