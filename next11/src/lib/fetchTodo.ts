
export default async function fetchTodo(id: string) {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(`${apiUrl}/todos/${id}`)


    if (!res.ok) return undefined

    const todo: Todo = await res.json()

    return todo
}