
export default async function fetchTodos() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const res = await fetch(`${apiUrl}/todos`)

    const todos: Todo[] = await res.json()

    return todos
}