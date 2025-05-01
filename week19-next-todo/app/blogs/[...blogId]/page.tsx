
export default async function BlogPage({params} :{
    params : {
        blogId : string
    }
}){
    const postId = (await params).blogId  // [2,1,2]

    return <div>
        Blog Page {JSON.stringify(postId)} <br/>
    </div>
}