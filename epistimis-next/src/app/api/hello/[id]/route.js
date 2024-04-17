import { NextResponse } from "next/server"

export async function GET(request, {params}) {
    const id = params.id;
    const { searchParams } = request.nextUrl;
    const state = searchParams.get("state")
    return NextResponse.json({message: 'Hello, Next.js', id, state})
}

// example links: 
// http://localhost:3000/api/hello/abc
// http://localhost:3000/api/hello/abc?state=California
