import React from 'react'
 import './AccountListItem.css';

const AccountListItem = (props) => {
	return (
		<div className={"account " + (props.acct.id === props.selAcct ? 'active' : '')} key={props.acct.id}>
			<span className="accountName">{props.acct.accountDisplayName}</span>
			<span className="accountBalance">{props.acct.balance}</span>
			<span className="accountType">{props.acct.type}</span>
		</div>
	)
}

export default AccountListItem