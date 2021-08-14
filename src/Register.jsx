import React, { useState } from 'react'
import { Auth } from 'aws-amplify'
import { useHistory } from 'react-router-dom'

const Register = () => {

    const history = useHistory()
    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const onSubmit = async (e) => {
        try {
            e.preventDefault();
            const { email, password } = form;
            const resp = await Auth.signUp({
                username: email,
                password,
            })
            localStorage.setItem('emailToVerified', email);
            history.push('/verify-code')
        } catch (e) {
            alert("Error")
        }
    }

    return (
        <>
            <div style={{ display: "flex", height: '100vh', justifyContent: "center", alignItems: "center" }}>
                <div className="container">
                    <h1>Registro</h1>
                    <form className="needs-validation" noValidate="" onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label htmlFor="username">Email</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">@</span>
                                </div>
                                <input type="email" onChange={(e) => {
                                    setForm({ ...form, email: e.currentTarget.value })
                                }} className="form-control" id="username" placeholder="Email" required="" />
                                <div className="invalid-feedback" style={{ width: "100%" }}>
                                    Your username is required.
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="username">Password</label>
                            <div className="input-group">
                                <input type="password" className="form-control" onChange={(e) => {
                                    setForm({ ...form, password: e.currentTarget.value })
                                }} id="password" name="password" placeholder="Contraseña" required="" />
                                <div className="invalid-feedback" style={{ width: "100%" }}>
                                    Your password is required.
                                </div>
                            </div>
                        </div>
                        <hr className="mb-4" />
                        <button className="btn btn-primary btn-lg btn-block" type="submit">Registrarse</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register;
