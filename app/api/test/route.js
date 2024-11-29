export const users = [
    {
        name: "Anil",
        age: 10,
    },
    {
        name: "Anil2",
        age: 20,
    },
    {
        name: "Anil3",
        age: 30,
    },
    {
        name: "Anil4",
        age: 40,
    },
]


export async function GET() {
    return new Response(JSON.stringify(users))
}

export async function POST(request) {

    const user = await request.json()
    const newUser = {
        id:users.length + 1,
        name: user.name,
        age: user.age,
    }
    users.push(newUser)
    return new Response(JSON.stringify(newUser),{
        headers: {
            "Content-Type": "application/json"
        },
        status: 201
    })
}
