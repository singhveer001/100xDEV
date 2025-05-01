// Dynamic Routes
// /blog/1
// /blog/2
// /blog/harkirat
import axios from "axios"

export default async function BlogPage({params} :{
    params : {
        postId : string
    }
}){
    const postId = (await params).postId
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    const data = response.data;

    return <div>
        Blog Page {postId} <br/>
        title - {data.title}
        body - {data.body}
    </div>
}