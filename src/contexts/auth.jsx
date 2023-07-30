import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        const recoveredUser = localStorage.getItem("user");
        if (recoveredUser) {
            setUser(JSON.parse(recoveredUser))
        }
        setisLoading(false)
    }, [])

    const newLogin = (usuario, senha) => {

        const loggedUser = {
            id: '123',
            login: ''
        }

        localStorage.setItem('user', JSON.stringify(loggedUser));

        if (senha === "secret") {
            setUser(loggedUser)
            navigate("/home")
        }
    }
    const logout = () => {
        console.log('logout');
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