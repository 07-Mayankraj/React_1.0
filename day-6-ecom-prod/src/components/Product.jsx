function Product(props) {
    const product = props.product

    return <div className="product" id={product.id}>
        <img src={product.imageUrl} />
        <h3>{product.title}</h3>
        <p>{product.price}</p>

    </div>
}

export default Product;