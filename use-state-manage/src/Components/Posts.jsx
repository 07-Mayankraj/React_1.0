import { useState } from 'react'
function Posts() {
    const [posts, setPosts] = useState([])

    const getPostData = async () => {
       
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
            const data = await response.json()
            console.log(data)
            setPosts(data) 
        } catch (error) {
            alert(error.message)            
        }
    }
    console.log({posts}) ;


    return <>

        <button onClick={getPostData}> Get Posts</button>
        <ul>
            {
                posts.map(post => {
                    return <div>
                        <li>Id : {post.id}</li>
                        <li>Title : {post.title}</li>
                        <li>Body : {post.body}</li>
                    </div>
                })
            }
        </ul>
    </>
}

export default Posts;