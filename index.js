import React from 'react'
import ReactDOM from 'react-dom'

import 'babel-polyfill';

import App from './src/app'

import 'semantic-ui-css/semantic.css'
import 'rc-calendar/dist/rc-calendar.css'

import './src/css/base-cool.css'
import './src/css/base-login.css'
import './src/css/menu-cool.css'
import './src/css/icons-cool.css'
import './src/css/header-cool.css'
import './src/css/dashboard-cool.css'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import reducer from './src/reducers/main'
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
}

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

const container = document.getElementById('app')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, container)