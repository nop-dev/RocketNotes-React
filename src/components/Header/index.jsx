import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from "react-icons/ri";

export function Header() {
    return(
        <Container>
            <Profile>
                <img src="https://github.com/nop-dev.png" alt="Foto do User" />
            

                <div id="identify">
                    <span>Bem vindo!</span>
                    <strong>Nop-Dev</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}