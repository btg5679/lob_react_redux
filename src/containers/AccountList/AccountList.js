import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import AccountListItem from '../../components/AccountListItem'
import { setSelectedAccount } from './actions'

var _ = require('lodash');

class AccountList extends Component {
	constructor(props) {
    super(props);
    this.handleAccountClick = this.handleAccountClick.bind(this);
  }

  static propTypes = {
    accts: PropTypes.object,
    handleAccountClick: PropTypes.func,
    setSelectedAccount: PropTypes.func.isRequired,
  }

	componentWillMount() {

	}

	componentWillReceiveProps(nextProps) {
		this.props = nextProps
	}

	handleAccountClick(id) {
		this.props.setSelectedAccount(id);
	  }

	render() {
		if(Object.keys(this.props.accts).length > 0){
			return(
				<div>
					{_.values(this.props.accts).map(function(acct, i){
				        return <div key={acct.id} onClick={() => this.handleAccountClick(acct.id)}>
							        <AccountListItem acct={acct}
			        						selAcct={this.props.selectedAccount}
							         />
								</div>
				    }, this)}
				</div>
			)
		} else {
			return (
				<div>
				</div>
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
  	accts: accts,
  	selectedAccount: selectedAccount
  }

}

export default connect(mapStateToProps, {
	setSelectedAccount
})(AccountList)