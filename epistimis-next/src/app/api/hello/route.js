import { NextResponse } from "next/server"

export async function GET(request, {params}) {
    const { searchParams } = request.nextUrl;
    const state = searchParams.get("state")
    return NextResponse.json({message: 'Hello, Next.js', state})
}

// example links
// http://localhost:3000/api/hello
// http://localhost:3000/api/hello?state=California