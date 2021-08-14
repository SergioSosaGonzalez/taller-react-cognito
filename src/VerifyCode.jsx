import React from 'react'

const VerifyCode = () => {
    return (
        <>
            <div style={{ display: "flex", height: '100vh', justifyContent: "center", alignItems: "center" }}>
                <div className="container">
                    <form className="needs-validation" novalidate="">
                        <div className="mb-3">
                            <label for="username">Verificar cuenta</label>
                            <div className="input-group">
                                <input type="text" className="form-control" id="username" placeholder="codigo" required="" />
                            </div>
                        </div>
                        <hr className="mb-4" />
                        <button className="btn btn-primary btn-lg btn-block" type="submit">Verificar cuenta</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default VerifyCode;
