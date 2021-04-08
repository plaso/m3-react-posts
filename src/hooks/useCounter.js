import { useState } from 'react'

const useCounter = () => {
  const [counter, setCounter] = useState(0)

  const increment = () => setCounter(counter + 2)

  const substraction = () => setCounter(counter - 2)

  return { counter, increment, substraction }
}

export default useCounter