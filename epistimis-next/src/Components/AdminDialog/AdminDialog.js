import React from 'react';
import { useState, useEffect } from 'react';
import "./AdminDialog.css"

const AdminDialog = ({setAdmin}) => {

    useEffect(() => {
        window.addEventListener('keydown', function (event) {
            // Check if SHIFT + ALT + A is pressed
            if (event.shiftKey && event.altKey && event.key === 'A') {
                document.getElementById('login').showModal();
            }
        });
    }, []);

    const handleAuth = () => {
        const input_value = document.getElementById("admin-password").value
        console.log(input_value)

        fetch('/api/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ password: input_value })
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.status === 'success') {
                    console.log('success: ', res.message);
                    setAdmin(true)
                } else {
                    console.error('ERROR', res.message);
                }
            })
            .catch((err) => {
                console.log(err);
            });

        document.getElementById("admin-password").value = ""
    }

    return (
        <dialog id="login" className='login-modal'>
            <form method="dialog">
                <label htmlFor="lname">Password:</label>
                <input type="password" id="admin-password" name="admin-password" autoComplete="true" />
                <button id="loginButton" onClick={handleAuth}>SUBMIT</button>
            </form>
        </dialog>
    );
};

export default AdminDialog;