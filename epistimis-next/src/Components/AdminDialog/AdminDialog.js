import React, { useState, useEffect } from 'react';
import CryptoJS from 'crypto-js';
import "./AdminDialog.css";

const AdminDialog = ({ setAdmin }) => {

    useEffect(() => {
        const handleKeyDown = (event) => {
            // Check if SHIFT + ALT + A is pressed
            if (event.shiftKey && event.altKey && event.key === 'A') {
                document.getElementById('login').showModal();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const handleAuth = (event) => {
        event.preventDefault();
        const input_value = document.getElementById("admin-password").value;
        // Encrypt the input value
        var encrypted_value = CryptoJS.AES.encrypt(input_value, "Secret Passphrase").toString();
        console.log(encrypted_value);

        fetch('/api/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ password: encrypted_value })
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.status === 'success') {
                    console.log('success: ', res.message);
                    setAdmin(true);
                } else {
                    console.error('ERROR', res.message);
                }
            })
            .catch((err) => {
                console.log(err);
            });

        document.getElementById("admin-password").value = "";
    };

    return (
        <dialog id="login" className='login-modal'>
            <form method="dialog">
                <label htmlFor="admin-password">Password:</label>
                <input type="password" id="admin-password" name="admin-password" autoComplete="true" />
                <button id="loginButton" onClick={handleAuth}>SUBMIT</button>
            </form>
        </dialog>
    );
};

export default AdminDialog;
