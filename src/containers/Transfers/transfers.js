import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Transfers extends Component {
	constructor(props) {
    super(props);
  }

	componentWillMount() {
		console.log('zzzloadtransfers')
	}

	componentWillReceiveProps(nextProps) {
		this.props = nextProps
	}

	

	render() {
		return(
			<div>
				<h5>TRANSFERS</h5>
			</div>
		)
	}
}


const mapStateToProps = (state, ownProps) => {
  const {
    entities: { accts },
    selectedAccount
  } = state

  return {
  	accts: accts
  }

}

export default connect(mapStateToProps, {
})(Transfers)