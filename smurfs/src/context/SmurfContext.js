import React, {createContext, useReducer, useEffect} from 'react'
import axios from 'axios'
import SmurfReducer from '../reducers/SmurfReducer'

const initialState = {
  loading: true,
  error: '',
  smurfs: []
}

export const SmurfContext = createContext(initialState)

export const SmurfContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(SmurfReducer, initialState)

  useEffect(() => {
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
          dispatch({type: 'GOT_SMURFS', payload: res.data})
        })
        .catch(err => {
          dispatch({type: 'FETCH_ERROR', payload: err.message})
        })
  }, [])


  // Actions
const addSmurf = (smurf) => {
  axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(res => {
        dispatch({type: 'ADD_SMURF', payload: smurf})
      })
      .catch(err => {
        console.log()
        dispatch({type: 'POST_ERROR', payload: err.message})
      })
}

  return (
      <SmurfContext.Provider value={{smurfs: state.smurfs, addSmurf}}>
        {children}
      </SmurfContext.Provider>
  )
}
