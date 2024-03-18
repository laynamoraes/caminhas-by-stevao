import { IoIosArrowRoundForward } from "react-icons/io"
import { Button } from "../../components/Button/styles"
import ButtonEmphasis from "../../components/ButtonEmphasis"
import HeaderHome from "../../components/layout/HeaderHome"
import { ButtonVariant } from "../../components/Button"
import { useQuery } from "@tanstack/react-query"
import { getProductsHome } from "../../network/products"
import {
  Card,
  Container,
  Content,
  Description,
  DescriptionService,
  HomePage,
  IconContainer,
  ImageProduct,
  ProductImageContainer,
  ProductsCatalog,
  ProductsSection,
  Service,
  Services,
  ServicesSection,
  SubtitleSection,
  TitleSection,
  TitleService,
} from "./styles"
import { Link } from "react-router-dom"
import { PiDogLight } from "react-icons/pi"
import { BsBoxSeam, BsTelephoneOutbound } from "react-icons/bs"

export default function Home() {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProductsHome(3),
  })

  return (
    <Container>
      <HomePage>
        <HeaderHome />
        <Content>
          <h1>As caominhas dos sonhos do seu pet em um só lugar</h1>
          <p>
            Entre com sua conta ou cadastre-se e comece a escolher as caominhas
            mais divertidas para o seu pet.
          </p>
          <ButtonEmphasis>Começar</ButtonEmphasis>
        </Content>
      </HomePage>

      <ProductsSection>
        <Description>
          <h2>
            Caominhas <br /> mais vendidas
          </h2>
          <p>
            A maneira mais fácil de oferecer conforto para o seu pet sem sair de
            casa.
          </p>
          <Link to="/ecommerce">
            <Button variant={ButtonVariant.default}>
              Ver mais
              <IoIosArrowRoundForward
                size="26px"
                style={{ verticalAlign: "middle" }}
              />
            </Button>
          </Link>
        </Description>
        <ProductsCatalog>
          {data?.map((product) => (
            <Card key={product.id}>
              <ProductImageContainer>
                <ImageProduct src={product.image} alt="" />
              </ProductImageContainer>
              <h3>{product.name}</h3>
              <p>R$ {product.price}</p>
            </Card>
          ))}
        </ProductsCatalog>
      </ProductsSection>

      <ServicesSection>
        <TitleSection>Nosso serviço</TitleSection>
        <SubtitleSection>
          Peça agora e aprecie a alegria do seu pet
        </SubtitleSection>

        <Services>
          <Service>
            <IconContainer>
              <PiDogLight size="45px" />
            </IconContainer>
            <TitleService>Grande variedade</TitleService>
            <DescriptionService>
              Oferecemos muitos tipos diferentes de produtos para se adequar ao
              seu pet.
            </DescriptionService>
          </Service>

          <Service>
            <IconContainer>
              <BsBoxSeam size="36px" />
            </IconContainer>
            <TitleService>Frete rápido e grátis*</TitleService>
            <DescriptionService>
              Prazo de entrega de até 5 dias úteis, frete grátis e opção de
              entrega rápida.
            </DescriptionService>
          </Service>

          <Service>
            <IconContainer>
              <BsTelephoneOutbound size="32px" />
            </IconContainer>
            <TitleService>Suporte rápido</TitleService>
            <DescriptionService>
              Nosso suporte está pronto pra lhe atender e tirar todas as suas
              dúvidas.
            </DescriptionService>
          </Service>
        </Services>
      </ServicesSection>
    </Container>
  )
}
