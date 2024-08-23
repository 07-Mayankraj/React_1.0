import { useState , useEffect } from 'react'
import '../App.css';
function Posts() {
    const [posts, setPosts] = useState([])
    const [isLoading ,setIsLoading]  = useState(false)
    const [isErrorAccured ,setisErrorAccured]  = useState(false)
    const [page , setPage] = useState(1)

    const getPostData = async (page) => {
       
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`)
            const data = await response.json()
            return data
        } catch (error) {
            setisErrorAccured(true)
            console.error(error.message)            
        }
    }

    const fetchAndUpdateData = async (page) =>{
        setIsLoading(true)
        try {
            let data = await getPostData(page)
            setPosts(data)
            setIsLoading(false)
    
        } catch (error) {
            console.error(error)            
        }
    }


    useEffect(()=>{
        fetchAndUpdateData(page)

    },[page])

    const handlePageChange = (change) => {
        setPage(page + change)
    }

    if(isLoading) return <h1 className='loaders'>Loooooooooooooooading....  :) </h1>
    if(isErrorAccured) return <h1 className='loaders'>Error while getting the data...  :( </h1>

    return <>

        <ul>
            {
                posts.map(post => {
                    return <div className='Post-class' >
                        <li> {post.id}</li>
                        <li> {post.title}</li>
                        <li>{post.body}</li>
                    </div>
                })
            }
        </ul>
        <div className='pages-div'>
            <button disabled ={page ===1} onClick={()=>handlePageChange(-1)}>Prev</button>
            <button>{page}</button>
            <button onClick={()=>handlePageChange(+1)}>Next</button>
        </div>
    </>
}

export default Posts;