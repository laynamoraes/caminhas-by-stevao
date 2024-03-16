import {
  ButtonsContainer,
  Container,
  LogoContainer,
  LogoImage,
  MenuContainer,
  MenuItems,
} from "./styles"
import Logo from "../../../assets/logo.png"
import { Link } from "react-router-dom"
import ButtonComponent, { ButtonVariant } from "../../Button"
import ButtonEmphasis from "../../ButtonEmphasis"
import BagIcon from "../../Bag"

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
        <Link to="/register">
          <ButtonComponent variant={ButtonVariant.secondary}>
            Cadastrar
          </ButtonComponent>
        </Link>
        <Link to="/signin">
          <ButtonEmphasis>Entrar</ButtonEmphasis>
        </Link>
        <BagIcon />
      </ButtonsContainer>
    </Container>
  )
}
