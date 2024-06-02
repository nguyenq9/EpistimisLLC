import { NextResponse } from 'next/server';

export async function POST(request) {
    const { password } = await request.json();

    // Replace with your actual password validation logic
    const validPassword = 'ghost';
    if (password === validPassword) {
        return NextResponse.json({ status: 'success', message: 'Authenticated', providedPassword: password });
    } else {
        return NextResponse.json({ status: 'error', message: 'Unauthorized', providedPassword: password }, { status: 401 });
    }
}
