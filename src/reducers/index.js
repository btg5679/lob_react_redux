import merge from 'lodash/merge'
import paginate from './paginate'

import * as ActionTypes from '../actions'

import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

import selectedAccount from '../containers/AccountList/reducers'

// Updates an entity cache in response to any action with response.entities.
const entities = (state = { users: {}, repos: {}, accts: {} }, action) => {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities)
  }

  return state
}

// Updates the pagination data for different actions.
const pagination = combineReducers({
  starredByUser: paginate({
    mapActionToKey: action => action.login,
    types: [
      ActionTypes.STARRED_REQUEST,
      ActionTypes.STARRED_SUCCESS,
      ActionTypes.STARRED_FAILURE
    ]
  }),
  stargazersByRepo: paginate({
    mapActionToKey: action => action.fullName,
    types: [
      ActionTypes.STARGAZERS_REQUEST,
      ActionTypes.STARGAZERS_SUCCESS,
      ActionTypes.STARGAZERS_FAILURE
    ]
  })
})

const rootReducer = combineReducers({
  entities,
  pagination,
  routing,
  selectedAccount
})

export default rootReducer
