export default function ShowArticlesPage(props) {
    console.log(props.params.title)

    return (
        <div>
            <h1>Show Articles</h1>
            <p>{props.params.title}</p>
        </div>
    )
}