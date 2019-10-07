import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import App from './components/App'
import reducers from './reducers'

const loggerMiddleware = createLogger()

const store = createStore(
  reducers,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
)
