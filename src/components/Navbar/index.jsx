
import { NavStyle, UlStyle } from './style'

export default function Nav() {

    return (
        <NavStyle>
            <UlStyle>
                <li><a href="/">Início</a></li>
                <li><a href="/relatorios">Relatorios</a></li>
                <li><a href="/search">Buscar</a></li>
            </UlStyle>
        </NavStyle>
    )
}