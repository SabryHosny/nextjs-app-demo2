"use client"
import { useState, useEffect } from "react"

export default function ToDo() {
    const [todo, setTodo] = useState({})

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
            const result = await response.json()
            setTodo(result)
        }
        fetchData()
    }, [])

    return (
        <div>
            <h1>{todo.title}</h1>
        </div>
    )
}