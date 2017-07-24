import React, { Component } from 'react'
import './RightContainer.css';
//import AccountListContainer from '../../containers/AccountListContainer/AccountListContainer';


class RightContainer extends Component {

	componentWillMount() {
		
	}

	componentWillReceiveProps(nextProps) {

	}

	render() {
		return(
			<div className="RightContainer">
				<h1>Right Panel</h1>
				<p>RP Content Here</p>
			</div>
		)
	}

}

const mapStateToProps = (state, ownProps) => {

}

export default RightContainer