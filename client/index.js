import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import store from './store'
import {Navbar, Home} from './components'
import App from './app'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main')
)
