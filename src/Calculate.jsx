import React from 'react'
import { useContext } from 'react'
import { NumberContext } from './App'

function Calculate() {
    const numberContext  = useContext(NumberContext)
    return (
    <div>
    <p>{numberContext.count}</p>
    <button onClick={() => {
      numberContext.dispatch('increment')
    }}>arttir</button>
    <button onClick={() => {
      numberContext.dispatch('decrement')
    }}>azalt</button>
    <button onClick={() => {
      numberContext.dispatch('reset')
    }}>sifirla</button>
  </div>
  )
}

export default Calculate