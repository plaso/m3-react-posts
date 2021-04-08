import React from 'react'
import useCounter from '../hooks/useCounter'

const Counter = () => {
  const { counter, increment, substraction } = useCounter()

  return (
    <div className="Counter">
      <p>Counter: {counter}</p>
      <button onClick={increment}>
        +2
      </button>
      <button onClick={substraction}>
        -2
      </button>
    </div>
  )
}

export default Counter