import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos"

const API_KEY = process.env.API_KEY as string;

export async function GET(request: Request) {
    const id = request.url.slice(request.url.lastIndexOf('/') + 1)
    //id console.log capture;
    const res = await fetch(`${DATA_SOURCE_URL}/${id}`)
    //id console.log res console.log capture;
    const todo: Todo = await res.json()

    if(!todo.id) return NextResponse.json({"message": "Todo not found"})

    return NextResponse.json(todo)
}

