import { createBrowserRouter, RouterProvider, BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from '../Pages/LoginPage'
import HomePage from '../Pages/HomePage'
import { AuthProvider, AuthContext } from "../contexts/auth";
import { useContext } from "react";
import Spinner from "../Pages/Spinner";
import OldHomePage from "../Pages/HomePage/Oldindex";

const AppRoutes = () => {
    const Private = ({ children }) => {
        const { authenticated, isLoading } = useContext(AuthContext);
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
                        element={<Spinner />}
                    />
                    <Route
                        exact
                        path="/home"
                        element={
                            <Private>
                                <HomePage />
                            </Private>
                        } />
                    <Route
                        exact
                        path="/oldhome"
                        element={<OldHomePage />}
                    />
                </Routes>
            </AuthProvider>
        </Router>
    )
};

export default AppRoutes;