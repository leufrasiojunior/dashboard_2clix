import React from 'react'
import { useState, useContext } from 'react'
import { AuthContext } from '../../contexts/auth'

function LoginPage() {
    const { authenticated, newLogin } = useContext(AuthContext);
    const [login, setLogin] = useState('')
    const [senha, setSenha] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        newLogin(login, senha);

    }
    return (
        <div>
            <h1>Login</h1>
            <p>{String(authenticated)}</p>
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