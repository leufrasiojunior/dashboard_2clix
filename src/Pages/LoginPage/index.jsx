import React from 'react'
import { useState, useContext } from 'react'
import { AuthContext } from '../../contexts/auth'
import { Container, Form, BotaoCustomizado, InputCustomizado, Eye, Eyeicon } from './style';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye'

function LoginPage() {
    const { authenticated, newLogin } = useContext(AuthContext);
    const [login, setLogin] = useState('')
    const [senha, setSenha] = useState('')
    const [showpass, setShowpass] = useState(false)
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);

    const handleSubmit = (e) => {
        e.preventDefault()
        newLogin(login, senha);
    }
    const togglePassword = () => {
        if (type === 'password') {
            setIcon(eye);
            setType('text')
        } else {
            setIcon(eyeOff)
            setType('password')
        }

    };
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
                    type={type}
                    name="senha"
                    id="senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                /><Eye className="flex justify-around items-center" onClick={togglePassword}>
                    <Eyeicon>
                        <Icon className="absolute mr-10" icon={icon} size={25} />
                    </Eyeicon>
                </Eye>

                <BotaoCustomizado type="submit">Entrar</BotaoCustomizado>
            </Form >
        </Container >
    )
}

export default LoginPage