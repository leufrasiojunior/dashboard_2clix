import { NavStyle, Logo, NavContainer } from "./style"


export function Nav() {
    return (
        <NavStyle>
            <Logo>
                <img
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                    alt="logo.png"
                    height="40px"
                />
            </Logo>
            <NavContainer>
                <li><a href="/">Início</a></li>
                <li><a href="/relatorios">Relatorios</a></li>
                <li><a href="/search">Buscar</a></li>
            </NavContainer>
        </NavStyle>
    )
}
