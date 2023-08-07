import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from '../Pages/LoginPage'
import HomePage from '../Pages/HomePage'
import { AuthProvider, AuthContext } from "../contexts/auth";
import { useContext } from "react";
import TestSpinner from "../Pages/TestSpinner";

const AppRoutes = () => {
    const Private = ({ children }) => {
        const { authenticated, isLoading } = useContext(AuthContext);
        if (isLoading) {
            return <div>Carregando...</div>
        }
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
                        path="/test"
                        element={<TestSpinner />}
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