import { useState } from "react";
import toast from "react-hot-toast";

const baseUrl = `http://localhost:3000/products`

function CreateProduct() {

    let initState = { title: "", price: "", imageUrl: "" }
    const [formState, setFormState] = useState(initState)


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (!formState.title && !formState.price && !formState.imageUrl) {
                return toast.error('Please enter the data');
            }
            let res = await fetch(baseUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'appsdflication/json'
                },
                body: JSON.stringify(formState)
            })
            console.log({ res });
            toast.success('Successfully Added The Product!');
            setFormState(initState)

        } catch (error) {
            toast.error('This is an error!');
        }

    }

    const { title, price, imageUrl } = formState

    return <div id='product-add-form'>
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
            <input className="product-add-form-submit {" type='submit' value='Add Product' />
        </form>
    </div>
}

export default CreateProduct;