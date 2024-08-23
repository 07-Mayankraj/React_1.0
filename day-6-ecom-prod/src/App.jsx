import { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import './App.css'
import CreateProduct from './components/CreateProduct';
import Product from './components/Product';
import Pagination from './components/Pagination';
const baseUrl = `http://localhost:3000/products`

function App() {


  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)
  const [lastPage, setlastPage] = useState(0)



  const fetchProducts = async (page) => {
    try {
      let data = await fetch(baseUrl + `/?_page=${page}&_per_page=6`)
      let json = await data.json()
      setlastPage(json.pages)
      setProducts(json.data)
      toast.success('Data Fetched and Updated')
    } catch (error) {
      toast.error('Error while getting the the data' + error.message)
    }
  }

  useEffect(() => {
    fetchProducts(page)
  }, [page])


  const handlePageChange = (value)=>{
    setPage(page + value)
  }

  return (<div>
    <Toaster position="top-right" />
    <CreateProduct />

    <div className='product-display'>
      {
        products.map((product) => {
          return <Product key={product.id} product={product} />
        })
      }
    </div>

   <Pagination page={page} lastPage = {lastPage} handlePageChange={handlePageChange}/>
  </div>
  )
}

export default App
