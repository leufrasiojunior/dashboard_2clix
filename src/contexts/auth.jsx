import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api, CreateSession } from "../services/api";
import Modal from "../components/LoagingComponent/modal";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isLoading, setisLoading] = useState(true);
    const [openModal, setOpenModal] = useState(false);


    useEffect(() => {
        const recoveredUser = localStorage.getItem("token");
        const token = localStorage.getItem("token")
        const currentDateTime = new Date();
        const futureDateTime = new Date(currentDateTime);
        futureDateTime.setHours(currentDateTime.getHours() + 24);

        const DateToday = Date.parse(currentDateTime)
        const DateFinal = Date.parse(localStorage.getItem('ExpirationDate'))

        if (DateToday > DateFinal) {
            logout();
            alert("A sessão expirou. Faça login novamente")
        }

        if (recoveredUser) {
            setUser(recoveredUser)
            api.defaults.headers.Authorization = `Bearer ${token}`;
        }

        setisLoading(false)
    }, [])

    const newLogin = async (usuario, senha) => {
        try {
            const response = await CreateSession(usuario, senha)
            const token = response.data.token;
            const loggedUser = response.data.token
            const currentDateTime = new Date();
            const futureDateTime = new Date(currentDateTime);

            futureDateTime.setHours(currentDateTime.getHours() + 24)

            localStorage.setItem('ExpirationDate', futureDateTime);
            localStorage.setItem('token', loggedUser);
            api.defaults.headers.Authorization = `Bearer ${token}`;

            setUser(loggedUser)
            setisLoading(false)
            navigate("/home")
        } catch (err) {
            const typeerror = err.response.status
            if (err.response.status === 401) {
                alert("Usuário ou senha inválidos")
                window.location.reload(true);
            } else {
                alert(`Informe o erro para o administrador: ${typeerror}`);
                window.location.reload(true);

            }
        };

    }
    const logout = () => {
        api.defaults.headers.Authorization = null
        localStorage.clear();
        setUser(null);
        navigate("/")
    };
    return (
        <AuthContext.Provider
            value={{ authenticated: !!user, user, isLoading, newLogin, logout }}        >
            {children}

        </AuthContext.Provider>
    )
}