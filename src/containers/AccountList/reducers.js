import * as ActionTypes from './actions'
import { combineReducers } from 'redux'

export const selectedAccount = (state = null, action) => {
  const { type, error } = action
  if (action.selectedAccount) {
    return action.selectedAccount
  }

  return state
}

export default selectedAccount