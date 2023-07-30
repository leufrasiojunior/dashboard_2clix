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
        if (recoveredUser) {
            setUser(recoveredUser)
            api.defaults.headers.Authorization = `Bearer ${token}`;
        }
        setisLoading(false)
    }, [])

    const newLogin = async (usuario, senha) => {
        const response = await CreateSession(usuario, senha)
        // console.log('response', response)
        const token = response.data.token;
        // console.log(response.data.token);
        const loggedUser = response.data.token

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