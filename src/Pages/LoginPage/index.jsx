import { useEffect } from 'react'
import { useState, useContext } from 'react'
import { AuthContext } from '../../contexts/auth'
import { Container, Form, BotaoCustomizado, InputCustomizado, Eye, Eyeicon } from './style';
import { LoadingSpinner } from '../../components/Spinner';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye'
import { useNavigate } from "react-router-dom";
import Modal from '../../components/LoagingComponent/modal';

function LoginPage() {
    const [isLoading, setisLoaging] = useState(true)
    const { authenticated, newLogin } = useContext(AuthContext);
    const [openModal, setOpenModal] = useState(false);
    const [login, setLogin] = useState('')
    const [senha, setSenha] = useState('')
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);
    const navigate = useNavigate();
    const currentDateTime = new Date();
    const DateToday = Date.parse(currentDateTime)
    const DateFinal = Date.parse(localStorage.getItem('ExpirationDate'))

    const handleSubmit = (e) => {
        // <Modal isOpen={openModal} />
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

    useEffect(() => {
        if (DateToday < DateFinal) {
            navigate("/home")
        }
    }, [])
    document.title = "Dashboard - Login";

    const modaltest = () => {
        setOpenModal(true)
        if (openModal) {
            <Modal isOpen={openModal} />
        }
    }

    // console.log(openModal)   

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
                <BotaoCustomizado type="submit" onClick={() => setOpenModal(true)}>Entrar</BotaoCustomizado>
            </Form >
            <Modal isOpen={openModal} />
        </Container >
    )
}

export default LoginPage