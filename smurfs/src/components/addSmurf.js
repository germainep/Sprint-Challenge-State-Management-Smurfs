import React, {useContext, useState} from 'react'
import {SmurfContext} from '../context/SmurfContext'

const AddSmurf = () => {
  const {addSmurf} = useContext(SmurfContext)

  const [smurf, setSmurf] = useState({name: '', age: 0, height: 0})


  const handleChanges = (e) => {
    setSmurf({...smurf, [e.target.name]: e.target.value})
    console.log(smurf)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    addSmurf(smurf)
  }
  return (
      <div>
        <form onClick={handleSubmit}>
          <label htmlFor='name'>Name: </label>
          <input type='text' id='name' name='name' onChange={handleChanges}/>

          <label htmlFor='age'>Age: </label>
          <input type='number' id='age' name='age' onChange={handleChanges}/>

          <label htmlFor='height'>Height: </label>
          <input type='text' id='height' name='height' onChange={handleChanges}/>

          <button>Add New Smurf</button>

        </form>

      </div>
  )
}

export default AddSmurf
