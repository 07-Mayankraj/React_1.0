import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import './App.css'
import 'react-toastify/dist/ReactToastify.css';

let initState = {
  title: "",
  price: "",
  imageUrl: ""
}
const baseUrl = `http://localhost:3000/products`

function App() {

  const [formState, setFormState] = useState(initState)
  const [isLoading ,setIsLoading] = useState(false)
  const [isError , setIsError] = useState(false)



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      let res = await fetch(baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formState)
      })
      setIsLoading(false)
      console.log({ res });
      setFormState(initState)

    } catch (error) {
      setIsError(true)
      setIsLoading(false)
      console.log(error);
    }

  }


  const { title, price, imageUrl } = formState

  return isLoading ? <h1> Loading .....</h1> :   isError ? <h1>Something went Wrong :(</h1> :  ( 
    <div>

      <div id='product-add-form'>
        <form onSubmit={handleSubmit}>
          <label>
            Title :
            <input name='title' type='text' value={title} onChange={handleChange} />
          </label>
          <label>
            Price :
            <input name='price' type='number' value={price} onChange={handleChange} />
          </label>
          <label>
            Image Url :
            <input name='imageUrl' type='text' value={imageUrl} onChange={handleChange} />
          </label>
          <input type='submit' value='Add Product' />
        </form>
      </div>
    </div>
  )
}

export default App
