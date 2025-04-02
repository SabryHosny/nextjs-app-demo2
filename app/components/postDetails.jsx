export default async function PostDetails({ postId }) {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 2000)
    })

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        next: {
            revalidate: 10
        }
    })
    const post = await response.json()
    return (
        <div style={{
            width: "100%",
            background: "orange",
            color: "black",
            padding: "10px",
            borderRadius: "20px",
            marginTop: "20px"
        }}>
            <h2>{post.title}</h2>
            <hr />

            <p>{post.body}</p>
        </div>
    )
}