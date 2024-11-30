// import { headers } from "next/headers"

export const user = [
    {
        id: 1,
        name: 'John Doe',
        email: 'wTl0O@example.com',
    },
    {
        id: 2,
        name: 'Jane Doe',
        email: 'B0oYt@example.com',
    }
]

export async function GET() {
    return new Response(JSON.stringify(user))
}


export async function POST(request) {
    const data = await request.json()
    const newUser = {
        id: user.length + 1,
        name: data.name,
        email: data.email,
    }
    user.push(newUser)
    return new Response(JSON.stringify(user,{
        headers:{
            "Content-Type": "application/json"
        },
        Status: 201
    }))
}