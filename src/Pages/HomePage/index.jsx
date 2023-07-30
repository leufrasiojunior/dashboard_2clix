import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/auth'
function HomePage() {

    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    }
    return (
        <>
            <div>HomePage Novo</div>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}

export default HomePage