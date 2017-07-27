import React from 'react'
import { Route } from 'react-router'
import App from './containers/App'
import UserPage from './containers/UserPage'
import Transfers from './containers/Transfers/transfers'

export default 
<Route path="/" component={App}>
	<Route path="/transfers" component={Transfers} />
</Route>
