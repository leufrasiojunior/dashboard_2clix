import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api, CreateSession } from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        const recoveredUser = localStorage.getItem("token");
        const token = localStorage.getItem("token")
        const currentDateTime = new Date();
        const futureDateTime = new Date(currentDateTime);
        futureDateTime.setHours(currentDateTime.getHours() + 24);

        console.log(currentDateTime.getTime())
        if (currentDateTime > localStorage.getItem('ExpirationDate')) {
            logout();
        }

        if (recoveredUser) {
            setUser(recoveredUser)
            api.defaults.headers.Authorization = `Bearer ${token}`;
        }
        setisLoading(false)
    }, [])

    const newLogin = async (usuario, senha) => {
        const response = await CreateSession(usuario, senha)
        const token = response.data.token;
        const loggedUser = response.data.token
        const currentDateTime = new Date();
        const futureDateTime = new Date(currentDateTime);


        localStorage.setItem('Logged', currentDateTime);
        localStorage.setItem('ExpirationDate', futureDateTime);
        localStorage.setItem('token', loggedUser);
        api.defaults.headers.Authorization = `Bearer ${token}`;
        setUser(loggedUser)
        navigate("/home")

    }
    const logout = () => {
        console.log('logout');
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