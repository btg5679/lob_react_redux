import React, { Component } from 'react'
import './RightContainer.css';


class RightContainer extends Component {


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

export default RightContainer