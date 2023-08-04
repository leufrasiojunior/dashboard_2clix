import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/auth'
import { BaseResumida } from '../../services/api';

function HomePage() {

    const { logout } = useContext(AuthContext);
    const [notas, setNotas] = useState([])
    const [isLoading, setisLoading] = useState(true)
    useEffect(() => {
        (async () => {
            const response = await BaseResumida();
            setNotas(response.data.result);
            setisLoading(false);
        })();
    }, [])

    const handleLogout = () => {
        logout();
    }

    if (isLoading) {
        return <div>Carregando Notas...</div>;
    }
    console.log(notas)
    const uniqueAuthors = [...new Map(notas.map(v => [v.CRITERIO, v])).values()]
    console.log('uniqueAuthors :: ', uniqueAuthors)
    return (
        <>
            <div>HomePage Novo</div>
            <button onClick={handleLogout}>Logout</button>
            <ul>
                {/* {
                notas.map((n) => (
                    <li key={notas.COD_MONITORIA}>
                        {notas.NOTA}
                    </li>
                ))} */}
                {uniqueAuthors.map(d => (<li key={d.CODIGO_AVALIACAO}>{d.CRITERIO}</li>))}
            </ul>
        </>
    )
}

export default HomePage