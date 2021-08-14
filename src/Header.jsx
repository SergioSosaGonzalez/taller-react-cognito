import React from 'react'
import { useHistory } from 'react-router-dom'
export const Header = () => {
    const history = useHistory()

    return (
        <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            <h5 style={{ cursor: 'pointer' }} class="my-0 mr-md-auto font-weight-normal" onClick={() => history.push('/')}>
                Practica con cognito
            </h5>
            <nav class="my-2 my-md-0 mr-md-3">
                <a class="p-2 text-dark" href="/register">Registrarse</a>
            </nav>
        </div>
    )
}
