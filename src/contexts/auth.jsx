import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const newLogin = (usuario, senha) => {
        if (senha === "secret") {
            setUser({ id: '123', usuario })
            navigate("/home")
        }
    }
    const logout = () => {
        console.log('logout');
        setUser(null);
        navigate("/")
    };
    return (
        <AuthContext.Provider
            value={{ authenticated: !!user, user, newLogin }}        >
            {children}
        </AuthContext.Provider>
    )
}