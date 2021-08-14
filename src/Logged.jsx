import React from 'react'
import { Auth } from 'aws-amplify';
export const Logged = ({ action = () => { } }) => {
    return (
        <div>
            <h1>Logueado</h1>
            <button onClick={() => {
                Auth.signOut()
                action()
            }}>Sign Out</button>
        </div>
    )
}
