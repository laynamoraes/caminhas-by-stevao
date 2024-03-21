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
import { FaPowerOff } from "react-icons/fa6"

export default function HeaderUser({ count }: { count: number }) {
  const { user, signOut } = useAuth()

  return (
    <Container>
      <LogoContainer>
        <LogoImage src={Logo} alt="Logo do Cãominhas de Cachorro by Stevão" />
      </LogoContainer>

      <ButtonsContainer>
        <Link to="">
          <ButtonUser>{user?.name.charAt(0).toUpperCase()}</ButtonUser>
        </Link>

        <FaPowerOff
          onClick={signOut}
          style={{ cursor: "pointer" }}
          color="#1e1e1e"
        />

        <Divider>|</Divider>
        <BagIcon count={count} />
      </ButtonsContainer>
    </Container>
  )
}
