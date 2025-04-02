import Link from "next/link"
import ToDo from "../components/todo"

export default async function PostsPage() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
            revalidate: 10
        }
    })
    const posts = await response.json()

    console.log(posts)

    const postsJSX = posts.map((post) => {
        return (
            <Link href={`posts/${post.id}`} style={{ width: "70%" }}>
                <div style={{
                    width: "100%",
                    background: "orange",
                    color: "black",
                    padding: "10px",
                    borderRadius: "20px",
                    marginTop: "20px"
                }}>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </div>
            </Link>
        )
    })

    return (
        <div>
            <h1>Posts Page</h1>

            {/* POSTS */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                {postsJSX}
            </div>
            {/*=== POSTS ===*/}

            {/* <div>
                <ToDo />
            </div> */}
        </div>
    )
}