import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/auth'
import { BaseResumida } from '../../services/api';
import Nav from '../../components/Navbar';
import Modal from '../../components/LoagingComponent/modal';

function HomePage() {
    const { logout } = useContext(AuthContext);
    const [notas, setNotas] = useState([])
    const [openModal, setOpenModal] = useState(true);
    const [isLoading, setisLoading] = useState(true)
    useEffect(() => {
        document.title = "2Clix - Dashboard";
        (async () => {
            try {
                const response = await BaseResumida();
                const responsse = await BaseResumida();
                const responssse = await BaseResumida();
                setNotas(response.data.result);
                setisLoading(false);
            } catch (err) {
                console.log("erro");
                console.log(err.response.status);
            }
        }
        )();
    }, [])

    const handleLogout = () => {
        logout();
    }

    if (isLoading) {
        return <Modal isOpen={openModal} />;
    }
    const uniqueAuthors = [...new Map(notas.map(v => [v.CRITERIO, v])).values()]
    return (
        <>
            <Nav />
            <button onClick={handleLogout}>Logout</button>
            <ul>
                {uniqueAuthors.map(d => (<li key={d.CODIGO_AVALIACAO}>{d.CRITERIO}</li>))}
            </ul>
        </>
    )
}

export default HomePage