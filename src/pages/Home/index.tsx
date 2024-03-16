import ButtonEmphasis from "../../components/ButtonEmphasis"
import HeaderHome from "../../components/layout/HeaderHome"
import { Container, Content } from "./styles"

export default function Home() {
  return (
    <Container>
      <HeaderHome />
      <Content>
        <h1>As caominhas dos sonhos do seu pet em um só lugar</h1>
        <p>
          Entre com sua conta ou cadastre-se e comece a escolher as caominhas
          mais divertidas para o seu pet.
        </p>
        <ButtonEmphasis>Começar</ButtonEmphasis>
      </Content>
    </Container>
  )
}
