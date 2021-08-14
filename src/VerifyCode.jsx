import React, { useState } from 'react'
import { Auth } from 'aws-amplify'
import { useHistory } from 'react-router-dom';

const VerifyCode = () => {
    const [code, setCode] = useState('');

    const history = useHistory()
    const onSubmit = async (e) => {
        try {
            e.preventDefault();
            const email = localStorage.getItem('emailToVerified')
            await Auth.confirmSignUp(email, code);
            localStorage.removeItem('emailToVerified')
            history.push('/');
        } catch (e) {
            alert('error');
        }
    }
    return (
        <>
            <div style={{ display: "flex", height: '100vh', justifyContent: "center", alignItems: "center" }}>
                <div className="container">
                    <form className="needs-validation" noValidate="" onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label for="username">Verificar cuenta</label>
                            <div className="input-group">
                                <input type="text" className="form-control" onChange={(e) => {
                                    setCode(e.currentTarget.value)
                                }} id="username" placeholder="codigo" required="" />
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
