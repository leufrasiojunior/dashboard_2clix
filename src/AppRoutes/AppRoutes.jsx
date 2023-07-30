import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from '../Pages/LoginPage'
import HomePage from '../Pages/HomePage'
import { AuthProvider, AuthContext } from "../contexts/auth";
import { useContext } from "react";

const AppRoutes = () => {
    const Private = ({ children }) => {
        const { authenticated } = useContext(AuthContext);
        if (!authenticated) {
            return <Navigate to="/" />
        }
        return children
    }
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<LoginPage />}
                    />
                    <Route
                        exact
                        path="/home"
                        element={
                            <Private>
                                <HomePage />
                            </Private>
                        } />
                </Routes>
            </AuthProvider>
        </Router>
    )
};

export default AppRoutes;