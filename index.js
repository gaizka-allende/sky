import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { getCustomerId } from './actions'
import App from './containers/App'

require ('./scss/app.scss');

const middleware = process.env.NODE_ENV === 'production' ?
  [ thunk ] :
  [ thunk, logger() ]

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

store.dispatch(getCustomerId())

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
