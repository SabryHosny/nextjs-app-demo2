import PostDetails from "@/app/components/postDetails"
import { Suspense } from "react"

export default async function PostDetailsPage({ params }) {
    const postId = params.postId

    const loadingJSX = (
        <div>
            <h2>wait...</h2>
        </div>
    )


    return (
        <div style={{ padding: "20px" }}>
            <h1>Post Details</h1>

            <Suspense fallback={loadingJSX}>
                <PostDetails postId={postId} />
            </Suspense>
        </div>
    )
}