import { useState } from 'react'
function Counter() {
  const [count, setCount] = useState(0)

  const handleIncreament = () =>{
    setCount((prev)=>prev + 100)
    setCount((prev)=>prev + 100)
    setCount((prev)=>prev + 100)
  }
  
  const handleDecreament = () =>{
    setCount(count - 100)
  }

  return (
    <>
    <div className='App'>
      <h1>Counter : {count}</h1>
      <button onClick={handleIncreament}> Increase </button>
      <button onClick={handleDecreament}> Decrease </button>
    </div>
    </>
  )
}

export default Counter
