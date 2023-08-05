
import { NavStyle, UlStyle } from './style'

function Nav() {
    const navlinks = [
        { name: "Início", link: "/" },
        { name: "Relatórios", link: "/relatorios" },
        { name: "Pesquisar", link: "/search" },
    ]
    return (
        <NavStyle key={navlinks.name}>
            <UlStyle>
                {navlinks.map(link =>
                    <li className='text-yellow-300'>
                        <a href={link.link}>{link.name}</a>
                    </li>
                )
                }
            </UlStyle>
        </NavStyle>
    )
}

export default Nav