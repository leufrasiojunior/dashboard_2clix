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
                setNotas(response.data.result);
                setisLoading(false);
                console.log(response.data.result)
            } catch (err) {
                console.log("erro");
                console.log(err)
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
    const uniqueCriteries = [...new Map(notas.map(v => [v.FORMULARIO, v])).values()]
    return (
        <>
            <Nav />
            <button onClick={handleLogout}>Logout</button>
            {uniqueCriteries.map(d => ((
                <ul key={d.CODIGO_CRITERIO}>
                    <li key={d.COD_MONITORIA}>
                        {/* {d.CRITERIO} ;  */}
                        {d.FORMULARIO}
                    </li>
                </ul >
            )))
            }
        </>
    )
}

export default HomePage