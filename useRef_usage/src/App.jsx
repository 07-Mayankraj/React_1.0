import { useState } from 'react'
import './App.css'

const initState = { username: "", password: "", country: "", isMarried: false }

function App() {

  const [formState, setFormState] = useState(initState)
  const [users, setUsers] = useState([])


  const handleChange = (e) => {
    console.log(e);
    const { name, type, checked, value } = e.target
    const val = type === 'checkbox' ? checked : value
    setFormState({ ...formState, [name]: val })


  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setUsers([...users, formState])
    setFormState(initState)
  }

  console.log(formState);

  // jsx
  return (
    <div>

      <form onSubmit={handleSubmit}>
        <h2> Form </h2>

        <label> User name :
          <input
            type='text'
            name='username'
            value={formState.username}
            onChange={handleChange}
          />
        </label>
        <label> password :
          <input
            type='password'
            name='password'
            value={formState.password}
            onChange={handleChange}
          />
        </label>
        <label> country :
          <select name='country' value={formState.country} onChange={handleChange}>
            <option value="">Select Country</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="India">India</option>
          </select>
        </label>
        <label> isMarried :
          <input
            type='checkbox'
            name='isMarried'
            checked={formState.isMarried}
            onChange={handleChange}
          />
        </label>
        <input type='submit' />
      </form>

    </div>
  )
}

export default App
