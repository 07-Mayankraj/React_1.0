import { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import './App.css'
import CreateProduct from './components/CreateProduct';
import Product from './components/Product';
import Pagination from './components/Pagination';
const baseUrl = `https://mock-server-qkzm.onrender.com/products`
// const baseUrl = `http://localhost:3000/products`

function App() {


  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)
  const [lastPage, setlastPage] = useState(0)



  const fetchProducts = async (page) => {
    try {
      let data = await fetch(baseUrl + `/?_page=${page}&_limit=6`)
      data = await data.json()
      console.log({data});
      setProducts(data)
      toast.success('Data Fetched and Updated')
    } catch (error) {
      toast.error('Error while getting the the data' + error.message)
    }
  }

  const getLastPage = async () => {
    try {

      let getlastPage = await fetch(baseUrl)
      getlastPage = await getlastPage.json()
      let totalPages = Math.ceil(getlastPage.length / 6)
      setlastPage(totalPages)
    } catch (error) {
      toast.error('Error while getting the total pages' + error.message)
    }
  }

  useEffect(() => {
    fetchProducts(page)
  }, [page])

  useEffect(() => {
    getLastPage()
  }, [])



  const handlePageChange = (value) => {
    setPage(page + value)
  }

  console.log(page);

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

    <Pagination page={page} lastPage={lastPage} handlePageChange={handlePageChange} />
  </div>
  )
}

export default App
