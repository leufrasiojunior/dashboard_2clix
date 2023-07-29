import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from '../Pages/LoginPage'
import HomePage from '../Pages/HomePage'
import { AuthContext } from "../contexts/auth";

const AppRoutes = () => {
    return (
        <Router>
            <AuthContext.Provider >
                <Routes>
                    <Route exact path="/" element={<LoginPage />} />
                    <Route exact path="/home" element={<HomePage />} />
                </Routes>
            </AuthContext.Provider>
        </Router>
    )
};

export default AppRoutes;