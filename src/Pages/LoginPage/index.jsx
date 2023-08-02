import React from 'react'
import { useState, useContext } from 'react'
import { AuthContext } from '../../contexts/auth'
import { Container, Form, BotaoCustomizado, InputCustomizado } from './style';

function LoginPage() {
    const { authenticated, newLogin } = useContext(AuthContext);
    const [login, setLogin] = useState('')
    const [senha, setSenha] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        newLogin(login, senha);

    }
    return (
        <Container>
            <Form className="form" onSubmit={handleSubmit}>
                <h1>Login 2Clix</h1>
                <label htmlFor="login">Usuário</label>
                <InputCustomizado
                    type="text"
                    name="login"
                    id="login"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)} />
                <label htmlFor="senha">senha</label>
                <InputCustomizado
                    type="password"
                    name="senha"
                    id="senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
                <BotaoCustomizado type="submit">Entrar</BotaoCustomizado>
            </Form >
        </Container >
    )
}

export default LoginPage