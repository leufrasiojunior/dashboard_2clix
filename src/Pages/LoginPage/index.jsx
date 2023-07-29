import React from 'react'
import { useState } from 'react'

function LoginPage() {
    const [login, setLogin] = useState('')
    const [senha, setSenha] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Submit", { login, senha })
    }

    return (
        <div>
            <h1>Login</h1>
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="login">Usuário</label>
                    <input
                        type="text"
                        name="login"
                        id="login"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="senha">senha</label>
                    <input
                        type="password"
                        name="senha"
                        id="senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </div >
                <div>
                    <button type="submit">Entrar</button>
                </div>
            </form >
        </div >
    )
}

export default LoginPage