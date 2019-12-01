import React, { useReducer } from 'react'
import { Context, initialState, reducer } from './reducer'
import Calendar from './components/Calendar'

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <Context.Provider value={{ state, dispatch }}>
      <Calendar />
    </Context.Provider>
  )
}

export default App
