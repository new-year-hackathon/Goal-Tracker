import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import store from './store'
import {Navbar} from './components'
import {Home} from './components'

// establishes socket connection
import './socket'

render(
    <Provider store={store}>
            <Navbar />
            <Home />
    </Provider>,
    document.getElementById('main')
);