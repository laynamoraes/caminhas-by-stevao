import {
  ButtonUser,
  ButtonsContainer,
  Container,
  Divider,
  LogoContainer,
  LogoImage,
} from "./styles"
import Logo from "../../../assets/logo.png"
import { Link } from "react-router-dom"
import BagIcon from "../../Bag"
import { useAuth } from "../../../hooks/auth"

export default function HeaderUser() {
  const { user } = useAuth()

  return (
    <Container>
      <LogoContainer>
        <LogoImage src={Logo} alt="Logo do Cãominhas de Cachorro by Stevão" />
      </LogoContainer>

      <ButtonsContainer>
        <Link to="/signin">
          <ButtonUser>{user?.name.charAt(0)}</ButtonUser>
        </Link>
        <Divider>|</Divider>
        <BagIcon />
      </ButtonsContainer>
    </Container>
  )
}
