import React, {useContext} from 'react'
import {SmurfContext} from '../context/SmurfContext'

import Smurf from './Smurf'

const SmurfList = () => {
  const {smurfs} = useContext(SmurfContext)


  return (
      <div>
        {smurfs.map(smurf => {
          return <Smurf key={smurf.id} name={smurf.name}/>
        })}
      </div>
  )
}

export default SmurfList
