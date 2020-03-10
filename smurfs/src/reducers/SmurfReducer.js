export default (state, action) => {
  switch (action.type) {

    case 'GOT_SMURFS':
      console.log('fired')
      return {
        loading: false,
        smurfs: action.payload
      }

    case 'FETCH_ERROR':
      return {
        loading: false,
        error: action.payload,
        smurfs: [...state.smurfs]
      }

    case 'ADD_SMURF':
      return [...state.smurfs, action.payload]
    default:
      return state
  }
}
