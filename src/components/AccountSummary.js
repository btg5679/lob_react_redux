import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { loadAccounts }  from '../actions'
import { connect } from 'react-redux'

const GITHUB_REPO = 'https://github.com/reactjs/redux'

class AccountSummary extends Component {
  static propTypes = {
    accts: PropTypes.object,
    selectedAccount: PropTypes.string,
    loadAccounts: PropTypes.func.isRequired,
    selectedAccountData: PropTypes.object
  }

  componentDidMount() {
    this.props.loadAccounts()
  }

  componentWillReceiveProps(nextProps) {
    this.props = nextProps
    this.selectedAccountData = this.setSelectedAcctData()
  }

  setSelectedAcctData() {
    return this.props.accts[this.props.selectedAccount]
  }

  render() {
    if(this.selectedAccountData){
      return (
          <div>
            <h3>Account Summary</h3>
            <p>Account Name: {this.selectedAccountData.accountDisplayName}</p>
            <p>Available Balance: {this.selectedAccountData.balance}</p>
            <p>Account Type: {this.selectedAccountData.type}</p>
            <p>Account Number: {this.selectedAccountData.accountNumber}</p>
            <p>APR: {this.selectedAccountData.annualPercentageRate}</p>
            <p>Status: {this.selectedAccountData.status}</p>
          </div>
          )
      }else {
        return (
          <h3>No Account Selected</h3>
        )
      }
  }
}

const mapStateToProps = (state, ownProps) => {
  const {
    entities: { accts },
    selectedAccount
  } = state

  return {
    selectedAccount: selectedAccount,
    accts: accts
  }
}

export default connect(mapStateToProps, {
  loadAccounts
})(AccountSummary)
