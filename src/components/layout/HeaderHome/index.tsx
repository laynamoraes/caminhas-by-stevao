import {
  ButtonRegister,
  ButtonSignIn,
  ButtonsContainer,
  Container,
  LogoContainer,
  LogoImage,
  MenuContainer,
  MenuItems,
} from "./styles"
import Logo from "../../../assets/logo.png"
import { FaShoppingCart } from "react-icons/fa"

export default function HeaderHome() {
  return (
    <Container>
      <LogoContainer>
        <LogoImage src={Logo} alt="Logo do Cãominhas de Cachorro by Stevão" />
      </LogoContainer>
      <MenuContainer>
        <MenuItems href="#">Home</MenuItems>
        <MenuItems href="#">Produtos</MenuItems>
        <MenuItems href="#">Sobre</MenuItems>
      </MenuContainer>
      <ButtonsContainer>
        <ButtonRegister>Cadastrar</ButtonRegister>
        <ButtonSignIn>Entrar</ButtonSignIn>
        <FaShoppingCart size="25px" />
      </ButtonsContainer>
    </Container>
  )
}
