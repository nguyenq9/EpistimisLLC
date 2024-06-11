import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { entry } = await request.json();

            return NextResponse.json({ status: 'success', message: 'Unauthorized', data: entry }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ status: 'error', message: 'Internal Server Error', error: error.message }, { status: 500 });
    }
}
