import { Auth } from 'aws-amplify'
import { useEffect, useState } from 'react';
import './App.css';
import { Logged } from './Logged';

function App() {
  const [isLogged, setIsLogged] = useState(false)

  const [form, setForm] = useState({
    email: "",
    password: ""
  })
  
  useEffect(() => {
    Auth.currentSession().then((resp) => {
      setIsLogged(true)
    }).catch(e => {
      console.log(e)
    })
  }, [])
  const onSubmit = async (e) => {
    try {
        e.preventDefault();
        const { email, password } = form;
        const resp = await Auth.signIn({
            username: email,
            password,
        })
        setIsLogged(true)
        alert("Logueado correcto")
    } catch (e) {
        alert("Error")
    }
  }
  if (isLogged) return (<Logged action={() => setIsLogged(false)} />);
  return (
    <>
    <div style={{display:"flex", height: '100vh', justifyContent:"center", alignItems:"center"}}>
      <div className="container">
        <h1>Login</h1>
        <form className="needs-validation" noValidate="" onSubmit={onSubmit}>
              <div className="mb-3">
                <label htmlFor="username">Email</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">@</span>
                  </div>
                  <input 
                      type="email" 
                      className="form-control" 
                      onChange={(e) => {
                        setForm({ ...form, email: e.currentTarget.value })
                      }}
                      id="username" 
                      placeholder="Email" 
                      required
                    />
                  <div className="invalid-feedback" style={{width: "100%"}}>
                    Your username is required.
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="username">Password</label>
                <div className="input-group">
                  <input 
                    type="password" 
                    className="form-control" 
                    id="password" 
                    name="password" 
                    placeholder="Contraseña" 
                    required
                    onChange={(e) => {
                      setForm({ ...form, password: e.currentTarget.value })
                    }}
                  />
                  <div className="invalid-feedback" style={{width: "100%"}}>
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
  );
}

export default App;
