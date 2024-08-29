
import React, { useReducer } from 'react'
import './App.css'
import Calculate from './Calculate';
export const NumberContext = React.createContext();
const value = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment': {
      return state+1;
    }
    case 'decrement': {
      return state-1;
    }
    case 'reset': {
      return value;
    }
    default: {
      return state;
    }

  }
}
function App() {
  const [count, dispatch] = useReducer(reducer,value);
  return (
    <>
    <NumberContext.Provider value={{count:count,dispatch:dispatch}}>
      <Calculate/>
    </NumberContext.Provider>
    </>
  )
}

export default App
