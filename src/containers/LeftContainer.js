import React, { Component } from 'react'
import './LeftContainer.css';
import PropTypes from 'prop-types'
import AccountList from '../containers/AccountList/AccountList'
import { connect } from 'react-redux'


class LeftContainer extends Component {
  
	static propTypes = {
		accts: PropTypes.object
	}


	componentWillReceiveProps(nextProps) {
		this.props = nextProps
	}

	render() {
		return(
			<div className="LeftContainer">
				<div className="accountList">
					<AccountList />
				</div>
  			</div>
		)
	}

}

const mapStateToProps = (state, ownProps) => {
  const {
    entities: { accts }
  } = state

  return {
  	accts: accts
  }

}
export default connect(mapStateToProps)(LeftContainer)
