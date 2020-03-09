import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'

import {SmurfContext} from './context/SmurfContext'

ReactDOM.render(
    <SmurfContext.Provider value={smurfs}>
      <App/>
    </SmurfContext.Provider>,
    document.getElementById('root'))
