import { NextResponse } from 'next/server';
import CryptoJS from 'crypto-js';

export async function POST(request) {
    try {
        const { password } = await request.json();

        // Decrypt the provided password
        var decrypted = CryptoJS.AES.decrypt(password, "Secret Passphrase");
        var decryptedPassword = decrypted.toString(CryptoJS.enc.Utf8);

        // Get the valid password from environment variables
        const validPassword = process.env.ADMIN_PASSWORD;

        if (decryptedPassword === validPassword) {
            return NextResponse.json({ status: 'success', message: 'Authenticated', providedPassword: password });
        } else {
            return NextResponse.json({ status: 'error', message: 'Unauthorized', providedPassword: password }, { status: 401 });
        }
    } catch (error) {
        return NextResponse.json({ status: 'error', message: 'Internal Server Error', error: error.message }, { status: 500 });
    }
}
