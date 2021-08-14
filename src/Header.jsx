import React from 'react'
import { Link, useHistory } from 'react-router-dom'
export const Header = () => {
    const history = useHistory()

    return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            <h5 style={{ cursor: 'pointer' }} className="my-0 mr-md-auto font-weight-normal" onClick={() => history.push('/')}>
                Practica con cognito
            </h5>
            <nav className="my-2 my-md-0 mr-md-3">
                <Link className="p-2 text-dark" to="/register">Registrarse</Link>
            </nav>
        </div>
    )
}
