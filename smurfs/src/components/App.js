import React from 'react'
import './App.css'
import {SmurfContextProvider} from '../context/SmurfContext'

import AddSmurf from './addSmurf'
import SmurfList from './SmurfList'

function App() {
  return (
      <div className="App">
        <h1>My Smurf Village</h1>
        <SmurfContextProvider>
          <AddSmurf/>
          <SmurfList/>
        </SmurfContextProvider>
      </div>
  )
}

export default App;
