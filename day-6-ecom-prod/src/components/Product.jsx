import toast from "react-hot-toast"

const baseUrl = `https://mock-server-qkzm.onrender.com/products`
function Product(props) {
    const product = props.product

    const deleteProduct = async() => {
        try {
            let response = await fetch(`${baseUrl}/${product.id}`, {
                method: 'DELETE',
            })
            if (response.ok) {
                toast.success('Product deleted successfully')
            }
        } catch (error) {
            toast.error('Error while deleting the product')
        }
    }

    return <div className="product" id={product.id}>
        <img src={product.imageUrl} />
        <h3>{product.title}</h3>
        <p>{product.price}</p>
        <button onClick={deleteProduct}>Delete</button>

    </div>
}

export default Product;