import React from 'react'

const Register = () => {
    return (
        <>
            <div style={{ display: "flex", height: '100vh', justifyContent: "center", alignItems: "center" }}>
                <div className="container">
                    <h1>Registro</h1>
                    <form className="needs-validation" novalidate="">
                        <div className="mb-3">
                            <label for="username">Email</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">@</span>
                                </div>
                                <input type="email" className="form-control" id="username" placeholder="Email" required="" />
                                <div className="invalid-feedback" style={{ width: "100%" }}>
                                    Your username is required.
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label for="username">Password</label>
                            <div className="input-group">
                                <input type="password" className="form-control" id="password" name="password" placeholder="Contraseña" required="" />
                                <div className="invalid-feedback" style={{ width: "100%" }}>
                                    Your password is required.
                                </div>
                            </div>
                        </div>
                        <hr className="mb-4" />
                        <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register;
